import { Box, Typography } from '@mui/material'
import React from 'react'
import CoverCaseStudy from '@/components/casestudy/CoverCaseStudy'
import NewsCardCaseStudy from '@/components/casestudy/NewsCard'
import { newsCardData } from '@/mock/newCard.mock'
import { caseStudiesTitle } from '@/mock/caseStudie.mock'
import TitleReusable from '@/components/ui/TitleReusableComponent'

const CaseStudyPage = () => {
  return (
    <Box 
    sx={{
        backgroundColor: 'primary.main',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '10rem 1.5rem 3rem 1.5rem',
          md: '13rem 4.5rem 8em 4.8rem',
        },
      }}
    >
        <Typography 
        sx={{
            color: 'primary.text',
            fontFamily: 'Roboto',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '1.5rem',
            letterSpacing: '-0.01rem'
          }}
        >
            Our Blog
        </Typography>
        <TitleReusable
        data={caseStudiesTitle}
        />

        <CoverCaseStudy/>

        <Box sx={{ mt: 4 }}>
        {newsCardData.map((newsItem) => (
          <NewsCardCaseStudy key={newsItem.id} newsItem={newsItem} />
        ))}
      </Box>
    </Box>
  )
}

export default CaseStudyPage