import { Language } from "./navigation.types";

export interface HeaderProps {
    language: Language;
    toggleLanguage: () => void;
  }