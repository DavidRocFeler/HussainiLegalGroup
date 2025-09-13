// components/expertise/SectionExpertise.tsx
import { Box } from '@mui/material'
import ReusableContainers from '../ui/ReusableContainers'
import ExpertiseAndSectors from './ExpertiseAndSectors'
import visionaryHero from '@/assets/VisionaryHero.jpg'
import { SectionExpertiseProps } from '@/types/expertise'

export const SectionExpertise = ({ heroExpertiseContent }: SectionExpertiseProps) => {
  const loading = false;

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