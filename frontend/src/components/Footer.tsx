import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import { footerMock } from '@/mock/footer.mock';
import Logo from './ui/Logo';

const Footer = () => {
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
                  {footerMock.sections.locations.items.map((location, index) => (
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
                  {footerMock.sections.contact.items.map((contactInfo, index) => (
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
                
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2, 
                    justifyContent: {
                      xs: 'center',
                      desktopMid: 'flex-start',
                    },
                  }}
                >
                  <Link
                  href='https://www.linkedin.com'
                  >
                  <IconButton
                    sx={{
                      cursor: 'pointer',
                      color: 'primary.main',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      borderRadius: '50%',
                      width: '40px', 
                      height: '40px',
                      zIndex: 0,
                      '&:hover': {
                        color: 'whiteText',
                        borderColor: 'brand.whiteText'
                      }
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  </Link>
                  <Link
                  href='https://x.com/?logout=1757446963087'
                  >
                  <IconButton
                    sx={{
                      cursor: 'pointer',
                      color: 'primary.main',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      borderRadius: '50%',
                      width: '40px', 
                      height: '40px',
                      zIndex: 0,
                      '&:hover': {
                        color: 'whiteText',
                        borderColor: 'brand.whiteText'
                      }
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  </Link>
                </Box>
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
            {footerMock.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;