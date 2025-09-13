import { SectionScrollStikyImage } from '@/types/home';
import pictureCoverFir from '@/assets/pictureCoverHomefir.jpg'
import pictureCoverSec from '@/assets/pictureCoverHomeSec.jpg'
import pictureCoverThi from '@/assets/pictureCoverHomeThi.jpg'

export const arrayImageScrollStiky: SectionScrollStikyImage[] = [
  {
    image: pictureCoverFir,
    style: {
      borderBottomLeftRadius: '0.625rem',
      borderTopLeftRadius: '0.625rem'
    }
  },
  {
    image: pictureCoverSec,
    style: {
      borderBottomRightRadius: '0.625rem',
      borderTopRightRadius: '0.625rem'
    }
  },
  {
    image: pictureCoverThi,
    style: {
      borderBottomLeftRadius: '0.625rem',
      borderTopLeftRadius: '0.625rem'
    }
  }
];