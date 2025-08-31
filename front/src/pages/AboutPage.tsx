// AboutPage
import { Box } from '@mui/material'
import React from 'react'
import rectanguleAbout from '@/assets/RectangleAbout.jpg'
import { aboutContentContainer } from '@/mock/about.mock'
import ReusableContainers from '@/components/ui/ReusableContainers'

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'body.main',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '10rem 1rem 3rem 1.5rem',
          md: '11rem 4.5rem 8em 4.8rem',
        },
      }}
    >
      <ReusableContainers
        imageUrl={rectanguleAbout}
        imageAlt="About Hussaini Legal Group"
        content={aboutContentContainer}
        href="/about-details" 
      />
    </Box>
  )
}

export default AboutPage