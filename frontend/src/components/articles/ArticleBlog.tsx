import { Box } from '@mui/material'
import React from 'react'
import ArticleTextItem from './ArticleTextItem'
import { articleBlogData } from '@/mock/articleBlog.mock'
import ArticleCover from './ArticleCover'

const ArticleBlog = () => {
  return (
    <Box>
      <ArticleCover/>
      <ArticleTextItem
      {...articleBlogData[0]} 
      />
    </Box>
  )
}

export default ArticleBlog