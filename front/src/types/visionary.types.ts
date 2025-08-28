import { StaticImageData } from "next/image";

// types/visionaryHero.type.ts
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