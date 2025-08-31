'use client';

import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import Image from 'next/image';
import { sectionsDataStikyResponsive } from '@/mock/sectionScrollStikyResponsive'

const StikyScrollMobile: React.FC = () => {
  return (
      <Grid
        container 
        sx={{
          p: 0,
          m: 0,
        }}
        spacing={0}
      >
        {sectionsDataStikyResponsive.map((section, index) => (
          <React.Fragment key={section.id}>
            <Grid 
              size={12} 
              sx={{
                paddingTop: index > 0 ? '2.5rem' : 0, 
              }}
            >
              <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    minHeight: '300px',
                }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    borderTopLeftRadius: '0.625rem',
                    borderTopRightRadius: '0.625rem'
                  }}
                />        
              </Box>
            </Grid>

            {/* Content Section */}
            <Grid 
              size={12} 
            >
              <Box
                sx={{
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '1.88rem 0.9375rem',
                    height: '100%',
                    minHeight: '300px',
                    borderBottomLeftRadius: '0.625rem',
                    borderBottomRightRadius: '0.625rem'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#891C1B',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    mb: '1.25rem'
                  }}
                >
                  {section.id}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: '#131313',
                    mb: '1.25rem'
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    color: '#131313',
                    mb: '0.75rem'
                  }}
                >
                  {section.description}
                </Typography>
                <Link
                  href={section.href}
                  sx={{
                    textDecoration: 'none'
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#891C1B',
                      mb: '1.25rem',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                    }}
                  >
                    See more
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
  );
};

export default StikyScrollMobile;