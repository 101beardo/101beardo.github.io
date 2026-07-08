'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Container, Chip, Button, Stack, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { Project } from '../../../data/projects';
import Reveal from '../../../components/motion/Reveal';

const CaseStudyContent = ({ project }: { project: Project }) => {
  return (
    <Box
      sx={{
        pt: { xs: '110px', md: '140px' },
        pb: { xs: 8, md: 12 },
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Button
          component={Link}
          href="/#projects"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
        >
          Back to Projects
        </Button>

        <Reveal>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {project.title}
          </Typography>
        </Reveal>

        <Reveal delay={0.1}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '220px', sm: '320px', md: '420px' },
              borderRadius: '20px',
              overflow: 'hidden',
              mb: 4,
              border: '1px solid',
              borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Reveal>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 5 }}>
          {project.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(77, 181, 255, 0.1)' : 'rgba(77, 181, 255, 0.08)',
                color: 'primary.main',
                fontWeight: 600,
                borderRadius: '6px',
                border: '1px solid',
                borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(77, 181, 255, 0.2)' : 'rgba(77, 181, 255, 0.15)',
              }}
            />
          ))}
        </Box>

        <Stack spacing={4} sx={{ mb: 6 }}>
          {[
            { heading: 'Overview', body: project.caseStudy.overview },
            { heading: 'The Challenge', body: project.caseStudy.challenge },
            { heading: 'The Approach', body: project.caseStudy.approach },
            { heading: 'The Result', body: project.caseStudy.result },
          ].map((section, idx) => (
            <Reveal key={section.heading} delay={idx * 0.1}>
              <Paper
                sx={{
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: 'secondary.main', mb: 1.5, fontSize: '1.3rem' }}
                >
                  {section.heading}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {section.body}
                </Typography>
              </Paper>
            </Reveal>
          ))}
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            href={project.liveLink}
            target="_blank"
            sx={{
              width: { xs: '100%', sm: '200px' },
              background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
              color: '#ffffff',
              fontWeight: 700,
            }}
          >
            Visit Live
          </Button>
          <Button
            variant="outlined"
            href={project.githubLink}
            target="_blank"
            sx={{
              width: { xs: '100%', sm: '200px' },
              borderColor: 'primary.main',
              color: 'primary.main',
            }}
          >
            View Code
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CaseStudyContent;
