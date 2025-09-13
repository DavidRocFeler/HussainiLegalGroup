// app/about/page.tsx
import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AboutCover from '@/components/about/AboutCover'
import AboutProfessionalCardContainer from '@/components/about/AboutProfessionalCardContainer'
import Timeline from '@/components/about/TimeLine'
import { FirstAboutSection } from '@/components/about/FirstAboutSection'
import { getAboutHeroTexts } from '@/server/home.server'
import { getProfessionalProfiles } from '@/server/about.server'

export const metadata: Metadata = {
  title: 'About Us - International Law Experts',
  description: 'Learn about Hussaini Legal Group\'s international team of legal experts specializing in corporate law, arbitration, and cross-border transactions across Miami, Amsterdam, and Damascus.',
  keywords: ['international law firm', 'legal experts', 'corporate law', 'arbitration', 'about us'],
  openGraph: {
    title: 'About Hussaini Legal Group - International Law Experts',
    description: 'International law experts with offices in Miami, Amsterdam, and Damascus specializing in corporate law and cross-border transactions',
    type: 'website',
  }
}

export const revalidate = 86400; 

const About = async () => {
  const heroAboutContent = await getAboutHeroTexts();
  const professionalProfiles = await getProfessionalProfiles(); 

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
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
      <FirstAboutSection heroAboutContent={heroAboutContent} />

      <AboutCover/>

      <AboutProfessionalCardContainer professionalProfiles={professionalProfiles} />

      <Typography
        variant='h1'
        mt={{xs: 10, md: 13}}
        mb={{xs: 8, md: 4}}
        sx={{
            textAlign: 'center',
            color: 'text.primary',
            fontSize: {
                xs: '2.1875rem',
                sm: '2.5rem',
                md: '2.75rem'
            },
            fontWeight: 400,
        }}
        >
          Timeline
      </Typography>
      
      <Timeline/>
    </Box>
  )
}

export default About