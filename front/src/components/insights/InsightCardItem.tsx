import { InsightMainItem } from '@/types/insights';
import { Card, Typography, Chip } from '@mui/material';

const InsightsCardItem = ({ insight }: { insight: InsightMainItem }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: '#F8F3E7',
        padding: '1rem 2.25rem 1.6rem 2.25rem',
      }}
    >
      <Chip
        label={insight.date}
        sx={{
          backgroundColor: 'transparent',
          color: 'text.primary',
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 400,
          letterSpacing: '-0.01rem',
          marginBottom: '16px',
          padding: 0,
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
        sx={{
          fontFamily: 'Merriweather',
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
        {insight.title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          lineHeight: 1.6,
          color: 'brand.greyText',
        }}
      >
        {insight.description}
      </Typography>
    </Card>
  );
};

export default InsightsCardItem;