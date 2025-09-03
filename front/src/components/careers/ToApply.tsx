import React from 'react';
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
          padding: { xs: '20px', md: '30px' },
          width: '100%',
          borderBottom: '1px solid #EEE9DD',
          flexDirection: {
            xs: 'column',
            lg: 'row'
          }
        }}
      >
      <Typography
        variant='h1'
        sx={{
          color: 'white',
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: 400,
          mr: '0.35rem',
          letterSpacing: {
            xs: '0.0225rem',
            md: '0.0275rem'
          },
          fontSize: {
            xs: '1.125rem',
            md: '1.375rem'
          },
          lineHeight: {
            xs: '1.35rem)',
            md: '1.65rem'
          }
        }}
      >
        {data.description}{' '}
      </Typography>
      <Typography
          variant='h1'
          sx={{
            color: 'white',
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