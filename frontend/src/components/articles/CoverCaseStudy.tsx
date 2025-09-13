'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Image from 'next/image';
import { CoverCaseStudyProps } from '@/types/article';
import { transformDate } from '@/utils/dateFormatters';
import IconType from '@/assets/Border.png'
import TitleReusable from '../ui/TitleReusableComponent';
import { truncateTextDescription } from '@/utils/truncate';

const CoverCaseStudy = ({ articles }: CoverCaseStudyProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const caseStudy = articles[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!articles || articles.length === 0) {
    return <Box>No articles available</Box>;
  }

  const currentArticleArray = [caseStudy];

  return (
    <Box>
      <Box sx={{ mb: { xs: 2, md: 4 } }}>
        <TitleReusable
          data={currentArticleArray}
          titleVariant='h12'
          descriptionVariant="h5"
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          mt: { xs: 4, md: 8 },
          mb: { xs: 2, md: 12 },
        }}
      >
        <Box sx={{ 
          position: 'relative', 
          width: '100%',
          height: { xs: '300px', sm: '400px' }, 
          overflow: 'hidden',
          borderRadius: '10px'
        }}>
          <Fade in={true} timeout={500} key={currentIndex}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Image
                src={caseStudy.picture}
                alt="CoverPicture"
                fill
                style={{
                  objectFit: 'cover',
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
              },
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
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        <Card
          sx={{
            maxWidth: 700,
            mx: 'auto',
            mt: { xs: 2, md: -8 },
            mb: { xs: 2, md: 4 },
            position: 'relative',
            zIndex: 1,
            bgcolor: 'brand.whiteText',
            borderRadius: '20px',
            boxShadow: '0px 20px 25px -5px rgba(16, 24, 40, 0.10)',
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography
              variant="h5"
              mb={3}
              sx={{
                color: 'text.secondary',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              {caseStudy.label}
            </Typography>

            <Typography
              variant="h10"
              lineHeight={1.2}
              sx={{
                fontSize: '1.75rem',
                color: 'brand.blackButton',
                fontWeight: 700,
              }}
            >
              {caseStudy.subtitleFirst}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                mt: 3,
                fontSize: '1.125rem',
                color: '#404040',
                fontWeight: 500,
                lineHeight: '1.175',
              }}
            >
              {truncateTextDescription(caseStudy.descripFirstFirst)}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image
                src={IconType} 
                alt='Icon Type'
                width={32}
                height={32}
                style={{ objectFit: 'cover' }}
              />
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ fontSize: '0.875rem' }}
                >
                  Hussaini Legal Group
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    mt: 0.25,
                  }}
                >
                  {transformDate(caseStudy.date)} • {caseStudy.readtime}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CoverCaseStudy;