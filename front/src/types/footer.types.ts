export interface FooterSection {
    title: string;
    items: string[];
  }
  
  export interface NewsletterSection {
    title: string;
    description: string;
    buttonText: string;
  }
  
  export interface FooterLanguageData {
    sections: {
      locations: FooterSection;
      contact: FooterSection;
      newsletter: NewsletterSection;
    };
    copyright: string;
    companyName: string;
  }
  
  export interface FooterData {
    en: FooterLanguageData;
    ar: FooterLanguageData;
  }
  
export interface FooterProps {
    language: Language;
  }

  export type Language = 'en' | 'ar';