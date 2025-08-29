// components/VisionaryHero.tsx
'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { heroTextContent } from '@/mock/heroContent.mock';
import { strategyContent } from '@/mock/strategyContent.mock';
import { VisionaryHeroProps } from '@/types/home.types';
import ButtonCustom from '../ui/ButtomCustom';

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
            display: 'block',
            backgroundColor: '#891C1B',
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
            '@media (max-width:650px)': {
              display: 'none',
            },
          }}
        />

        {/* Main hero image */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            mt: {
              xs: '3rem',
              md: '2rem'
            },
            ml: {
              xs: '3rem',
              md: '1.9rem'
            },
            borderRadius: '0.62rem',
            overflow: 'hidden',
            width: {
              xs: '93.5%',
              md: '39rem'
            },
            height: {
              xs: '41rem',
              md: "30rem"
            },
            '@media (max-width:650px)': {
              mt: '0',
              ml: '0',
              width: '100%',
              height: '23rem'
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
            priority
          />
        </Box>

        {/* Text content card */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '0.62rem',
            padding: 4,
            maxWidth: {
              xs: '54rem',
              md: '39.5rem'
            },
            mt: {
              xs: '46rem',
              md: '17rem'
            },
            ml: 'auto',
            zIndex: 3,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            '@media (max-width:650px)': {
              mt: '25rem'
            },
          }}
        >
          {heroTextContent.map((content) => (
            <Box key={content.id} mb={2}>
              {content.title && (
                <Typography
                  variant="overline"
                  color="error"
                  sx={{ fontWeight: 600 }}
                >
                  {content.title}
                </Typography>
              )}
              {content.subtitle && (
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  {content.subtitle}
                </Typography>
              )}
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.6 }}
              >
                {content.description}
              </Typography>
            </Box>
          ))}

          {/* Action buttons */}
          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <ButtonCustom
              variant="contained"
              color="primary"
              text="Our Team"
              sx={{
                backgroundColor: '#B5985A',
                '&:hover': {
                  backgroundColor: '#9A7F4A'
                }
              }}
            />
            <ButtonCustom
              variant="contained"
              color="error"
              text="Contact Us"
              sx={{
                backgroundColor: '#891C1B',
                '&:hover': {
                  backgroundColor: '#6A1515'
                }
              }}
            />
          </Box>
        </Box>
      </Box>

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