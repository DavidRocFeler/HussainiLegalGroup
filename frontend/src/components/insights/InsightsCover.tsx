'use client'

import { Grid } from '@mui/material'
import React, { useMemo, useEffect } from 'react'
import InsightCard from './InsightsCard'
import { getArticles, getPublications } from '@/server/blog.server'
import { ArticleHighlightItem } from '@/types/article'
import Skeleton from '@mui/material/Skeleton'
import { useSanityData } from '@/hook/useSanityData'

const InsightCover: React.FC = () => {
  const fetchArticles = useMemo(() => getArticles, [])
  const fetchPublications = useMemo(() => getPublications, [])

  const { data: articles, loading: loadingArticles, error: errorArticles } =
    useSanityData<ArticleHighlightItem>(fetchArticles)
  const { data: publications, loading: loadingPublications, error: errorPublications } =
    useSanityData<ArticleHighlightItem>(fetchPublications)

  const articlesArray = Array.isArray(articles) ? articles : []
  const publicationsArray = Array.isArray(publications) ? publications : []

  useEffect(() => {
    console.log('📚 Articles completos:', articlesArray)
    if (articlesArray.length > 0) {
      console.log('👉 Primer Article (más reciente):', articlesArray[0])
    }
  }, [articlesArray])

  useEffect(() => {
    console.log('📰 Publications completos:', publicationsArray)
    if (publicationsArray.length > 0) {
      console.log('👉 Primer Publication (más reciente):', publicationsArray[0])
    }
  }, [publicationsArray])

  const lastArticle = articlesArray.length > 0 ? articlesArray[0] : null
  const lastPublication = publicationsArray.length > 0 ? publicationsArray[0] : null

  const insights = [lastArticle, lastPublication].filter(
    (insight): insight is ArticleHighlightItem => insight !== null && insight !== undefined
  )

  if (loadingArticles || loadingPublications) {
    return (
      <Grid container spacing={{ xs: 3, md: 0 }}>
        {[1, 2].map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item}>
            <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>
    )
  }

  if (errorArticles || errorPublications) {
    console.error('❌ Error loading content:', errorArticles || errorPublications)
    return null
  }

  if (insights.length === 0) return null

  return (
    <Grid container spacing={{ xs: 3, md: 0 }}>
      {insights.map((insight, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={insight._id || insight.id || `insight-${index}`}>
          <InsightCard insight={insight} />
        </Grid>
      ))}
    </Grid>
  )
}

export default InsightCover
