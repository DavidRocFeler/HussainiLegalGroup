// components/ui/ButtonCustom.tsx
'use client';

import React from 'react';
import { Button } from '@mui/material';
import { ButtonCustomProps } from '@/types/button';

const ButtonCustom: React.FC<ButtonCustomProps> = ({ 
  text, 
  variant = 'contained',
  color = 'primary',
  sx,
  disabledHover = false, 
  customHoverColor,      
  ...restProps           
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        textTransform: 'none',
        padding: '0.875rem 2.1625rem',
        fontSize: '1rem',
        fontWeight: 400,
        borderRadius: '0.1875rem',
        color: 'primary.main',
        '&:hover': disabledHover ? {} : {
          backgroundColor: customHoverColor || undefined,
          transition: 'background-color 0.3s ease',
        },
        '@media (max-width:440px)': {
          padding: '0.5rem 1rem'
        },
        ...sx
      }}
      {...restProps} 
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;