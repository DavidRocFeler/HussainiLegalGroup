import { StaticImageData } from "next/image";

export interface HeroTextContent {
    category?: string;
    title: string;
    descriptionFirst?: string;
    descriptionSecond?: string;
    descriptionThird?: string;
  }
  
  export interface VisionaryHeroProps {
    imageUrl: string | StaticImageData; 
    imageAlt: string;
  }

  export interface SectionScrollStiky {
  id: number;
  title: string;
  descriptionFirst: string;
  descriptionSecond?: string;
  descriptionThird?: string;
  image: StaticImageData;
}

export interface StickyScrollMobileProps {
  stickyScrollData: SectionScrollStiky[];
}

export interface StickyScrollDesktopProps {
  stickyScrollData: SectionScrollStiky[];
}

export interface StickyScrollSectionsProps {
  stickyScrollData: SectionScrollStiky[];
}

export interface SectionScrollStikyImage {
  image: StaticImageData;
  style: React.CSSProperties;
}

export interface LegalAdviceContent {
  title: string;
  description: string;
}

export interface CoverBackgroundProps {
  id: number;
  title: string;
  description: string;
  ctaButton: {
    text: string;
    link: string;
  };
}

export interface CoverBackgroundImageProps {
  id: number;
  backgroundImage: StaticImageData;
}

