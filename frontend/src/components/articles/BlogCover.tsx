'use client'

import { Box, Typography } from "@mui/material"
import { useParams } from 'next/navigation'
import CoverCaseStudy from "./CoverCaseStudy"
import { ArticleHighlightItem } from '@/types/article'
import { useMemo } from 'react'
import { useSanityData } from "@/hook/useSanityData"
import { getArticles, getPublications } from "@/server/blog.server"

const BlogArticle = () => {
  const params = useParams()
  const slug = params?.slug as string
  
  const fetchFunction = useMemo(() => {
    switch (slug) {
      case 'articles':
        return getArticles
      case 'publications':
        return getPublications
      default:
        return getArticles
    }
  }, [slug])

  const { data: articles, loading, error } = useSanityData<ArticleHighlightItem>(fetchFunction)

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography color="error">Error loading data: {error.message}</Typography>
      </Box>
    )
  }

  if (!articles || articles.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography>No content available</Typography>
      </Box>
    )
  }

  return (
    <Box>
      <CoverCaseStudy articles={articles} />
    </Box>
  )
}

export default BlogArticle