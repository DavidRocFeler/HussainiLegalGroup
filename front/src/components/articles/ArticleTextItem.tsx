import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
        letterSpacing={0.4}
        sx={{
          fontWeight: 400,
          marginBottom: 3,
          color: 'text.primary',
          fontSize: {
            xs: '2.8125rem',
            md: '3.125rem',
            lg: '3.375rem',
          },
          lineHeight: {
            md: '3.8rem',
            lg: '4rem',
          }
        }}
      >
        {article.title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: 'brand.greyText',
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