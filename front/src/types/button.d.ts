// types/button.ts
import { ButtonProps, SxProps, Theme } from '@mui/material';

export interface BottomContentItem {
  id: number;
  label: string;
  value: string;
}

export interface ButtonCustomProps extends Omit<ButtonProps, 'children'> {
  text: string;
  sx?: SxProps<Theme>;
  disabledHover?: boolean;    
  customHoverColor?: string; 
  href?: string;             
}