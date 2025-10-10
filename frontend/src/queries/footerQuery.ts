// src/queries/footerQuery.ts
import { sanityWriteClient } from '@/lib/sanity';
import { FooterSection, SocialMediaLink } from '@/types/footer';

export const getSocialMediaConfig = async (): Promise<SocialMediaLink[]> => {
  try {
    const query = `
      *[_type == "socialMediaLink" && isActive == true] | order(order asc) {
        platform,
        url,
        order,
        isActive
      }
    `;

    const socialLinks = await sanityWriteClient.fetch<SocialMediaLink[]>(query);
    
    return socialLinks || [];
  } catch (error) {
    return [];
  }
};

export const getFooterSections = async (): Promise<FooterSection[]> => {
  try {
    const query = `
      *[_type == "footerSection" && isActive == true] | order(type asc) {
        type,
        title,
        items,
        isActive
      }
    `;

    const footerSections = await sanityWriteClient.fetch<FooterSection[]>(query);
    
    return footerSections || [];
  } catch (error) {
    return [];
  }
};