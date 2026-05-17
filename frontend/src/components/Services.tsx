import React from 'react';
import { Palette, User, Layers, Zap, CheckCircle } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Digital Illustrations',
      description: 'Custom digital artwork for books, magazines, and personal projects',
      price: 'From $100',
      features: ['High-resolution files', 'Multiple revisions', 'Commercial license', '48-hour delivery'],
      popular: false,
    },
    {
      icon: User,
      title: 'Portrait Commissions',
      description: 'Personalized portraits that capture personality and emotion',
      price: 'From $50',
      features: ['Multiple subjects', 'Various styles available', 'Print-ready quality', 'Digital delivery'],
      popular: true,
    },
    {
      icon: Layers,
      title: 'Character Design',
      description: 'Unique character creation for games, stories, and branding',
      price: 'From $100',
      features: ['Concept variations', 'Turnaround sheets', 'Style consistency', 'Full licensing'],
      popular: false,
    },
    {
      icon: Zap,
      title: 'Rush Orders',
      description: 'Express delivery for urgent projects without compromising quality',
      price: '+50% fee',
      features: ['24-hour delivery', 'Priority support', 'Real-time updates', 'Quality guarantee'],
      popular: false,
    },
  ];

  return (
    <section id="services" style={{ backgroundColor: 'var(--vanilla)', padding: 'clamp(4rem, 10vw, 7rem) 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
            <span style={{ color: 'var(--tobacco)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
              What I Offer
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 8vw, 3.8rem)', fontWeight: 400, color: 'var(--mahogany)' }}>
            My <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Services</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', maxWidth: 560, margin: '1rem auto 0', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, padding: '0 8px' }}>
            A comprehensive range of artistic services, each approached with dedication and attention to detail.
          </p>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-16">
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: s.popular ? 'var(--mahogany)' : 'var(--white-warm)',
                border: s.popular ? 'none' : '1px solid var(--sand)',
                borderRadius: 4,
                padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)',
                position: 'relative',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(88,71,56,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {s.popular && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--tobacco)', color: 'var(--vanilla)', padding: '4px 16px', borderRadius: 1, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }}>
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: s.popular ? 'rgba(241,234,218,0.15)' : 'var(--vanilla)',
                    border: s.popular ? '1px solid rgba(241,234,218,0.2)' : '1px solid var(--sand)',
                    borderRadius: 2,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.8rem',
                  }}
                >
                  <s.icon size={18} color={s.popular ? 'var(--vanilla)' : 'var(--mahogany)'} />
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 3vw, 1.2rem)', fontWeight: 600, color: s.popular ? 'var(--vanilla)' : 'var(--mahogany)', marginBottom: 6 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.8rem)', color: s.popular ? 'var(--sand)' : 'var(--text-muted)', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, marginBottom: '0.75rem' }}>
                  {s.description}
                </p>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: 700, color: s.popular ? 'var(--tobacco)' : 'var(--mahogany)' }}>
                  {s.price}
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {s.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle size={12} color={s.popular ? 'var(--tobacco)' : 'var(--mahogany)'} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 'clamp(0.72rem, 2vw, 0.78rem)', color: s.popular ? 'var(--sand)' : 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <HashLink to="/#contact">
                <button
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: 2,
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: s.popular ? 'var(--tobacco)' : 'transparent',
                    color: s.popular ? 'var(--vanilla)' : 'var(--mahogany)',
                    border: s.popular ? 'none' : '1px solid var(--tobacco)',
                  }}
                >
                  Get Started
                </button>
              </HashLink>
            </div>
          ))}
        </div>

        {/* Process */}
        <div style={{ backgroundColor: 'var(--white-warm)', border: '1px solid var(--sand)', borderRadius: 4, padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 600, color: 'var(--mahogany)', textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            My Creative Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your vision and requirements' },
              { step: '02', title: 'Concept', desc: 'Initial sketches and concept exploration' },
              { step: '03', title: 'Creation', desc: 'Your artwork comes to life with precision' },
              { step: '04', title: 'Delivery', desc: 'Final files in your preferred format' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    border: '1px solid var(--tobacco)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', fontWeight: 600, color: 'var(--mahogany)' }}>{item.step}</span>
                </div>
                <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: 600, color: 'var(--mahogany)', marginBottom: 4 }}>{item.title}</h4>
                <p style={{ fontSize: 'clamp(0.72rem, 2vw, 0.78rem)', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;