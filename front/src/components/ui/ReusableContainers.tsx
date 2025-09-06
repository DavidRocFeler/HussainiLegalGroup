import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image';
import { ReusableContainersProps } from '@/types/reusable';
import Link from 'next/link';

const ReusableContainers = ({ 
  imageUrl, 
  imageAlt,
  content,
  buttons,
  backgroundColor = 'transparent',
  href 
}: ReusableContainersProps ) => {

  return (
    <Box
      sx={{
        backgroundColor,
        position: 'relative',
      }}
    >
      {/* Top section with three overlapping components */}
      <Box
        sx={{
          display: 'flex',
          position: 'relative',        
          gap: 0,
          width: 'full',
        }}
      >
        {/* Red background box */}
        <Box
          sx={{
            display: {
              xs: 'none',
              customTabletInsight: 'block'
            },
            backgroundColor: 'brand.red',
            borderRadius: '0.62rem',
            width: {
              xs: '20.75rem',
              md: '18.75rem'
            },
            height: {
              xs: '12.5rem',
              md: '12.5rem',
            },
            position: 'absolute',
            zIndex: 1,
            mt: 0,
          }}
        />

        {/* Main hero image */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            mt: {
              xs: 0,
              customTabletInsight: 2.5,
              md: 2.5
            },
            ml: {
              xs: 0,
              customTabletInsight: 2.375,
              md: 2.375
            },
            borderRadius: '0.62rem',
            overflow: 'hidden',
            width: {
              xs: '100%',
              customTabletInsight: '93.5%',
              md: '41rem'
            },
            height: {
              xs: '23rem',
              customTabletInsight: '41rem',
              md: "32rem"
            },
          }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '0.62rem',
            }}
          />
        </Box>

        {/* Text content card */}
        <Box
          sx={{
            backgroundColor: 'brand.whiteText',
            borderRadius: '0.62rem',
            p: 4,
            maxWidth: {
              xs: '54rem',
              md: '39.5rem'
            },
            mt: {
              xs: 50,
              customTabletInsight: 92,
              md: 34
            },
            ml: 'auto',
            zIndex: 3,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          {content.map((item) => ( 
            <Box key={item.id} mb={2}>
              {item.title && (
                <Typography
                  variant="h3"
                  mb={3}
                >
                  {item.title}
                </Typography>
              )}
              {item.subtitle && (
                <Typography
                  mb={3}
                  variant="h4"
                >
                  {item.subtitle}
                </Typography>
              )}
              <Typography
                variant="h5"
              >
                {item.description}
              </Typography>
            </Box>
          ))}

          {href && (
            <Link href={href} style={{ textDecoration: 'none' }}>
              <Button 
              disableRipple={true}
              variant="seeMoreButton">
                See more
              </Button>
            </Link>
          )}

          {/* Action buttons */}
          {buttons && buttons.length > 0 && (
            <Box 
              sx={{ 
                mt: 4, 
                display: 'flex',
                gap: {
                  xs: 2,
                  md: 2.344
                }
              }}>
              {buttons.map((button, index) => (
                <Link key={index} href={button.href || '#'} style={{ textDecoration: 'none' }}>
                  <Button
                    variant={button.variant || "redCahova"} 
                    sx={button.sx} 
                  >
                    {button.text}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ReusableContainers;