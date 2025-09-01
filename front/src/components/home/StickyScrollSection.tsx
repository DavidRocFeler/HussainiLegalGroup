import { Box } from '@mui/material';
import React from 'react';
import StickyScrollDesktop from '../ui/StickyScrollDesktop';
import StickyScrollMobile from '../ui/StickyScrollMobile';

const StickyScrollSections  = () => {
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
        <StickyScrollDesktop/>
      </Box>
      <Box
      sx={{
        display: {
          xs: 'flex',
          md: 'none'
        }
      }}
      >
        <StickyScrollMobile/>
      </Box>
    </Box>
  );
};

export default StickyScrollSections;