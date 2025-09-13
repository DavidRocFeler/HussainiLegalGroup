'use client'
import ReusableContainers from '@/components/ui/ReusableContainers'
import Box from '@mui/material/Box'
import rectanguleCareers from '@/assets/RectanguleCareers.jpg'
// import { careersContentContainer } from '@/mock/careersContentContainer.mock'
import { useSanityData } from '@/hook/useSanityData'
import { getCareersHeroTexts } from '@/server/home.server'
import { HeroTextContent } from '@/types/home'

const BodyCareers = () => {
  const { data: heroCareersContent, loading } = useSanityData<HeroTextContent>(getCareersHeroTexts);

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
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
        imageUrl={rectanguleCareers}
        imageAlt="Legal expertise and services"
        content={heroCareersContent}
        loading={loading}
      />
    </Box>
  )
}

export default BodyCareers;