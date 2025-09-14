import type { Metadata } from 'next'
import { insightTitleData } from '@/mock/insights.mock'
import Box from '@mui/material/Box'
import TitleReusable from '@/components/ui/TitleReusableComponent'
import { InsightBody } from '@/components/insights/InsightBody'
import { getArticles, getPublications } from '@/queries/blogQuery'
import InsightCoverResponsive from '@/components/insights/InsightCoverResponsive'

export const metadata: Metadata = {
  title: 'Legal Insights & Publications - Hussaini Legal Group',
  description: 'Expert legal insights, articles, and publications from Hussaini Legal Group. Stay informed about corporate law, international arbitration, and legal industry developments.',
  keywords: ['legal insights', 'law articles', 'legal publications', 'law firm blog', 'legal updates'],
  openGraph: {
    title: 'Legal Insights - Hussaini Legal Group',
    description: 'Expert legal analysis and publications from international law experts',
    type: 'website',
  }
}

export const revalidate = false;

const Insights = async () => {
  const articlesData = await getArticles();
  const publicationsData = await getPublications();
  const limitedArticles = articlesData.slice(0, 6);
  const limitedPublications = publicationsData.slice(0, 6);

  return (
    <>
      <Box
      sx={{
        display: {
          xs: 'block',
          sm: 'none'
        }
      }}
      >
        <InsightCoverResponsive/>
      </Box>
      <Box
        sx={{
          pt: 0.125,
          backgroundColor: 'primary.main',
          position: 'relative',
          display: {
            xs: 'none',
            sm: 'block'
          }
        }}
      >
        
        <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: {
            sm: '75rem', 
            md: '51rem',                     
          },
          backgroundColor: 'grey.900',
          zIndex: 0,
        }}
        />
      
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            pt: {
              xs: 13,
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
          <Box 
          sx={{
            mb: 2
          }}
          >
            <Box
            mb={{
                xs: 4,
                sm: 7
              }}
            >
              <TitleReusable data={insightTitleData} 
              titleVariant='h13'
              descriptionVariant="h5"/>
            </Box>

          </Box>
          
          <InsightBody
            articlesData={limitedArticles}
            publicationsData={limitedPublications}
          />
        </Box>
      </Box>
    </>
  )
}

export default Insights;