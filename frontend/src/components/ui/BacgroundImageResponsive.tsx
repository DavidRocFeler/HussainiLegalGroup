import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import BackgroundCover from '@/assets/BackgroundCover.jpg'
import BackgroundCoverTablet from '@/assets/BackgroundCoverTablet.jpg'
import BackgroundCoverMobile from '@/assets/BackgroundCoverMobile.png'

const BackgroundImageResponsive = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: {
            xs: 'none',   
            sm: 'none',  
            md: 'block'  
          }
        }}
      >
        <Image
          src={BackgroundCover}
          alt="Background Desktop"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: {
            xs: 'none',  
            sm: 'block',
            md: 'none'
          }
        }}
      >
        <Image
          src={BackgroundCoverTablet}
          alt="Background Tablet"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: {
            xs: 'block', 
            sm: 'none',  
            md: 'none'   
          }
        }}
      >
        <Image
          src={BackgroundCoverMobile}
          alt="Background Mobile"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
      </Box>
    </Box>
  )
}

export default BackgroundImageResponsive