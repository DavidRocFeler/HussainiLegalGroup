import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import InsightsCardItem from "./InsightCardItem"
import { InsightsArticleProps } from "@/types/article"

const InsightsArticle = ({ articlesData }: InsightsArticleProps) => {
  const articlesArray = Array.isArray(articlesData) ? articlesData : []

  const lastThreeInsights = articlesArray.slice(0, 3)

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