// mock/newsCard.mock.ts
import { NewsCard } from '@/types/caseStudy';
import borderPicture from '@/assets/Border.png';
import newResulting from '@/assets/NewCaseResulting.jpg';
import newHelper from '@/assets/NewCaseHelper.jpg';
import newClient from '@/assets/NewCaseClient.jpg';
import newBussisnes from '@/assets/NewBussisnes.jpg';

export const newsCardData: NewsCard[] = [
  {
    id: 1,
    date: "October 9, 2024",
    title: "We helped a client navigate a divorce, achieving a fair division of assets",
    author: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      publishDate: "Sep, 23 - 2022"
    },
    image: newResulting,
    slug: "client-divorce-fair-division-assets"
  },
  {
    id: 2,
    date: "May 30, 2022",
    title: "resulting in a complete dismissal of the case",
    author: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      publishDate: "Sep, 23 - 2022"
    },
    image: newHelper,
    slug: "complete-dismissal-case"
  },
  {
    id: 3,
    date: "October 9, 2024",
    title: "A client injured in a major accident, securing a significant settlement that covered medical bills, lost wages, and long-term care.",
    author: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      publishDate: "Sep, 23 - 2022"
    },
    image: newBussisnes,
    slug: "client-major-accident-settlement"
  },
  {
    id: 4,
    date: "October 9, 2024",
    title: "Facing criminal charges, resulting in a complete dismissal of the case after investigation.",
    author: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      publishDate: "Sep, 23 - 2022"
    },
    image: newResulting,
    slug: "criminal-charges-dismissal-investigation"
  },
  {
    id: 5,
    date: "October 9, 2024",
    title: "In a high-stakes business litigation case, our legal team secured a multi-million-dollar settlement.",
    author: {
      name: "Hussaini Legal Group",
      logo: borderPicture,
      readTime: "5min read",
      publishDate: "Sep, 23 - 2022"
    },
    image: newClient,
    slug: "business-litigation-multi-million-settlement"
  }
];