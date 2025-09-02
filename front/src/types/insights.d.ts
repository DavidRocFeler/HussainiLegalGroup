import { StaticImageData } from 'next/image';

export interface InsightItem {
  id: number;
  date: string;
  description: string;
  image: StaticImageData;
}

export interface InsightMainItem {
  id: number;
  date: string;
  title: string;
  description: string;
}