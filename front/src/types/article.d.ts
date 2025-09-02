import { StaticImageData } from 'next/image';

export interface ArticleTextItem {
  id: number;
  title: string;
  content: string;
}

export interface ArticleTextItemProps {
  article: ArticleTextItemType;
}

export interface CoverArticleItem {
  id: number;
  image: StaticImageData;
  category: string;
  title: string;
}

export interface ArticleHighlightItem {
  id: number;
  title: string;
  date: string;
  buttonText: string;
  buttonLink: string;
}

export interface ArticleHighlightCardProps {
  article: ArticleHighlightItem;
}
