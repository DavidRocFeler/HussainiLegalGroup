// app/not-found.tsx
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        bgcolor: 'primary.main',
        alignItems: 'center',
        justifyContent: 'center',
        padding: {
          xs: '10rem 8rem 4rem 8rem',
          md: '15rem 5rem 7rem 5rem'
        }
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        {/* 404 */}
        <Typography
          color='brand.red'
          variant="h1"
          sx={{
            fontSize: {
              xs: '4rem',
              md: '6rem'
            },
            fontWeight: 700,
            mb: 2,
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: '1.5rem',
              md: '2rem'
            },
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>

        {/* Description */}
        <Typography
          variant="h5"
          sx={{
            fontSize: '1.125rem',
            color: 'text.secondary',
            mb: 4,
            maxWidth: '500px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" passHref>
            <Button variant="redCahova">
              Go Home
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button variant="goldenOchre">
              Contact Us
            </Button>
          </Link>
        </Box>

        {/* Additional Info */}
        <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #E5E5E5' }}>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 1,
            }}
          >
            Need immediate assistance?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'brand.red',
              fontWeight: 500,
            }}
          >
            Call us at 0470 343 103
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;