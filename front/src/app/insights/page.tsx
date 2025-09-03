import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { insightTitleData } from '@/mock/insights.mock'
import InsightCardCover from '@/components/insights/InsightsCardCover'
import { insightsData } from '@/mock/insightCardCover'
import InsightsArticle from '@/components/insights/InsightsArticle'
import InsightsPublications from '@/components/insights/InsightsPublications'
import ButtonCustom from '@/components/ui/ButtomCustom'
import TitleReusable from '@/components/ui/TitleReusableComponent'

const Insights = () => {
  return (
    <Box
      sx={{
        pt: '1rem',
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
            xs: '75rem',
            md: '50rem'
          },
          backgroundColor: 'grey.900',
          zIndex: 0,
          '@media (max-width: 650px)': {
            height: '85rem', 
          },
          '@media (max-width: 474px)': {
            height: '88rem', 
          },
          '@media (max-width: 470px)': {
            height: '90rem', 
          },
          '@media (max-width: 370px)': {
            height: '94rem', 
          }
        }}
      />
      
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          padding: {
            xs: '7rem 1.5rem 3rem 1.5rem',
            md: '11rem 4.5rem 8em 4.8rem',
          },
        }}
      >
        <Box 
        sx={{
          mb: '2rem'
        }}
        >
          <TitleReusable data={insightTitleData} />
        </Box>
        <Grid container 
        spacing={{ xs: 0, md: 0 }}
        >
          {insightsData.map((insight) => (
            <Grid size={{ xs: 12, md: 6 }} key={insight.id}>
              <InsightCardCover insight={insight} />
            </Grid>
          ))}
        </Grid>
        
        <Typography
          variant='h1'
          sx={{ 
            mt: 6, mb: 3, 
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
            <ButtonCustom
              text="All Articles"
              variant="outlined"
              sx={{
                color: 'primary.main',
                bgcolor: 'grey.900',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: '#d4a574',
                  color: 'white',
                }
              }}
            />
          </Link>
        </Box>

        <Typography
          variant='h1'
          sx={{ 
            mt: 6, 
            mb: 3,
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
          <Link href="/publications" style={{ textDecoration: 'none' }}>
            <ButtonCustom
              text="All Publications"
              variant="outlined"
              sx={{
                color: 'primary.main',
                bgcolor: 'grey.900',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: '#d4a574',
                  color: 'white',
                }
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Insights;