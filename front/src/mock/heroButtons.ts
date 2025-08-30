// mock/heroButtons.mock.ts
import { ButtonCustomProps } from '@/types/button';

export const heroButtons: ButtonCustomProps[] = [
  {
    text: "Our Team",
    variant: "contained",
    sx: { 
      backgroundColor: '#B49055',
    },
    disabledHover: true,    
    href: '/about'         
  },
  {
    text: "Contact Us", 
    variant: "contained",
    sx: { 
      backgroundColor: '#891C1B',
    },
    disabledHover: false,   
    customHoverColor: '#B49055', 
    href: '/contact'     
  }
];