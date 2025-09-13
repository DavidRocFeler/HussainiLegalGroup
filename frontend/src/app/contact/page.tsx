import type { Metadata } from 'next'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import ContactFormHeader from '@/components/contact/ContactFormHeader';
import ContactFormBody from '@/components/contact/ContactFormBody';

export const metadata: Metadata = {
  title: 'Contact Us - International Law Firm',
  description: 'Get in touch with Hussaini Legal Group. Contact our international law offices in Miami, Amsterdam, and Damascus for expert legal counsel in corporate law, arbitration, and cross-border transactions.',
  keywords: ['contact law firm', 'legal consultation', 'international lawyers', 'law office contact', 'legal advice'],
  openGraph: {
    title: 'Contact Hussaini Legal Group',
    description: 'Reach our international law experts in Miami, Amsterdam, and Damascus',
    type: 'website',
  }
}

const Contact = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: 'primary.main',
        py: {
          xs: 8,
          md: 12
        },
        px: {
          xs: 0.1,
          md: 2
        },
        pt: {
          xs: 6,
          sm: 9,
          md: 12
        }
      }}
    >
      <Toolbar />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        py={{ xs: 2, md: 6 }}
        px={{ xs: 2, sm: 4, md: 8 }}
      >
        <Card
          sx={{
            maxWidth: 1600,
            borderRadius: 3,
            boxShadow: 0,
            bgcolor: 'brand.whiteText'
          }}
        >
          <CardContent sx={{ 
            py: { 
              xs: 3, 
              md: 5,
              },
            px: {
              xs: 3,
              md: 8
            } 
            }}
            >
            <ContactFormHeader />
            <ContactFormBody />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;