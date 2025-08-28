// components/VisionaryHero.tsx
'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { heroTextContent } from '@/mock/heroContent.mock';
import { strategyContent } from '@/mock/strategyContent.mock';
import { VisionaryHeroProps } from '@/types/visionary.types';
import ButtonCustom from '../ui/ButtomCustom';

const VisionaryHero: React.FC<VisionaryHeroProps> = ({ imageUrl, imageAlt }) => {
  // Convert pixels to rem for responsive design
  const pxToRem = (px: number) => `${px / 16}rem`;

  return (
    <Box
      sx={{
        backgroundColor: '#EEE9DD',
        minHeight: '100vh',
        position: 'relative',
        py: 6,
        px: { xs: 2, md: 4, lg: 8 }
      }}
    >
      {/* Top section with three overlapping components */}
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 0,
          mb: 8
        }}
      >
        {/* Red background box */}
        <Box
          sx={{
            backgroundColor: '#891C1B',
            borderRadius: pxToRem(10),
            width: pxToRem(200),
            height: pxToRem(300),
            position: 'relative',
            zIndex: 1,
            mt: 4
          }}
        />

        {/* Main hero image */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            marginLeft: '-3rem',
            borderRadius: pxToRem(10),
            overflow: 'hidden',
            width: pxToRem(635),
            height: pxToRem(476.25)
          }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            style={{
              objectFit: 'cover',
              borderRadius: pxToRem(10)
            }}
            priority
          />
        </Box>

        {/* Text content card */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: pxToRem(10),
            padding: 4,
            maxWidth: pxToRem(500),
            marginLeft: '-3rem',
            mt: 20,
            zIndex: 1,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
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
      <Box sx={{ maxWidth: '60rem', mx: 'auto' }}>
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