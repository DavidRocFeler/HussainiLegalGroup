import { articleHighlightsData } from '@/mock/articleHighLights.mock';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArticleHighlightCard from './ArticleHighLightCard';

const ArticleHighlightsSection = () => {
  return (
    <Box sx={{ width: '100%', marginTop: 4 }}>
      <Grid container spacing={3}>
        {articleHighlightsData.map((article) => (
          <Grid size={{ xs: 12, md: 6 }} key={article.id}>
            <ArticleHighlightCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleHighlightsSection;