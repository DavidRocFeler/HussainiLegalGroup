// app/page.tsx
import type { Metadata } from 'next'
import VisionaryHero from '@/components/home/VisionaryHero'
import visionaryHeroImg from '@/assets/VisionaryHero.jpg'
import Box from '@mui/material/Box'
import StickyScrollSections from '@/components/home/StickyScrollSection'
import LegalAdviceSection from '@/components/home/LegalAdviceSection'
import CoverBackground from '@/components/home/CoverBackground'

import { getHomeHeroTexts, getStrategyHeroTexts, getHomeSectionStickies } from '@/queries/homeQuery'

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

export const revalidate = 86400; 

const Home = async () => {
  const heroHomeContent = await getHomeHeroTexts();
  const heroStrategyContent = await getStrategyHeroTexts();
  const stickyScrollData = await getHomeSectionStickies(); 

  return (
    <Box sx={{ width: '100%' }}>
      <CoverBackground/>
      
      <VisionaryHero
        imageUrl={visionaryHeroImg}
        imageAlt="Modern building architecture"
        heroHomeContent={heroHomeContent}       
        heroStrategyContent={heroStrategyContent} 
      />
      
      <StickyScrollSections stickyScrollData={stickyScrollData} />
      <LegalAdviceSection/>
    </Box>
  )
}

export default Home;