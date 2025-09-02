import { Box } from '@mui/material'
import Image from 'next/image'
import LabelAboutInfo from './LabelAboutInfo'
import { aboutCoverData } from '@/mock/aboutCover.mock'

const AboutCover = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        mt: '4rem',
        height: '80rem',
        '@media (max-width:900px)': {
          height: '65rem'
        },
        '@media (max-width:600px)': {
          position: 'static',
          height: 'auto'
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
          '@media (max-width:600px)': {
            display: 'none'
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
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'grey.50', 
          padding: { xs: '2rem', md: '4rem' },
          display: 'flex',
          width: '60%',
          flexDirection: 'column',
          justifyContent: 'center',
          '@media (max-width:1300px)': {
            width: '70%',
          },
          '@media (max-width:1100px)': {
            width: '80%',
          },
          '@media (max-width:755px)': {
            width: '85%',
          },
          '@media (max-width:600px)': {
            width: '100%',
            position: 'static',
            zIndex: 'auto'
          },
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