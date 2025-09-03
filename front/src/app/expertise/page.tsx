import ReusableContainers from '@/components/ui/ReusableContainers'
import { expertiseContentContainer } from '@/mock/expertiseContentContainer'
import Box from '@mui/material/Box'
import React from 'react'
import visionaryHero from '@/assets/VisionaryHero.jpg'
import ExpertiseAndSectors from '@/components/expertise/ExpertiseAndSectors'

const Expertise = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EEE9DD',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '10rem 1.5rem 3rem 1.5rem',
          md: '11rem 4.5rem 8em 4.8rem',
        },
      }}
    >
      <ReusableContainers
        imageUrl={visionaryHero}
        imageAlt="Legal expertise and services"
        content={expertiseContentContainer}
      />

      <ExpertiseAndSectors/>
    </Box>
  )
}

export default Expertise;