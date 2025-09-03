import ArticleCover from '@/components/articles/ArticleCover'
import ArticleHighlightsSection from '@/components/articles/ArticleHighLightSection'
import ArticlePhilosophyContainer from '@/components/articles/ArticlePhilosophyContainer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const Articles = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '10rem 1.5rem 3rem 1.5rem',
          md: '11rem 4.5rem 8em 4.8rem',
        },
      }}
    >
        <Box
        sx={{
          borderBottom: '1px solid rgba(168, 70, 63, 0.20)',
          pb: {
            xs: '3rem',
            md: '10rem',
          },
          mb: {
            xs: '3rem',
            md: '5rem'
          }
        }}
        >
          <ArticleCover/>
          <ArticlePhilosophyContainer/>
        </Box>

        <Typography
        variant='h1'
        sx={{
          color: '#64181C',
          fontSize: '1.6rem',
          fontWeight: 700
        }}
        >
          Related Case
        </Typography>
        <ArticleHighlightsSection/>
    </Box>
  )
}

export default Articles