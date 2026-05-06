import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ExpertiseSection } from '@/types/expertise';
import { expertiseAndSectorsMock } from '@/mock/expertise.mock';

const ExpertiseAndSectors = () => {
  const renderSection = (section: ExpertiseSection) => (
    <Box>
      <Typography
        variant="h10"
        color='brand.red'
        lineHeight={{ xs: 4, md: 4 }}
        sx={{
          color: 'brand.red',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: {
            xs: '1.375rem',
            md: '1.5rem'
          },
        }}
      >
        {section.title}
      </Typography>

      <Grid container spacing={2}>
        {section.items.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Box
              sx={{
                backgroundColor: 'brand.whiteText',
                px: 3,
                py: 2.5,
              }}
            >
              <Typography
                sx={{
                  color: 'grey.50',
                  fontFamily: 'Inter',
                  fontSize: '1rem',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.5rem',
                  textDecoration: 'none',
                  display: 'block',
                  '&:hover': {
                    cursor: 'default',
                    color: '#808080'
                  }
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 3 },
        width: '100%',
        mt: {
          xs: 6,
          md: 16
        }
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {expertiseAndSectorsMock.map((section) => (
          <Grid
            size={{ xs: 12, md: 6 }}
            key={section.title}
          >
            {renderSection(section)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpertiseAndSectors;