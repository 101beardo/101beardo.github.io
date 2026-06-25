import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#6366F1', // Vibrant Indigo
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#06B6D4', // Cyber Cyan
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'dark' ? '#09090E' : '#F8FAFC', // Deep Charcoal-Violet / Slate 50
      paper: mode === 'dark' ? 'rgba(20, 20, 28, 0.6)' : 'rgba(255, 255, 255, 0.8)', // Glassmorphic Card base
    },
    text: {
      primary: mode === 'dark' ? '#F1F5F9' : '#0F172A',
      secondary: mode === 'dark' ? '#94A3B8' : '#475569',
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins), sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.8,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px', // Pill-shaped
          textTransform: 'none',
          fontWeight: 700,
          padding: '12px 28px',
          minWidth: '140px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&.MuiButton-sizeLarge': {
            padding: '14px 40px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px', // Modern rounded corners
          backgroundImage: 'none',
          backgroundColor: mode === 'dark' ? 'rgba(20, 20, 28, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(16px)',
          boxShadow: mode === 'dark' 
            ? '0 12px 40px 0 rgba(0, 0, 0, 0.4)' 
            : '0 12px 40px 0 rgba(99, 102, 241, 0.05)',
          border: mode === 'dark' 
            ? '1px solid rgba(255, 255, 255, 0.06)' 
            : '1px solid rgba(99, 102, 241, 0.08)',
        },
      },
    },
  },
});
