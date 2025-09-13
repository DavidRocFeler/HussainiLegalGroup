'use client'
import { Box } from '@mui/material'
import React from 'react'
import ReusableContainers from '../ui/ReusableContainers'
import ExpertiseAndSectors from './ExpertiseAndSectors'
import visionaryHero from '@/assets/VisionaryHero.jpg'
import { useSanityData } from '@/hook/useSanityData'
import { HeroTextContent } from '@/types/home'
import { getExpertiseHeroTexts } from '@/server/home.server'

export const SectionExpertise = () => {
const { data: heroExpertiseContent, loading } = useSanityData<HeroTextContent>(getExpertiseHeroTexts);

  return (
    <Box>
      <ReusableContainers
        imageUrl={visionaryHero}
        imageAlt="Legal expertise and services"
        content={heroExpertiseContent}
        loading={loading}
      />

      <ExpertiseAndSectors/>
    </Box>
  )
}
