'use client';
import { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { arrayImageScrollStiky } from '@/mock/arrayImageScrollStiky';
import { SectionScrollStiky, SectionScrollStikyImage } from '@/types/home';
import Button from '@mui/material/Button';
import { getHomeSectionStickies } from '@/server/home.server';
import { useSanityData } from '@/hook/useSanityData';

const StickyScrollDesktop = () => {
  const { data: sectionsData, loading, error } = useSanityData(getHomeSectionStickies);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const [closingCards, setClosingCards] = useState<{ [key: string]: boolean }>({});
  const [activeSticky, setActiveSticky] = useState<number[]>([]);
  const [contentHeights, setContentHeights] = useState<{ [key: string]: number }>({});
  const lastScrollY = useRef(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastActiveStickyRef = useRef<number[]>([]);
  const imageHeights = useRef<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const gridItems: Array<{
    type: 'image' | 'content';
    data: SectionScrollStikyImage | SectionScrollStiky;
  }> = [
    { type: 'image', data: arrayImageScrollStiky[0] },
    { type: 'content', data: { ...sectionsData[0], id: 1 } }, // ← índice 0 = número 1
    { type: 'content', data: { ...sectionsData[1], id: 2 } }, // ← índice 1 = número 2
    { type: 'image', data: arrayImageScrollStiky[1] },
    { type: 'image', data: arrayImageScrollStiky[2] },
    { type: 'content', data: { ...sectionsData[2], id: 3 } }, // ← índice 2 = número 3
  ];

  const formatId = (id: number): string => {
    return id < 10 ? `0${id}` : `${id}`;
  };

  const toggleCardExpansion = (cardId: string) => {
    const isCurrentlyExpanded = expandedCards[cardId];
    
    if (isCurrentlyExpanded) {
      setClosingCards(prev => ({ ...prev, [cardId]: true }));
      
      setExpandedCards(prev => {
        const newState = { ...prev };
        delete newState[cardId];
        return newState;
      });
      
      setTimeout(() => {
        setClosingCards(prev => {
          const newState = { ...prev };
          delete newState[cardId];
          return newState;
        });
      }, 300); 
      
    } else {
      setExpandedCards(prev => {
        return { [cardId]: true };
      });
      setClosingCards({});
    }
  };

  const isAnyCardExpanded = Object.keys(expandedCards).length > 0 || Object.keys(closingCards).length > 0;

  useEffect(() => {
    const handleScroll = () => {
      if (isAnyCardExpanded) {
        return;
      }

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const gridTop = gridRef.current?.offsetTop || 0;
      const scrollOffset = currentScrollY - gridTop;

      let newActiveSticky: number[] = [];
      if (isScrollingDown && scrollOffset > 0) {
        if (scrollOffset >= 0) newActiveSticky.push(0);
        if (scrollOffset >= 100) newActiveSticky.push(1);
        if (scrollOffset >= 200) newActiveSticky.push(2);
      } else if (!isScrollingDown) {
        if (scrollOffset >= 200) newActiveSticky.push(0, 1, 2);
        else if (scrollOffset >= 100) newActiveSticky.push(0, 1);
        else if (scrollOffset >= 0) newActiveSticky.push(0);
      }
      setActiveSticky(newActiveSticky);

      lastActiveStickyRef.current = newActiveSticky;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnyCardExpanded]);

  useEffect(() => {
    rowRefs.current.forEach((row, index) => {
      if (row) {
        const imgBox = row.querySelector<HTMLDivElement>('[data-img-box]');
        if (imgBox) {
          const rect = imgBox.getBoundingClientRect();
          if (!imageHeights.current[index]) {
            imageHeights.current[index] = rect.height;
          }
        }
      }
    });

    Object.keys(contentRefs.current).forEach(key => {
      const contentElement = contentRefs.current[key];
      if (contentElement && (expandedCards[key] || closingCards[key])) {
        const rect = contentElement.getBoundingClientRect();
        setContentHeights(prev => ({ ...prev, [key]: rect.height }));
      }
    });
  }, [expandedCards, closingCards]);

  const getRowStyle = (rowIndex: number) => {
    const isSticky = activeSticky.includes(rowIndex);
    
    if (isAnyCardExpanded && isSticky && rowIndex < 3) {
      return {
        position: 'sticky' as const,
        top: '-15rem', 
        zIndex: 10 + rowIndex,
        transition: 'all 0.3s ease',
      };
    }
    
    if (isSticky && rowIndex < 3) {
      let topValue = 0;
      if (rowIndex === 0) topValue = -1;
      if (rowIndex === 1) topValue = 6;
      if (rowIndex === 2) topValue = 16;
      return {
        position: 'sticky' as const,
        top: `${topValue}px`,
        zIndex: 10 + rowIndex,
        transition: 'all 0.3s ease',
      };
    }
    
    return { zIndex: 1, transition: 'all 0.3s ease' };
  };

  return (
    <Grid ref={gridRef} container 
    sx={{ p: 0, m: 0,}}
      spacing={0}>
      {[0, 1, 2].map(rowIndex => (
        <Grid
          key={rowIndex}
          container
          spacing={0}
          ref={el => { rowRefs.current[rowIndex] = el; }}
          sx={getRowStyle(rowIndex)}
        >
          {gridItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => {
            const cardId = `${rowIndex}-${index}`;
            const isExpanded = !!expandedCards[cardId];
            const isClosing = !!closingCards[cardId];
            const fixedHeight = imageHeights.current[rowIndex] || 400;
            const contentHeight = contentHeights[cardId] || fixedHeight;

            return (
              <Grid 
                size={{ xs: 12, md: 6 }} 
                key={index} 
                sx={{
                  bgcolor: Object.values(expandedCards).some(Boolean) ? 'secondary.main' : 'transparent',
                  paddingTop: rowIndex >= 1 ? 6 : 0,
                  minHeight: isExpanded ? `${contentHeight}px` : 'auto'
                }}
              >
                {item.type === 'image' ? (
                  <Box
                    data-img-box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: `${fixedHeight}px`,
                      ...((isExpanded || isClosing) && {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0
                      })
                    }}
                  >
                    <Image
                      src={(item.data as SectionScrollStikyImage).image}
                      alt="Legal service image"
                      fill
                      style={{
                        objectFit: 'cover',
                        ...(item.data as SectionScrollStikyImage).style,
                      }}
                    />
                  </Box>
                ) : (
                  <Box
                    ref={(el: HTMLDivElement | null) => { contentRefs.current[cardId] = el; }}
                    sx={{
                      bgcolor: 'brand.whiteText',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      py: 9,
                      px: 2,
                      height: (isExpanded || isClosing) ? 'auto' : `${fixedHeight}px`,
                      minHeight: `${fixedHeight}px`,
                      transition: 'height 0.3s ease',
                      position: (isExpanded || isClosing) ? 'relative' : 'static',
                      zIndex: 2
                    }}
                  >
                    <Typography mb={2} variant="h3">
                      {formatId((item.data as SectionScrollStiky).id)} {/* ← Siempre mostrará 01, 02, 03 */}
                    </Typography>
                    <Typography variant="h4" mb={2} sx={{ fontWeight: 400 }}>
                      {(item.data as SectionScrollStiky).title}
                    </Typography>
                    <Typography variant="h5">
                      {(item.data as SectionScrollStiky).descriptionFirst}
                    </Typography>

                    <Box
                      sx={{
                        maxHeight: (isExpanded && !isClosing) ? '1000px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out',
                      }}
                    >
                      <Typography mb={2} mt={2} variant="h5">
                        {(item.data as SectionScrollStiky).descriptionSecond}
                      </Typography>
                      <Typography mb={2} variant="h5">
                        {(item.data as SectionScrollStiky).descriptionThird}
                      </Typography>
                    </Box>

                    <Button
                      disableRipple
                      variant="seeMoreButton"
                      onClick={() => toggleCardExpansion(cardId)}
                      sx={{width: 'fit-content' }}
                    >
                      {isExpanded ? 'Hide' : 'See more'}
                    </Button>
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      ))}
    </Grid>
  );
};

export default StickyScrollDesktop;