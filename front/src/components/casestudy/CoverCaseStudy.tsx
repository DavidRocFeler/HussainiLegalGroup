'use client';

import { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Fade } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import { caseStudiesArrayCoverContainer } from '@/mock/caseStudyCoverContainer.mock';

const CoverCaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const caseStudy = caseStudiesArrayCoverContainer[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudiesArrayCoverContainer.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === caseStudiesArrayCoverContainer.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ position: 'relative', mt: '4rem', mb: '6rem' }}>
      <Box sx={{ position: 'relative', width: '100%', mt: 4 }}>
        <Fade in={true} timeout={500} key={currentIndex}>
          <Box>
            <Image
              src={caseStudy.coverImage}
              alt='CoverPicture'
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </Box>
        </Fade>
        
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }
          }}
        >
          <ChevronLeft />
        </IconButton>
        
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      <Card sx={{ 
        maxWidth: 700, 
        mx: 'auto', 
        my: 4,
        mt: -8,
        position: 'relative',
        zIndex: 1,
        bgcolor: 'white',
        borderRadius: '20px',
        boxShadow: '0px 20px 25px -5px rgba(16, 24, 40, 0.10)'
      }}>
        <CardContent sx={{ 
          p: '1rem 1.5rem 1rem 1.5rem',  
          }}
          >
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.75rem',
              fontWeight: 600,
              mb: '1rem'
            }}
          >
            {caseStudy.category}
          </Typography>
          
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '1.75rem',
              color: 'black',
              mt: 1, 
              mb: 2, 
              fontWeight: 700 
            }}
          >
            {caseStudy.title}
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3, 
              fontSize: '1.125rem',
              color: '#404040',
              fontWeight: 500,
              lineHeight: '1.175'
            }}
          >
            {caseStudy.description}
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Image 
              src={caseStudy.client.logo} 
              alt={caseStudy.client.name}
              width={48}
              height={48}
              style={{
                objectFit: 'cover',
              }}
            />
            <Box>
              <Typography variant="h5" fontWeight={700}
              sx={{
                fontSize: '0.875rem'
              }}
              >
                {caseStudy.client.name}
              </Typography>
              <Typography variant="h5" color="text.secondary"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 500,
                mt: '2px'
              }}
              >
                {caseStudy.client.date} • {caseStudy.client.readTime}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CoverCaseStudy;