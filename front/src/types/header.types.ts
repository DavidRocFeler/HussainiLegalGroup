export interface NavItem {
    name: string;
    href: string;
  }
  
  export interface Navigation {
    ar: NavItem[];
    en: NavItem[];
  }


export interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
}
  
  export type Language = 'ar' | 'en';