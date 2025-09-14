// src/components/ui/EarthSvg.tsx
import Box from '@mui/material/Box';
import Image from 'next/image';
import EarthMobile from '../../assets/EarthMobile.webp';
import EarthMobileCustom from '../../assets/EarthMobileCustom.webp';
import EarthTablet from '../../assets/EarthTablet.webp';
import Earth from '../../assets/Earth.webp';

const EarthMapPicture = () => {
  return (
    <>
      {/* Mobile: display 450px (xs - customEarthMobile) */}
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

      {/* Mobile Custom: display 450px - 650px */}
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

      {/* Tablet: display 650px - 900px */}
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

      {/* Desktop: display 900px*/}
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