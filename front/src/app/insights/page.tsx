import type { Metadata } from 'next'
import { insightTitleData } from '@/mock/insights.mock'
import { insightsData } from '@/mock/insightCardCover'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import InsightCardCover from '@/components/insights/InsightsCardCover'
import InsightsArticle from '@/components/insights/InsightsArticle'
import InsightsPublications from '@/components/insights/InsightsPublications'
import TitleReusable from '@/components/ui/TitleReusableComponent'

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

const Insights = () => {
  return (
    <Box
      sx={{
        pt: 0.125,
        backgroundColor: 'primary.main',
        position: 'relative',
      }}
    >
      
      <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: {
          customMobileInsight: '84rem',    
          mobileMid: '82rem',             
          customTabletInsight: '78rem',    
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
        <Grid container 
        spacing={0}
        >
          {insightsData.map((insight) => (
            <Grid size={{ xs: 12, md: 6 }} key={insight.id}>
              <InsightCardCover insight={insight} />
            </Grid>
          ))}
        </Grid>
        
        <Typography
          lineHeight={3}
          variant='h1'
          color='text.primary'
          sx={{ 
            fontSize: {
              xs: '1.87rem',
              md: '2.17rem',
              lg: '2.87rem'
            },
            fontWeight: 400,
          }}
        >
          Articles
        </Typography>
        <InsightsArticle/>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Link href="/casestudy" style={{ textDecoration: 'none' }}>
            <Button
              variant="redCahovaBorder"
            >
              All Articles
            </Button>
          </Link>
        </Box>

        <Typography
          lineHeight={3}
          variant='h1'
          color='text.primary'
          sx={{ 
            fontSize: {
              xs: '1.87rem',
              md: '2.17rem',
              lg: '2.87rem'
            },
            fontWeight: 400
          }}
        >
          Publications
        </Typography>
        <InsightsPublications/>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Link href="/casestudy" style={{ textDecoration: 'none' }}>
            <Button
              variant="redCahovaBorder"
            >
              All Articles
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Insights;