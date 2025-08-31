import { StaticImageData } from "next/image";

export interface HeroTextContent {
    id: number;
    title: string;
    subtitle: string;
    description: string;
  }
  
  export interface VisionaryHeroProps {
    imageUrl: string | StaticImageData; 
    imageAlt: string;
  }

  export interface SectionScrollStiky {
  id: string;
  title: string;
  description: string;
  href: string; 
}

export interface SectionScrollStikyResponsive {
  id: string;
  title: string;
  description: string;
  href: string; 
  image: StaticImageData;
}

export interface SectionScrollStikyImage {
  image: StaticImageData;
  style: React.CSSProperties;
}

export interface LegalAdviceContent {
  title: string;
  description: string;
}