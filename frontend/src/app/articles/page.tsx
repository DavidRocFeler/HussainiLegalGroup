import type { Metadata } from 'next'
import ArticleHighlightsSection from '@/components/articles/ArticleHighLightSection'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArticleBlog from '@/components/articles/ArticleBlog'

export const metadata: Metadata = {
  title: 'Legal Articles & Insights - Hussaini Legal Group',
  description: 'Expert legal articles and insights from Hussaini Legal Group. Stay updated on corporate law, arbitration, international transactions, and legal best practices.',
  keywords: ['legal articles', 'law insights', 'legal updates', 'corporate law', 'arbitration', 'legal expertise'],
  openGraph: {
    title: 'Legal Articles & Insights - Hussaini Legal Group',
    description: 'Expert legal analysis and insights from international law experts',
    type: 'website',
  }
}

const Articles = () => {
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
        <Box
        sx={{
          borderBottom: '1px solid rgba(168, 70, 63, 0.20)',
          pb: {
            xs: 6,
            md: 20,
          },
          mb: {
            xs: 6,
            md: 10
          }
        }}
        >
          <ArticleBlog/>
        </Box>

        <Typography
        variant='h10'
        color='error.dark'
        sx={{
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '1.53806rem',
          lineHeight: '1.3rem',
          letterSpacing: '-0.01rem',
          alignSelf: 'stretch'
        }}
        >
          Related Case
        </Typography>
        <ArticleHighlightsSection/>
    </Box>
  )
}

export default Articles