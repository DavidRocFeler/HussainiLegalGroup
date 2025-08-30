// components/ReusableContainers.tsx
'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ButtonCustom from './ButtomCustom';
import { ReusableContainersProps } from '@/types/reusable';

const ReusableContainers: React.FC<ReusableContainersProps> = ({ 
  imageUrl, 
  imageAlt,
  content,
  buttons = [],
  backgroundColor = 'transparent'
}) => {

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
          {content.map((item) => (
            <Box key={item.id} mb={2}>
              {item.title && (
                <Typography
                  variant="h5"
                  color="error"
                  sx={{ 
                    color: '#891C1B',
                    mb: '1.2rem',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                  }}
                >
                  {item.title}
                </Typography>
              )}
              {item.subtitle && (
                <Typography
                  variant="h6"
                  sx={{ 
                    color: '#131313',
                    mb: '1.2rem'
                  }}
                >
                  {item.subtitle}
                </Typography>
              )}
              <Typography
                variant="h5"
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: '1.4rem',
                  fontWeight: 400,
                  fontSize: '1rem',
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}

          {/* Action buttons */}
          {buttons.length > 0 && (
            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              {buttons.map((button, index) => (
                <ButtonCustom
                  key={index}
                  variant={button.variant || "contained"}
                  color={button.color || "primary"}
                  text={button.text}
                  sx={button.sx}
                  onClick={button.onClick}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ReusableContainers;