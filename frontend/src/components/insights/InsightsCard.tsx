import Image from 'next/image';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { ArticleHighlightItem } from '@/types/article';
import { transformDateText } from '@/utils/dateFormatters';
import { truncateText } from '@/utils/truncate';

const InsightCard = ({ insight }: { insight: ArticleHighlightItem }) => {
  return (    
    <Card
      sx={{
        borderRadius: 0,
        overflow: 'hidden',
        boxShadow: 'none',
        bgcolor: 'primary.main'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '350px',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={insight.picture}
          alt='InsightCover'
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      <Box
      sx={{
        p: {
          xs: 2,
          md: 4
        }
      }}
      >
        <Chip
          label={transformDateText(insight.date)}
          sx={{
            color: 'brand.red',
            fontSize: '1rem',
            mb: 2,
            fontWeight: 400,
            bgcolor: 'transparent',
            alignItems: 'flex-start',
            p: 0,
            height: 'auto',
            '& .MuiChip-label': {
              p: 0,
              pl: 0,
              pr: 0,
            },
            border: 'none',
            borderRadius: 0,
          }}
        />
        <Typography 
          color='text.primary'
          sx={{
            fontFamily: 'Merriweather, serif',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '-0.01rem',
            fontSize: {
              xs: '1.375rem',
              sm: '1.625rem',  
              lg: '2.25rem'
            },
            lineHeight: {
              xs: '1.54rem',
              sm: '1.82rem',
              lg: '2.52rem'
            },
            '&:hover': {
              color: 'text.primary'
            }
          }}
        >
          {truncateText(insight.secondTitle)}
        </Typography>
      </Box>
    </Card>
  );
};

export default InsightCard;