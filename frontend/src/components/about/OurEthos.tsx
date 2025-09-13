import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ourEthosData } from '@/mock/ourEthos.mock'

const OurEthos = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        mt: {
            xs: 10,
            md: 12
        },
        mb: {
            xs: 6,
            md: 8
        }
      }}
    >
      <Typography
        variant='h9'
      >
        {ourEthosData.title}
      </Typography>
      <Typography
        variant="h2"
        mt={2}
        color='text.primary'
        sx={{
          fontFamily: 'Inter'
        }}
       >
        {ourEthosData.subtitle}
      </Typography>
    </Box>
  )
}

export default OurEthos