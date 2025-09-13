'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightSvg } from '@/assets/icons/index'
import Button from '@mui/material/Button';
import { ArticleHighlightItem } from '@/types/article';
import IconType from '@/assets/Border.png'
import { transformDate } from '@/utils/dateFormatters';

const NewsCardCaseStudy = ({ newsItem }: { newsItem: ArticleHighlightItem }) => {
  const formattedDate = transformDate(newsItem.date);
  
  return (
    <Card 
      sx={{ 
        py: 5,
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
              variant="h10" 
              color='error.dark'
              sx={{ 
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
                color: 'text.primary',
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
                  xs: 6,
                  md: 12
                }
              }}
            >
              <Image 
                src={IconType} 
                alt='Icon type'
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
                  Hussaini Legal Group
                </Typography>
                <Typography 
                  variant="h5" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    mt: 0.25
                  }}
                >
                  {formattedDate} • {newsItem.readtime}
                </Typography>
              </Box>
            </Box>
            
            <Link 
              href='/articles'
              style={{ 
                textDecoration: 'none',
              }}
            >
              <Button
                disableRipple={true}
                variant='buttonReadCase'
              >
                Read Case
                <ArrowRightSvg />
              </Button>
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
              src={newsItem.picture}
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