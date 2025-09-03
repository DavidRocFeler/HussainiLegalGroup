import ReusableContainers from '@/components/ui/ReusableContainers'
import Box from '@mui/material/Box'
import React from 'react'
import rectanguleCareers from '@/assets/RectanguleCareers.jpg'
import { careersContentContainer } from '@/mock/careersContentContainer.mock'

const BodyCareers = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EEE9DD',
        position: 'relative',
        maxHeight: 'fit-content',
        padding: {
          xs: '10rem 1.5rem 3rem 1.5rem',
          md: '11rem 4.5rem 6rem 4.8rem',
        },
      }}
    >
      <ReusableContainers
        imageUrl={rectanguleCareers}
        imageAlt="Legal expertise and services"
        content={careersContentContainer}
      />
    </Box>
  )
}

export default BodyCareers;