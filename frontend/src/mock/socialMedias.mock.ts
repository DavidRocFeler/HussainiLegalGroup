import { SocialMediaProps } from '@/types/footer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from '@/components/ui/TikTokIcon';
import WhatsAppBusinessIcon from '@/components/ui/WhatsAppBussisnesIcon';
import TelegramIcon from '@/components/ui/TelegramIcon';
import XIcon from '@/components/ui/XIcon';

export const socialMediasMock: SocialMediaProps[] = [
  {
    href: 'https://www.linkedin.com',
    icon: LinkedInIcon
  },
  {
    href: 'https://x.com',
    icon: TwitterIcon
  },
  {
    href: 'https://x.com',
    icon: XIcon
  },
  {
    href: 'https://www.facebook.com',
    icon: FacebookIcon
  },
  {
    href: 'https://www.instagram.com',
    icon: InstagramIcon
  },
  {
    href: 'https://www.youtube.com',
    icon: YouTubeIcon
  },
  {
    href: 'https://www.tiktok.com',
    icon: TikTokIcon
  },
  {
    href: 'https://wa.me/yournumber',
    icon: WhatsAppBusinessIcon
  },
  {
    href: 'https://wa.me/yournumber',
    icon: TelegramIcon
  },
];