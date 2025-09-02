import Image from 'next/image';
import { Box, Typography, Card } from '@mui/material';
import { coverArticlesData } from '@/mock/coverArticle.mock';

const ArticleCover = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {coverArticlesData.map((article) => (
        <Card
          key={article.id}
          sx={{
            borderRadius: 0,
            boxShadow: 'none',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}
        >
         <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: {
                xs: '250px',
                md: '400px',
              },
              overflow: 'hidden',
            }}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              style={{ objectFit: 'cover', borderRadius: '0.875rem' }}
            />
          </Box>

          <Box
            sx={{
              mt: '1rem',
              mb: '4rem'
            }}
          >
            <Typography
              variant="h1"
              textTransform={'uppercase'}
              sx={{
                color: '#5E4740',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: 1,
                display: 'block',
                marginBottom: 1,
              }}
            >
              {article.category}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                color: 'black',
                fontSize: {
                  xs: '2.14rem',
                  md: '2.55rem',
                  lg: '2.70rem'
                },
                lineHeight: '3rem',
              }}
            >
              {article.title}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default ArticleCover;