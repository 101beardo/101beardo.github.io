'use client';
import React, { useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Container, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatePresence, motion } from 'framer-motion';
import { ColorModeContext } from './ThemeRegistry';
import { resumeLink } from '../data/links';
import { OPEN_COMMAND_PALETTE_EVENT } from './CommandPalette';

const navItems = [
  { label: 'Home', href: '#header' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const colorMode = useContext(ColorModeContext);
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleResumeClick = () => {
    window.open(resumeLink, '_blank');
  };

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById(hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${hash}`);
    }
  };

  return (
    <Box sx={{ display: 'flex' }} data-testid="nav-menu">
      <AppBar 
        position="fixed" 
        sx={{
          background: (theme) => theme.palette.mode === 'dark' ? 'rgba(9, 9, 14, 0.75)' : 'rgba(248, 250, 252, 0.75)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(99, 102, 241, 0.08)',
          boxShadow: 'none',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center', height: 70 }}>
            {/* Logo / Home link */}
            <Box
              component="a"
              href="/#header"
              onClick={(e) => handleNavClick(e, '#header')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '1.2rem', sm: '1.4rem' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                letterSpacing: '1px',
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s',
              }}
            >
              TS
            </Box>

            {/* Navigation and Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 4 } }}>
              {/* Desktop Navigation Links */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Box
                    key={item.label}
                    component="a"
                    href={`/${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'text.secondary',
                      fontSize: '1rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      position: 'relative',
                      height: '100%',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: '-4px',
                        left: '0',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
                
                {/* Resume Button */}
                <Box
                  component="a"
                  onClick={handleResumeClick}
                  data-testid="resume-link-1"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'secondary.main',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '1.5px solid',
                    borderColor: 'secondary.main',
                    borderRadius: '30px', // Pill styled
                    padding: '6px 18px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      backgroundColor: 'rgba(6, 182, 212, 0.1)',
                      boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)',
                    },
                  }}
                >
                  ⤓ Resume
                </Box>
              </Box>

              {/* Command Palette Trigger */}
              <Tooltip title="Search (⌘K)" arrow>
                <Box
                  component="button"
                  onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))}
                  aria-label="Open command palette"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    color: 'text.secondary',
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    border: '1px solid',
                    borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                    borderRadius: '8px',
                    padding: { xs: '8px', sm: '6px 10px' },
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s',
                    '&:hover': {
                      color: 'primary.main',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <SearchIcon sx={{ fontSize: '1.15rem' }} />
                  <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, fontSize: '0.85rem', fontWeight: 600 }}>
                    ⌘K
                  </Box>
                </Box>
              </Tooltip>

              {/* Theme Toggle Switcher */}
              <Tooltip title={colorMode.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'} arrow>
                <IconButton 
                  onClick={colorMode.toggleColorMode} 
                  sx={{ 
                    color: 'primary.main',
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(77, 181, 255, 0.08)' : 'rgba(77, 181, 255, 0.12)',
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(77, 181, 255, 0.16)' : 'rgba(77, 181, 255, 0.2)',
                    },
                    borderRadius: '8px',
                    p: '8px',
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={colorMode.mode}
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: 'flex' }}
                    >
                      {colorMode.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </motion.span>
                  </AnimatePresence>
                </IconButton>
              </Tooltip>

              {/* Mobile Hamburger Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, color: 'primary.main', ml: 0.5 }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          root: { keepMounted: true },
          paper: {
            sx: {
              width: 250,
              background: (theme) => theme.palette.background.default,
              borderLeft: '1px solid',
              borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
              paddingTop: 8,
            },
          },
        }}
      >
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component="a"
                href={`/${item.href}`}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  handleDrawerToggle();
                }}
                sx={{
                  borderRadius: '8px',
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(77, 181, 255, 0.08)',
                  },
                }}
              >
                <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontSize: '1.1rem', fontWeight: 500 } } }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <ListItemButton
              onClick={() => {
                handleResumeClick();
                handleDrawerToggle();
              }}
              sx={{
                borderRadius: '30px', // Pill styled
                border: '1.5px solid',
                borderColor: 'secondary.main',
                color: 'secondary.main',
                textAlign: 'center',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                },
              }}
            >
              <ListItemText primary="⤓ Resume" slotProps={{ primary: { sx: { fontSize: '1.1rem', fontWeight: 600 } } }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
