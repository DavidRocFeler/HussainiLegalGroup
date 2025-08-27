export interface NavItem {
    name: string;
    href: string;
  }
  
  export interface Navigation {
    ar: NavItem[];
    en: NavItem[];
  }
  
  export type Language = 'ar' | 'en';