import { TitleReusableComponentProps } from '@/types/reusable';
import { truncateText } from '@/utils/truncate';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TitleReusable = ({ 
  data, 
  titleVariant,
  descriptionVariant,
  color  
}: TitleReusableComponentProps) => {
  const item = Array.isArray(data) ? data[0] : data; 
  
  return (
    <Box sx={{ my: 2 }}>
      <Typography 
        variant={titleVariant as any}
        mb={3}
        sx={{
          color: color || item.textStyles?.color || 'text.primary', // ← agrega color
        }}
      >
        {item.title}
      </Typography>
      <Typography 
        variant={descriptionVariant as any}
        sx={{
          color: color || item.textStyles?.color || 'text.primary', // ← agrega color
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