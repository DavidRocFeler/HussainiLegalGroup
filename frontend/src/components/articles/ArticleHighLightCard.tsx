import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { ArticleHighlightCardProps } from '@/types/article';
import { Button } from '@mui/material';
import { transformDateText } from '@/utils/dateFormatters';

const ArticleHighlightCard = ({ article }: ArticleHighlightCardProps) => {
  return (
    <Box
      sx={{
        pb: 3,
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
           variant="h10" 
           color='text.primary'
           sx={{ 
             fontWeight: {
              xs: 700,
              md: 400
             },
             height: {
              md: '13rem',
              lg: '10rem',
             },
             fontSize: { xs: '1.25rem', md: '2.1875rem', lg: '2.375rem' },
             lineHeight: { xs: '1.50rem', md: '2.1875rem', lg: '2.375rem' },
           }}
        >
          {article.title}
        </Typography>
      </Box>

      <Box>
      {article.date && (
          <Typography
            mt={4}
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
            {transformDateText(article.date)}
          </Typography>
      )}

      <Link 
        href={article.slug} 
        style={{ 
          textDecoration: 'none',
        }}
      >
        <Button
        disableRipple={true}
        variant='buttonReadCase'
        >
          READ CASE
        </Button>
      </Link>
      </Box>
    </Box>
  );
};

export default ArticleHighlightCard;