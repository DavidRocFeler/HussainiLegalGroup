import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ContactFormHeader = () => {
  return (
    <Box
      sx={{
        borderBottom: 'solid 1px',
        borderColor: 'brand.borderGrey',
        pb: 6,
        mb: 6
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        display="block"
        letterSpacing={1}
        sx={{ 
          color: 'text.secondary',
          fontSize: '0.75rem',
          fontWeight: 600,
          mb: 0,
        }}
      >
        A WORLDWIDE NETWORK
      </Typography>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ 
          color: 'text.primary', 
          fontSize: {
            xs: '1.75rem',
            md: '2rem',
            lg: '3.25rem'
          },
          fontWeight: 400
        }}
      >
        Contact us
      </Typography>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ 
          color: '#404040',
          fontSize: {
            xs: '0.80rem',
            lg: '1.2rem'
          }
        }}
      >
        Fill out form to get in touch with us
      </Typography>
    </Box>
  );
};

export default ContactFormHeader;