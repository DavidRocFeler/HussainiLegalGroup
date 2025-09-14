// theme/components.ts
import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'seeMoreButton' },
        style: {
          color: '#891C1B',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '1.3rem',
          letterSpacing: '-0.01rem',
          textTransform: 'none',
          padding: 0,
          minWidth: 'auto',
          marginTop: '16px',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }
        }
      },

      {
        props: { variant: 'buttonSubscribe' },
        style: {
          backgroundColor: '#D6D0B4',
          color: '#324344',
          padding: '0.75rem 1.5rem',
          fontSize: '0.9rem',
          fontFamily: '"Merriweather", serif',
          fontWeight: 500,
          borderRadius: '0px',
          textTransform: 'none',
          transition: 'all 0.3s ease-in-out',
          zIndex: 0,
          '&:hover': {
            backgroundColor: '#B38F59',
            color: 'white'
          },
          '@media (max-width:1080px)': {
            fontSize: '1.2rem',
          },
          '@media (max-width:450px)': {
            padding: '0.5rem 1rem',
            color: '#404040',
            fontSize: '1rem',
            fontWeight: 400,
          }
        }
      },  

      {
        props: { variant: 'redCahova' },
        style: {
          textTransform: 'none',
          padding: '0.775rem 2.0625rem',
          fontSize: '1rem',
          fontFamily: 'var(--font-merriweather), serif',
          fontWeight: 400,
          borderRadius: '0.1875rem',
          backgroundColor: '#891C1B', 
          border: '2px solid transparent',
          color: '#EEE9DD',
          '&:hover': {
            transition: 'border-color 0.3s ease',
            border: '2px solid #24363A',
            color: 'white',
          },
          '@media (max-width:440px)': {
            padding: '0.5rem 1rem'
          }
        }
      },

      {
        props: { variant: 'redCahovaBorder' },
        style: {
          textTransform: 'none',
          padding: '0.875rem 2.1625rem',
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: '1rem',
          fontWeight: 400,
          border: '2px solid transparent',
          borderRadius: '0px',
          backgroundColor: '#891C1B', 
          color: '#EEE9DD',
          '&:hover': {
            backgroundColor: '#B49055', 
            transition: 'background-color 0.3s ease',
            border: '2px solid white',
          },
          '@media (max-width:440px)': {
            padding: '0.5rem 1rem',
          }
        }
      },
      
      {
        props: { variant: 'goldenOchre' },
        style: {
          textTransform: 'none',
          padding: '0.775rem 2.0625rem',
          fontSize: '1rem',
          fontFamily: 'var(--font-merriweather), serif',
          fontWeight: 400,
          borderRadius: '0.1875rem',
          backgroundColor: '#B49055',
          color: '#EEE9DD',
          border: '2px solid transparent',
          '&:hover': {
            transition: 'border-color 0.3s ease',
            border: '2px solid #24363A',
            color: 'white'
          },
          '@media (max-width:440px)': {
            padding: '0.5rem 1rem'
          }
        }
      },
      
      {
        props: { variant: 'transparentBorder' },
        style: {
          textTransform: 'none',
          padding: '0.875rem 2.1625rem',
          fontSize: '1rem',
          fontWeight: 400,
          fontFamily: 'var(--font-merriweather), serif',
          borderRadius: '0.1875rem',
          backgroundColor: 'transparent',
          color: '#EEE9DD',
          border: '2px solid #EEE9DD',
          '&:hover': {
            backgroundColor: '#B49055',
            borderColor: '#B49055',
            color: 'primary.main',
            transition: 'all 0.3s ease',
          },
          '@media (max-width:440px)': {
            padding: '0.5rem 1rem'
          }
        }
      },

      {
        props: { variant: 'buttonReadCase' },
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          fontFamily: 'var(--font-inter), sans-serif',
          color: '#64181C',
          textTransform: 'uppercase',
          fontSize: '0.875rem',
          letterSpacing: '0.1em',
          fontWeight: 500,
          cursor: 'pointer',
          borderRadius: '0.3215rem',
          padding: '0.88rem 1.31rem',
          border: 'solid 1px #64181C',
          gap: '3rem',
          '&:hover': {
            textDecoration: 'none',
            transition: 'transform 0.2s ease-in-out',
          },
        }
      },

      {
        props: { variant: 'contactUs' },
        style: {
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: '1.35138rem',
          fontWeight: 700,
          lineHeight: '1.75681rem',
          letterSpacing: '-0.0135rem',
          alignSelf: 'flex-start',
          padding: '1.1825rem 2.92244rem',
          color: '#2c3e50',
          borderRadius: '0.25338rem',
          backgroundColor: '#EEE9DD',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#CEC4A6',
          },
          transition: 'all 0.3s ease-in-out',
      
          '@media (max-width:450px)': {
            padding: '0.75rem 1.85rem',
            color: '#404040',
            textAlign: 'center',
            fontFamily: 'Merriweather',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.3rem',
            letterSpacing: '-0.01rem',
            textTransform: 'capitalize',
          }
        }
      },

      {
        props: { variant: 'primary' },
        style: {
          display: 'flex',
          minHeight: '2.5rem',
          padding: '0.625rem 1rem',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Lato, sans-serif',
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '1.3rem',
          borderRadius: '0.375rem',
          background: '#171717',
          textTransform: 'none',
          '&:hover': {
            background: '#171717',
          }
        }
      }

    ]
  }
};