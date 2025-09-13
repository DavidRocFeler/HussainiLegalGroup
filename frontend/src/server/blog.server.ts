// api/blog.api.ts
import { sanityWriteClient } from '@/lib/sanity';
import { ArticleHighlightItem } from '@/types/article';

export const getBlogByCategory = async (category: string): Promise<ArticleHighlightItem[]> => {
  const query = `*[_type == "blog" && category == "${category}" && isActive == true] 
    | order(_updatedAt desc){
      "id": _id,
      category,
      "picture": picture.asset->url,
      label,
      title,
      secondTitle,
      note,
      subtitleFirst,
      descripFirstFirst,
      descripSecondFirst,
      descripThirdFirst,
      subtitleSecond,
      descripFirstSecond,
      descripSecondSecond,
      descripThirdSecond,
      date,
      readtime,
      "slug": slug.current
  }`;

  const result = await sanityWriteClient.fetch(query);
  return result as ArticleHighlightItem[];
};

export const getAllBlogs = async (): Promise<ArticleHighlightItem[]> => {
  const query = `*[_type == "blog" && isActive == true] | order(order asc, date desc){
    "id": _id,
    category,
    "picture": picture.asset->url,
    label,
    title,
    secondTitle,
    note,
    subtitleFirst,
    descripFirstFirst,
    descripSecondFirst,
    descripThirdFirst,
    subtitleSecond,
    descripFirstSecond,
    descripSecondSecond,
    descripThirdSecond,
    date,
    readtime,
    "slug": slug.current
  }`;
  
  const result = await sanityWriteClient.fetch(query);
  return result as ArticleHighlightItem[];
};

export const getArticles = async (): Promise<ArticleHighlightItem[]> => {
  return await getBlogByCategory('articles');
};

export const getPublications = async (): Promise<ArticleHighlightItem[]> => {
  return await getBlogByCategory('publications');
};

export const getBlogBySlug = async (slug: string): Promise<ArticleHighlightItem | null> => {
  const query = `*[_type == "blog" && slug.current == "${slug}" && isActive == true][0]{
    "id": _id,
    category,
    "picture": picture.asset->url,
    label,
    title,
    secondTitle,
    note,
    subtitleFirst,
    descripFirstFirst,
    descripSecondFirst,
    descripThirdFirst,
    subtitleSecond,
    descripFirstSecond,
    descripSecondSecond,
    descripThirdSecond,
    date,
    readtime,
    "slug": slug.current
  }`;
  
  const result = await sanityWriteClient.fetch(query);
  return result as ArticleHighlightItem | null;
};

export const getRelatedBlogs = async (category: string, currentSlug: string, limit: number = 3): Promise<ArticleHighlightItem[]> => {
  const query = `*[_type == "blog" && category == "${category}" && slug.current != "${currentSlug}" && isActive == true] | order(date desc)[0...${limit}]{
    "id": _id,
    category,
    "picture": picture.asset->url,
    label,
    title,
    secondTitle,
    note,
    subtitleFirst,
    descripFirstFirst,
    descripSecondFirst,
    descripThirdFirst,
    subtitleSecond,
    descripFirstSecond,
    descripSecondSecond,
    descripThirdSecond,
    date,
    readtime,
    "slug": slug.current
  }`;
  
  const result = await sanityWriteClient.fetch(query);
  return result as ArticleHighlightItem[];
};