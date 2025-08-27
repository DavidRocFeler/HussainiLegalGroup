'use client';
import { useState } from 'react';
import { Container } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Language } from '@/types/header.types';
import Header from '@/components/Header';
import theme from "@/theme/pallete";
import Footer from '@/components/Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header language={language} toggleLanguage={toggleLanguage} />
          <Container
            component="main"
            maxWidth="lg"
            sx={{
              py: 4,
              minHeight: '80vh'
            }}
          >
            {children}
          </Container>
          <Footer language={language} />
        </ThemeProvider>
      </AppRouterCacheProvider>
    </div>
  );
};

export default ClientLayout;