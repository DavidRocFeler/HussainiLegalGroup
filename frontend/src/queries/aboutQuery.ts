import { sanityWriteClient } from '@/lib/sanity';
import { CardProfessionalProfileProps } from '@/types/about';

export const getProfessionalProfiles = async (): Promise<CardProfessionalProfileProps[]> => {
  const query = `*[_type == "cardProfessionalProfile" && isActive == true] | order(order asc){
    _id,
    name,
    role,
    "image": image.asset->url,
    "slug": slug.current,
    email,
    phone,
    linkedin,
    qualifications,
    languages,
    previousPositions,
    summary,
    order,
    isActive
  }`;

  const result = await sanityWriteClient.fetch(query);
  return result as CardProfessionalProfileProps[];
}