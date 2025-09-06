import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { heroTextContent } from '@/mock/heroContent.mock';
import { strategyContent } from '@/mock/strategyContent.mock';
import { VisionaryHeroProps } from '@/types/home';
import { discoverUsButtonData } from '@/mock/discoverUsButton.mock'; 
import ReusableContainers from '@/components/ui/ReusableContainers';

const VisionaryHero = ({ imageUrl, imageAlt }: VisionaryHeroProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        position: 'relative',
        maxHeight: 'fit-content',
        pt: {
          xs: 8,
          md: 10
        },
        pr: {
          xs: 3,
          md: 9
        },
        pb: {
          xs: 6,
          md: 16
        },
        pl: {
          xs: 3,
          md: 9.6
        }
      }}
    >
      {/* Top section with three overlapping components */}
      <ReusableContainers
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      content={heroTextContent}
      buttons={discoverUsButtonData} 
    />

      {/* Bottom strategy section */}
      <Box 
        sx={{ 
          width: {
            xs: '100%',
            md: '78%'
          },
          mt: {
            xs: 6,
            md: 18
          },
          }}>
        {strategyContent.map((item) => (
          <Box key={item.id} mb={3}>
            {item.label && (
              <Typography
                variant="h3"
                mb={3}
              >
                {item.label}
              </Typography>
            )}
            <Typography
              variant={item.id === 1 ? 'h4' : 'h5'}
              sx={{
                fontWeight: item.id === 1 ? 400 : 400,
                color: 'text.primary',
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VisionaryHero;