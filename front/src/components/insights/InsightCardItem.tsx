import { InsightMainItem } from '@/types/insights';
import { Card, Typography, Chip } from '@mui/material';

const InsightsCardItem = ({ insight }: { insight: InsightMainItem }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: '#F8F3E7;',
        padding: '1rem 2.25rem 1.6rem 2.25rem',
      }}
    >
      <Chip
        label={insight.date}
        sx={{
          backgroundColor: 'transparent',
          color: '#131313',
          fontFamily: 'Inter',
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '1.3rem',
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
            color: 'grey.900'
          }
        }}
      />
      <Typography
        variant="h1"
        sx={{
          fontWeight: 500,
          fontSize: {
            xs: '2rem',
            md: '2rem',
          },
          marginBottom: 9,
          lineHeight: '2rem',
          color: '#333',
          ":hover": {
            color: 'grey.900'
          }
        }}
      >
        {insight.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.6,
          color: '#666',
        }}
      >
        {insight.description}
      </Typography>
    </Card>
  );
};

export default InsightsCardItem;