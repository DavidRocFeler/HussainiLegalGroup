import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import logoHussini from '@/assets/LogoHussaini.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { footerMock } from '@/mock/footer.mock';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#24363A',
        color: 'white',
        padding: '3rem 0rem 1rem 0rem',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          position: 'relative',
        }}
      >
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              left: '4.8rem',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '@media (max-width:899px)': {
                display: 'none'
              },
              '@media (max-width:1000px)': {
                left: '3.5rem'
              },
            }}
          >
            <Image
              src="/logoHussaini.png"
              alt="Logo"
              width={55}
              height={50}
              priority
            />
              <Typography
                component="span"
                sx={{
                fontSize: '0.6rem',
                marginTop: '0.2rem',
                lineHeight: 1.2,
                fontWeight: 1000
                }}
              >
                {footerMock.companyName}
              </Typography>
          </Box>
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-evenly' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 4, md: 0 },
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'fit-content',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: {
                    xs: 100,
                    md: 0
                  },
                }}
              >
                <Image
                  src={logoHussini}
                  alt="Logo"
                  width={55}
                  height={50}
                  priority
                />
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.6rem',
                    marginTop: '0.2rem',
                    lineHeight: 1.2,
                    fontWeight: 1000
                  }}
                >
                  {footerMock.companyName}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box sx={{
                textAlign: { xs: 'center', md: 'left' },
                width: 'fit-content',
            }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2
                }}
              >
                {footerMock.sections.locations.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {footerMock.sections.locations.items.map((location, index) => (
                  <Typography
                    variant="h3"
                    key={index}
                  >
                    {location}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box>
            <Box sx={{
              textAlign: { xs: 'center', md: 'left' },
              width: 'fit-content',
            }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2
                }}
              >
                {footerMock.sections.contact.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,

                }}
              >
                {footerMock.sections.contact.items.map((contactInfo, index) => (
                  <Typography
                    key={index}
                    variant="h3"
                  >
                    {contactInfo}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h4"
                sx={{     
                    fontWeight: 'bold',
                    mb: 2,
                }}
              >
                {footerMock.sections.newsletter.title}
              </Typography>
              <Typography
                variant='h3'
                sx={{
                  width: '17rem',
                  mb: 3,
                }}
              >
                {footerMock.sections.newsletter.description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 3
                }}
              >
                <Button
                  sx={{
                    backgroundColor: '#D6D0B4',
                    color: '#324344',
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    fontFamily: '"Merriweather", serif', 
                    fontWeight: 500,
                    borderRadius: '0px',
                    textTransform: 'none',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: 0,
                    '&:hover': {
                      backgroundColor: '#B38F59',
                      color: 'white'
                    },
                    '@media (max-width:899px)': {
                      fontSize: '1.2rem', 
                    },
                  }} 
                >
                  {footerMock.sections.newsletter.buttonText}
                </Button>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
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
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pr: {
              xs: 0,
              md: 10
            },
            pt: 2,
            textAlign: {
              xs: 'center',
              md: 'right'
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '1.25rem',
                md: '1rem'
              },
              fontFamily: 'var(--font-family-Font-4, Inter)',
              color: 'white',
            }}
          >
            {footerMock.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;