import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import NextLink from 'next/link';
import { ExpertiseSection } from '@/types/expertise';
import { expertiseAndSectorsMock } from '@/mock/expertise.mock';

const ExpertiseAndSectors: React.FC = () => {
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
              color: 'var(--hussainilegalgroup-a-84725-de-1-a-98112-fc-813-webflow-io-outer-space, var(--color-cyan-18, #23363A))',
              fontFamily: 'var(--font-family-Font-1, Inter)',
              fontSize: 'var(--font-size-16, 1rem)',
              fontStyle: 'normal',
              fontWeight: 'var(--font-weight-400, 400)',
              lineHeight: 'var(--line-height-24, 1.5rem)',
              letterSpacing: 'var(--letter-spacing--0_16, -0.01rem)',
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