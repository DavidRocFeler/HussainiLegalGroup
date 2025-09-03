import { LabelAboutInfoProps } from '@/types/about'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const LabelAboutInfo = ({ score, description, hasBorderBottom }: LabelAboutInfoProps) => {
  return (
    <Box
      sx={{
        padding: '1.5rem 0',
        borderBottom: hasBorderBottom ? '1px solid white' : 'none'
      }}
    >
      <Typography 
        variant="h1" 
        sx={{
            color: 'white',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: {
              xs: '1.375rem',
              md: '1.5625rem'
            },
            lineHeight: {
              xs: '1.65rem',
              md: '1.875rem'
            },
            mb: '1rem'
          }}
      >
        {score}
      </Typography>
      <Typography 
        variant="h5"
        sx={{
          color: 'white',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: {
            xs: '1rem',
            md: '1.125rem'
          },
          lineHeight: {
            xs: '1.5rem',
            md: '1.6875rem'
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default LabelAboutInfo