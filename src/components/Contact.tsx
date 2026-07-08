'use client';
import React from 'react';
import { Box, Typography, Container, Card, CardContent, IconButton, Tooltip, TextField, Button, Alert } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
import { AiFillTwitterSquare } from 'react-icons/ai';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import type { IconType } from 'react-icons';
import Reveal from './motion/Reveal';

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xleqwbde';

interface ContactFormFields {
  [key: string]: string;
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  name: string;
  icon: IconType;
  link: string;
  color: string;
}

const socials: SocialLink[] = [
  { name: 'LinkedIn', icon: BsLinkedin, link: 'https://www.linkedin.com/in/tarun-sharma-93008a190/', color: '#0077b5' },
  { name: 'GitHub', icon: FaGithub, link: 'https://github.com/101beardo', color: '#ffffff' },
  { name: 'HackerRank', icon: SiHackerrank, link: 'https://www.hackerrank.com/_beardo_', color: '#2ec866' },
  { name: 'WhatsApp', icon: BsWhatsapp, link: 'https://wa.me/+916283837873', color: '#25d366' },
  { name: 'Twitter', icon: AiFillTwitterSquare, link: 'https://twitter.com/_beardo__', color: '#1da1f2' },
];

const Contact = () => {
  const [formState, handleSubmit] = useForm<ContactFormFields>(FORMSPREE_FORM_ID);

  return (
    <Box
      id="contact"
      data-testid="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(20, 20, 28, 0.3)' : 'rgba(99, 102, 241, 0.03)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
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
            Contact
          </Typography>
        </Reveal>

        {/* Contact Info Flex Layout (avoiding Grid1 warnings) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 4,
            mb: 6,
          }}
        >
          {/* Phone Card */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Reveal className="contact-reveal" delay={0}>
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '350px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'primary.main',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 12px 30px rgba(99, 102, 241, 0.15)'
                      : '0 12px 25px rgba(99, 102, 241, 0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <PhoneIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                    Phone
                  </Typography>
                  <Typography
                    component="a"
                    href="tel:+916283837873"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      '&:hover': { color: 'primary.main' },
                      transition: 'color 0.3s',
                    }}
                  >
                    +91 6283837873
                  </Typography>
                </CardContent>
              </Card>
            </Reveal>
          </Box>

          {/* Email Card */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Reveal className="contact-reveal" delay={0.1}>
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '350px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'primary.main',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 12px 30px rgba(99, 102, 241, 0.15)'
                      : '0 12px 25px rgba(99, 102, 241, 0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <EmailIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                    Email
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:101tash101@gmail.com"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      '&:hover': { color: 'primary.main' },
                      transition: 'color 0.3s',
                    }}
                  >
                    101tash101@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Reveal>
          </Box>
        </Box>

        {/* Contact Form */}
        <Reveal delay={0.15}>
          <Card sx={{ maxWidth: '700px', mx: 'auto', mb: 8 }}>
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: 'text.primary' }}>
                Send Me a Message
              </Typography>
              {formState.succeeded ? (
                <Alert severity="success">Thanks for reaching out — I'll get back to you soon!</Alert>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <TextField
                      name="name"
                      label="Your Name"
                      required
                      fullWidth
                      disabled={formState.submitting}
                    />
                    <ValidationError prefix="Name" field="name" errors={formState.errors} />

                    <TextField
                      name="email"
                      type="email"
                      label="Your Email"
                      required
                      fullWidth
                      disabled={formState.submitting}
                    />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} />

                    <TextField
                      name="message"
                      label="Message"
                      required
                      fullWidth
                      multiline
                      rows={4}
                      disabled={formState.submitting}
                    />
                    <ValidationError prefix="Message" field="message" errors={formState.errors} />

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={formState.submitting}
                      sx={{
                        alignSelf: { xs: 'stretch', sm: 'center' },
                        minWidth: '200px',
                        background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
                        color: '#ffffff',
                        fontWeight: 700,
                      }}
                    >
                      {formState.submitting ? 'Sending…' : 'Send Message'}
                    </Button>

                    {formState.errors && formState.errors.getFormErrors().length > 0 && (
                      <Alert severity="error">
                        Something went wrong. Please try again, or email me directly at 101tash101@gmail.com.
                      </Alert>
                    )}
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Reveal>

        {/* Social Icons Container */}
        <Reveal delay={0.2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 2, sm: 4 },
              flexWrap: 'wrap',
            }}
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Tooltip key={social.name} title={social.name} arrow>
                  <IconButton
                    component="a"
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      width: { xs: 60, sm: 70 },
                      height: { xs: 60, sm: 70 },
                      backgroundColor: (theme) => theme.palette.background.paper,
                      border: '1px solid',
                      borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                      boxShadow: (theme) => theme.palette.mode === 'dark'
                        ? '0 4px 15px rgba(0, 0, 0, 0.3)'
                        : '0 4px 15px rgba(11, 25, 44, 0.05)',
                      color: 'text.secondary',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: social.color,
                        transform: 'scale(1.15) rotate(5deg)',
                        boxShadow: `0 8px 25px ${social.color}40`,
                      },
                      '& svg': {
                        fontSize: { xs: '28px', sm: '32px' },
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                </Tooltip>
              );
            })}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Contact;
