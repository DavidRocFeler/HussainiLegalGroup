// components/articles/BlogCover.tsx
import { Box, Typography } from "@mui/material"
import CoverCaseStudy from "./CoverCaseStudy"
import { ArticleHighlightItem } from '@/types/article'

interface BlogCoverProps {
  articlesData: ArticleHighlightItem[];
  publicationsData: ArticleHighlightItem[];
  category: string;
}

const BlogCover = ({ articlesData, publicationsData, category }: BlogCoverProps) => {
  // Usar los datos correctos según la categoría
  const dataToUse = category === 'articles' ? articlesData : publicationsData

  if (!dataToUse || dataToUse.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography>No content available</Typography>
      </Box>
    )
  }

  return (
    <Box>
      <CoverCaseStudy articles={dataToUse} />
    </Box>
  )
}

export default BlogCover