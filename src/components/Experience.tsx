'use client';
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Reveal from './motion/Reveal';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

interface EducationItem {
  course: string;
  institution: string;
  period: string;
  details: string;
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Software Engineer – Frontend',
    company: 'Think201',
    period: 'May 2023 – Apr 2026',
    points: [
      'Owned frontend development end-to-end for an NDA-protected enterprise SaaS platform (Next.js, TypeScript, TanStack Query) for a San Francisco-based client, from inception through production release.',
      'Cut redundant network requests by 60-80% by architecting TanStack Query caching, deduplication, and shared query state (SWR-pattern data synchronization), improving performance and reducing backend load.',
      'Built a 30+ component reusable UI library using Atomic Design and styled-components, accelerating feature delivery by 25-40% and reducing duplicate code and UI bugs.',
      'Engineered event-driven WebSocket updates for long-running document-parsing jobs, eliminating 2-3s polling delays and cutting status-check API traffic by 80-90%.',
      'Implemented secure authentication & authorization, including conditional MFA, role-based access control (RBAC), and protected/authenticated routing.',
      'Drove test coverage to ~80% using Cypress (E2E) and Mock Service Worker, integrating regression testing into the CI/CD pipeline before every release.',
      'Shipped a cross-platform React Native booking app (10,000+ downloads) for iOS, Android, and Web, with Razorpay payments, Google Sign-In, and Firebase notifications.',
      'Developed an AI-powered onboarding chatbot and an internal PWA prototype with full CRUD functionality extended to mobile via Capacitor.js.',
      "Led through team transitions — ran status calls in the project lead's absence, documented the project for new hires, and covered release week solo.",
      'Partnered daily with teammates across Belgrade, San Francisco, and Delhi using Agile/Scrum ceremonies to proactively sync priorities and prevent blockers before they hit delivery.',
      'Integrated Hotjar analytics to track user behavior and inform iterative UX improvements across the application.'
    ]
  }
];

const educationData: EducationItem[] = [
  {
    course: 'Full Stack Web Development (Full-Time)',
    institution: 'Masai School, Bengaluru',
    period: '2022 – 2023',
    details: 'Completed 2160+ hours of immersive, hands-on training covering HTML/CSS, JavaScript, React, Redux, Node.js, Express, and MongoDB.'
  },
  {
    course: 'Bachelor of Technology, Computer Science',
    institution: 'Visvesvaraya Technological University, Bengaluru',
    period: '2014 – 2018',
    details: 'Graduated with a solid foundation in software engineering, computer architectures, databases, and algorithms.'
  }
];

const Experience = () => {
  const theme = useTheme();
  
  return (
    <Box
      id="experience"
      data-testid="experience"
      className="experience section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(20, 20, 28, 0.3)' : 'rgba(99, 102, 241, 0.03)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
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
            Experience & Education
          </Typography>
        </Reveal>

        <Grid container spacing={6}>
          {/* Work Experience Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 1.5 }}>
              <WorkIcon sx={{ color: 'primary.main', fontSize: '2rem' }} />
              <Typography variant="h4" sx={{ fontSize: { xs: '1.6rem', sm: '2rem' }, fontWeight: 700 }}>
                Work History
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {experienceData.map((exp, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <Card
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: 'primary.main',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 12px 30px rgba(99, 102, 241, 0.15)'
                          : '0 12px 25px rgba(99, 102, 241, 0.08)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, mb: 2, gap: 1 }}>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1.3rem' }}>
                            {exp.role}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary', mt: 0.5 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: 'secondary.main',
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.08)',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '0.85rem'
                          }}
                        >
                          {exp.period}
                        </Typography>
                      </Box>
                      <Box component="ul" sx={{ pl: 2, m: 0, '& li': { mb: 1.5, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 } }}>
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </Box>
          </Grid>

          {/* Education Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 1.5 }}>
              <SchoolIcon sx={{ color: 'secondary.main', fontSize: '2rem' }} />
              <Typography variant="h4" sx={{ fontSize: { xs: '1.6rem', sm: '2rem' }, fontWeight: 700 }}>
                Education
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {educationData.map((edu, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <Card
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: 'secondary.main',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 12px 30px rgba(6, 182, 212, 0.15)'
                          : '0 12px 25px rgba(6, 182, 212, 0.08)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main', fontSize: '1.2rem', mb: 0.5 }}>
                          {edu.course}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                          {edu.institution}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            display: 'inline-block',
                            fontWeight: 700,
                            color: 'primary.main',
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                          }}
                        >
                          {edu.period}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        {edu.details}
                      </Typography>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
