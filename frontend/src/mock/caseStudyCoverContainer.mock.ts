import caseStudyCoverPicture from '@/assets/CaseStudyCover.jpg';
import articleCoverPicture from '@/assets/ArticleCoverPicture.jpg'
import backgroundTest from '@/assets/BackgroundCover.jpg'
import { ArticleHighlightItem } from '@/types/article';

export const caseStudiesArrayCoverContainer: ArticleHighlightItem[] = [
  {
    id: 1,
    date: 'September 23, 2022',
    label: "INSIDE HUSSAINI",
    title: "We've worked with the best",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    picture: caseStudyCoverPicture,
    readtime: "5min read",
  },
  {
    id: 2,
    label: "ARTICLE COVER PICTURE",
    date: 'September 23, 2022',
    title: "We've worked with the best",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    picture: articleCoverPicture,
    readtime: "5min read",
  },
  {
    id: 3,
    label: "BLOG SECTION",
    date: 'September 23, 2022',
    title: "We've worked with the best",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    picture: backgroundTest,
    readtime: "5min read",
  }
];