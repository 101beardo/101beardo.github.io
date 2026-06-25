'use client';
import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Dynamic parameters for Github stats images depending on theme
  const statsTheme = isDark
    ? 'theme=tokyonight&bg_color=1E3E62&title_color=4db5ff&icon_color=4F46E5&text_color=ffffff&border_color=ffffff10'
    : 'theme=default&bg_color=FFFFFF&title_color=4F46E5&icon_color=4db5ff&text_color=576F72&border_color=00000010';

  const streakTheme = isDark
    ? 'theme=tokyonight&background=1E3E62&fire=4F46E5&ring=4db5ff&currStreakNum=ffffff&sideNums=ffffff'
    : 'theme=default&background=FFFFFF&fire=4F46E5&ring=4db5ff&currStreakNum=0B192C&sideNums=576F72';

  const langsTheme = isDark
    ? 'theme=tokyonight&bg_color=1E3E62&title_color=4db5ff&text_color=ffffff&border_color=ffffff10'
    : 'theme=default&bg_color=FFFFFF&title_color=4F46E5&text_color=576F72&border_color=00000010';

  const calendarThemeSetting = isDark
    ? { light: ['#ebedf0', '#0e4429', '#006d32', '#26a641', '#39d353'], dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'] }
    : { light: ['#ebedf0', '#b4c6ef', '#7ca5ff', '#4db5ff', '#1f75fe'], dark: ['#ebedf0', '#b4c6ef', '#7ca5ff', '#4db5ff', '#1f75fe'] };

  return (
    <Box
      id="github"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(30, 62, 98, 0.4)' : 'rgba(77, 181, 255, 0.08)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
              background: 'linear-gradient(90deg, #4db5ff, #4F46E5)',
            },
          }}
        >
          GitHub Activities
        </Typography>

        {/* GitHub Calendar Container */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 8,
            overflowX: 'auto',
            width: '100%',
            p: 3,
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: '16px',
            border: '1px solid',
            borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
            boxShadow: (theme) => theme.palette.mode === 'dark'
              ? '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
              : '0 8px 32px 0 rgba(11, 25, 44, 0.05)',
            '&::-webkit-scrollbar': {
              height: '6px',
              display: 'block',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(77, 181, 255, 0.3)',
              borderRadius: '3px',
            },
          }}
        >
          <Box sx={{ minWidth: '700px', display: 'flex', justifyContent: 'center' }}>
            <GitHubCalendar
              username="101beardo"
              blockSize={15}
              blockMargin={5}
              theme={calendarThemeSetting}
              fontSize={14}
            />
          </Box>
        </Box>

        {/* GitHub Stat Cards Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Stats Card */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <Box
                component="img"
                data-testid="github-stats-card"
                src={`https://github-readme-stats.vercel.app/api?username=101beardo&show_icons=true&${statsTheme}`}
                alt="GitHub Stats"
                sx={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
              />
            </Paper>
          </Grid>

          {/* Streak Card */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <Box
                component="img"
                data-testid="github-streak-stats"
                src={`https://github-readme-streak-stats.herokuapp.com/?user=101beardo&${streakTheme}`}
                alt="GitHub Streak"
                sx={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
              />
            </Paper>
          </Grid>

          {/* Top Languages Card */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <Box
                component="img"
                data-testid="github-top-langs"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=101beardo&layout=compact&${langsTheme}`}
                alt="Top Languages"
                sx={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Github;
