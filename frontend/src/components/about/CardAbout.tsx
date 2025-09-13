import { CardAboutProps } from '@/types/about'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const CardAbout = ({ title, description }: CardAboutProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        alignSelf: 'stretch',
        py: {
          xs: 3.125,
          md: 3.125
        },
        px: {
          xs: 3.125,
          md: 2.5
        },
        height: {
          xs: 'auto',                    
          md: '28rem',                 
          customDesktopCardAbout: '25rem', 
          desktopMid: '22rem', 
          lg: '20rem',                  
          customLargeCardAbout: '18rem',
          xl: '15rem',                   
          customXLargeCardAbout: '13rem'
        },
        flex: {
          xs: 'none',
          md: '1 0 0'
        },
      }}
    >
      <Typography
        variant="h7"
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
      >
        {description}
      </Typography>
    </Box>
  )
}

export default CardAbout