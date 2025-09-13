import Box from '@mui/material/Box'
import Image from 'next/image'
import LabelAboutInfo from './LabelAboutInfo'
import { aboutCoverData } from '@/mock/aboutCover.mock'

const AboutCover = () => {
  return (
    <Box
      sx={{
        position: {
          xs: 'static',        
          sm: 'relative'      
        },
        width: '100%',
        mt: 8,
        height: {
          xs: 'auto',         
          sm: '65rem',        
          md: '80rem'        
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          display: {
            xs: 'none',       
            sm: 'block'       
          },
        }}
      >
        <Image
          src={aboutCoverData.backgroundImage}
          alt="About cover background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box
        sx={{
          position: {
            xs: 'static',     
            sm: 'relative'    
          },
          zIndex: {
            xs: 'auto',      
            sm: 2             
          },
          backgroundColor: 'grey.50',
          padding: { xs: 4, md: 8 },
          display: 'flex',
          width: {
            xs: '100%',                   
            customTabletAbout: '85%',     
            desktopMid: '80%',    
            customDesktopLargeAbout: '70%', 
            xl: '60%'                    
          },
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {aboutCoverData.labels.map((label, index) => (
          <LabelAboutInfo
            key={index}
            score={label.score}
            description={label.description}
            hasBorderBottom={label.hasBorderBottom}
          />
        ))}
      </Box>
    </Box>
  )
}

export default AboutCover