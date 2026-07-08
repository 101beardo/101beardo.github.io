'use client';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Dialog,
  TextField,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { ColorModeContext } from './ThemeRegistry';
import { resumeLink, githubLink, linkedinLink, email } from '../data/links';

export const OPEN_COMMAND_PALETTE_EVENT = 'open-command-palette';

interface Command {
  id: string;
  label: string;
  keywords?: string;
  icon: React.ReactNode;
  action: () => void;
}

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const colorMode = useContext(ColorModeContext);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
    setCopied(false);
  }, []);

  const goToSection = useCallback((id: string) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
  }, [pathname, router]);

  const commands: Command[] = useMemo(() => [
    { id: 'home', label: 'Go to Home', icon: <HomeIcon fontSize="small" />, action: () => goToSection('header') },
    { id: 'about', label: 'Go to About Me', icon: <PersonIcon fontSize="small" />, action: () => goToSection('about') },
    { id: 'experience', label: 'Go to Experience', icon: <WorkIcon fontSize="small" />, action: () => goToSection('experience') },
    { id: 'skills', label: 'Go to Skills', icon: <CodeIcon fontSize="small" />, action: () => goToSection('skills') },
    { id: 'projects', label: 'Go to Projects', icon: <FolderIcon fontSize="small" />, action: () => goToSection('projects') },
    { id: 'contact', label: 'Go to Contact', icon: <MailIcon fontSize="small" />, action: () => goToSection('contact') },
    {
      id: 'theme',
      label: colorMode.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      keywords: 'theme dark light toggle',
      icon: colorMode.mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />,
      action: () => colorMode.toggleColorMode(),
    },
    {
      id: 'copy-email',
      label: copied ? 'Copied!' : 'Copy Email Address',
      keywords: 'email contact copy',
      icon: <ContentCopyIcon fontSize="small" />,
      action: () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      keywords: 'github code repos',
      icon: <FaGithub size={18} />,
      action: () => window.open(githubLink, '_blank'),
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      keywords: 'linkedin social',
      icon: <BsLinkedin size={18} />,
      action: () => window.open(linkedinLink, '_blank'),
    },
    {
      id: 'resume',
      label: 'Download Resume',
      keywords: 'resume cv download',
      icon: <DownloadIcon fontSize="small" />,
      action: () => window.open(resumeLink, '_blank'),
    },
  ], [colorMode, copied, goToSection]);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((cmd) =>
      cmd.label.toLowerCase().includes(q) || cmd.keywords?.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const runCommand = useCallback((cmd: Command) => {
    cmd.action();
    if (cmd.id !== 'copy-email') {
      close();
    } else {
      setTimeout(close, 700);
    }
  }, [close]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    const handleOpenEvent = () => setOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, handleOpenEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = filteredCommands[activeIndex];
      if (cmd) runCommand(cmd);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            borderRadius: '16px',
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#14141c' : '#ffffff',
            backgroundImage: 'none',
            position: 'fixed',
            top: { xs: '10%', sm: '15%' },
            m: 0,
          },
        },
        transition: { onEntered: () => inputRef.current?.focus() },
      }}
    >
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
        <TextField
          inputRef={inputRef}
          fullWidth
          placeholder="Type a command or search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleListKeyDown}
          variant="standard"
          slotProps={{
            input: {
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{ '& input': { fontSize: '1.1rem', py: 0.5 } }}
        />
      </Box>

      <List sx={{ py: 1, maxHeight: '360px', overflowY: 'auto' }}>
        {filteredCommands.length === 0 && (
          <Typography sx={{ px: 3, py: 2, color: 'text.secondary' }}>No matching commands.</Typography>
        )}
        {filteredCommands.map((cmd, idx) => (
          <ListItemButton
            key={cmd.id}
            selected={idx === activeIndex}
            onClick={() => runCommand(cmd)}
            onMouseEnter={() => setActiveIndex(idx)}
            sx={{
              mx: 1,
              borderRadius: '10px',
              '&.Mui-selected': {
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: '36px', color: 'primary.main' }}>{cmd.icon}</ListItemIcon>
            <ListItemText primary={cmd.label} />
          </ListItemButton>
        ))}
      </List>
    </Dialog>
  );
};

export default CommandPalette;
