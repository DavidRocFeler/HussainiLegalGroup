import { ArticleHighlightItem } from "@/types/article";
import AboutCover from "@/assets/AboutCover.jpg";
import ArticleCoverPicture from "@/assets/ArticleCoverPicture.jpg";
import CaseStudyCover from "@/assets/CaseStudyCover.jpg";

export const booksMock: ArticleHighlightItem[] = [
  {
    id: 1,
    category: 'books' as any,
    title: "Encyclopedia of Syrian Civil Law",
    note: "A comprehensive 3-volume encyclopedia covering Syrian civil law.",
    date: "2002-01-01",
    slug: "encyclopedia-of-syrian-civil-law",
    picture: AboutCover,
    label: "Books",
    subtitleFirst: "About this Book",
    descripFirstFirst: "The Encyclopedia of Syrian Civil Law is a landmark 3-volume reference work covering the full scope of Syrian civil law.",
    descripSecondFirst: "It serves as an essential resource for legal practitioners, academics, and institutions operating within the Syrian legal framework.",
    subtitleSecond: "Author",
    descripFirstSecond: "Written by Adeeb Hussaini, founder of Hussaini Legal Group, with over 30 years of legal expertise.",
  },
  {
    id: 2,
    category: 'books' as any,
    title: "Evidence Law in Civil and Commercial Matters",
    note: "A 2-volume reference on evidence law in civil and commercial matters.",
    date: "2009-01-01",
    slug: "evidence-law-civil-commercial-matters",
    picture: ArticleCoverPicture,
    label: "Books",
    subtitleFirst: "About this Book",
    descripFirstFirst: "A comprehensive 2-volume work on evidence law applicable to civil and commercial disputes.",
    descripSecondFirst: "This reference provides in-depth analysis of evidentiary rules and their practical application in Syrian courts.",
    subtitleSecond: "Author",
    descripFirstSecond: "Written by Adeeb Hussaini, founder of Hussaini Legal Group.",
  },
  {
    id: 3,
    category: 'books' as any,
    title: "BOT Contracts",
    note: "An in-depth analysis of Build-Operate-Transfer contracts.",
    date: "2010-01-01",
    slug: "bot-contracts",
    picture: CaseStudyCover,
    label: "Books",
    subtitleFirst: "About this Book",
    descripFirstFirst: "An in-depth analysis of Build-Operate-Transfer (BOT) contracts and their legal implications in infrastructure projects.",
    descripSecondFirst: "This book examines BOT frameworks across multiple jurisdictions, with a focus on Middle Eastern markets.",
    subtitleSecond: "Author",
    descripFirstSecond: "Written by Adeeb Hussaini, founder of Hussaini Legal Group.",
  },
];