export interface ExpertiseItem {
    title: string;
    href: string;
  }
  
  export interface ExpertiseSection {
    title: string;
    items: ExpertiseItem[];
  }
  
export interface SectionExpertiseProps {
    heroExpertiseContent: HeroTextContent[];
  }
  
  export type ExpertiseAndSectorsData = ExpertiseSection[];