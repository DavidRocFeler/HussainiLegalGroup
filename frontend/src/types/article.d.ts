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

export interface ArticleHighlightsSectionProps {
  articles: ArticleHighlightItem[];
}

export interface CoverCaseStudyProps {
  articles: ArticleHighlightItem[];
}

export interface ArticleHighlightCardProps {
  article: ArticleHighlightItem;
}

export interface InsightBodyProps {
  articlesData: ArticleHighlightItem[];
  publicationsData: ArticleHighlightItem[];
}

export interface InsightsArticleProps {
  articlesData: ArticleHighlightItem[];
}

export interface InsightsPublicationsProps {
  publicationsData: ArticleHighlightItem[];
}

export interface InsightsCategoryPageProps {
  params: {
    category: string
  }
}

export interface BlogPageProps {
  params: {
    category: string
    slug: string
  }
}

export interface ArticleBlogProps {
  currentArticle: ArticleHighlightItem
}

export interface ArticleCoverProps {
  articles: ArticleHighlightItem[];
}

export interface InsightCoverProps {
  articlesData: ArticleHighlightItem[];
  publicationsData: ArticleHighlightItem[];
}

export interface BlogCoverProps {
  articlesData: ArticleHighlightItem[];
  publicationsData: ArticleHighlightItem[];
  category: string;
}