import { Box, Button, Typography } from '@mui/material'
import InsightCover from './InsightsCover'
import InsightsArticle from './InsightsArticle'
import InsightsPublications from './InsightsPublications'
import Link from 'next/link'

export const InsightBody = () => {
  return (
    <Box>
        <InsightCover/>

        <Typography
          lineHeight={2}
          mt={12}
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
        <InsightsArticle/>

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
        <InsightsPublications/>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Link href="/insights/publications" style={{ textDecoration: 'none' }}>
            <Button variant="redCahovaBorder">
              All Publications
            </Button>
          </Link>
        </Box>
    </Box>
  )
}
