// theme/typography.ts
import { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {
  fontFamily: 'var(--font-inter), var(--font-roboto), "Helvetica", "Arial", sans-serif',

  h1: {
    fontFamily: 'var(--font-merriweather), serif',
    color: '#FAF5EF',
    fontWeight: 400,
    letterSpacing: '-0.1rem',
    fontSize: '5rem', 
    lineHeight: '5.6rem',
    
    '@media (max-width:899px)': { 
      fontSize: '3.125rem',
      lineHeight: '3.5rem',
      letterSpacing: '-0.0625rem',
    },
    
    '@media (max-width:450px)': { 
      fontSize: '2.5rem',
      lineHeight: '2.8rem',
      letterSpacing: '-0.05rem',
    },
  },

  h2: {
    fontFamily: 'var(--font-exo), sans-serif',
    color: '#FFF',
    fontWeight: 400,
    letterSpacing: '-0.01rem',
    fontSize: '1.125rem', 
    lineHeight: '1.8rem',
    
    '@media (max-width:899px)': { 
      fontSize: '1.125rem',
      lineHeight: '1.8rem',
    },
    
    '@media (max-width:450px)': {
      fontSize: '1rem',
      lineHeight: '1.6rem',
    },
  },

  h3: {
    fontFamily: 'var(--font-inter), sans-serif',
    color: '#891C1B',
    fontWeight: 700,
    lineHeight: '112%',
    letterSpacing: '-0.01rem',
    fontSize: '1.25rem', 
    
    '@media (max-width:899px)': { 
      fontSize: '1.125rem',
      lineHeight: '1.26rem',
    },
    
    '@media (max-width:450px)': { 
      fontSize: '1.125rem',
      lineHeight: '1.26rem',
    },
  },

  h4: {
    fontFamily: 'var(--font-merriweather), serif',
    color: '#131313',
    fontWeight: 700,
    fontSize: '2.5rem', 
    lineHeight: '3.25rem',
    
    '@media (max-width:1199px)': { 
      fontSize: '1.875rem',
      lineHeight: '2.4375rem',
    },
    
    '@media (max-width:899px)': { 
      fontSize: '1.75rem',
      lineHeight: '2.275rem',
    },
  },

  h5: {
    color: '#131313',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.5rem',
    letterSpacing: '-0.01rem',
  },

  h6: {
    color: '#FFF',
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '1.5rem',
    letterSpacing: '-0.025rem',
  },

  h7: {
    color: '#131313',
    fontFamily: 'var(--font-merriweather), serif',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.5625rem',
    lineHeight: '1.875rem',
    
    '@media (max-width:899px)': {
      fontSize: '1.375rem',
      lineHeight: '1.65rem',
    },
    
    '@media (max-width:450px)': {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
    },
  },

  h8: {
    color: '#FFF',
    fontFamily: 'var(--font-merriweather), serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '2.375rem',
    lineHeight: '2.375rem', 
    
    '@media (max-width:899px)': {
      fontSize: '1.875rem',
      lineHeight: '1.875rem', 
    },
    
    '@media (max-width:450px)': {
      fontSize: '1.625rem',
      lineHeight: '1.625rem', 
    },
  },

  h9: {
    color: '#131313',
    fontFamily: 'var(--font-merriweather), serif',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '-0.01rem',
    fontSize: '2.75rem',
    lineHeight: '3.08rem',
    
    '@media (max-width:899px)': {
      fontSize: '2.5rem',
      lineHeight: '2.8rem', 
    },
    
    '@media (max-width:450px)': {
      fontSize: '2.1875rem',
      lineHeight: '2.45rem', 
    },
  },

  h10: {
    fontFamily: 'var(--font-merriweather), serif',
  },

  h11: {
    fontFamily: 'var(--font-inter), sans-serif',
  },

  h12: {
    color: '#131313',
    fontFamily: 'var(--font-merriweather), serif',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '3.5rem',
    lineHeight: '4.2rem',
    letterSpacing: '-0.07rem',
    
    '@media (max-width:899px)': {
      fontSize: '2.5rem',
      lineHeight: '3rem',
      letterSpacing: '-0.05rem',
    },
    
    '@media (max-width:450px)': {
      fontSize: '2.5rem',
      lineHeight: '3rem',
      letterSpacing: '-0.05rem',
    },
  },

  h13: {
    color: '#FAF5EF',
    fontFamily: 'Merriweather, serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '5rem',
    lineHeight: '5.6rem',
    letterSpacing: '-0.1rem',
    
    '@media (max-width:899px)': {
      fontSize: '3.125rem',
      lineHeight: '3.5rem',
      letterSpacing: '-0.0625rem',
    },
    
    '@media (max-width:450px)': {
      fontSize: '2.5rem',
      lineHeight: '2.8rem',
      letterSpacing: '-0.05rem',
    },
  },

  body1: {
    fontFamily: 'var(--font-merriweather), serif',
    color: '#EEE9DD',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.3rem', 
    letterSpacing: '-0.01rem',
    textTransform: 'none',
    '&:hover': { 
      color: 'white',
    },
  },
  
  body2: {
    color: '#FFF',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.3rem',
    letterSpacing: '-0.01rem',
    textAlign: 'left',
    '@media (max-width:899px)': { 
      textAlign: 'center',
    },
  },
};