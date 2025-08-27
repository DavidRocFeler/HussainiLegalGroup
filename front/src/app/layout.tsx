import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hussaini Legal Group",
  description: "Web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>
          <Header />
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
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}