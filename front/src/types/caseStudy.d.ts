import { StaticImageData } from "next/image";

  export interface CaseStudyCoverContainer {
    id: number;
    category: string;
    title: string;
    description: string;
    coverImage: StaticImageData; 
    client: {
      name: string;
      logo: StaticImageData;
      readTime: string;
      date: string;
    };
  }

export interface NewsCard {
  id: number;
  date: string;
  title: string;
  author: {
    name: string;
    logo: StaticImageData;
    readTime: string;
    publishDate: string;
  };
  image: StaticImageData;
  slug: string; 
}