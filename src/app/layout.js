import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeRegistry from '../components/ThemeRegistry';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Tarun Sharma | Portfolio',
  description: 'Tarun Sharma is a motivated and disciplined Full-Stack Web Developer specialized in React, Node, Express, MongoDB, TypeScript, and MUI.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable} style={{ scrollBehavior: 'smooth' }}>
      <body className={plusJakarta.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
