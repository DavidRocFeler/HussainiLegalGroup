// components/VisionaryHero.tsx
'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { heroTextContent } from '@/mock/heroContent.mock';
import { strategyContent } from '@/mock/strategyContent.mock';
import { VisionaryHeroProps } from '@/types/home';
import ReusableContainers from '../ui/ReusableContainers';

const VisionaryHero: React.FC<VisionaryHeroProps> = ({ imageUrl, imageAlt }) => {

  return (
    <Box
      sx={{
        backgroundColor: '#EEE9DD',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '4rem 1rem 3rem 1.5rem',
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
          width: 'full',
          mt: {
            xs: '3rem',
            md: '9rem'
          },
          border: '1px solid black',
          }}>
        {strategyContent.map((item) => (
          <Box key={item.id} mb={3}>
            {item.label && (
              <Typography
                variant="overline"
                color="error"
                sx={{ fontWeight: 600 }}
              >
                {item.label}
              </Typography>
            )}
            <Typography
              variant={item.id === 1 ? 'h3' : 'body1'}
              sx={{
                fontWeight: item.id === 1 ? 700 : 400,
                color: item.id === 1 ? 'text.primary' : 'text.secondary',
                lineHeight: 1.6
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