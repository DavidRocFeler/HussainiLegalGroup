'use client';

import { useState } from 'react';
import Image from 'next/image';
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
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: {
          xs: '1.5rem 1rem',   
          md: '1.5rem 3.5rem' 
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
        {/* First line: Logo, hamburger menu and contact button */}
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
              flexDirection: 'column',
              alignItems: 'center',
              fontWeight: 'normal', 
              width: 'fit-content',
            }}
          >
            <Image 
              src="/logoHussaini.png" 
              alt="Company Logo" 
              width={50} 
              height={35} 
              priority
            />
            <Typography
              component="span"
              sx={{
                fontSize: '0.7rem',
                marginTop: '0.1rem',
                lineHeight: 1.2
              }}
            >      
              HUSSAINI LEGAL GROUP
            </Typography>
          </Box>

          {/* Desktop Navigation - Aligned with logo */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center', 
              justifyContent: 'center',
              flexGrow: 1,
              margin: '0 !important',
              padding: '0 !important',
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
                    padding: '8px 16px',
                    borderRadius: '0px',
                    mx: 1,
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      color: 'white'
                    }
                  }}
                >
                  {item.name}
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
                color: 'white',
                border: '1px solid white',
                padding: '0.3rem 1.5rem',
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
                padding: '8px',
                margin: '0 !important'
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>

        {/* Expandable content - Only visible when mobileOpen is true */}
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
                    sx={{ 
                      textAlign: 'center',
                      color: 'white',
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