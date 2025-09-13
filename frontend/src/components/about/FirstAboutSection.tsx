'use client'
import { Box } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import rectanguleAbout from '@/assets/RectangleAbout.jpg'
// import { aboutContentContainer } from '@/mock/about.mock'
import ReusableContainers from '@/components/ui/ReusableContainers'
import CardAbout from '@/components/about/CardAbout'
import { cardAboutData } from '@/mock/cardAbout.mock'
import OurEthos from '@/components/about/OurEthos'
import { useSanityData } from '@/hook/useSanityData'
import { HeroTextContent } from '@/types/home'
import { getAboutHeroTexts } from '@/server/home.server'

export const FirstAboutSection = () => {
const { data: heroAboutContent, loading } = useSanityData<HeroTextContent>(getAboutHeroTexts);

  return (
    <Box>
        <ReusableContainers
            imageUrl={rectanguleAbout}
            imageAlt="About Hussaini Legal Group"
            content={heroAboutContent}
            href="#read-more"
            loading={loading}
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
    </Box>
  )
}
