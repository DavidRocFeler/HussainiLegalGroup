import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { toApplyMock } from '@/mock/toApply.mock';

const ToApply = () => {
  const data = toApplyMock; 

  return (
      <Box
        sx={{
          backgroundColor: 'grey.50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2.5, md: 3.75 },
          width: '100%',
          borderBottom: '1px solid',
          borderColor: 'primary.main',
          flexDirection: {
            xs: 'column',
            lg: 'row'
          }
        }}
      >
      <Typography
        variant='h1'
        sx={{
          color: 'brand.whiteText',
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: 400,
          mr: 0.7,
          letterSpacing: {
            xs: '0.0225rem',
            md: '0.0275rem'
          },
          fontSize: {
            xs: '1.125rem',
            md: '1.375rem'
          },
          lineHeight: {
            xs: '1.35rem',
            md: '1rem'
          }
        }}
      >
        {data.description}{' '}
      </Typography>
      <Typography
          variant='h1'
          sx={{
            color: 'brand.whiteText',
            fontStyle: 'italic',
            fontWeight: 400,
            textDecoration: 'underline',
            letterSpacing: {
              xs: '0.0225rem',
              md: '0.0275rem'
            },
            fontSize: {
              xs: '1.125rem',
              md: '1.375rem'
            },
            lineHeight: {
              xs: '1.35rem',
              md: '1.65rem'
            }
          }}
        >
          {data.email}
      </Typography>
    </Box>
  );
};

export default ToApply;