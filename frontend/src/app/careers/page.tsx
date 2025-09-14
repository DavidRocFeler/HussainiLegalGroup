// app/careers/page.tsx
import type { Metadata } from 'next'
import ToApply from '@/components/careers/ToApply'
import BodyCareers from '@/components/careers/BodyCareers'
import { getCareersHeroTexts } from '@/queries/homeQuery'

export const metadata: Metadata = {
  title: 'Legal Careers & Opportunities - Hussaini Legal Group',
  description: 'Join Hussaini Legal Group\'s international team of legal experts. Explore career opportunities in corporate law, arbitration, and cross-border transactions across our Miami, Amsterdam, and Damascus offices.',
  keywords: ['legal careers', 'law jobs', 'legal opportunities', 'law firm careers', 'international law jobs', 'legal vacancies'],
  openGraph: {
    title: 'Legal Careers - Hussaini Legal Group',
    description: 'Join our international team of legal experts in Miami, Amsterdam, and Damascus',
    type: 'website',
  }
}

export const revalidate = false;

const Careers = async () => {
  const heroCareersContent = await getCareersHeroTexts();

  return (
    <>
      <BodyCareers heroCareersContent={heroCareersContent} />
      <ToApply/>
    </>
  )
}

export default Careers;