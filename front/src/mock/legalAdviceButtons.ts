// mock/legalAdviceButtons.mock.ts
import { ButtonCustomProps } from '@/types/button';

export const legalAdviceButtons: ButtonCustomProps[] = [
  {
    text: "More Details",
    variant: "contained",
    sx: { 
      backgroundColor: '#B49055',
    },
    disabledHover: true,   
    href: '/'              
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