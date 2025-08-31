import React from 'react'
import { Box, Typography, Link, Grid } from '@mui/material';
import Image from 'next/image';
import { sectionsData } from '@/mock/stickyScrollSection.mock';
import { arrayImageScrollStiky } from '@/mock/arrayImageScrollStiky';
import { SectionScrollStiky, SectionScrollStikyImage } from '@/types/home';

const StikyScrollDesktop: React.FC = () => {
  const gridItems: Array<{
    type: 'image' | 'content';
    data: SectionScrollStikyImage | SectionScrollStiky;
  }> = [
    { type: 'image', data: arrayImageScrollStiky[0] },
    { type: 'content', data: sectionsData[0] },

    { type: 'content', data: sectionsData[1] },
    { type: 'image', data: arrayImageScrollStiky[1] },

    { type: 'image', data: arrayImageScrollStiky[2] },
    { type: 'content', data: sectionsData[2] },
  ];

  return (
    <Grid
        container 
        sx={{
        p: 0,
        m: 0,
        }}
        spacing={0}
    >
        {gridItems.map((item, index) => (
        <Grid 
            size={6}
            key={index}
            sx={{
            paddingTop: index >= 2 ? '3.12rem' : 0, 
            }}
        >
            {item.type === 'image' ? (
            // Image Section
            <Box
                sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                minHeight: '400px', 
                }}
            >
                <Image
                src={(item.data as SectionScrollStikyImage).image}
                alt="Legal service image"
                fill
                style={{
                    objectFit: 'cover',
                    ...(item.data as SectionScrollStikyImage).style 
                }}
                />
            </Box>
            ) : (
            // Content Section
            <Box
                sx={{
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '4.125rem 0.9375rem',
                height: '100%',
                minHeight: '400px', 
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
                {(item.data as SectionScrollStiky).id}
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
                {(item.data as SectionScrollStiky).title}
                </Typography>
                <Typography
                variant="body1"
                sx={{
                    fontWeight: 500,
                    color: '#131313',
                    mb: '0.75rem'
                }}
                >
                {(item.data as SectionScrollStiky).description}
                </Typography>
                <Link
                href={(item.data as SectionScrollStiky).href}
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
            )}
        </Grid>
        ))}
    </Grid>
  )
}

export default StikyScrollDesktop