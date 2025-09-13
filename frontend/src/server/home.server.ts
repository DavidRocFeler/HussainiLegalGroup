// home.api.ts
import { sanityWriteClient } from '@/lib/sanity'
import { HeroTextContent, SectionScrollStiky } from '@/types/home';

// 1. Hero Text Content
export const getHeroTextByPage = async (page: string): Promise<HeroTextContent[]> => {
  const query = `*[_type == "heroText" && page == "${page}"] | order(order asc){
    category,
    title,
    descriptionFirst,
    descriptionSecond,
    descriptionThird,
    order
  }`
  const result = await sanityWriteClient.fetch(query)
  return result as HeroTextContent[]
}

export const getHomeHeroTexts = async (): Promise<HeroTextContent[]> => {
  return await getHeroTextByPage('home')
}

export const getAboutHeroTexts = async (): Promise<HeroTextContent[]> => {
  return await getHeroTextByPage('about')
}

export const getExpertiseHeroTexts = async (): Promise<HeroTextContent[]> => {
  return await getHeroTextByPage('expertise')
}

export const getCareersHeroTexts = async (): Promise<HeroTextContent[]> => {
  return await getHeroTextByPage('careers')
}

export const getStrategyHeroTexts = async (): Promise<HeroTextContent[]> => {
  return await getHeroTextByPage('strategy')
}

export const getHomeSectionStickies = async (): Promise<SectionScrollStiky[]> => {
  const query = `*[_type == "homeSectionSticky"] | order(order asc){
    title,
    descriptionFirst,
    descriptionSecond,
    descriptionThird,
    order
  }`;
  
  const result = await sanityWriteClient.fetch(query);
  return result as SectionScrollStiky[];
};
