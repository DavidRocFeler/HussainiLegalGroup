'use client';

import { Box } from '@mui/material';
import React from 'react';
import StikyScrollDesktop from '../ui/StikyScrollDesktop';
import StikyScrollMobile from '../ui/StikyScrollMobile';

const StickyScrollSections: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        padding: {
          xs: '4rem 1rem',
          md: '5rem 4.5rem',
        },
        position: 'relative',
      }}
    >
      <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}
      >
        <StikyScrollDesktop/>
      </Box>
      <Box
      sx={{
        display: {
          xs: 'flex',
          md: 'none'
        }
      }}
      >
        <StikyScrollMobile/>
      </Box>
    </Box>
  );
};

export default StickyScrollSections;