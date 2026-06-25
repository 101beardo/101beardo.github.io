'use client';
import React from 'react';
import { Box, Typography, Container, Card, CardContent, IconButton, Tooltip } from '@mui/material';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
import { AiFillTwitterSquare } from 'react-icons/ai';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const socials = [
  { name: 'LinkedIn', icon: BsLinkedin, link: 'https://www.linkedin.com/in/tarun-sharma-93008a190/', color: '#0077b5' },
  { name: 'GitHub', icon: FaGithub, link: 'https://github.com/101beardo', color: '#ffffff' },
  { name: 'HackerRank', icon: SiHackerrank, link: 'https://www.hackerrank.com/_beardo_', color: '#2ec866' },
  { name: 'WhatsApp', icon: BsWhatsapp, link: 'https://wa.me/+916283837873', color: '#25d366' },
  { name: 'Twitter', icon: AiFillTwitterSquare, link: 'https://twitter.com/_beardo__', color: '#1da1f2' },
];

const Contact = () => {
  return (
    <Box
      id="contact"
      data-testid="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(20, 20, 28, 0.3)' : 'rgba(99, 102, 241, 0.03)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
            fontWeight: 800,
            mb: { xs: 6, md: 10 },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
            },
          }}
        >
          Contact
        </Typography>

        {/* Contact Info Flex Layout (avoiding Grid1 warnings) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 4,
            mb: 8,
          }}
        >
          {/* Phone Card */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                width: '100%',
                maxWidth: '350px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  borderColor: 'primary.main',
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0 12px 30px rgba(99, 102, 241, 0.15)'
                    : '0 12px 25px rgba(99, 102, 241, 0.08)',
                },
              }}
            >
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <PhoneIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                  Phone
                </Typography>
                <Typography
                  component="a"
                  href="tel:+916283837873"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                  }}
                >
                  +91 6283837873
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Email Card */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                width: '100%',
                maxWidth: '350px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  borderColor: 'primary.main',
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0 12px 30px rgba(99, 102, 241, 0.15)'
                    : '0 12px 25px rgba(99, 102, 241, 0.08)',
                },
              }}
            >
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <EmailIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                  Email
                </Typography>
                <Typography
                  component="a"
                  href="mailto:101tash101@gmail.com"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                  }}
                >
                  101tash101@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Social Icons Container */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4 },
            flexWrap: 'wrap',
          }}
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Tooltip key={social.name} title={social.name} arrow>
                <IconButton
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    width: { xs: 60, sm: 70 },
                    height: { xs: 60, sm: 70 },
                    backgroundColor: (theme) => theme.palette.background.paper,
                    border: '1px solid',
                    borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 4px 15px rgba(0, 0, 0, 0.3)'
                      : '0 4px 15px rgba(11, 25, 44, 0.05)',
                    color: 'text.secondary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: social.color,
                      transform: 'scale(1.15) rotate(5deg)',
                      boxShadow: `0 8px 25px ${social.color}40`,
                    },
                    '& svg': {
                      fontSize: { xs: '28px', sm: '32px' },
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
