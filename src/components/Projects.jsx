'use client';
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Button, Stack, Chip } from '@mui/material';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiChakraui, SiRedux, SiExpress, SiMongodb, SiNpm, SiNextdotjs, SiMaterialui } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaNode } from 'react-icons/fa';

// Tech stack icon map
const techIcons = {
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

const projectsData = [
  {
    title: 'Scottsdale Violin Studio',
    image: '/assets/scottsdale_violin_studio.png',
    description: 'Modern website built with React and Next.js featuring responsive layouts, frontend optimizations, and scalable component-driven architecture.',
    techStack: ['React', 'Next.js', 'CSS', 'JavaScript'],
    liveLink: 'https://scottsdaleviolinstudio.com/',
    githubLink: 'https://github.com/101beardo',
  },
  {
    title: 'Celebration Strings',
    image: '/assets/celebration_strings.jpg',
    description: 'Professional business website focused on performance, accessibility, responsive design, and user experience; built reusable UI components and delivered stakeholder-driven features.',
    techStack: ['React', 'CSS', 'JavaScript'],
    liveLink: 'https://celebrationstrings.com/',
    githubLink: 'https://github.com/101beardo',
  },
  {
    title: 'Danica Terzic',
    image: '/assets/danica_terzic.png',
    description: 'Production-ready performer website using Next.js and Material UI with responsive design, SEO optimization, image optimization, contact workflows, deployment, and domain configuration.',
    techStack: ['Next.js', 'Material UI', 'React', 'JavaScript'],
    liveLink: 'https://danicaterzic.com/',
    githubLink: 'https://github.com/101beardo',
  },
  {
    title: 'IndustryBuying Clone',
    image: 'https://user-images.githubusercontent.com/76995063/213940407-29245dc1-3e9f-4d65-b9be-9cbf56947a89.png',
    description: 'IndustryBuying is an e-commerce website made using MongoDB and Chakra UI with all CRUD operations. It is an e-commerce service in New Delhi for purchasing products by organizations for their own use or re-sell.',
    techStack: ['Chakra UI', 'React', 'Express JS', 'Mongo DB', 'NPM', 'Node JS'],
    liveLink: 'https://aesthetic-kheer-0649e3.netlify.app/',
    githubLink: 'https://github.com/martina024/screeching-egg-574',
  },
  {
    title: 'MYTHERESA Clone',
    image: '/assets/mytheresa.png',
    description: 'An e-commerce website made using Redux and Chakra UI with all CRUD operations. MYTHERESA is the finest edit in luxury fashion for women, men, and kids.',
    techStack: ['Chakra UI', 'React', 'Redux', 'Git Hub'],
    liveLink: 'https://luminous-swan-cc6644.netlify.app',
    githubLink: 'https://github.com/101beardo/goofy-shock-9631',
  },
  {
    title: 'Greenhouse.io Clone',
    image: '/assets/greenhouse.io.png',
    description: "Greenhouse's applicant tracking system and recruiting software is designed to help make companies great at hiring and hire for what's next.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'Git Hub'],
    liveLink: 'https://taupe-lokum-022b8a.netlify.app/',
    githubLink: 'https://github.com/Dhanraj4198/cuddly-smoke-9747',
  },
  {
    title: 'Tripoto Clone',
    image: '/assets/tripoto.png',
    description: 'Tripoto is a travelogue platform. Its web and app-based platforms enable travellers to connect with each other, write and share travelogues, discover destinations, publish trips, book hotels, and plan trips.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Git Hub'],
    liveLink: 'https://lively-hotteok-119124.netlify.app/',
    githubLink: 'https://github.com/jkumari25/glistening-rock-2573',
  },
];

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

        {/* Projects List - Vertically Stacked and Centered */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', width: '100%' }}>
          {projectsData.map((project, index) => (
            <Card
              key={index}
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
              <CardMedia
                component="img"
                className="project-img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: '100%',
                  height: { xs: '200px', sm: '300px', md: '380px' },
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />

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
                     mt: 1 
                   }}
                 >
                    <Button
                      variant="contained"
                      className="project-deployed-link"
                      href={project.liveLink}
                      target="_blank"
                      sx={{
                        width: { xs: '100%', sm: '180px' },
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
                        width: { xs: '100%', sm: '180px' },
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
                 </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
