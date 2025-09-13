// ReusableContainers.tsx
'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'; // ← Importar spinner
import Image from 'next/image';
import { ReusableContainersProps } from '@/types/reusable';
import Link from 'next/link';

const ReusableContainers = ({ 
  imageUrl, 
  imageAlt,
  content,
  buttons,
  backgroundColor = 'transparent',
  href,
  alwaysExpanded = false,
  loading = false 
}: ReusableContainersProps) => {

  const [isExpanded, setIsExpanded] = useState(alwaysExpanded);

  const toggleExpansion = () => {
    if (!alwaysExpanded) {
      setIsExpanded(prev => !prev);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor,
        position: 'relative',
      }}
    >
      {/* Top section with three overlapping components */}
      <Box
        sx={{
          display: 'flex',
          position: 'relative',        
          gap: 0,
          width: 'full',
        }}
      >
        {/* Red background box */}
        <Box
          sx={{
            display: {
              xs: 'none',
              customTabletInsight: 'block'
            },
            backgroundColor: 'brand.red',
            borderRadius: '0.62rem',
            width: {
              xs: '20.75rem',
              md: '18.75rem'
            },
            height: {
              xs: '12.5rem',
              md: '12.5rem',
            },
            position: 'absolute',
            zIndex: 1,
            mt: 0,
          }}
        />

        {/* Main hero image */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            mt: {
              xs: 0,
              customTabletInsight: 2.5,
              md: 2.5
            },
            ml: {
              xs: 0,
              customTabletInsight: 2.375,
              md: 2.375
            },
            borderRadius: '0.62rem',
            overflow: 'hidden',
            width: {
              xs: '100%',
              customTabletInsight: '93.5%',
              md: '50%'
            },
            height: {
              xs: '23rem',
              customTabletInsight: '41rem',
              md: "32rem"
            },
          }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '0.62rem',
            }}
          />
        </Box>

        {/* Text content card */}
        <Box
          sx={{
            backgroundColor: 'brand.whiteText',
            borderRadius: '0.62rem',
            p: 3,
            pr: {
              xs: 3,
              lg: 5
            },
            pb: 3,
            maxWidth: {
              xs: '54rem',
              md: '50%'
            },
            minHeight: '200px', // ← Altura mínima para mantener el layout
            mt: {
              xs: 50,
              customTabletInsight: 92,
              md: 37
            },
            ml: 'auto',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: loading ? 'center' : 'normal', // ← Centrar spinner
            alignItems: loading ? 'center' : 'normal', // ← Centrar spinner
          }}
        >
          {loading ? (
            // Spinner de carga
            <CircularProgress 
              size={40} 
              sx={{ 
                color: 'brand.red',
              }} 
            />
          ) : (
            <>
              {content.map((item, index) => ( 
                <Box key={index} mb={2}> 
                  {item.category && (
                    <Typography variant="h3" mb={3}>
                      {item.category}
                    </Typography>
                  )}
                  {item.title && (
                    <Typography mb={3} variant="h4">
                      {item.title}
                    </Typography>
                  )}
                  <Typography mb={0} variant="h5">
                    {item.descriptionFirst}
                  </Typography>

                  {(item.descriptionSecond || item.descriptionThird) && (
                    <Box
                      sx={{
                        maxHeight: isExpanded || alwaysExpanded ? '1000px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out',
                      }}
                    >
                      {item.descriptionSecond && (
                        <Typography mt={2} mb={2} variant="h5">
                          {item.descriptionSecond}
                        </Typography>
                      )}
                      {item.descriptionThird && (
                        <Typography mb={2} variant="h5">
                          {item.descriptionThird}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Box>
              ))}

              {href && !alwaysExpanded && (
                <Button 
                  disableRipple={true}
                  variant="seeMoreButton"
                  onClick={toggleExpansion}
                  sx={{
                    mt: 1,
                    alignSelf: 'flex-start'
                  }}
                >
                  {isExpanded ? 'Hide' : 'See more'}
                </Button>
              )}

              {/* Action buttons */}
              {buttons && buttons.length > 0 && (
                <Box 
                  sx={{ 
                    mt: 4, 
                    display: 'flex',
                    gap: {
                      xs: 2,
                      md: 2.344
                    }
                  }}
                >
                  {buttons.map((button, index) => (
                    <Link key={index} href={button.href || '#'} style={{ textDecoration: 'none' }}>
                      <Button
                        variant={button.variant || "redCahova"} 
                        sx={button.sx} 
                      >
                        {button.text}
                      </Button>
                    </Link>
                  ))}
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ReusableContainers;