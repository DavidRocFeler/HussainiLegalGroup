import HomePage from '@/pages/HomePage'
import { Box } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box 
    sx={{ 
      margin: 0, 
      padding: 0, 
      width: '100%' 
      }}>
      <HomePage/>
    </Box>
  )
}

export default Home 