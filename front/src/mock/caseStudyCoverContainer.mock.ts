import { CaseStudyCoverContainer } from '@/types/caseStudy';
import borderPicture from '@/assets/Border.png';
import caseStudyCoverPicture from '@/assets/CaseStudyCover.jpg';
import articleCoverPicture from '@/assets/ArticleCoverPicture.jpg'
import backgroundTest from '@/assets/BackgroundCover.jpg'

export const caseStudiesArrayCoverContainer: CaseStudyCoverContainer[] = [
  {
    id: 1,
    category: "INSIDE HUSSAINI",
    title: "We've worked with the best",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    coverImage: caseStudyCoverPicture,
    client: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      date: "Sep, 23 - 2022"
    }
  },
  {
    id: 2,
    category: "ARTICLE COVER PICTURE",
    title: "We've worked with the best",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    coverImage: articleCoverPicture,
    client: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      date: "Sep, 23 - 2022"
    }
  },
  {
    id: 3,
    category: "BLOG SECTION",
    title: "We've worked with the best",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    coverImage: backgroundTest,
    client: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      date: "Sep, 23 - 2022"
    }
  }
];