'use client';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import ContactFormHeader from '@/components/contact/ContactFormHeader';
import ContactFormBody from '@/components/contact/ContactFormBody';

const Contact = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: 'primary.main',
        py: {
          xs: '4rem',
          md: '6rem' 
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
        px={{ xs: 2, md: 8 }}
      >
        <Card
          sx={{
            maxWidth: 1600,
            borderRadius: 3,
            boxShadow: 3,
            bgcolor: 'white'
          }}
        >
          <CardContent sx={{ 
            p: { 
              xs: 3, 
              md: 5,
              } 
              }}>
            <ContactFormHeader />
            <ContactFormBody />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;