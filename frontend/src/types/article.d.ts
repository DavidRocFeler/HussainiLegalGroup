import { StaticImageData } from 'next/image';

export interface ArticleHighlightItem {
  category?: 'articles' | 'publications'
  id?: number;
  picture?: StaticImageData | amy;
  label?: string;
  title?: string | amy;
  secondTitle?: string | any;
  note?: string | amy;

  subtitleFirst?: string;
  descripFirstFirst?: string | amy;
  descripSecondFirst?: string
  descripThirdFirst?: string

  subtitleSecond?: string;
  descripFirstSecond?: string
  descripSecondSecond?: string
  descripThirdSecond?: string

  date?: string | amy;
  readtime?: string;
  slug?: string | any;

  textStyles?: {
    color?: string;
  };
}

export interface CoverCaseStudyProps {
  articles: ArticleHighlightItem[];
}

export interface ArticleHighlightCardProps {
  article: ArticleHighlightItem;
}
