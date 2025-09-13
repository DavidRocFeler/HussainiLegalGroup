export interface ExpertiseItem {
    title: string;
    href: string;
  }
  
  export interface ExpertiseSection {
    title: string;
    items: ExpertiseItem[];
  }
  
  export type ExpertiseAndSectorsData = ExpertiseSection[];