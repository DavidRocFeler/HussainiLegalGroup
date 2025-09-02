// components/casestudy/CaseStudyTitle.tsx
import { TitleReusableProps } from '@/types/reusable';
import { Box, Typography } from '@mui/material';

const TitleReusable = ({ data }: { data: TitleReusableProps | TitleReusableProps[] }) => {
  const item = Array.isArray(data) ? data[0] : data; 
  
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h1"
      sx={{
        color: item.textStyles?.color || 'text.primary',
        fontWeight: 700,
        fontSize: '3.5rem'
      }}
      >
        {item.title}
      </Typography>
      <Typography variant="h5"
      sx={{
        fontSize: '1.125rem',
        color: item.textStyles?.color || 'text.primary',
        fontWeight: 400,
        mt: '1rem',
        width: {
          xs: '100%',
          md: '65%'
        }
      }}
      >
        {item.description}
      </Typography>
    </Box>
  );
}

export default TitleReusable