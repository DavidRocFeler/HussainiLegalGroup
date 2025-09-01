// app/not-found.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Link from 'next/link';
import ButtonCustom from '@/components/ui/ButtomCustom';

const NotFound = () => {
  return (
    <Container 
        maxWidth={false}
        sx={{ 
            display: 'flex',
            bgcolor: 'primary.main',
            alignItems: 'center',
            justifyContent: 'center',
            padding: {
                xs: '10rem 8rem 4rem 8rem',
                md: '15rem 5rem 7rem 5rem'
            }
        }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        {/* 404 */}
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '4rem',
              md: '6rem'
            },
            fontWeight: 700,
            color: '#891C1B',
            mb: 2,
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: '1.5rem',
              md: '2rem'
            },
            fontWeight: 600,
            color: '#131313',
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            color: 'text.secondary',
            mb: 4,
            maxWidth: '500px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </Typography>

        {/* Buttons */}
        <Box 
          sx={{ 
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" passHref>
            <ButtonCustom
              text="Go Home"
              sx={{
                backgroundColor: '#891C1B',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#7A1918',
                }
              }}
            />
          </Link>
          
          <Link href="/contact" passHref>
            <ButtonCustom
              text="Contact Us"
              variant="outlined"
              sx={{
                borderColor: '#891C1B',
                color: '#891C1B',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: '#891C1B',
                  color: 'white',
                }
              }}
            />
          </Link>
        </Box>

        {/* Additional Info */}
        <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #E5E5E5' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 1,
            }}
          >
            Need immediate assistance?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#891C1B',
              fontWeight: 500,
            }}
          >
            Call us at 0470 343 103
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;