import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';
import { CoverBackgroundProps } from '@/types/home';
import { coverBackgroundData } from '@/mock/coverBackgroundData.mock';
import BackgroundImageResponsive from '../ui/BacgroundImageResponsive';

const CoverBackground = () => {
  const data: CoverBackgroundProps = coverBackgroundData;

  return (
    <Box
      sx={{
        minHeight: {
          xs: '0vh',
          sm: '70vh'
        },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'primary.main'
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'primary.main',
          zIndex: 1,
          transform: 'scale(1)',
        }}
        animation="wave"
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        <BackgroundImageResponsive/>
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          px: {
            xs: 3,    
            sm: 3,    
            md: 10   
          },
          pt: {
            xs: 24,  
            sm: 25,  
            md: 47    
          },
          pb: {
            xs: 10,  
            sm: 10, 
            md: 34    
          }
        }}
      >
        <Typography
          variant="h1"
          sx={{
            width: { xs: '100%', md: '75%' },
            mb: 2
          }}
        >
          {data.title}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            width: { xs: '100%', md: '70%' },
            mb: 4,
          }}
        >
          {data.description}
        </Typography>

        <Link 
          href={data.ctaButton.link}
          style={{
            textDecoration: 'none'
          }}
        >
          <Button variant="contactUs">
            {data.ctaButton.text}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CoverBackground;