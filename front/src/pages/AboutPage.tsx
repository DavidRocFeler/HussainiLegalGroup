// AboutPage
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import rectanguleAbout from '@/assets/RectangleAbout.jpg'
import { aboutContentContainer } from '@/mock/about.mock'
import ReusableContainers from '@/components/ui/ReusableContainers'
import CardAbout from '@/components/about/CardAbout'
import { cardAboutData } from '@/mock/cardAbout.mock'
import OurEthos from '@/components/about/OurEthos'
import AboutCover from '@/components/about/AboutCover'
import AboutProfessionalCardContainer from '@/components/about/AboutProfessionalCardContainer'
import Timeline from '@/components/about/TimeLine'

const AboutPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '10rem 1.5rem 3rem 1.5rem',
          md: '11rem 4.5rem 8em 4.8rem',
        },
      }}
    >
      <ReusableContainers
        imageUrl={rectanguleAbout}
        imageAlt="About Hussaini Legal Group"
        content={aboutContentContainer}
        href="/about-details" 
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
            color: '#131313',
            fontSize: {
                xs: '2.4rem',
                md: '2.75rem'
            },
            fontWeight: 400,
            '@media (max-width:500px)': {
                fontSize: '1.85rem',
            },
        }}
        >
          Timeline
      </Typography>
      
      <Timeline/>
    </Box>
  )
}

export default AboutPage