import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ArticleHighlightItem } from '@/types/article';

const ArticleTextItem = ({ 
  subtitleFirst, 
  subtitleSecond,
  descripFirstFirst, 
  descripSecondFirst, 
  descripThirdFirst, 
  descripFirstSecond, 
  descripSecondSecond,
  descripThirdSecond
}: ArticleHighlightItem) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={5}>
        {/* Columna Izquierda */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ backgroundColor: 'transparent' }}>
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
              {subtitleFirst}
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
                mb: 2
              }}
            >
              {descripFirstFirst}
            </Typography>
            
            {descripSecondFirst && (
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
                  mb: 2
                }}
              >
                {descripSecondFirst}
              </Typography>
            )}
            
            {descripThirdFirst && (
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
                {descripThirdFirst}
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Columna Derecha */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ backgroundColor: 'transparent' }}>
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
              {subtitleSecond}
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
                mb: 2
              }}
            >
              {descripFirstSecond}
            </Typography>
            
            {descripSecondSecond && (
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
                  mb: 2
                }}
              >
                {descripSecondSecond}
              </Typography>
            )}
            
            {descripThirdSecond && (
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
                {descripThirdSecond}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArticleTextItem;