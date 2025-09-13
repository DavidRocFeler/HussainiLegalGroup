import type { Metadata } from 'next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CoverCaseStudy from '@/components/casestudy/CoverCaseStudy'
import NewsCardCaseStudy from '@/components/casestudy/NewsCard'
import { newsCardData } from '@/mock/newCard.mock'
import { caseStudiesTitle } from '@/mock/caseStudie.mock'
import TitleReusable from '@/components/ui/TitleReusableComponent'

export const metadata: Metadata = {
  title: 'Case Studies & Legal Success Stories - Hussaini Legal Group',
  description: 'Explore our successful case studies and legal victories. Hussaini Legal Group\'s expertise in corporate law, arbitration, and international transactions demonstrated through real-world results and client successes.',
  keywords: ['legal case studies', 'success stories', 'legal victories', 'corporate law cases', 'arbitration wins', 'international transactions'],
  openGraph: {
    title: 'Case Studies - Hussaini Legal Group',
    description: 'Real-world legal successes and case studies from our international law firm',
    type: 'website',
  }
}

const CaseStudy = () => {
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
        <Typography 
        mb={1}
        sx={{
            color: 'brand.blackButton',
            fontFamily: 'Roboto',
            fontSize: '1.1rem',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '1.5rem',
            letterSpacing: '-0.01rem',
            '&:hover': {
              color: 'brand.blackButton'
            },
          }}
        >
            Our Blog
        </Typography>

        <Box>   
          <TitleReusable
          data={caseStudiesTitle}
          titleVariant='h12'
          descriptionVariant="h5"
          />
        </Box>

        <CoverCaseStudy/>

        <Box sx={{ mt: 4 }}>
          {newsCardData.map((newsItem) => (
            <NewsCardCaseStudy key={newsItem.id} newsItem={newsItem} />
          ))}
        </Box>
    </Box>
  )
}

export default CaseStudy;