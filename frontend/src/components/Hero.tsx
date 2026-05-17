import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{ backgroundColor: 'var(--vanilla)', minHeight: '100vh', paddingTop: '80px' }}
      className="flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decorative circle */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-8%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'var(--sand)',
          opacity: 0.35,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'var(--tobacco)',
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl w-full px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center space-x-3">
              <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
              <span style={{ color: 'var(--tobacco)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                Designer & Illustrator· Gujarat, India
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--mahogany)',
                letterSpacing: '-0.01em',
              }}
            >
              Bringing Your<br />
              <em style={{ fontWeight: 600, fontStyle: 'italic' }}>Vision</em><br />
              to Life
            </h1>

            {/* Description */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1rem',
                lineHeight: 1.75,
                maxWidth: 480,
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 300,
              }}
            >
              Professional freelance artist specializing in digital illustrations,
              portraits, and custom artwork. Creating stunning pieces that capture
              emotion and tell stories.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <HashLink to="/#portfolio">
                <button
                  style={{
                    backgroundColor: 'var(--mahogany)',
                    color: 'var(--vanilla)',
                    border: 'none',
                    padding: '14px 32px',
                    borderRadius: 2,
                    fontSize: '0.82rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: 'background 0.25s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--mahogany-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--mahogany)')}
                >
                  View Portfolio
                  <ArrowRight size={14} />
                </button>
              </HashLink>

              <HashLink to="/#contact">
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--mahogany)',
                    border: '1px solid var(--tobacco)',
                    padding: '14px 32px',
                    borderRadius: 2,
                    fontSize: '0.82rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--tobacco)'; e.currentTarget.style.color = 'var(--vanilla)'; e.currentTarget.style.borderColor = 'var(--tobacco)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--mahogany)'; e.currentTarget.style.borderColor = 'var(--tobacco)'; }}
                >
                  Get Commission Quote
                </button>
              </HashLink>
            </div>

            {/* Stats */}
            <div
              style={{ borderTop: '1px solid var(--sand)', paddingTop: '2rem' }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { num: '90+', label: 'Projects' },
                { num: '20+', label: 'Clients' },
                { num: '1+', label: 'Year' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 600, color: 'var(--mahogany)', lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4, fontFamily: 'DM Sans, sans-serif' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative block */}
          <div className="hidden lg:flex justify-end items-center relative">
            <div style={{ position: 'relative', width: 420, height: 520 }}>
              {/* Background block */}
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--sand)',
                  borderRadius: 4,
                  opacity: 0.5,
                }}
              />
              {/* Main image placeholder — swap with real image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--tobacco)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'var(--vanilla)', fontStyle: 'italic', opacity: 0.8 }}>
                    "Art is not what you see,<br />but what you make others see."
                  </div>
                  <div style={{ marginTop: 8, fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--vanilla)', opacity: 0.6, fontFamily: 'DM Sans, sans-serif' }}>
                    — Arjun Bhatia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
