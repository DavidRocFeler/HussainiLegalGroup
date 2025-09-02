import Image from 'next/image';
import { Box, Card, Typography, Chip } from '@mui/material';
import { InsightItem } from '@/types/insights';

const InsightCardCover = ({ insight }: { insight: InsightItem }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        overflow: 'hidden',
        boxShadow: 'none',
        mb: '4rem',
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
          src={insight.image}
          alt='InsightCover'
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      <Box
      sx={{
        padding: {
          xs: '1rem',
          md: '2rem'
        }
      }}
      >
        <Chip
          label={insight.date}
          sx={{
            color: 'grey.900',
            fontSize: '1rem',
            marginBottom: '1rem',
            fontWeight: 400,
            bgcolor: 'transparent',
            alignItems: 'flex-start',
            padding: 0,
            height: 'auto',
            '& .MuiChip-label': {
              padding: 0,
              paddingLeft: 0,
              paddingRight: 0,
            },
            border: 'none',
            borderRadius: 0,
          }}
        />
        <Typography
          variant="h1"
          sx={{
            lineHeight: 1.4,
            color: '#131313',
            fontSize: {
              xs: '1.4rem',
              md: '2.25rem',
            },
            fontWeight: 400
          }} 
        >
          {insight.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default InsightCardCover;