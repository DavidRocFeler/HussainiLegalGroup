import { StaticImageData } from 'next/image';

export interface SubscribeContent {
  id: number;
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  privacyText: string;
  successMessage: string;
}

export interface SubscribeImage {
  id: number;
  image: StaticImageData;
  alt: string;
  text?: string;
  showText?: boolean; 
  isInitial?: boolean
}

export interface SubscribeInitialImageProps {
  image: SubscribeImage;
}

export interface SubscribeLoopImagesProps {
  currentImage: SubscribeImage;
  fadeIn: boolean;
}

export interface SubscribeFormProps {
  content: SubscribeContent;
  email: string;
  setEmail: (email: string) => void;
  error: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  validateEmail: (email: string) => boolean;
}

export interface SubscribeLoopImagesProps {
  currentImage: SubscribeImage;
  fadeIn: boolean;
  isInitialImage: boolean;
}