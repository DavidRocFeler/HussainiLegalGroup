'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';
import Image from 'next/image';
import { CoverBackgroundProps } from '@/types/home';
import { coverBackgroundData } from '@/mock/coverBackgroundData.mock';

const CoverBackground = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const data: CoverBackgroundProps = coverBackgroundData;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#1a1a1a', 
        '@media (max-width:450px)': {
          minHeight: '0vh',
        },
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'grey.900',
          zIndex: 1,
          display: imageLoaded ? 'none' : 'block',
        }}
        animation="wave"
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
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
          '@media (max-width:450px)': {
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
          {data.title}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            width: { xs: '100%', md: '70%' },
            color: 'white',
            mb: 4,
          }}
        >
          {data.description}
        </Typography>

        <Link
          href={data.ctaButton.link}
        >
          <Button
            variant="contained"
            sx={{
              alignSelf: 'flex-start',
              padding: '1.1825rem 2.92244rem 1.1825rem 2.92156rem',
              color: '#2c3e50',
              borderRadius: '0.25338rem',
              backgroundColor: '#EEE9DD',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#CEC4A6',
              },
              transition: 'all 0.3s ease-in-out'
            }}
          >
            {data.ctaButton.text}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CoverBackground;