import InsightCover from '@/components/insights/InsightsCover'
import TitleReusable from '@/components/ui/TitleReusableComponent'
import { insightTitleData } from '@/mock/insights.mock'
import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import { getArticles, getPublications } from '@/queries/blogQuery'
import Link from 'next/link'
import InsightsArticle from '@/components/insights/InsightsArticle'
import InsightsPublications from '@/components/insights/InsightsPublications'

const InsightCoverResponsive = async () => {
  const articlesData = await getArticles();
  const publicationsData = await getPublications();

  return (
    <Box
    sx={{
      bgcolor: 'primary.main'
    }}
    >
      <Box 
        sx={{ 
          pt: 13,
          px: 3,
          pb: 3,
          bgcolor: 'brand.red'
        }}
        >
        <Box
          mb={5}
          >
          <TitleReusable data={insightTitleData} 
            titleVariant='h13'
            descriptionVariant="h5"
            />
        </Box>
        <InsightCover articlesData={articlesData} publicationsData={publicationsData} />
      </Box>

      <Box 
      mx={3}
      pb={6}
      > 
        <Typography
          lineHeight={2}
          mt={6}
          mb={3}
          variant='h1'
          color='text.primary'
          sx={{ 
            fontSize: { xs: '1.87rem', md: '2.17rem', lg: '2.87rem' },
            fontWeight: 400,
          }}
        >
          Articles
        </Typography>
        <InsightsArticle articlesData={articlesData} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, mb: { xs: 5, sm: 15 } }}>
          <Link href="/insights/articles" style={{ textDecoration: 'none' }}>
            <Button variant="redCahovaBorder">
              All Articles
            </Button>
          </Link>
        </Box>

        <Typography
          mb={2}
          lineHeight={3}
          variant='h1'
          color='text.primary'
          sx={{ 
            fontSize: { xs: '1.87rem', md: '2.17rem', lg: '2.87rem' },
            fontWeight: 400,
          }}
        >
          Publications
        </Typography>
        <InsightsPublications publicationsData={publicationsData} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Link href="/insights/publications" style={{ textDecoration: 'none' }}>
            <Button variant="redCahovaBorder">
              All Publications
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default InsightCoverResponsive;