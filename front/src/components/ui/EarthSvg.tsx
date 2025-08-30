// src/components/ui/EarthSvg.tsx
import React from 'react';
import { Box } from '@mui/material';
import {
EarthSvg as EarthDesktopIcon,
EarthTabletSvg as EarthTabletIcon,
EarthMobileSvg as EarthMobileIcon,
EarthMobileCustomSvg as EarthMobileCustomIcon
} from '../../assets/icons';

export const EarthSvg: React.FC = () => {
  return (
    <>
    {/* Mobile - 0 a 450px */}
      <Box
        sx={{
        display: 'block',
        '@media (min-width: 450px)': {
        display: 'none'
        }
        }}
      >
        <EarthMobileIcon />
      </Box>

      {/* Mobile Custom - 450px a 650px */}
      <Box
        sx={{
        display: 'none',
        '@media (min-width: 450px) and (max-width: 650px)': {
        display: 'block'
        }
        }}
      >
        <EarthMobileCustomIcon />
      </Box>

      {/* Tablet - 650px a 900px */}
      <Box
        sx={{
        display: 'none',
        '@media (min-width: 650px) and (max-width: 900px)': {
        display: 'block'
        }
        }}
      >
        <EarthTabletIcon />
      </Box>

      {/* Desktop - 900px+ */}
      <Box
        sx={{
        display: 'none',
        '@media (min-width: 900px)': {
        display: 'block'
        }
        }}
      >
        <EarthDesktopIcon />
      </Box>
    </>
  );
};