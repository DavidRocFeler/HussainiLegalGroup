import { CardAboutProps } from '@/types/about'
import { Box, Typography } from '@mui/material'

const CardAbout = ({ title, description }: CardAboutProps) => {
  return (
    <Box
        sx={{
            bgcolor: 'secondary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1rem',
            alignSelf: 'stretch',
            padding: {
            xs: '1.5625rem',
            md: '1.5625rem 1.25rem'
            },
            height: '13rem',
            flex: {
            xs: 'none',
            md: '1 0 0'
            },
            '@media (max-width:1800px)': {
              height: '15rem',
            },
            '@media (max-width:1600px)': {
              height: '18rem',
            },
            '@media (max-width:1400px)': {
              height: '20rem',
            },
            '@media (max-width:1200px)': {
              height: '22rem',
            },
            '@media (max-width:1050px)': {
              height: '25rem',
            },
            '@media (max-width:950px)': {
              height: '28rem',
            },
            '@media (max-width:900px)': {
              height: 'auto',
            },
        }}
    >
      <Typography 
        variant="h1" 
        sx={{
            color: '#131313',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: {
              xs: '1.375rem',
              md: '1.5625rem'
            },
            lineHeight: {
              xs: '1.65rem',
              md: '1.875rem'
            }
          }}
      >
        {title}
      </Typography>
      <Typography 
      variant="h5"
      sx={{
        color: '#131313',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: {
          xs: '1rem',
          md: '1.125rem'
        },
        lineHeight: {
          xs: '1.5rem',
          md: '1.6875rem'
        }
      }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default CardAbout