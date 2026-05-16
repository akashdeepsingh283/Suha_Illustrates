import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp, FaBehance } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/snoopyydoodles?igsh=Z2U0ZmVwcngyZ3pj', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arjun-bhatia-322bb0341', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:snoopyydoodles@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/9368776711', label: 'WhatsApp' },
    { icon: FaBehance, href: 'https://www.behance.net/arjunbhatia7', label: 'Behance' },
  ];

  const quickLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--mahogany)', color: 'var(--vanilla)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '1px solid var(--tobacco)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 15, color: 'var(--vanilla)' }}>S</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, letterSpacing: '0.02em', color: 'var(--vanilla)' }}>
                  Snoopyydoodles
                </h3>
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tobacco)', fontFamily: 'DM Sans, sans-serif' }}>
                  Freelance Artist
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--sand)', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 360, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Creating beautiful, meaningful art that captures emotions and tells stories.
              Based in Agra, India — working with clients worldwide.
            </p>

            <div className="flex space-x-3 mt-6">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
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
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--vanilla)', marginBottom: '1.2rem' }}>
              Navigate
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    style={{ color: 'var(--sand)', fontSize: '0.85rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, transition: 'color 0.2s' }}
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
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--vanilla)', marginBottom: '1.2rem' }}>
              Services
            </h4>
            <ul className="space-y-2" style={{ color: 'var(--sand)', fontSize: '0.85rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              <li>Digital Illustrations</li>
              <li>Portrait Commissions</li>
              <li>Character Design</li>
              <li>Concept Art</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(206,193,168,0.15)', marginTop: '3rem', paddingTop: '1.5rem' }} className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontSize: '0.78rem', color: 'var(--mountain)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}>
            © 2025 Snoopyydoodles. All rights reserved.
          </span>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a
                key={t}
                href="#"
                style={{ fontSize: '0.78rem', color: 'var(--mountain)', fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s' }}
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
