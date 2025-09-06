import type { Metadata } from 'next'
import visionaryHero from '@/assets/VisionaryHero.jpg'
import { expertiseContentContainer } from '@/mock/expertiseContentContainer'
import Box from '@mui/material/Box'
import ReusableContainers from '@/components/ui/ReusableContainers'
import ExpertiseAndSectors from '@/components/expertise/ExpertiseAndSectors'

export const metadata: Metadata = {
  title: 'Legal Expertise & Services - Hussaini Legal Group',
  description: 'Hussaini Legal Group specializes in corporate law, international arbitration, investment contracting, Islamic finance, and cross-border transactions. Expert legal services across multiple jurisdictions.',
  keywords: ['legal expertise', 'corporate law', 'international arbitration', 'investment law', 'Islamic finance', 'cross-border transactions'],
  openGraph: {
    title: 'Legal Expertise - Hussaini Legal Group',
    description: 'Specialized legal services in corporate law, arbitration, and international transactions',
    type: 'website',
  }
}

const Expertise = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        position: 'relative',
        maxHeight: 'fit-content',
        pt: {
          xs: 20,
          md: 22
        },
        pr: {
          xs: 3,
          md: 9
        },
        pb: {
          xs: 6,
          md: 12
        },
        pl: {
          xs: 3,
          md: 9.6
        }
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