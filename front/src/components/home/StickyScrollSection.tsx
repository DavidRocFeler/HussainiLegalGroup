import Box from '@mui/material/Box';
import StickyScrollDesktop from '../ui/StickyScrollDesktop';
import StickyScrollMobile from '../ui/StickyScrollMobile';

const StickyScrollSections  = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        py: {
          xs: 8,
          md: 8
        },
        px: {
          xs: 2,
          md: 9
        },
        position: 'relative',
      }}
    >
      <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}
      >
        <StickyScrollDesktop/>
      </Box>
      <Box
      sx={{
        display: {
          xs: 'flex',
          md: 'none'
        }
      }}
      >
        <StickyScrollMobile/>
      </Box>
    </Box>
  );
};

export default StickyScrollSections;