import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import { SectionExpertise } from '@/components/expertise/SectionExpertise'

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
    <SectionExpertise />
    </Box>
  )
}

export default Expertise;