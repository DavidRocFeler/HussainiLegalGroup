import { TitleReusableComponentProps } from '@/types/reusable';
import { truncateText } from '@/utils/truncate';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TitleReusable = ({ 
  data, 
  titleVariant,
  descriptionVariant
}: TitleReusableComponentProps) => {
  const item = Array.isArray(data) ? data[0] : data; 
  
  return (
    <Box sx={{ my: 2 }}>
      <Typography 
        variant={titleVariant as any}
        mb={3}
        sx={{
          color: item.textStyles?.color || 'text.primary',
        }}
      >
        {item.title}
      </Typography>
      <Typography 
        variant={descriptionVariant as any}
        sx={{
          color: item.textStyles?.color || 'text.primary',
          mt: 2,
          width: {
            xs: '100%',
            md: '55%'
          }
        }}
      >
       {truncateText(item.note)}
      </Typography>
    </Box>
  );
}

export default TitleReusable;