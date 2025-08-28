// src/components/ui/BackgroundCover.tsx
'use client'
import Image from 'next/image'
import { Box } from '@mui/material'
import backgroundImage from '@/assets/BackgroundCover.jpg'

interface BackgroundCoverProps {
  children: React.ReactNode;
}

const BackgroundCover: React.FC<BackgroundCoverProps> = ({ children }) => {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        minHeight: '100vh', 
        width: '100%' 
      }}
    >
      <Image
        src={backgroundImage}
        alt="Background Cover"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
        }}
        priority
        quality={100}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  )
}

export default BackgroundCover