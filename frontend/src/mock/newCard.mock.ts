// mock/newsCard.mock.ts
import newResulting from '@/assets/NewCaseResulting.jpg';
import newHelper from '@/assets/NewCaseHelper.jpg';
import newClient from '@/assets/NewCaseClient.jpg';
import newBussisnes from '@/assets/NewBussisnes.jpg';
import { ArticleHighlightItem } from '@/types/article';

export const newsCardData: ArticleHighlightItem[] = [
  {
    id: 1,
    date: "October 9, 2024",
    title: "We helped a client navigate a divorce, achieving a fair division of assets",
    readtime: "5min read",
    picture: newResulting,
    slug: "client-divorce-fair-division-assets"
  },
  {
    id: 2,
    date: "May 30, 2022",
    title: "resulting in a complete dismissal of the case",
    readtime: "5min read",
    picture: newHelper,
    slug: "complete-dismissal-case"
  },
  {
    id: 3,
    date: "October 9, 2024",
    title: "A client injured in a major accident, securing a significant settlement that covered medical bills, lost wages, and long-term care.",
    readtime: "5min read",
    picture: newBussisnes,
    slug: "client-major-accident-settlement"
  },
  {
    id: 4,
    date: "October 9, 2024",
    title: "Facing criminal charges, resulting in a complete dismissal of the case after investigation.",
    readtime: "5min read",
    picture: newResulting,
    slug: "criminal-charges-dismissal-investigation"
  },
  {
    id: 5,
    date: "October 9, 2024",
    title: "In a high-stakes business litigation case, our legal team secured a multi-million-dollar settlement.",
    readtime: "5min read",
    picture: newClient,
    slug: "business-litigation-multi-million-settlement"
  }
];