import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeRegistry from '../components/ThemeRegistry';
import CommandPalette from '../components/CommandPalette';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/motion/PageTransition';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

const siteUrl = 'https://101beardo.github.io';
const title = 'Tarun Sharma | React.js Frontend Web Developer';
const description = 'Tarun Sharma is a React.js Frontend Web Developer and Next.js Specialist with 3 years of experience building production SaaS platforms, enterprise web apps, and cross-platform mobile apps.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ['Tarun Sharma', 'React.js Developer', 'Next.js Developer', 'Frontend Web Developer', 'TypeScript', 'Bangalore'],
  authors: [{ name: 'Tarun Sharma', url: siteUrl }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    siteName: 'Tarun Sharma',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  verification: {
    google: '2UgDQUEckP8a7gGUYenVPWgZHxikdOd8TZMV9FqZwmk',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <ThemeRegistry>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <CommandPalette />
        </ThemeRegistry>
      </body>
    </html>
  );
}
