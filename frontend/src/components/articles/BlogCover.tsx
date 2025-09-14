// components/articles/BlogCover.tsx
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import CoverCaseStudy from "./CoverCaseStudy"
import { BlogCoverProps } from '@/types/article'

const BlogCover = ({ articlesData, publicationsData, category }: BlogCoverProps) => {
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