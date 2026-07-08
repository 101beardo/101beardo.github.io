'use client';
import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import Reveal from './motion/Reveal';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiChakraui, SiRedux, SiExpress, SiMongodb, SiNpm,
  SiCypress, SiTypescript, SiNextdotjs, SiMaterialui, SiExpo, SiSocketdotio, SiSass, SiCapacitor,
  SiVercel, SiBitbucket, SiWebpack, SiVite, SiYarn, SiFirebase, SiRazorpay, SiGoogle, SiHotjar, SiAndroidstudio
} from 'react-icons/si';
import { FaNode, FaDatabase } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import type { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
}

const skillsList: Skill[] = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Material UI', icon: SiMaterialui },
  { name: 'Chakra UI', icon: SiChakraui },
  { name: 'Redux', icon: SiRedux },
  { name: 'React Native', icon: SiReact },
  { name: 'Expo', icon: SiExpo },
  { name: 'TanStack Query', icon: FaDatabase },
  { name: 'WebSockets', icon: SiSocketdotio },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Sass', icon: SiSass },
  { name: 'Capacitor.js', icon: SiCapacitor },
  { name: 'Node JS', icon: FaNode },
  { name: 'Express JS', icon: SiExpress },
  { name: 'Mongo DB', icon: SiMongodb },
  { name: 'Cypress', icon: SiCypress },
  { name: 'NPM', icon: SiNpm },
  { name: 'Git Hub', icon: BsGithub },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Bitbucket', icon: SiBitbucket },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'Vite', icon: SiVite },
  { name: 'Yarn', icon: SiYarn },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Razorpay', icon: SiRazorpay },
  { name: 'Google Sign-In', icon: SiGoogle },
  { name: 'Hotjar', icon: SiHotjar },
  { name: 'Android Studio', icon: SiAndroidstudio },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      data-testid="skills"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,
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
                background: 'linear-gradient(90deg, #4db5ff, #4F46E5)',
              },
            }}
          >
            Skills
          </Typography>
        </Reveal>

        <Grid container spacing={{ xs: 2.5, sm: 4, md: 5 }} sx={{ justifyContent: 'center' }}>
          {skillsList.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Reveal delay={Math.min(index * 0.03, 0.4)} y={16}>
                  <Paper
                    className="skills-card"
                    elevation={3}
                    sx={{
                      width: { xs: '110px', sm: '120px', md: '140px' },
                      height: { xs: '110px', sm: '120px', md: '140px' },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '16px',
                      backgroundColor: (theme) => theme.palette.background.paper,
                      border: '1px solid',
                      borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: (theme) => theme.palette.mode === 'dark'
                          ? '0 12px 30px rgba(77, 181, 255, 0.25)'
                          : '0 12px 25px rgba(0, 0, 0, 0.1)',
                        borderColor: 'primary.main',
                        '& .skills-card-img': {
                          color: 'primary.main',
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box
                      className="skills-card-img"
                      sx={{
                        fontSize: { xs: '2.5rem', md: '3.2rem' },
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1.5,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent />
                    </Box>
                    <Typography
                      className="skills-card-name"
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        fontWeight: 600,
                        color: 'text.primary',
                        textAlign: 'center',
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Paper>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;