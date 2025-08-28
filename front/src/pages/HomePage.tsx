// HomePage.tsx
import HeroSection from '@/components/home/HeroSection'
import VisionaryHero from '@/components/home/VisionaryHero'
import visionaryHeroImg from '@/assets/VisionaryHero.jpg'
import { Box } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Box 
    sx={{
      width: '100%',
      }}>
        <HeroSection/>
        <VisionaryHero
          imageUrl={visionaryHeroImg}
          imageAlt="Modern building architecture"
        />
    </Box>
  )
}

export default HomePage