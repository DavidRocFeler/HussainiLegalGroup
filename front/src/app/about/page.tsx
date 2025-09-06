import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import rectanguleAbout from '@/assets/RectangleAbout.jpg'
import { aboutContentContainer } from '@/mock/about.mock'
import ReusableContainers from '@/components/ui/ReusableContainers'
import CardAbout from '@/components/about/CardAbout'
import { cardAboutData } from '@/mock/cardAbout.mock'
import OurEthos from '@/components/about/OurEthos'
import AboutCover from '@/components/about/AboutCover'
import AboutProfessionalCardContainer from '@/components/about/AboutProfessionalCardContainer'
import Timeline from '@/components/about/TimeLine'


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


const About = () => {
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
      <ReusableContainers
        imageUrl={rectanguleAbout}
        imageAlt="About Hussaini Legal Group"
        content={aboutContentContainer}
        href="/about" 
      />
      <OurEthos/>  

      <Grid container spacing={2}>
        {cardAboutData.map((card) => (
          <Grid
            key={card.id}
            size={{
              xs: 12,
              md: 4
            }}
          >
            <CardAbout
              id={card.id}
              title={card.title}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>

      <AboutCover/>

      <AboutProfessionalCardContainer/>

      <Typography
        variant='h1'
        sx={{
            mt: {
              xs: '5rem',
              md: '7rem',
            },
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