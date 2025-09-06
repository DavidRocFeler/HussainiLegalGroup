import { LabelAboutInfoProps } from '@/types/about'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const LabelAboutInfo = ({ score, description, hasBorderBottom }: LabelAboutInfoProps) => {
  return (
    <Box
      mb={3}
      pb={3}
      sx={{
        borderBottom: hasBorderBottom ? '1px solid white' : 'none'
      }}
    >
      <Typography 
        variant="h8" 
      >
        {score}
      </Typography>
      <Typography 
        variant="h5"
        mt={2}
        sx={{
          color: 'brand.whiteText',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: {
            xs: '1rem',
            sm: '1.125rem'
          },
          lineHeight: {
            xs: '1.5rem',
            sm: '1.6875rem'
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default LabelAboutInfo