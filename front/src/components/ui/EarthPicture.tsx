// src/components/ui/EarthSvg.tsx
import { Box } from '@mui/material';
import Image from 'next/image';
import EarthMobile from '../../assets/EarthMobile.png';
import EarthMobileCustom from '../../assets/EarthMobileCustom.png';
import EarthTablet from '../../assets/EarthTablet.png';
import Earth from '../../assets/Earth.png';

const EarthMapPicture = () => {
  return (
    <>
      {/* Mobile: display hasta 450px (xs hasta customEarthMobile) */}
      <Box
        sx={{
          display: {
            xs: 'block',
            mobileMid: 'none'
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

      {/* Mobile Custom: display desde 450px hasta 650px */}
      <Box
        sx={{
          display: {
            xs: 'none',
            mobileMid: 'block',
            customEarthTablet: 'none'
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

      {/* Tablet: display desde 650px hasta 900px */}
      <Box
        sx={{
          display: {
            xs: 'none',
            customEarthTablet: 'block',
            md: 'none'
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

      {/* Desktop: display desde 900px en adelante */}
      <Box
        sx={{
          display: {
            xs: 'none',
            customEarthDesktop: 'block'
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

export default EarthMapPicture;