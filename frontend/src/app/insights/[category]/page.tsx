'use client'

import { useParams } from 'next/navigation'
import { Box, Typography } from '@mui/material'
import NewsCardCaseStudy from '@/components/articles/NewsCard'
import { useSanityData } from '@/hook/useSanityData'
import { getArticles, getPublications } from '@/server/blog.server'
import { ArticleHighlightItem } from '@/types/article'
import BlogCover from '@/components/articles/BlogCover'

const InsightsSlugPage = () => {
  const params = useParams()
  const { category } = params

  const fetchData = category === 'articles' ? getArticles : getPublications
  
  const { data: items, loading, error } = useSanityData<ArticleHighlightItem>(fetchData)
  
  const itemsArray = Array.isArray(items) ? items : []

  if (loading) {
    return (
      <Box sx={{ pt: 10, textAlign: 'center' }}>
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  if (error) {
    return null
  }

  return (
    <Box 
      sx={{
        backgroundColor: 'primary.main',
        position: 'relative',
        maxHeight: 'fit-content',
        pt: { xs: 20, md: 22 },
        pr: { xs: 3, md: 9 },
        pb: { xs: 6, md: 12 },
        pl: { xs: 3, md: 9.6 },
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
          '&:hover': { color: 'brand.blackButton' },
        }}
      >
        Our Blog - {category} 
      </Typography>

      <BlogCover/>

      <Box sx={{ mt: 4 }}>
          {itemsArray.map((newsItem) => (
            <NewsCardCaseStudy key={newsItem.id} newsItem={newsItem} />
          ))}
      </Box>
    </Box>
  )
}

export default InsightsSlugPage