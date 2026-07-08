'use client';
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Reveal from './motion/Reveal';

const About = () => {
  return (
    <Box
      id="about"
      data-testid="about"
      className="about section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(20, 20, 28, 0.3)' : 'rgba(99, 102, 241, 0.03)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
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
        <Reveal>
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
            About Me
          </Typography>
        </Reveal>

        {/* Content Box using Grid for perfect horizontal centering */}
        <Grid container spacing={6} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          {/* Bio text column — always LEFT on desktop (order 1), top on mobile */}
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              order: { xs: 1, md: 1 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Reveal delay={0.1}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.8,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Hello Everyone, I am <strong>Tarun Sharma</strong>, a React.js Frontend Web Developer and Next.js Specialist based in Bangalore, India.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                I have a strong track record of engineering scalable SaaS web platforms and cross-platform mobile applications. Most recently, I spent nearly 3 years at Think201, where I specialized in building secure frontend architectures using React, Next.js, and TypeScript, combined with robust state management and real-time WebSockets integration. My experience spans working with international product teams, integrating secure authentication workflows, implementing automated testing pipelines, and deploying PWAs and hybrid mobile apps. I am now looking for my next Frontend Web Developer role at a product-based company, driven by structural problem-solving and clean architecture, always striving to deliver smooth, accessible user experiences.
              </Typography>
            </Reveal>
          </Grid>

          {/* Profile Picture column — always RIGHT on desktop (order 2), bottom on mobile */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              order: { xs: 2, md: 2 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Reveal delay={0.2} y={32}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '350px',
                  position: 'relative',
                  borderRadius: '24px',
                  padding: '8px',
                  background: (theme) => theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(6, 182, 212, 0.25))'
                    : 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))',
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0 12px 40px rgba(0, 0, 0, 0.5)'
                    : '0 12px 30px rgba(99, 102, 241, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    background: (theme) => theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.35), rgba(6, 182, 212, 0.35))'
                      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(6, 182, 212, 0.25))',
                  },
                }}
              >
                <Box
                  component="img"
                  className="home-img"
                  src="/assets/me.jpg"
                  alt="Tarun Sharma"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
