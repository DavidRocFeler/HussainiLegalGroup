'use client';

import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { NewsCard } from '@/types/caseStudy';
import { ArrowRightSvg } from '@/assets/icons/index'

const NewsCardCaseStudy = ({ newsItem }: { newsItem: NewsCard }) => {
  return (
    <Card 
      sx={{ 
        py: '2.5rem',
        overflow: 'hidden',
        boxShadow: 'none',
        borderTop: '1px solid rgba(168, 70, 63, 0.20)',
        backgroundColor: 'transparent',
      }}
    >
      <Grid 
        container 
        spacing={3}
        alignItems='flex-start'
        sx={{ 
          width: '100%',
          flexDirection: { xs: 'column-reverse', md: 'row' }
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <CardContent sx={{ p: 0, pr: { md: 2 } }}>
            <Typography 
              variant="h1" 
              sx={{ 
                color: '#64181C',
                fontSize: '0.875rem',
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 700,
                mb: 2
              }}
            >
              {newsItem.date}
            </Typography>
            
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 3,
                fontWeight: 400,
                color: '#131313',
                fontSize: { xs: '1.35rem', md: '2.1875rem', lg: '2.375rem' },
                lineHeight: { xs: '1.35rem', md: '2.1875rem', lg: '2.375rem' },
              }}
            >
              {newsItem.title}
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 2,
                mb: {
                  xs: '3rem',
                  md: '6rem'
                }
              }}
            >
              <Image 
                src={newsItem.author.logo} 
                alt={newsItem.author.name}
                width={32}
                height={32}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
              <Box>
                <Typography 
                  variant="h5" 
                  fontWeight={700}
                  sx={{ 
                    fontSize: '0.875rem'
                  }}
                >
                  {newsItem.author.name}
                </Typography>
                <Typography 
                  variant="h5" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    mt: '2px'
                  }}
                >
                  {newsItem.author.publishDate} • {newsItem.author.readTime}
                </Typography>
              </Box>
            </Box>
            
            <Link 
              href='/articles'
              // slug for future dynamic redirection
              // href={`/news/${newsItem.id}/${newsItem.slug}`}
              style={{ 
                textDecoration: 'none',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'fit-content',
                  fontFamily: 'Inter',
                  color: '#64181C',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  letterSpacing: '0.1em',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderRadius: '0.3215rem',
                  padding: '0.88rem 1.31rem',
                  border: 'solid 1px #64181C',
                  gap: '3rem',
                  '&:hover': {
                    textDecoration: 'none',
                    transform: 'scale(1.01)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
              >
                Read Case
                <ArrowRightSvg />
              </Box>
            </Link>
          </CardContent>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: {
                xs: '18.75rem',   
                md: '27.1875rem',  
                lg: '31.75rem'     
              },
              overflow: 'hidden',
              borderRadius: 2
            }}
          >
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NewsCardCaseStudy;