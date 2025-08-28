// components/ui/ButtonCustom.tsx
'use client';

import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface ButtonCustomProps extends Omit<ButtonProps, 'children'> {
  text: string;
  sx?: SxProps<Theme>;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ 
  text, 
  variant = 'contained',
  color = 'primary',
  sx,
  ...restProps 
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        textTransform: 'none',
        fontWeight: 600,
        px: 3,
        py: 1.5,
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
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