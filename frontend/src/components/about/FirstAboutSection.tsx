// components/about/FirstAboutSection.tsx
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import rectanguleAbout from '@/assets/RectangleAbout.jpg'
import ReusableContainers from '@/components/ui/ReusableContainers'
import CardAbout from '@/components/about/CardAbout'
import { cardAboutData } from '@/mock/cardAbout.mock'
import OurEthos from '@/components/about/OurEthos'
import { FirstAboutSectionProps } from '@/types/about'

export const FirstAboutSection = ({ heroAboutContent }: FirstAboutSectionProps) => {
  const loading = false;

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