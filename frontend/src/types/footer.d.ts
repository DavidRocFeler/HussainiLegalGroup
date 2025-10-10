import { ComponentType } from "react";

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

export interface SocialMediaProps {
  href: string;
  icon: ComponentType;
  color?: string;
  borderColor?: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  order: number;
  isActive: boolean;
}

export interface SocialMediaConfig {
id: string;
title: string;
socialLinks: SocialMediaLink[];
isActive: boolean;
}

export interface FooterSection {
  type: 'locations' | 'contact';
  title: string;
  items: string[];
  isActive: boolean;
}
