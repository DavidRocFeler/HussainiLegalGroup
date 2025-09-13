import Image from 'next/image';
import Box from '@mui/material/Box';

const Logo = ({ 
  width = 120, 
  height = 68, 
  alt = "Company Logo",
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image 
        src='/logoGroup.png'
        alt={alt}
        width={width}
        height={height}
        priority
      />
    </Box>
  );
};

export default Logo;