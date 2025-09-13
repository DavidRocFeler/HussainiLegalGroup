'use client'

import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import ArticleBlog from '@/components/articles/ArticleBlog'
import ArticleHighlightsSection from '@/components/articles/ArticleHighLightSection'
import { Box, Typography } from '@mui/material'
import { useSanityData } from '@/hook/useSanityData'
import { getArticles, getPublications } from '@/server/blog.server'
import { ArticleHighlightItem } from '@/types/article'

const Blog = () => {
  const params = useParams()
  const category = params?.category as string
  const currentSlug = params?.slug as string 
  
  const fetchFunction = useMemo(() => {
    switch (category) {
      case 'articles':
        return getArticles
      case 'publications':
        return getPublications
      default:
        return getArticles
    }
  }, [category])

  const { data: articles, loading, error } = useSanityData<ArticleHighlightItem>(fetchFunction)

  const relatedArticles = useMemo(() => {
    if (!articles) return []
    
    const filtered = articles.filter(article => article.slug !== currentSlug)
    
    return filtered.slice(0, 2)
  }, [articles, currentSlug])


  if (loading) {
    return (
      <Box sx={{ 
        backgroundColor: 'background.paper',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '50vh',
        p: 4 
      }}>
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ 
        backgroundColor: 'background.paper',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '50vh',
        p: 4 
      }}>
        <Typography color="error">Error loading content: {error.message}</Typography>
      </Box>
    )
  }

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
      
      <ArticleHighlightsSection articles={relatedArticles} />
    </Box>
  )
}

export default Blog