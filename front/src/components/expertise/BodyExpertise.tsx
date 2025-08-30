// components/BodyExpertise.tsx
import { Box } from '@mui/material'
import React from 'react'
import ReusableContainers from '../ui/ReusableContainers'
import expertiseImage from '@/assets/BackgroundCover.png'
import { expertiseContentContainer } from '@/mock/expertiseContentContainer'

const BodyExpertise = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EEE9DD',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '4rem 1rem 3rem 1.5rem',
          md: '11rem 4.5rem 8em 4.8rem',
        },
      }}
    >
      <ReusableContainers
        imageUrl={expertiseImage}
        imageAlt="Legal expertise and services"
        content={expertiseContentContainer}
      />
    </Box>
  )
}

export default BodyExpertise