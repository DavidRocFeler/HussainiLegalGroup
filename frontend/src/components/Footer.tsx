import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link';
import { footerMock } from '@/mock/footer.mock';
import Logo from './ui/Logo';
import SocialMedias from './ui/SocialMedias'
import { getFooterSections, getSocialMediaConfig } from '@/queries/footerQuery'
import { FooterSection, SocialMediaLink } from '@/types/footer';

export const revalidate = false; 

const Footer =  async () => {

  const currentYear = new Date().getFullYear();
  
  let footerSections: FooterSection[] = [];
  let socialMedias: SocialMediaLink[] = [];
  
  try {
    [socialMedias, footerSections] = await Promise.all([
      getSocialMediaConfig(),
      getFooterSections()
    ]);    
  } catch (error) {
  }

  const defaultLocations = {
    type: 'locations' as const,
    title: footerMock.sections.locations.title,
    items: footerMock.sections.locations.items,
    isActive: true
  };
  
  const defaultContact = {
    type: 'contact' as const,
    title: footerMock.sections.contact.title,
    items: footerMock.sections.contact.items,
    isActive: true
  };
  
  const locationsSection = footerSections.find(section => section.type === 'locations') || defaultLocations;
  const contactSection = footerSections.find(section => section.type === 'contact') || defaultContact;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.50',
        pb: {
          xs: 3,
          md: 2
        },
        pt: { xs: 6, md: 4 }, 
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
              position: 'absolute',
              left: '4.8rem', 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              display: {
                xs: 'none',
                desktopMid: 'flex',
              },
            }}
          >
              <Logo/>
          </Box>
          
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: {
                xs: 'column',
                desktopMid: 'row',
              },
              justifyContent: {
                xs: 'center',
                desktopMid: 'space-evenly',
              },
              alignItems: {
                xs: 'center',
                desktopMid: 'flex-start',
              },
              gap: { 
                xs: 4,  
                desktopMid: 0,
              },
              textAlign: {
                xs: 'center',
                desktopMid: 'left',
              },
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
                      xs: 1,
                      desktopMid: 0,
                    },
                  }}
                >
                  <Logo/>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  xs: 'center',
                  desktopMid: 'flex-start',
                },
              }}
            >
              <Box sx={{
                  textAlign: {
                    xs: 'center',
                    desktopMid: 'left',
                  },
                  width: 'fit-content', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: {
                    xs: 'center',
                    desktopMid: 'flex-start',
                  },
              }}>
                <Typography
                  variant="h6"
                  mb={2} 
                  sx={{
                    textAlign: {
                      xs: 'center',
                      desktopMid: 'left',
                    },
                  }}
                >
                  {footerMock.sections.locations.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1, 
                    alignItems: {
                      xs: 'center',
                      desktopMid: 'flex-start',
                    },
                  }}
                >
                  {locationsSection.items.map((location, index) => (
                    <Typography
                      variant="body2"
                      key={index}
                      sx={{
                        textAlign: {
                          xs: 'center',
                          desktopMid: 'left',
                        },
                      }}
                    >
                      {location}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  xs: 'center',
                  desktopMid: 'flex-start',
                },
              }}
            >
              <Box sx={{
                textAlign: {
                  xs: 'center',
                  desktopMid: 'left',
                },
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  xs: 'center',
                  desktopMid: 'flex-start',
                },
              }}>
                <Typography
                  variant="h6"
                  mb={2} 
                  sx={{
                    textAlign: {
                      xs: 'center',
                      desktopMid: 'left',
                    },
                  }}
                >
                  {footerMock.sections.contact.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1, 
                    alignItems: {
                      xs: 'center',
                      desktopMid: 'flex-start',
                    },
                  }}
                >
                  {contactSection.items.map((contactInfo, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        textAlign: {
                          xs: 'center',
                          desktopMid: 'left',
                        },
                      }}
                    >
                      {contactInfo}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  xs: 'center',
                  desktopMid: 'flex-start',
                },
              }}
            >
              <Box
                sx={{
                  width: 'fit-content', 
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: {
                    xs: 'center',
                    desktopMid: 'left',
                  },
                  alignItems: {
                    xs: 'center',
                    desktopMid: 'flex-start',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  mb={2} 
                  sx={{
                    textAlign: {
                      xs: 'center',
                      desktopMid: 'left',
                    },
                  }}
                >
                  {footerMock.sections.newsletter.title}
                </Typography>
                <Typography
                  variant='body2'
                  mb={4} 
                  sx={{
                    width: {
                      xs: 'auto',
                      desktopMid: '20rem', 
                    },
                    textAlign: {
                      xs: 'center',
                      desktopMid: 'left',
                    },
                  }}
                >
                  {footerMock.sections.newsletter.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: {
                      xs: 'center',
                      desktopMid: 'flex-start',
                    },
                    mb: 3, 
                  }}
                >
                  <Link
                    href='/subscribe'
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    <Button
                    variant='buttonSubscribe'
                    >
                      {footerMock.sections.newsletter.buttonText}
                    </Button>
                  </Link>
                </Box>
                
                <SocialMedias socialMedias={socialMedias} />
                
              </Box>
            </Box>
          </Box>

        <Box
          sx={{
            mt: 2, 
            mr: {
              xs: 0,
              desktopMid: 7,
            },
            pt: 2,
            textAlign: {
              xs: 'center',
              desktopMid: 'right',
            },
          }}
        >
         <Typography
          sx={{
            fontSize: '0.9rem',
            fontFamily: 'Inter',
            color: 'brand.whiteText',
          }}
        >
          © {currentYear} All Rights Reserved.
        </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;