// components/LegalAdviceSection.tsx
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { legalAdviceContent } from '@/mock/legalAdvice.mock';
import { legalAdviceButtons } from '@/mock/legalAdviceButtons';
import Link from 'next/link';
import Button from '@mui/material/Button';
import EarthMapPicture from '../ui/EarthPicture';

const LegalAdviceSection = () => {

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          md: 'column'
        },
        alignItems: 'center',
        py: {
          xs: 3,
          sm: 3,
          md: 12
        },
        px: {
          xs: 3,
          sm: 3,
          md: 10
        },
      }}
    >
      <Box
        sx={{
          width: 'full',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
       <Box
       sx={{
        width: { xs: '100%', md: '70%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
          xs: 'flex-start',
          md: 'center',
        },
        mb: 1,
       }}
       >
         {/* Title section */}
         <Typography
          variant="h4"
          color='brand.red'
          fontWeight={400}
          mb={2}
          sx={{
            textAlign: {
              xs: 'start',
              md: 'center'
            }
          }}
        >
          {legalAdviceContent.title}
        </Typography>

        {/* Description text */}
        <Typography
          variant="h5"
          mb={4}
          sx={{
            width: {
              xs: '100%',
              md: '75%',
            },
            textAlign: {
              xs: 'start',
              md: 'center'
            }
          }}
        >
          {legalAdviceContent.description}
        </Typography>

        {/* Action buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: {
              xs: 2,
              md: 3
            },
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
         {legalAdviceButtons.map((button, index) => (
            <Link key={index} href={button.href || '#'} style={{ textDecoration: 'none' }}>
              <Button
                key={index}
                variant={button.variant } 
                sx={button.sx} 
              >
                {button.text}
              </Button>
            </Link>
          ))}
        </Box>
       </Box>

      </Box>

        <Box sx={{ mt: 4 }}>
          <EarthMapPicture />
        </Box>
    </Box>
  );
};

export default LegalAdviceSection;