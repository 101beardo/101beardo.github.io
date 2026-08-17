import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Tarun Sharma — React.js Frontend Web Developer';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#09090E',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(99,102,241,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(6,182,212,0.3), transparent 45%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #6366F1, #06B6D4)',
              color: '#ffffff',
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            TS
          </div>
          <div style={{ display: 'flex', color: '#94A3B8', fontSize: 26, fontWeight: 600 }}>
            101beardo.github.io
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            color: '#F1F5F9',
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          Tarun Sharma
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 20,
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #818CF8, #22D3EE)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          React.js Frontend Web Developer
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 28,
            color: '#94A3B8',
            fontSize: 28,
            fontWeight: 500,
          }}
        >
          Next.js Specialist · 3+ Years of Experience · Bangalore, India
        </div>
      </div>
    ),
    { ...size }
  );
}
