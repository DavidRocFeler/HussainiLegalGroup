import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { ArticleHighlightCardProps } from '@/types/article';

const ArticleHighlightCard = ({ article }: ArticleHighlightCardProps) => {
  return (
    <Box
      sx={{
        padding: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: {
          xs: '1px solid rgba(168, 70, 63, 0.20)',
          md: '0px'
        }
      }}
    >
      <Box>
        <Typography
           variant="h1" 
           sx={{ 
             mb: 3,
             fontWeight: {
              xs: 700,
              md: 400
             },
             height: {
              md: '13rem',
              lg: '10rem',
             },
             color: '#131313',
             fontSize: { xs: '1.25rem', md: '2.1875rem', lg: '2.375rem' },
             lineHeight: { xs: '1.50rem', md: '2.1875rem', lg: '2.375rem' },
           }}
        >
          {article.title}
        </Typography>
        {article.date && (
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
            {article.date}
          </Typography>
        )}
      </Box>
      
      <Link 
        href={article.buttonLink} 
        style={{ 
          textDecoration: 'none',
        }}
      >
        <Box
          sx={{
            mb: {
              xs: '2rem',
              md: '0rem'
            },
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
            '&:hover': {
              transform: 'scale(1.01)',
              transition: 'transform 0.2s ease-in-out',
            }
          }}
        >
          {article.buttonText}

        </Box>
      </Link>
    </Box>
  );
};

export default ArticleHighlightCard;