import React from 'react';
import { Box, Typography } from '@mui/material';
import { toApplyMock } from '@/mock/toApply.mock';

const ToApply: React.FC = () => {
  const data = toApplyMock; 

  return (
    <Box
      sx={{
        backgroundColor: 'tertiary.main', 
        padding: { xs: '20px', md: '30px' },
        width: '100%',
        borderBottom: '1px solid #EEE9DD'
      }}
    >
      <Typography
        variant='h1'
        sx={{
          color: 'var(--hussainilegalgroup-a-84725-de-1-a-98112-fc-813-webflow-io-white, var(--color-white-solid, #FFF))',
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: 400,
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
        <Typography
          variant='h1'
          sx={{
            color: 'var(--hussainilegalgroup-a-84725-de-1-a-98112-fc-813-webflow-io-white, var(--color-white-solid, #FFF))',
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
      </Typography>
    </Box>
  );
};

export default ToApply;