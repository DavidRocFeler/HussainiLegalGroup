import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import NextLink from 'next/link';
import { ExpertiseSection } from '@/types/expertise';
import { expertiseAndSectorsMock } from '@/mock/expertise.mock';

const ExpertiseAndSectors = () => {
  const renderSection = (section: ExpertiseSection) => (
    <Box>
      <Typography
        variant="h1"
        sx={{
          color: '#891C1B',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: {
            xs: '1.375rem',
            md: '1.5rem'
          },
          mb: { xs: 2, md: 5 }
        }}
      >
        {section.title}
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 } }}>
        {section.items.map((item, index) => (
          <Link
            key={index}
            component={NextLink}
            href={item.href}
            sx={{
              color: '#23363A',
              fontFamily: 'Inter)',
              fontSize: '1rem',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.5rem',
              textDecoration: 'none',
              cursor: 'pointer',
              borderBottom: '1px solid #E0E0E0',
              paddingBottom: { xs: 0.5, md: 0.75 },
              display: 'block',
              '&:hover': {
                color: '#808080'
              }
            }}
          >
            {item.title}
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: { xs: '24px 16px', md: '40px 24px' },
        width: '100%',
        mt: {
            xs: '3rem',
            md: '8rem'
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