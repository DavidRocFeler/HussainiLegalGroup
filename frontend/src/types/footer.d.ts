export interface FooterSection {
  title: string;
  items: string[];
}

export interface NewsletterSection {
  title: string;
  description: string;
  buttonText: string;
}

export interface FooterInfo {
  sections: {
    locations: {
      title: string;
      items: string[];
    };
    contact: {
      title: string;
      items: string[];
    };
    newsletter: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
  copyright: string;
  companyName: string;
}
