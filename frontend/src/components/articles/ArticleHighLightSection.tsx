import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArticleHighlightCard from './ArticleHighLightCard';
import { ArticleHighlightItem } from '@/types/article';

interface ArticleHighlightsSectionProps {
  articles: ArticleHighlightItem[];
}

const ArticleHighlightsSection = ({ articles }: ArticleHighlightsSectionProps) => {
  // Handle empty state
  if (!articles || articles.length === 0) {
    return (
      <Box sx={{ 
        width: '100%',
        marginTop: { xs: 4, sm: 8 },
        display: 'flex',
        justifyContent: 'center',
        p: 4
      }}>
        <Typography>No related content available</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ 
        width: '100%',
        marginTop: {
          xs: 4,
          sm: 8
        }
      }}
    >
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid size={{ xs: 12, md: 6 }} key={article.id}>
            <ArticleHighlightCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleHighlightsSection;


// import { articleHighlightsData } from '@/mock/articleHighLights.mock';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import ArticleHighlightCard from './ArticleHighLightCard';

// const ArticleHighlightsSection = () => {
//   return (
//     <Box sx={{ 
//         width: '100%',
//         marginTop: {
//           xs: 4,
//           sm: 8
//         }
//       }}
//       >
//       <Grid container spacing={3}>
//         {articleHighlightsData.map((article) => (
//           <Grid size={{ xs: 12, md: 6 }} key={article.id}>
//             <ArticleHighlightCard article={article} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ArticleHighlightsSection;