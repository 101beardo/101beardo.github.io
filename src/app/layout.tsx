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

export const metadata: Metadata = {
  title: 'Tarun Sharma | React.js Frontend Web Developer',
  description: 'Tarun Sharma is a React.js Frontend Web Developer and Next.js Specialist with 3 years of experience building production SaaS platforms, enterprise web apps, and cross-platform mobile apps.',
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
