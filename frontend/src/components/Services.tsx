import React from 'react';
import { Palette, User, Layers } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Character & Brand Design',
      description: 'Bringing unique personalities to life. From expressive character sheets and quirky line art doodles to bespoke illustrative logo designs built for modern brands.',
      popular: false,
    },
    {
      icon: User,
      title: 'Whimsical Digital Illustrations',
      description: 'Vibrant, story-driven digital artwork tailored seamlessly for real-world products—including custom book covers, notebook surfaces, frames, and business merchandise.',
      popular: true,
    },
    {
      icon: Layers,
      title: 'Memory & Portrait Commissions',
      description: 'Custom human and pet illustrations that translate real milestones into timeless art. Specializing in sentimental family integrations, seamlessly weaving together departed loved ones into cherished, cohesive portraits.',
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
            <span style={{ color: "var(--tobacco)",
                  fontSize: "clamp(0.65rem, 2.2vw, 0.95rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700, }}>
              MY SERVICES
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 8vw, 3.8rem)', fontWeight: 400, color: 'var(--mahogany)' }}>
            Creative <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Offerings</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', maxWidth: 560, margin: '1rem auto 0', lineHeight: 1.75, fontFamily: 'Playfair Display, serif', fontWeight: 300, padding: '0 8px' }}>
            Bespoke digital artwork and meaningful visual designs tailored to preserve your finest memories and stories
          </p>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-16">
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
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(88,71,56,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* {s.popular && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--tobacco)', color: 'var(--vanilla)', padding: '4px 16px', borderRadius: 1, fontSize: 'rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Playfair Display, serif', whiteSpace: 'nowrap' }}>
                  Most Popular
                </div>
              )} */}

              <div style={{ marginBottom: '1.2rem', textAlign: 'center', flex: 1 }}>
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
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 600, color: s.popular ? 'var(--vanilla)' : 'var(--mahogany)', marginBottom: 6 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)', color: s.popular ? 'var(--sand)' : 'var(--text-muted)', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif', fontWeight: 300,marginTop: '2rem' }}>
                  {s.description}
                </p>
              </div>

              <HashLink to="/#contact">
                <button
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: 2,
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600,
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

        {/* Rush Orders Box */}
        <div style={{ backgroundColor: 'var(--sand)', border: '1px solid var(--tobacco)', borderRadius: 4, padding: 'clamp(1.2rem, 4vw, 1.8rem)', marginBottom: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)', color: 'var(--mahogany)', fontFamily: 'Playfair Display, sans-serif', fontWeight: 400, margin: 0, letterSpacing: '0.3px' }}>
            <span style={{ fontSize: '2em', marginRight: '0.5rem' }}>⏱</span> Need it sooner? Express 48-hour turnaround available for urgent projects.
          </p>
        </div>

        {/* Process */}
        <div style={{ backgroundColor: 'var(--white-warm)', border: '1px solid var(--sand)', borderRadius: 4, padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 600, color: 'var(--mahogany)', textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            My Creative Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your vision and requirements' },
              { step: '02', title: 'Concept', desc: 'Initial sketches and concept exploration' },
              { step: '03', title: 'Creation', desc: 'Your artwork comes to life with precision' },
              { step: '04', title: 'Review', desc: 'Back and forth feedback regarding design /changes.' },
              { step: '05', title: 'Delivery', desc: 'Final files in your preferred format' },
              
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
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, color: 'var(--mahogany)' }}>{item.step}</span>
                </div>
                <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(0.95rem, 3vw, 1.3rem)', fontWeight: 600, color: 'var(--mahogany)', marginBottom: 4 }}>{item.title}</h4>
                <p style={{ fontSize: 'clamp(0.72rem, 2vw, 0.95rem)', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;