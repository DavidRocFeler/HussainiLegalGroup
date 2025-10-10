import { SubscribeContent, SubscribeImage } from '@/types/subscribe.d';
import IconMessageLaw from '@/assets/IconMessageLaw.png';
import ImageCover from '@/assets/BackgroundCover.jpg'; 
import ImageAbout from '@/assets/RectangleAbout.jpg';
import ImageBussines from '@/assets/NewBussisnes.jpg';

export const subscribeContent: SubscribeContent = {
  id: 1,
  title: "Stay Updated",
  description: "Subscribe to our newsletter and never miss our latest updates, news, and exclusive offers.",
  placeholder: "your.email@example.com",
  buttonText: "Subscribe Now",
  privacyText: "We respect your privacy. Contact us to unsubscribe at any time.",
  successMessage: "Thank you for subscribing! Check your email for confirmation.",
};

export const subscribeImages: SubscribeImage[] = [
  {
    id: 1,
    image: IconMessageLaw,
    alt: "Message Icon Law",
    text: "Join our community of subscribers",
    showText: true,
    isInitial: true
  },
  {
    id: 2,
    image: ImageCover,
    alt: "Image 1 description",
    showText: false,
    isInitial: false
  },
  {
    id: 3,
    image: ImageAbout,
    alt: "Image 2 description", 
    showText: false,
    isInitial: false
  },
  {
    id: 4,
    image: ImageBussines,
    alt: "Image 3 description",
    showText: false,
    isInitial: false
  }
];