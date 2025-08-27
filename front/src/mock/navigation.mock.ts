import { Navigation } from "@/types/header.types";

export const navigationMock: Navigation = {
  en: [
    { name: "About Us", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
  ar: [
    { name: "من نحن", href: "/" },
    { name: "مجالات الخبرة", href: "/expertise" },
    { name: "الرؤى والأفكار", href: "/insights" },
    { name: "الوظائف", href: "/careers" },
    { name: "اتصل بنا", href: "/contact" },
  ],
};