'use client';

import { useState } from 'react';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Collapse from '@mui/material/Collapse'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navigationMock } from '@/mock/navigation.mock';
import Link from 'next/link';
import Logo from './ui/Logo';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = navigationMock;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCloseDrawer = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <AppBar 
      component="nav" 
      position="fixed"
      sx={{ 
        backgroundColor: 'brand.red', 
        borderBottom: 1,
        borderColor: 'primary.main',
        boxShadow: 0,
        px: {
          xs: 3,      
          md: 10    
        },
        py: {
          xs: 2,      
          md: 4.5    
        },
        pb: {
          xs: mobileOpen ? 0 : 2,
          md: 4.5
        },
        transition: 'height 0.3s ease-in-out',
        height: mobileOpen ? 'auto' : 'auto',
        overflow: 'hidden',
        zIndex: 8888, 
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: '100%',
          padding: 0,
          margin: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            padding: 0,
            margin: 0,
            minHeight: 'auto',
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
            <Link
            onClick={handleCloseDrawer}
            href='/' style={{ display: 'inline-block', textDecoration: 'none' }}>
              <Logo/>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box 
            sx={{ 
              width: 'fit-content',
              gap: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center', 
              justifyContent: 'center',
            }}
          >
            {navItems
              .filter(item => item.name !== "Contact Us")
              .map((item) => (
                <Link 
                  href={item.href} 
                  key={item.name} 
                >
                  <Button 
                    disableRipple={true}
                    sx={{
                      '&:hover': { 
                        backgroundColor: 'transparent', 
                        boxShadow: 'none', 
                      },
                    }}
                  >
                    <Typography 
                      variant="body1" 
                    >
                      {item.name}
                    </Typography>
                  </Button>
                </Link>
              ))}
          </Box>

          {/* Right section - Contact and Hamburger */}
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Contact button - Only on desktop */}
            <Link
              href='/contact'
              style={{
                textDecoration: 'none'
              }}
            >
              <Button 
                variant='transparentBorder'
                sx={{
                  display: {
                    xs: 'none',
                    md: 'block'
                  }
                }}
              >
                Contact Us
              </Button>
            </Link>
            
            {/* Hamburger/Close Button - Only on mobile */}
            <IconButton
              aria-label="toggle menu"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                color: 'primary.main',
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
                />
              }
            </IconButton>
          </Box>
        </Toolbar>

        <Collapse in={mobileOpen} timeout="auto" unmountOnExit
        sx={{
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto',
          '& .MuiCollapse-wrapper': {
            maxHeight: 'inherit',
          },
          '& .MuiCollapse-wrapperInner': {
            maxHeight: 'inherit',
          },
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, Opera */
          },
          msOverflowStyle: 'none',  /* IE and Edge */
          scrollbarWidth: 'none',  /* Firefox */
        }}
        >
          <Box 
            sx={{ 
              textAlign: 'center', 
              pt: 2.5,
              pb: 0, 
              mb: 0,
              color: 'primary.main',
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem 
                  key={item.name} 
                  disablePadding
                  sx={{ 
                    justifyContent: 'center',
                  }}
                >
                  <Link href={item.href}>
                    <Button
                      disableRipple={true}
                      onClick={handleDrawerToggle}
                      sx={{ 
                        py: 1.5,  
                        '&:hover': {
                          backgroundColor: 'transparent', 
                          boxShadow: 'none', 
                        }
                      }}
                    >
                      <Typography variant='body1'>
                        {item.name}
                      </Typography>
                    </Button>
                  </Link>
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