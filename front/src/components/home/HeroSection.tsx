'use client'
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: {
          xs: '13.5rem 1rem 5.5rem 1.5rem',
          md: '23.5rem 2rem 17.5rem 5rem',
        },
        backgroundImage: `url(/BackgroundCover.jpg)`,
        backgroundSize: {
          xs: '300%',
          sm: 'cover',
        },
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        },
        '@media (max-width:450px)': {
          padding: '5rem 1rem 0rem 1.5rem',
          minHeight: '80vh',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          width: { xs: '100%', md: '70%' },
          color: '#FAF5EF',
          position: 'relative',
          zIndex: 2,
          mb: 4,
        }}
      >
        Where Legal Insight Meets Business Vision
      </Typography>

      {/* Descriptión */}
      <Typography
        variant="h2"
        sx={{
          width: { xs: '100%', md: '70%' },
          color: 'white',
          textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
          position: 'relative',
          zIndex: 2,
          mb: 4,
        }}
      >
        Hussaini Legal Group is a premier international law firm with deep roots
        in the Middle East and a forward-looking presence in Europe and the United States.
      </Typography>

      <Button
        variant="contained"
        sx={{
          alignSelf: 'flex-start',
          padding: '1.1825rem 2.92244rem 1.1825rem 2.92156rem',
          color: '#2c3e50',
          borderRadius: '0.25338rem',
          position: 'relative',
          backgroundColor: '#EEE9DD',
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#CEC4A6',
          },
          transition: 'all 0.3s ease-in-out'
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default HeroSection;