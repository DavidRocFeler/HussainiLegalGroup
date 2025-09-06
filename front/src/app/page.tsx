import type { Metadata } from 'next'
import VisionaryHero from '@/components/home/VisionaryHero'
import visionaryHeroImg from '@/assets/VisionaryHero.jpg'
import Box from '@mui/material/Box'
import StickyScrollSections from '@/components/home/StickyScrollSection'
import LegalAdviceSection from '@/components/home/LegalAdviceSection'
import CoverBackground from '@/components/home/CoverBackground'

export const metadata: Metadata = {
  title: 'International Law Firm | Corporate Law, Arbitration & Cross-Border Transactions',
  description: 'Hussaini Legal Group - Leading international law firm with offices in Miami, Amsterdam, and Damascus. Expert legal services in corporate law, international arbitration, investment contracting, and cross-border transactions.',
  keywords: ['international law firm', 'corporate lawyers', 'arbitration experts', 'cross-border transactions', 'investment law', 'Islamic finance'],
  openGraph: {
    title: 'Hussaini Legal Group - International Law Firm',
    description: 'Expert legal services across Miami, Amsterdam, and Damascus specializing in corporate law and international transactions',
    type: 'website',
  }
}

const Home = () => {
  return (
    <Box 
    sx={{
      width: '100%',
      }}>
        <CoverBackground/>
        <VisionaryHero
          imageUrl={visionaryHeroImg}
          imageAlt="Modern building architecture"
        />
        <StickyScrollSections/>
        <LegalAdviceSection/>
    </Box>
  )
}

export default Home;