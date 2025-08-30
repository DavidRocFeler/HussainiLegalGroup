import { BottomContentItem } from "./button";
import { HeroTextContent } from "./home";

export interface ReusableContainersProps {
    imageUrl: string | StaticImageData; 
    imageAlt: string;
    content: HeroTextContent[];
    buttons?: {
      text: string;
      variant?: 'text' | 'outlined' | 'contained';
      color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
      sx?: any;
      onClick?: () => void;
    }[];
    backgroundColor?: string;
  }