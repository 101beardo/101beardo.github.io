'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Reveal from './motion/Reveal';
import { resumeLink } from '../data/links';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const Header = () => {
  const handleResumeClick = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <Box
      id="header"
      data-testid="home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '85vh',
        pt: { xs: '120px', md: '140px' },
        pb: '50px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      {/* Background glowing circle for premium aesthetic */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '300px', md: '600px' },
          height: { xs: '300px', md: '600px' },
          background: (theme) => theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(9, 9, 14, 0) 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Intro Tag */}
        <Reveal>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.2rem' },
            }}
          >
            Hello, I'm
          </Typography>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.1}>
          <Typography
            variant="h1"
            data-testid="user-detail-name"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2,
              background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tarun Sharma
          </Typography>
        </Reveal>

        {/* Typewriter text */}
        <Reveal delay={0.2}>
          <Box
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2rem' },
              fontWeight: 600,
              color: 'text.primary',
              height: '40px', // Prevents layout shifting
              mb: 4,
            }}
          >
            <Typewriter
              options={{
                strings: [
                  'React.js Frontend Developer.',
                  'Next.js Specialist.',
                  'Problem Solver.',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 80,
              }}
            />
          </Box>
        </Reveal>

        {/* Short Bio */}
        <Reveal delay={0.3}>
          <Typography
            data-testid="user-detail-intro"
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              margin: '0 auto',
              mb: 5,
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
              textAlign: 'center',
              lineHeight: 1.8,
              px: { xs: 2, sm: 4 },
            }}
          >
            A React.js Frontend Web Developer with 3 years of experience delivering production-grade SaaS platforms, enterprise web applications, and cross-platform mobile apps. Most recently at Think201, where I shipped a secure, real-time React/Next.js enterprise platform. Now looking for my next Frontend Web Developer role at a product-based company.
          </Typography>
        </Reveal>

        {/* Call to Actions */}
        <Reveal delay={0.4}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{
              width: '100%',
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button
              variant="contained"
              onClick={handleResumeClick}
              data-testid="resume-link-2"
              sx={{
                background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 700,
                padding: { xs: '12px 28px', sm: '14px 40px' },
                borderRadius: '30px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
                },
              }}
            >
              ⤓ Download Resume
            </Button>
            <Button
              variant="outlined"
              href="#contact"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                fontSize: '1rem',
                fontWeight: 600,
                padding: { xs: '12px 28px', sm: '14px 40px' },
                borderRadius: '30px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(99, 102, 241, 0.08)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Let's Talk
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Header;
