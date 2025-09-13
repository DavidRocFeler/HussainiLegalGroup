// components/home/StickyScrollSections.tsx
'use client'
import Box from '@mui/material/Box';
import StickyScrollDesktop from '../ui/StickyScrollDesktop';
import StickyScrollMobile from '../ui/StickyScrollMobile';
import { StickyScrollSectionsProps } from '@/types/home';

const StickyScrollSections = ({ stickyScrollData }: StickyScrollSectionsProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        py: {
          xs: 8,
          md: 8
        },
        px: {
          xs: 2,
          md: 9
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
        <StickyScrollDesktop stickyScrollData={stickyScrollData} />
      </Box>
      <Box
        sx={{
          display: {
            xs: 'flex',
            md: 'none'
          }
        }}
      >
        <StickyScrollMobile stickyScrollData={stickyScrollData} />
      </Box>
    </Box>
  );
};

export default StickyScrollSections;