'use client';
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Reveal from './motion/Reveal';
import Counter from './motion/Counter';

interface Stat {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  formatter?: (value: number) => string;
}

const stats: Stat[] = [
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { prefix: '60–', value: 80, suffix: '%', label: 'Fewer Redundant Requests' },
  { prefix: '25–', value: 40, suffix: '%', label: 'Faster Feature Delivery' },
  { value: 10000, suffix: '+', label: 'App Downloads', formatter: (v) => v.toLocaleString('en-US') },
];

const Stats = () => {
  return (
    <Box
      data-testid="stats"
      sx={{
        py: { xs: 5, md: 7 },
        backgroundColor: (theme) => theme.palette.background.default,
        borderBottom: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 2 }} sx={{ justifyContent: 'center' }}>
          {stats.map((stat, idx) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Reveal delay={idx * 0.1}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
                      background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.prefix}
                    <Counter value={stat.value} formatter={stat.formatter} />
                    {stat.suffix}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      mt: 0.5,
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
