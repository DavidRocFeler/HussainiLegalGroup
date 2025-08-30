// theme/typography.ts
import { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  
  h1: {
    fontFamily: '"Merriweather", serif',
  },
  h2: {
    fontFamily: '"Exo", sans-serif',
    fontSize: '1.125rem',    
    fontWeight: 500,
    lineHeight: '1.8rem',    
    letterSpacing: '-0.01rem',
    '@media (max-width:899px)': {
      fontSize: '1.5rem',
      lineHeight: '1.8rem',  
    },
    '@media (max-width:450px)': {
      fontSize: '1rem',
      fontWeight: 300,
    },
  },
  h3: {
    fontFamily: '"Exo", sans-serif',
    fontSize: '1rem',    
    fontWeight: 300,
    lineHeight: '1.8rem',    
    letterSpacing: '-0.01rem',
    '@media (max-width:899px)': {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',  
    },
  },
  h4: {
    fontFamily: '"Merriweather", serif',
    fontSize: '1.2rem', 
    fontWeight: 600,
    '@media (max-width:899px)': {
      fontSize: '1.8rem', 
    },
  },
  h5: {
    fontFamily: '"Inter", sans-serif',
    letterSpacing: '-0.01rem',
  },
  h6: {
    fontFamily: '"Merriweather", serif',
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: '3.25rem',
    color: '#131313',
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