'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { getTheme } from '../app/theme';

export const ColorModeContext = React.createContext({ 
  toggleColorMode: () => {}, 
  mode: 'dark' 
});

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = React.useState('dark');
  const [isMounted, setIsMounted] = React.useState(false);

  // Load saved theme on mount — runs only on client
  React.useEffect(() => {
    const savedMode = localStorage.getItem('portfolio-theme-mode');
    if (savedMode === 'light' || savedMode === 'dark') {
      setMode(savedMode);
    }
    setIsMounted(true);
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const nextMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('portfolio-theme-mode', nextMode);
          return nextMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  // Render a bare CssBaseline shell during SSR / before mount
  // to avoid hydration mismatch from localStorage
  if (!isMounted) {
    return (
      <AppRouterCacheProvider>
        <ThemeProvider theme={getTheme('dark')}>
          <CssBaseline />
          <div style={{ visibility: 'hidden' }}>{children}</div>
        </ThemeProvider>
      </AppRouterCacheProvider>
    );
  }

  return (
    <AppRouterCacheProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
