'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Container, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiChakraui, SiRedux, SiExpress, SiMongodb, SiNpm, SiNextdotjs, SiMaterialui } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaNode } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { projectsData } from '../data/projects';
import Reveal from './motion/Reveal';

// Tech stack icon map
const techIcons: Record<string, IconType> = {
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'Chakra UI': SiChakraui,
  'Redux': SiRedux,
  'Express JS': SiExpress,
  'Mongo DB': SiMongodb,
  'NPM': SiNpm,
  'Git Hub': BsGithub,
  'Node JS': FaNode,
  'Next.js': SiNextdotjs,
  'Material UI': SiMaterialui,
};

const Projects = () => {
  return (
    <Box
      id="projects"
      data-testid="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.background.default,
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
            Projects
          </Typography>
        </Reveal>

        {/* Projects List - Vertically Stacked and Centered */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', width: '100%' }}>
          {projectsData.map((project) => (
            <Reveal key={project.slug} className="project-card-reveal">
            <Card
              className="project-card"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '800px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0 20px 45px rgba(99, 102, 241, 0.2)'
                    : '0 20px 40px rgba(99, 102, 241, 0.12)',
                  borderColor: 'primary.main',
                },
              }}
            >
              {/* Project Image */}
              <Box
                className="project-img"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '200px', sm: '300px', md: '380px' },
                  overflow: 'hidden',
                  '&:hover img': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 800px) 100vw, 800px"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </Box>

              {/* Project Content */}
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                {/* Title */}
                <Typography
                  variant="h4"
                  className="project-title"
                  sx={{
                    fontSize: { xs: '1.4rem', sm: '1.8rem' },
                    fontWeight: 700,
                    mb: 2,
                    color: 'primary.main',
                    textAlign: 'center',
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  className="project-description"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    maxWidth: '700px',
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Stack Chips */}
                <Box className="project-tech-stack" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
                  {project.techStack.map((tech) => {
                    const Icon = techIcons[tech];
                    return (
                      <Chip
                        key={tech}
                        icon={Icon ? <Icon style={{ fontSize: '1rem' }} /> : undefined}
                        label={tech}
                        sx={{
                          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(77, 181, 255, 0.1)' : 'rgba(77, 181, 255, 0.08)',
                          color: 'primary.main',
                          fontWeight: 600,
                          borderRadius: '6px',
                          border: '1px solid',
                          borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(77, 181, 255, 0.2)' : 'rgba(77, 181, 255, 0.15)',
                          '& .MuiChip-icon': {
                            color: 'primary.main',
                            marginLeft: '8px',
                          },
                        }}
                      />
                    );
                  })}
                </Box>

                 <Stack
                   direction={{ xs: 'column', sm: 'row' }}
                   spacing={2}
                   sx={{
                     width: '100%',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                     mt: 1
                   }}
                 >
                    <Button
                      variant="contained"
                      className="project-deployed-link"
                      href={project.liveLink}
                      target="_blank"
                      sx={{
                        width: { xs: '100%', sm: '160px' },
                        background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
                        color: '#ffffff',
                        fontWeight: 700,
                        padding: '12px 24px',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          boxShadow: (theme) => theme.palette.mode === 'dark'
                            ? '0 4px 15px rgba(99, 102, 241, 0.4)'
                            : '0 4px 15px rgba(99, 102, 241, 0.2)',
                        },
                      }}
                    >
                      Visit Live
                    </Button>
                    <Button
                      variant="outlined"
                      className="project-github-link"
                      href={project.githubLink}
                      target="_blank"
                      sx={{
                        width: { xs: '100%', sm: '160px' },
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        padding: '12px 24px',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(99, 102, 241, 0.08)',
                        },
                      }}
                    >
                      View Code
                    </Button>
                    <Button
                      component={Link}
                      href={`/projects/${project.slug}/`}
                      variant="text"
                      className="project-case-study-link"
                      sx={{
                        width: { xs: '100%', sm: '160px' },
                        color: 'secondary.main',
                        fontWeight: 700,
                        padding: '12px 24px',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          backgroundColor: 'rgba(6, 182, 212, 0.08)',
                        },
                      }}
                    >
                      Case Study →
                    </Button>
                 </Stack>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
