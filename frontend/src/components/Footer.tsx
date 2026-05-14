import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Logo from './ui/Logo';
import { getFooterSections, getSocialMediaConfig } from '@/queries/footerQuery'
import { FooterSection, SocialMediaLink } from '@/types/footer';
import FooterNewsletter from './FooterNewsLetter';

export const revalidate = false;

const Footer = async () => {
  const currentYear = new Date().getFullYear();

  let footerSections: FooterSection[] = [];
  let socialMedias: SocialMediaLink[] = [];

  try {
    [socialMedias, footerSections] = await Promise.all([
      getSocialMediaConfig(),
      getFooterSections()
    ]);
  } catch (error) {}

  const locationsSection = footerSections.find(section => section.type === 'locations');
  const contactSection = footerSections.find(section => section.type === 'contact');

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.50',
        pb: { xs: 3, md: 2 },
        pt: { xs: 6, md: 4 },
      }}
    >
      <Container maxWidth={false} sx={{ width: '100%', position: 'relative' }}>

        <Box sx={{
          position: 'absolute',
          left: '4.8rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: { xs: 'none', desktopMid: 'flex' },
        }}>
          <Logo />
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', desktopMid: 'row' },
          justifyContent: { xs: 'center', desktopMid: 'space-evenly' },
          alignItems: { xs: 'center', desktopMid: 'flex-start' },
          gap: { xs: 4, desktopMid: 0 },
          textAlign: { xs: 'center', desktopMid: 'left' },
        }}>

          {/* LOGO MOBILE */}
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 'fit-content', justifyContent: 'center' }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: { xs: 1, desktopMid: 0 },
              }}>
                <Logo />
              </Box>
            </Box>
          </Box>

          {/* LOCATIONS */}
          {locationsSection && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', desktopMid: 'flex-start' } }}>
              <Box sx={{
                textAlign: { xs: 'center', desktopMid: 'left' },
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', desktopMid: 'flex-start' },
              }}>
                <Typography variant="h6" mb={2} sx={{ textAlign: { xs: 'center', desktopMid: 'left' } }}>
                  {locationsSection.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: { xs: 'center', desktopMid: 'flex-start' } }}>
                  {locationsSection.items.map((location, index) => (
                    <Typography variant="body2" key={index} sx={{ textAlign: { xs: 'center', desktopMid: 'left' } }}>
                      {location}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          )}

          {/* CONTACT */}
          {contactSection && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', desktopMid: 'flex-start' } }}>
              <Box sx={{
                textAlign: { xs: 'center', desktopMid: 'left' },
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', desktopMid: 'flex-start' },
              }}>
                <Typography variant="h6" mb={2} sx={{ textAlign: { xs: 'center', desktopMid: 'left' } }}>
                  {contactSection.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: { xs: 'center', desktopMid: 'flex-start' } }}>
                  {contactSection.items.map((contactInfo, index) => (
                    <Typography key={index} variant="body2" sx={{ textAlign: { xs: 'center', desktopMid: 'left' } }}>
                      {contactInfo}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          )}

          {/* NEWSLETTER */}
          <FooterNewsletter socialMedias={socialMedias} />

        </Box>

        <Box sx={{ mt: 2, mr: { xs: 0, desktopMid: 7 }, pt: 2, textAlign: { xs: 'center', desktopMid: 'right' } }}>
          <Typography sx={{ fontSize: '0.9rem', fontFamily: 'Inter', color: 'brand.whiteText' }}>
            © {currentYear} All Rights Reserved.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;