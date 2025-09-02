import { Box, Typography } from '@mui/material';
import { ArticleTextItemProps } from '@/types/article';

const ArticleTextItem = ({ article }: ArticleTextItemProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 400,
          marginBottom: 3,
          color: '#131313',
          fontSize: {
            xs: '2.8125rem',
            md: '3.125rem',
            lg: '3.375rem',
          },
          lineHeight: {
            md: '3.15rem',
            lg: '3.785rem',
          }
        }}
      >
        {article.title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#666',
          fontWeight: 400,
          lineHeight: {
            xs: '1.5rem',
            md: '1.6875rem',
          },
          fontSize: {
            xs: '1rem',
            md: '1.125rem',
          },
          textAlign: 'start',
        }}
      >
        {article.content}
      </Typography>
    </Box>
  );
};

export default ArticleTextItem;