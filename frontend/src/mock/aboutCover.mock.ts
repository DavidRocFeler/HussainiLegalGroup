import coverImage from '@/assets/AboutCover.jpg'
import { AboutCoverData } from '@/types/about'

export const aboutCoverData: AboutCoverData = {
  backgroundImage: coverImage,
  labels: [
    {
      score: '1000+',
      description: 'Disputes handled in court and through arbitration.',
      hasBorderBottom: true
    },
    {
      score: '150+',
      description: 'Active clients across corporate, commercial, dispute resolution, compliance, and investment matter.',
      hasBorderBottom: true
    },
    {
      score: '20+',
      description: 'Major corporate and commercial transactions advised on.',
      hasBorderBottom: true
    },
    {
      score: '12',
      description: 'Lawyers advising across corporate, dispute resolution, and regulatory compliance.',
      hasBorderBottom: true
    },
    {
      score: '30+',
      description: 'Publications, including encyclopedias and books on arbitration, civil law, civil procedure, corporate law, real estate, and investment contracting.',
      hasBorderBottom: true
    },
    {
      score: '6',
      description: 'Languages spoken across the team.',
      hasBorderBottom: true
    },
    {
      score: '3',
      description: 'Bar admissions in key international jurisdictions.',
      hasBorderBottom: false 
    }
  ]
}