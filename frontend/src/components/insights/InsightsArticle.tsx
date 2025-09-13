'use client'

import { Box, Grid } from "@mui/material"
import InsightsCardItem from "./InsightCardItem"
import { ArticleHighlightItem } from "@/types/article"
import { useSanityData } from "@/hook/useSanityData"
import Skeleton from "@mui/material/Skeleton"
import { getArticles } from "@/server/blog.server"

const InsightsArticle: React.FC = () => {
  const { data: articles, loading, error } = useSanityData<ArticleHighlightItem>(getArticles)

  const articlesArray = Array.isArray(articles) ? articles : []

  const lastThreeInsights = articlesArray.slice(0, 3)

  if (loading) {
    return (
      <Grid container spacing={{ xs: 3, md: 1 }}>
        {[1,2,3].map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item}>
            <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>
    )
  }

  if (error) {
    console.error("Error loading articles:", error)
    return null
  }

  return (
    <Box>
      <Grid container spacing={{ xs: 3, md: 1 }}>
        {lastThreeInsights.map((insight) => (
          <Grid size={{ xs: 12, md: 4 }} key={insight.id || insight.id}>
            <InsightsCardItem insight={insight} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default InsightsArticle
