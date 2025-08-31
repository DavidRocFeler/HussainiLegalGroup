'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logoHussini from '@/assets/LogoHussaini.png'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navigationMock } from '@/mock/navigation.mock';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = navigationMock;

  const router = useRouter()
  const handleRedirectHome = () => {
    router.push('/')
  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar 
      component="nav" 
      position="static"
      suppressHydrationWarning 
      sx={{ 
        color: 'white',
        position: 'fixed',
        backgroundColor: '#7E1A19', 
        borderBottom: 'white 1px solid',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: {
          xs: '0.8rem 1rem',   
          md: '2.3rem 4.5rem 2.3rem 5rem' 
        },
        transition: 'height 0.3s ease-in-out',
        height: mobileOpen ? 'auto' : 'auto',
        overflow: 'hidden',
        zIndex: 9999, 
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
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 !important',
            margin: '0 !important',
            minHeight: 'auto !important',
            alignItems: 'center',
          }}
        >
          {/* Logo and Company Name */}
          <Box
            sx={{ 
              display: 'flex',
              cursor: 'pointer',
              flexDirection: 'column',
              alignItems: 'center',
              fontWeight: 'normal', 
              width: 'fit-content',
            }}
          >
            <Image 
              onClick={handleRedirectHome}
              src={logoHussini} 
              alt="Company Logo" 
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
              HUSSAINI LEGAL GROUP
            </Typography>
          </Box>

          {/* Desktop Navigation - Aligned with logo */}
          <Box 
            sx={{ 
              width: 'fit-content',
              gap: '0rem',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center', 
              justifyContent: 'center',
            }}
          >
            {navItems
              .filter(item => item.name !== "Contact Us")
              .map((item) => (
                <Button 
                  key={item.name} 
                  href={item.href}
                  sx={{ 
                    color: 'white', 
                    minWidth: 'auto',
                    padding: '8px 10px',
                    borderRadius: '0px',
                    fontSize: '1.1rem',
                    mx: 1,
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      color: 'white'
                    }
                  }}
                >
                   <Typography 
                   variant="h1" 
                   component="span"
                   sx={{
                    fontSize: '1rem',    
                    fontWeight: 300,
                    '@media (max-width:899px)': {
                      fontSize: '1.5rem',
                      lineHeight: '1.5rem',  
                    },
                   }}
                   >
                    {item.name}
                  </Typography>
                </Button>
              ))}
          </Box>

          {/* Right section - Contact and Hamburger */}
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              margin: '0 !important',
              padding: '0 !important',
            }}
          >
            {/* Contact button - Only on desktop */}
            <Button 
              href="/contact"
              sx={{ 
                display: { xs: 'none', md: 'block' },
                fontSize: '1rem',    
                fontWeight: 300,
                fontFamily: '"Merriweather", serif',
                color: 'white',
                border: '1px solid white',
                padding: '0.6rem 2rem',
                backgroundColor: 'transparent',
                minWidth: 'auto',
                transition: 'all 0.3s ease-in-out',
                borderRadius: '0px',
                '&:hover': { 
                  backgroundColor: '#AB854B',
                  borderColor: '#AB854B',
                  color: 'white',
                }
              }}
            >
              Contact Us
            </Button>

            {/* Hamburger/Close Button - Only on mobile */}
            <IconButton
              color="inherit"
              aria-label="toggle menu"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                color: 'white',
              }}
            >
              {mobileOpen ? 
              <CloseIcon
              sx={{
                fontSize: '2.5rem'
              }}
              /> : 
              <MenuIcon 
              sx={{
                fontSize: '2.5rem'
              }}
              />}
            </IconButton>
          </Box>
        </Toolbar>

        <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
          <Box 
            sx={{ 
              textAlign: 'center', 
              padding: '20px 0',
              backgroundColor: '#7E1A19',
              color: 'white'
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem 
                  key={item.name} 
                  component="a" 
                  href={item.href} 
                  disablePadding
                  sx={{ 
                    justifyContent: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText 
                    primary={item.name}
                    slotProps={{
                      primary: {
                        variant: "h2",
                        sx: {
                          fontFamily: '"Exo", sans-serif',
                          fontSize: '1.125rem',
                          fontWeight: 400,
                          textAlign: 'center',
                          color: 'white',
                        }
                      }
                    }}
                    sx={{ 
                      padding: '12px 0'
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Collapse>
      </Container>
    </AppBar>
  );
};

export default Header;