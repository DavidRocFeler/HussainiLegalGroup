import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { ArticleHighlightItem } from '@/types/article';
import { transformDateShortText } from '@/utils/dateFormatters';
import { truncateShortText, truncateTitleText } from '@/utils/truncate';

const InsightsCardItem = ({ insight }: { insight: ArticleHighlightItem }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: '#F8F3E7',
        pt: 2,
        px: {
          xs: 2,
          md: 4.5
        },
        pb: 3.2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: {
          xs: 'auto',
          md: '24rem',
          desktopMid: '20rem',
          lg: '21rem',
          xl: '20rem'
        }
      }}
    >
      <Chip
        label={transformDateShortText(insight.date)}
        sx={{
          backgroundColor: 'transparent',
          color: 'text.primary',
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 400,
          letterSpacing: '-0.01rem',
          padding: 0,
          mb: {
            xs: 0.5,
            md: 2
          },
          height: 'auto',
          '& .MuiChip-label': {
            padding: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
          border: 'none',
          borderRadius: 0,
          ":hover": {
            color: 'brand.red'
          }
        }}
      />
      <Typography
        variant='h10'
        sx={{
          fontWeight: 500,
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem', 
            lg: '2.0125rem'
          },
          marginBottom: {
            xs: 2,    
            sm: 4,    
            lg: 9    
          },
          lineHeight: {
            xs: '1.4375rem',
            sm: '1.725rem',
            lg: '2.0125rem',
          },
          color: 'brand.blackButton',
          ":hover": {
            color: 'brand.red'
          }
        }}
      >
        {truncateTitleText(insight.title)}
      </Typography>
      <Typography
        variant="h5"
        fontWeight={350}
        lineHeight={{xs: 1.3, md: 1.6}}
        sx={{
          fontSize: '1.15rem',
          color: 'text.primary',
        }}
      >
        {truncateShortText(insight.note)}
      </Typography>
    </Card>
  );
};

export default InsightsCardItem;