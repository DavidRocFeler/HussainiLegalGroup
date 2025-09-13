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
  href?: string;
  alwaysExpanded?: boolean;
  loading?: boolean;
}

export interface TitleReusableProps {
  id: number;
  title: string;
  description: string;
  textStyles?: {
    color?: string;
  };
}

export interface TitleReusableComponentProps {
  data: TitleReusableProps | TitleReusableProps[];
  titleVariant: string; // Obligatorio desde el padre
  descriptionVariant: string; // Obligatorio desde el padre
}

export interface ErrorAlertProps {
  open: boolean;
  onClose: () => void;
  missingFields: string[];
}

export interface SuccessAlertProps {
  open: boolean;
  onClose: () => void;
}