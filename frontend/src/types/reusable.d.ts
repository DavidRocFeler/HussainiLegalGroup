// types/reusable.ts
import { BottomContentItem } from "./button";
import { HeroTextContent } from "./home";
import { ButtonCustomProps } from './button'; 
import { ArticleHighlightItem } from "./article";

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
  data: ArticleHighlightItem[];
  titleVariant: string;
  descriptionVariant: string; 
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