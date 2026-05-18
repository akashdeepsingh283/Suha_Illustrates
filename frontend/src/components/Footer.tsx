import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/suha_scribbles?igsh=YjI1NmV0ZjUwN2Zj', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arjun-bhatia-322bb0341', label: 'LinkedIn' },
    { icon: Mail, href: 'suhaniiiwork@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--mahogany)', color: 'var(--vanilla)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand — full width on mobile */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '1px solid var(--tobacco)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 14, color: 'var(--vanilla)' }}>S</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Beth Ellen', cursive", fontSize: 'clamp(1.1rem, 4vw, 1.2rem)', fontWeight: 600, letterSpacing: '0.02em', color: 'var(--vanilla)' }}>
                  Suha Scribbles
                </h3>
                {/* <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tobacco)', fontFamily: 'DM Sans, sans-serif' }}>
                  Freelance Artist
                </p> */}
              </div>
            </div>

            <p style={{ color: 'var(--sand)', fontSize: 'clamp(0.82rem, 2.5vw, 0.9rem)', lineHeight: 1.8, maxWidth: 360, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Creating beautiful, meaningful art that captures emotions and tells stories.
              Based in Agra, India — working with clients worldwide.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    border: '1px solid rgba(206,193,168,0.3)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--sand)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--tobacco)'; e.currentTarget.style.color = 'var(--vanilla)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(206,193,168,0.3)'; e.currentTarget.style.color = 'var(--sand)'; }}
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--vanilla)', marginBottom: '1rem' }}>
              Navigate
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    style={{ color: 'var(--sand)', fontSize: '0.85rem', fontFamily: 'Playfair Display, serif', fontWeight: 300, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--vanilla)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--sand)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
            <div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--vanilla)', marginBottom: '1rem' }}>
              Services
            </h4>
            <ul className="space-y-2" style={{ color: 'var(--sand)', fontSize: '0.85rem', fontFamily: 'Playfair Display, serif', fontWeight: 300 }}>
              <li>Digital Art</li>
              <li>Portraits</li>
              <li>Pet Illustrations</li>
              <li>Custom Prints</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{ borderTop: '1px solid rgba(206,193,168,0.15)', marginTop: '2.5rem', paddingTop: '1.5rem' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--mountain)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}>
            © 2026 Suha Scribbles. All rights reserved.
          </span>
          <div className="flex space-x-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a
                key={t}
                href="#"
                style={{ fontSize: '0.75rem', color: 'var(--mountain)', fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--sand)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--mountain)')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;