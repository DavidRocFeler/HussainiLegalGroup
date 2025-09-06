import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { sectionsDataStikyResponsive } from '@/mock/sectionScrollStikyResponsive'
import Button from '@mui/material/Button';

const StickyScrollMobile = () => {
  const formatId = (id: number): string => {
    return id < 10 ? `0${id}` : `${id}`;
  };  

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
                paddingTop: index > 0 ? 5 : 0,
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

            <Grid 
              size={12} 
            >
              <Box
                sx={{
                    bgcolor: 'brand.whiteText',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: 7.5,
                    px: 4,
                    height: '100%',
                    minHeight: '300px',
                    borderBottomLeftRadius: '0.625rem',
                    borderBottomRightRadius: '0.625rem'
                }}
              >
                <Typography
                  mb={2}
                  variant="h3"
                >
                  {formatId(section.id)}
                </Typography>
                <Typography
                  mb={2}
                  variant="h4"
                  sx={{
                    fontWeight: 400,
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="h5"
                >
                  {section.description}
                </Typography>
                <Link
                  href={section.href}
                  sx={{
                    textDecoration: 'none'
                  }}
                >
                  <Button variant="seeMoreButton">
                    See more
                  </Button>
                </Link>
              </Box>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
  );
};

export default StickyScrollMobile;