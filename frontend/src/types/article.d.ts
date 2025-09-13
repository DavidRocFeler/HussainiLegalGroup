import { StaticImageData } from 'next/image';

export interface ArticleHighlightItem {
  category?: 'articles' | 'publications'
  _id?: string; 
  id?: number;
  picture?: StaticImageData | amy;
  label?: string;
  title?: string | amy;
  secondTitle?: string | any;
  note?: string;

  subtitleFirst?: string;
  descripFirstFirst?: string
  descripSecondFirst?: string
  descripThirdFirst?: string

  subtitleSecond?: string;
  descripFirstSecond?: string
  descripSecondSecond?: string
  descripThirdSecond?: string

  date?: string | amy;
  readtime?: string;
  slug?: string | any;
}

export interface ArticleHighlightCardProps {
  article: ArticleHighlightItem;
}
