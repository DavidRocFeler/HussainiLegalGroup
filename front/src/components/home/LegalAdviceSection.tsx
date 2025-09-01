// components/LegalAdviceSection.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { legalAdviceContent } from '@/mock/legalAdvice.mock';
import ButtonCustom from '../ui/ButtomCustom';
import { EarthSvg } from '../ui/EarthSvg';
import { legalAdviceButtons } from '@/mock/legalAdviceButtons';
import Link from 'next/link';

const LegalAdviceSection = () => {

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          md: 'column'
        },
        alignItems: 'center',
        padding: {
          xs: '1.5rem 1.5rem',
          md: '6rem 5rem'
        },
      }}
    >
      <Box
        sx={{
          width: 'full',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
       <Box
       sx={{
        width: { xs: '100%', md: '70%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
          xs: 'flex-start',
          md: 'center',
        },
        mb: 1,
       }}
       >
         {/* Title section */}
         <Typography
          variant="h1"
          sx={{
            fontSize: '2.5rem',
            fontWeight: 400,
            color: '#891C1B',
            mb: 3,
            textAlign: {
              xs: 'start',
              md: 'center'
            }
          }}
        >
          {legalAdviceContent.title}
        </Typography>

        {/* Description text */}
        <Typography
          variant="h5"
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.6rem',
            color: '#131313',
            mb: 4,
            width: '80%',
            textAlign: {
              xs: 'start',
              md: 'center'
            }
          }}
        >
          {legalAdviceContent.description}
        </Typography>

        {/* Action buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: {
              xs: '1rem',
              md: '1.875rem' 
            },
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {legalAdviceButtons.map((button, index) => (
            <Link key={index} href={button.href || '#'} style={{ textDecoration: 'none' }}>
              <ButtonCustom
                key={index}
                text={button.text}
                variant={button.variant || "contained"}
                sx={button.sx}
                disabledHover={button.disabledHover}
                customHoverColor={button.customHoverColor}
              />
            </Link>
          ))}
        </Box>
       </Box>

      </Box>

        {/* Decorative SVG */}
        <Box sx={{ mt: 4 }}>
          <EarthSvg />
        </Box>
    </Box>
  );
};

export default LegalAdviceSection;