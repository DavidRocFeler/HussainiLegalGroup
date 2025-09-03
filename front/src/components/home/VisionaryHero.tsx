// components/VisionaryHero.tsx

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { heroTextContent } from '@/mock/heroContent.mock';
import { strategyContent } from '@/mock/strategyContent.mock';
import { VisionaryHeroProps } from '@/types/home';
import ReusableContainers from '@/components/ui/ReusableContainers';

const VisionaryHero = ({ imageUrl, imageAlt }: VisionaryHeroProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '4rem 1.5rem 3rem 1.5rem',
          md: '5rem 4.5rem 8em 4.8rem',
        },
      }}
    >
      {/* Top section with three overlapping components */}
      <ReusableContainers
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      content={heroTextContent}
      buttons={[
        {
          text: "Our Team",
          sx: {
            backgroundColor: '#B5985A',
            '&:hover': { backgroundColor: '#9A7F4A' }
          }
        },
        {
          text: "Contact Us",
          color: "error",
          sx: {
            backgroundColor: '#891C1B',
            '&:hover': { backgroundColor: '#6A1515' }
          }
        }
      ]}
    />

      {/* Bottom strategy section */}
      <Box 
        sx={{ 
          width: {
            xs: '100%',
            md: '78%'
          },
          mt: {
            xs: '3rem',
            md: '9rem'
          },
          }}>
        {strategyContent.map((item) => (
          <Box key={item.id} mb={3}>
            {item.label && (
              <Typography
                variant="h5"
                color="error"
                sx={{ 
                  color: '#891C1B',
                  mb: '1.8rem',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                }}
              >
                {item.label}
              </Typography>
            )}
            <Typography
              variant={item.id === 1 ? 'h1' : 'body1'}
              sx={{
                fontSize: item.id === 1 ? '2.5rem' : '1rem',
                fontWeight: item.id === 1 ? 400 : 500,
                color: '#131313',
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VisionaryHero;