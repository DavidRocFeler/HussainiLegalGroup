import { Grid } from '@mui/material'
import InsightCard from './InsightsCard'
import { ArticleHighlightItem } from '@/types/article'

interface InsightCoverProps {
  articlesData: ArticleHighlightItem[];
  publicationsData: ArticleHighlightItem[];
}

const InsightCover: React.FC<InsightCoverProps> = ({ articlesData, publicationsData }) => {
  const articlesArray = Array.isArray(articlesData) ? articlesData : []
  const publicationsArray = Array.isArray(publicationsData) ? publicationsData : []

  const lastArticle = articlesArray.length > 0 ? articlesArray[0] : null
  const lastPublication = publicationsArray.length > 0 ? publicationsArray[0] : null

  const insights = [lastArticle, lastPublication].filter(
    (insight): insight is ArticleHighlightItem => insight !== null && insight !== undefined
  )

  if (insights.length === 0) return null

  return (
    <Grid container spacing={{ xs: 3, md: 0 }}>
      {insights.map((insight, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={insight.id || `insight-${index}`}>
          <InsightCard insight={insight} />
        </Grid>
      ))}
    </Grid>
  )
}

export default InsightCover