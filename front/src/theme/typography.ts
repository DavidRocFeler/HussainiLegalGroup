// theme/typography.ts
import { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  
  h1: {
    fontFamily: '"Merriweather", serif',
    fontSize: '5rem', 
    fontWeight: 400,
    lineHeight: '5.5rem',
    letterSpacing: '0px',
    '@media (max-width:899px)': {
      fontSize: '4.5rem',
    },
    '@media (max-width:650px)': {
      fontSize: '3.8rem',
      lineHeight: '4.5rem',
    },
    '@media (max-width:450px)': {
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
  },
  h2: {
    fontFamily: '"Exo", sans-serif',
    fontSize: '1.125rem',    
    fontWeight: 500,
    lineHeight: '1.8rem',    
    letterSpacing: '-0.01rem',
    '@media (max-width:899px)': {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',  
    },
    '@media (max-width:450px)': {
      fontSize: '1rem',
      fontWeight: 300,
    },
  },
  h3: {
    fontFamily: '"Exo", sans-serif',
    fontSize: '1.125rem',    
    fontWeight: 500,
    lineHeight: '1.8rem',    
    letterSpacing: '-0.01rem',
    '@media (max-width:899px)': {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',  
    },
  },
  h4: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '2.125rem',
    fontWeight: 600,
    lineHeight: 1.235,
  },
  h5: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.334,
  },
  h6: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  
  body1: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
  },
  
  button: {
    fontFamily: '"Merriweather", serif',
    fontSize: '1.35138rem',
    fontwWeight: 700,
    lineHeight: '1.75681rem',
    letterSpacing: '-0.0135rem',
  },
};