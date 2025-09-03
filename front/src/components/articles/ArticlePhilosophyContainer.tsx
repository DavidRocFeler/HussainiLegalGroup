import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArticleTextItem from '@/components/articles/ArticleTextItem';
import { articlePhilosophyData } from '@/mock/articlePhilosophy.mock';

const ArticlePhilosophyContainer = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={5}>
        {articlePhilosophyData.map((article) => (
          <Grid size={{ xs: 12, md: 6 }} key={article.id}>
            <ArticleTextItem article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticlePhilosophyContainer;