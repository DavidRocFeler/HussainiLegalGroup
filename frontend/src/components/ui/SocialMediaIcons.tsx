// src/utils/socialMediaIcons.tsx
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from '@/components/ui/TikTokIcon';
import WhatsAppBusinessIcon from '@/components/ui/WhatsAppBussisnesIcon';
import TelegramIcon from '@/components/ui/TelegramIcon';
import XIcon from '@/components/ui/XIcon';

export const getSocialMediaIcon = (platform: string): React.ComponentType => {
  if (!platform || typeof platform !== 'string') {
    return () => <span>?</span>; 
  }
  
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return LinkedInIcon;
    case 'twitter':
      return TwitterIcon;
    case 'x':
      return XIcon;
    case 'facebook':
      return FacebookIcon;
    case 'instagram':
      return InstagramIcon;
    case 'youtube':
      return YouTubeIcon;
    case 'whatsapp':
      return WhatsAppBusinessIcon;
    case 'telegram':
      return TelegramIcon;
    case 'tiktok':
      return TikTokIcon;
    default:
      return () => <span>?</span>;
  }
};