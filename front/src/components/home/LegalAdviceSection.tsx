'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { legalAdviceContent } from '@/mock/legalAdvice.mock';
import ButtonCustom from '../ui/ButtomCustom';
import { EarthSvg } from '../ui/EarthSvg';

const LegalAdviceSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EEE9DD',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: '1.5rem', md: '5rem' },
        px: { xs: '1rem', md: '3rem' },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Merriweather", serif',
            fontSize: '2rem',
            fontWeight: 400,
            color: '#8B4513',
            mb: 3,
            '@media (max-width:899px)': {
              fontSize: '1.8rem',
            },
          }}
        >
          {legalAdviceContent.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.334,
            color: '#333',
            mb: 4,
            maxWidth: '100%',
          }}
        >
          {legalAdviceContent.description}
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
          }}
        >
          <ButtonCustom
            text={legalAdviceContent.buttons.moreDetails}
            variant="contained"
            sx={{
              fontFamily: '"Merriweather", serif',
              fontSize: '1.35138rem',
              fontWeight: 700,
              lineHeight: '1.75681rem',
              letterSpacing: '-0.0135rem',
              backgroundColor: '#C4975A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#B8864D',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              },
            }}
          />
          
          <ButtonCustom
            text={legalAdviceContent.buttons.contactUs}
            variant="contained"
            sx={{
              fontFamily: '"Merriweather", serif',
              fontSize: '1.35138rem',
              fontWeight: 700,
              lineHeight: '1.75681rem',
              letterSpacing: '-0.0135rem',
              backgroundColor: '#8B2635',
              color: 'white',
              '&:hover': {
                backgroundColor: '#7A1F2E',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              },
            }}
          />
        </Box>

        {/* Earth SVG */}
        <Box sx={{ 
          mt: 4, 
          }}>
          <EarthSvg />
        </Box>
      </Box>
    </Box>
  );
};

export default LegalAdviceSection;