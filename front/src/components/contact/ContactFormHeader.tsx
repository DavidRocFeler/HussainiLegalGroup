import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ContactFormHeader = () => {
  return (
    <Box
      sx={{
        borderBottom: 'solid 1px #E6E6E6',
        pb: '3rem',
        mb: '3rem'
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        display="block"
        sx={{ 
          color: '#5E4740',
          fontSize: '0.75rem',
          fontWeight: 600,
          mb: '1rem',
        }}
      >
        A WORLDWIDE NETWORK
      </Typography>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ 
          color: '#131313', 
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