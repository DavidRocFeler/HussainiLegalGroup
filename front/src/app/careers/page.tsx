import type { Metadata } from 'next'
import ToApply from '@/components/careers/ToApply'
import BodyCareers from '@/components/careers/BodyCareers'

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

const Careers = () => {
  return (
    <>
      <BodyCareers/>
      <ToApply/>
    </>
  )
}

export default Careers;