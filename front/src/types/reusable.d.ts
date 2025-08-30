// types/reusable.ts
import { BottomContentItem } from "./button";
import { HeroTextContent } from "./home";
import { ButtonCustomProps } from './button'; 

export interface ReusableContainersProps {
  imageUrl: string | StaticImageData; 
  imageAlt: string;
  content: HeroTextContent[];
  buttons?: ButtonCustomProps[]; 
  backgroundColor?: string;
}