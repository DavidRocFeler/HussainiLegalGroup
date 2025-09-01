// HomePage.tsx
import HeroSection from '@/components/home/HeroSection'
import VisionaryHero from '@/components/home/VisionaryHero'
import visionaryHeroImg from '@/assets/VisionaryHero.jpg'
import { Box } from '@mui/material'
import React from 'react'
import StickyScrollSections from '@/components/home/StickyScrollSection'
import LegalAdviceSection from '@/components/home/LegalAdviceSection'

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
        <StickyScrollSections/>
        <LegalAdviceSection/>
    </Box>
  )
}

export default HomePage