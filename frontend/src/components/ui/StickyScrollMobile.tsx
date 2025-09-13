'use client';
import { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { arrayImageScrollStiky } from '@/mock/arrayImageScrollStiky';
import { StickyScrollMobileProps } from '@/types/home';
import Button from '@mui/material/Button';

const StickyScrollMobile = ({ stickyScrollData }: StickyScrollMobileProps) => {
  const sectionsData = stickyScrollData;
  
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollY, setScrollY] = useState(0);
  const [activeSticky, setActiveSticky] = useState<number[]>([]);
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});
  const lastScrollY = useRef(0);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ VALIDACIÓN de datos
  if (!sectionsData || sectionsData.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  const mobileSections = [
    { 
      ...sectionsData[0], 
      id: 1, 
      image: arrayImageScrollStiky[0].image
    },
    { 
      ...sectionsData[1], 
      id: 2, 
      image: arrayImageScrollStiky[1].image  
    },
    { 
      ...sectionsData[2], 
      id: 3, 
      image: arrayImageScrollStiky[2].image
    }
  ];

  const formatId = (id: number): string => {
    return id < 10 ? `0${id}` : `${id}`;
  };

  const toggleExpansion = (sectionId: number) => {
    setExpandedSections(prev => {
      if (prev[sectionId]) {
        return {};
      }
      return { [sectionId]: true };
    });
  };

  const isAnySectionExpanded = Object.keys(expandedSections).length > 0;

  useEffect(() => {
    const handleScroll = () => {
      if (isAnySectionExpanded) {
        return;
      }

      const currentScrollY = window.scrollY;
      const newDirection: 'up' | 'down' = currentScrollY > lastScrollY.current ? 'down' : 'up';
      setScrollDirection(newDirection);

      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;

      if (gridRef.current) {
        const gridTop = gridRef.current.offsetTop;
        const scrollOffset = currentScrollY - gridTop;

        if (newDirection === 'down' && scrollOffset > 0) {
          const newActiveSticky: number[] = [];
          if (scrollOffset >= 0) newActiveSticky.push(0);
          if (scrollOffset >= 100) newActiveSticky.push(1);
          if (scrollOffset >= 200) newActiveSticky.push(2);
          setActiveSticky(newActiveSticky);
        } else if (newDirection === 'up') {
          const newActiveSticky: number[] = [];
          if (scrollOffset >= 200) newActiveSticky.push(0, 1, 2);
          else if (scrollOffset >= 100) newActiveSticky.push(0, 1);
          else if (scrollOffset >= 0) newActiveSticky.push(0);
          setActiveSticky(newActiveSticky);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnySectionExpanded]); 

  const getRowStyle = (rowIndex: number, sectionId: number) => {
    if (isAnySectionExpanded) {
      return {};
    }
    
    const isSticky = activeSticky.includes(rowIndex);
    const isExpanded = !!expandedSections[sectionId];

    if (isSticky && rowIndex < 3) {
      return {
        position: 'sticky' as const,
        top: isExpanded ? '-15rem' : '0',
        zIndex: 10 + rowIndex,
      };
    }
    return {};
  };

  return (
    <Grid
      ref={gridRef}
      container
      sx={{
        p: 0,
        m: 0,
      }}
      spacing={0}
    >
      {mobileSections.map((section, index) => (
        <Grid
          key={section.id}
          size={12}
          container
          direction="column"
          ref={(el) => {
            rowRefs.current[index] = el;
          }}
          sx={{
            ...getRowStyle(index, section.id),
            bgcolor: Object.values(expandedSections).some(Boolean)
              ? 'secondary.main'
              : 'transparent',
          }}
        >
          <Grid
            size={12}
            sx={{
              paddingTop: index > 0 ? 5 : 0,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                minHeight: {
                  xs: '200px',
                  sm: '270px',
                },
              }}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                style={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '0.625rem',
                  borderTopRightRadius: '0.625rem',
                }}
              />
            </Box>
          </Grid>

          <Grid size={12}>
            <Box
              sx={{
                bgcolor: 'brand.whiteText',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: {
                  xs: 2.5,
                  md: 7.5,
                },
                px: {
                  xs: 2.5,
                  md: 4,
                },
                height: '100%',
                minHeight: '300px',
                borderBottomLeftRadius: '0.625rem',
                borderBottomRightRadius: '0.625rem',
              }}
            >
              <Typography mb={2} variant="h3">
                {formatId(section.id)}
              </Typography>
              <Typography mb={2} variant="h4" sx={{ fontWeight: 400 }}>
                {section.title}
              </Typography>

              <Typography mb={2} variant="h5">{section.descriptionFirst}</Typography>

              <Box
                sx={{
                  maxHeight: expandedSections[section.id] ? '1000px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out',
                }}
              >
                <Typography mb={2} variant="h5">{section.descriptionSecond}</Typography>
                <Typography mb={2} variant="h5">{section.descriptionThird}</Typography>
              </Box>

              {(section.descriptionSecond || section.descriptionThird) && (
                <Button 
                  disableRipple={true}
                  variant="seeMoreButton"
                  onClick={() => toggleExpansion(section.id)}
                  sx={{
                    mt: 1,
                    width: 'fit-content'
                  }}
                >
                  {expandedSections[section.id] ? 'Hide' : 'See more'}
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default StickyScrollMobile;