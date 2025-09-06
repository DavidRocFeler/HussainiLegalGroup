import { SectionScrollStiky, SectionScrollStikyResponsive } from '@/types/home';
import pictureCoverFir from '@/assets/pictureCoverHomefir.jpg'
import pictureCoverSec from '@/assets/pictureCoverHomeSec.jpg'
import pictureCoverThi from '@/assets/pictureCoverHomeThi.jpg'

export const sectionsDataStikyResponsive: SectionScrollStikyResponsive[] = [
  {
    id: 1,
    title: 'Dedicated to Your Legal Success',
    description: 'Lorem ipsum dolor sit amet consectetur. Arcu vitae consectetur risus lorem. Orci magna varius sed neque tristique odio cursus. Dignissim imperdiet eleifend velit porttitor magna proin scelerisque facilisis. Nulla lacus in est netus. Felis fames lectus ultrices quis. At turpis vel enim eget ipsum neque. Ut turpis ornare.',
    href: '/legal-success',
    image: pictureCoverFir
  },
  {
    id: 2,
    title: 'Personal Injury Experts',
    description: 'Lorem ipsum dolor sit amet consectetur. Arcu vitae consectetur risus lorem. Orci magna varius sed neque tristique odio cursus. Dignissim imperdiet eleifend velit porttitor magna proin scelerisque facilisis. Nulla lacus in est netus. Felis fames lectus ultrices quis. At turpis vel enim eget ipsum neque. Ut turpis ornare.',
    href: '/personal-injury-experts',
    image: pictureCoverSec
  },
  {
    id: 3,
    title: 'Aggressive Criminal Defense',
    description: 'Lorem ipsum dolor sit amet consectetur. Arcu vitae consectetur risus lorem. Orci magna varius sed neque tristique odio cursus. Dignissim imperdiet eleifend velit porttitor magna proin scelerisque facilisis. Nulla lacus in est netus. Felis fames lectus ultrices quis. At turpis vel enim eget ipsum neque. Ut turpis ornare.',
    href: '/criminal-defense',
    image: pictureCoverThi
  }
];