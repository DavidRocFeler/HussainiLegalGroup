// src/api/subscribeImageLoop.api.ts
import { sanityWriteClient } from '@/lib/sanity';
import { SubscribeImage } from '@/types/subscribe.d';

export const getSubscribeImages = async (): Promise<SubscribeImage[]> => {
  try {
    const query = `
      *[_type == "subscribeImageLoop" && isActive == true] | order(order asc) {
        "id": order + 1,
        "image": image.asset->url,
        alt,
        text,
        showText,
        isInitial
      }
    `;

    const images = await sanityWriteClient.fetch(query);
    
    if (!images || images.length === 0) {
      return [];
    }

    return images;
  } catch (error) {
    throw error;
  }
};