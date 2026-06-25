import ThemeRegistry from '../components/ThemeRegistry';
import './globals.css';

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
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
