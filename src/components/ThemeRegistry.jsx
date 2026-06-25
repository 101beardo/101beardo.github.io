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

  // Load saved theme on mount — runs only on client
  React.useEffect(() => {
    const savedMode = localStorage.getItem('portfolio-theme-mode');
    if (savedMode === 'light' || savedMode === 'dark') {
      setMode(savedMode);
    }
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
