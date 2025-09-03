import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ourEthosData } from '@/mock/ourEthos.mock'

const OurEthos = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        mt: {
            xs: '5rem',
            md: '6rem'
        },
        mb: {
            xs: '3rem',
            md: '4rem'
        }
      }}
    >
      <Typography
        variant='h1'
        sx={{
          mb: '1rem',  
          color: '#131313',
          fontSize: {
            xs: '2.4rem',
            md: '2.75rem'
          },
          fontWeight: 400,
          letterSpacing: '-0.01rem',
          lineHeight: {
            xs: '2.8rem',
            md: '3.08rem'
          },
          '@media (max-width:500px)': {
            fontSize: '1.85rem',
          },
        }}
      >
        {ourEthosData.title}
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
        {ourEthosData.subtitle}
      </Typography>
    </Box>
  )
}

export default OurEthos