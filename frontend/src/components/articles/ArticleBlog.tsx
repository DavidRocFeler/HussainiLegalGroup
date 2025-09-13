'use client'

import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import ArticleTextItem from './ArticleTextItem'
import ArticleCover from './ArticleCover'
import { ArticleHighlightItem } from '@/types/article'
import { getArticleBySlug } from '@/server/blog.server'
import { useSanityData } from '@/hook/useSanityData'

const ArticleBlog = () => {
  const params = useParams()
  const slug = params?.slug as string
  const category = params?.category as string
  
  // Create a fetch function that gets the specific article
  const fetchFunction = useMemo(() => {
    return () => getArticleBySlug(slug, category).then(article => article ? [article] : [])
  }, [slug, category])

  const { data: articles, loading, error } = useSanityData<ArticleHighlightItem>(fetchFunction)
  const currentArticle = articles[0]

  // Handle loading state
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography>Loading article...</Typography>
      </Box>
    )
  }

  // Handle error state
  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography color="error">Error loading article: {error.message}</Typography>
      </Box>
    )
  }

  // Handle article not found
  if (!currentArticle) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography>Article not found</Typography>
      </Box>
    )
  }

  return (
    <Box>
      <ArticleCover articles={[currentArticle]} />
      <ArticleTextItem {...currentArticle} />
    </Box>
  )
}

export default ArticleBlog