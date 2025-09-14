import { sanityWriteClient } from '@/lib/sanity';
import { CardProfessionalProfileProps } from '@/types/about';

export const getProfessionalProfiles = async (): Promise<CardProfessionalProfileProps[]> => {
  const query = `*[_type == "cardProfessionalProfile" && isActive == true] | order(order asc){
    _id,
    name,
    role,
    "image": image.asset->url,
    page,
    order,
    isActive
  }`;
  
  const result = await sanityWriteClient.fetch(query);
  return result as CardProfessionalProfileProps[];
}
