// src/components/ui/EarthSvg.tsx
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import EarthMobile from '../../assets/EarthMobile.png';
import EarthMobileCustom from '../../assets/EarthMobileCustom.png';
import EarthTablet from '../../assets/EarthTablet.png';
import Earth from '../../assets/Earth.png';

export const EarthSvg = () => {
  return (
    <>
      <Box
        sx={{
          display: 'block',
          '@media (min-width: 450px)': {
            display: 'none'
          }
        }}
      >
        <Image 
          src={EarthMobile}
          alt="Earth Mobile View"
          width={300}
          height={249}
        />
      </Box>

      <Box
        sx={{
          display: 'none',
          '@media (min-width: 450px) and (max-width: 650px)': {
            display: 'block'
          }
        }}
      >
        <Image 
          src={EarthMobileCustom}
          alt="Earth Mobile Custom View"
          width={638}
          height={443}
        />
      </Box>

      <Box
        sx={{
          display: 'none',
          '@media (min-width: 650px) and (max-width: 900px)': {
            display: 'block'
          }
        }}
      >
        <Image 
          src={EarthTablet}
          alt="Earth Tablet View"
          width={725}
          height={249}
        />
      </Box>

      <Box
        sx={{
          display: 'none',
          '@media (min-width: 900px)': {
            display: 'block'
          }
        }}
      >
        <Image 
          src={Earth}
          alt="Earth Desktop View"
          width={1140}
          height={562}
        />
      </Box>
    </>
  );
};