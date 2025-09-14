// components/articles/ArticleBlog.tsx
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArticleTextItem from './ArticleTextItem'
import ArticleCover from './ArticleCover'
import { ArticleBlogProps } from '@/types/article'

const ArticleBlog = ({ currentArticle }: ArticleBlogProps) => {
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