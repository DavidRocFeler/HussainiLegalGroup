import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const HeroSection = () => {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        px: {
          xs: '1.5rem',
          md: '5rem'
        },
        pt: {
          xs: '10rem',
          md: '25rem'
        },
        pb: {
          xs: '5rem',
          md: '20rem'
        },
        backgroundImage: `url(/BackgroundCover.png)`,
        backgroundSize: 'cover',
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
          minHeight: '0vh',
          pb: '5rem',
          pt: '10rem'
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '5rem', 
          fontWeight: 400,
          lineHeight: '5.5rem',
          letterSpacing: '0px',
          width: { xs: '100%', md: '70%' },
          color: '#FAF5EF',
          position: 'relative',
          zIndex: 2,
          mb: 4,
          '@media (max-width:899px)': {
            fontSize: '4.5rem',
          },
          '@media (max-width:650px)': {
            fontSize: '3.8rem',
            lineHeight: '4.5rem',
          },
          '@media (max-width:450px)': {
            fontSize: '2.5rem',
            lineHeight: '3rem',
          },
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
          position: 'relative',
          zIndex: 2,
          mb: 4,
        }}
      >
        Hussaini Legal Group is a premier international law firm with deep roots
        in the Middle East and a forward-looking presence in Europe and the United States.
      </Typography>

      <Link
      href='/contact'
      >
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
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#CEC4A6',
            },
            transition: 'all 0.3s ease-in-out'
          }}
        >
          Contact Us
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;