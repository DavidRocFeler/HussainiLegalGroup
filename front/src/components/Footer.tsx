import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { footerMock } from '@/mock/footer.mock';
import React from 'react';
import { FooterProps } from '@/types/footer.types';


const Footer: React.FC<FooterProps> = ({ language }) => {
  const footerData = footerMock[language];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#24363A',
        color: 'white',
        padding: {
          md: '3rem 3.5rem' 
        },
        marginTop: 'auto',
      }}
    >
      <Container
        sx={{
          width: '100%',
          padding: '0 !important',
          margin: '0 !important',
          maxWidth: '100% !important',
        }}
      >
        <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, lg: 2.5 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'fit-content',
                marginX: { xs: 'auto', lg: 0 }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src="/logoHussaini.png"
                  alt="Logo"
                  width={50}
                  height={35}
                  priority
                />
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.7rem',
                    marginTop: '0.2rem',
                    lineHeight: 1.2,
                    color: 'white'
                  }}
                >
                  {footerData.companyName}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 2 }}>
            <Box sx={{
                textAlign: { xs: 'center', lg: 'left' },
                width: 'fit-content',
                marginX: { xs: 'auto', lg: 0 }
            }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  mb: 2
                }}
              >
                {footerData.sections.locations.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {footerData.sections.locations.items.map((location, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: '1rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}
                  >
                    {location}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 2 }}>
            <Box sx={{
              textAlign: { xs: 'center', lg: 'left' },
              width: 'fit-content',
              marginX: { xs: 'auto', lg: 0 }
            }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  mb: 2
                }}
              >
                {footerData.sections.contact.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {footerData.sections.contact.items.map((contactInfo, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}
                  >
                    {contactInfo}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 3.5 }}>
            <Box
              sx={{
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', lg: 'flex-start' },
                textAlign: { xs: 'center', lg: 'left' },
                marginX: { xs: 'auto', lg: 0 },
                marginLeft: { lg: 'auto' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    mb: 2,
                }}
              >
                {footerData.sections.newsletter.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  width: '17rem',
                  color: 'rgba(255,255,255,0.8)',
                  mb: 3,
                }}
              >
                {footerData.sections.newsletter.description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  mb: 3
                }}
              >
                <Button
                  sx={{
                    backgroundColor: '#D6D0B4',
                    color: '#324344',
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    borderRadius: '0px',
                    textTransform: 'none',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: 0,
                    '&:hover': {
                      backgroundColor: '#B38F59',
                      color: 'white'
                    }
                  }}
                >
                  {footerData.sections.newsletter.buttonText}
                </Button>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                }}
              >
                <IconButton
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    zIndex: 0,
                    '&:hover': {
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.6)'
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    zIndex: 0,
                    '&:hover': {
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.6)'
                    }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            textAlign: 'right'
          }}
        >
          <Typography
            sx={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.6)'
            }}
          >
            {footerData.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;