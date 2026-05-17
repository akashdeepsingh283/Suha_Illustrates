import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import arjun from '../img/arjun.JPG';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, title: 'Featured Artist', description: 'Selected for Digital Arts Magazine 2024' },
    { icon: Users, title: 'Client Satisfaction', description: '98% positive feedback rate' },
    { icon: Clock, title: 'Fast Delivery', description: 'Average 48-hour turnaround' },
    { icon: Heart, title: 'Passion Driven', description: 'Every project crafted with love' },
  ];

  return (
    <section id="about" style={{ backgroundColor: 'var(--white-warm)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center space-x-3">
              <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
              <span style={{ color: 'var(--tobacco)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
                The Artist
              </span>
            </div>

            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: 200, color: 'var(--mahogany)', lineHeight: 1.1 }}>
              About <em style={{ fontFamily: "'Beth Ellen', cursive", fontStyle: 'italic', fontWeight: 300 }}>Suha Scribbles </em>
            </h3>

            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.9, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }} className="space-y-4">
              <p>
               Hi, I’m Suhani Killa. My journey with art began in childhood, fueled by a lifelong passion for transforming the world into something playful and full of character. Today, I specialize in bringing a whimsical, cartoonish vision to human portraits, custom doodles, and digital artwork.

              </p>
              <p>
               Over the past two years, I’ve collaborated with clients across cities to bring unique art onto everyday pieces—from custom frames and notebook covers to personalized wallet cards. Most notably, I had the incredible opportunity to design a full corporate business card ecosystem, marking my biggest and most rewarding project yet.

              </p>
              <p>
               My Artistic Philosophy: I deeply believe that art is fundamentally anchored to emotion. Every piece I create is a vessel for storing memories, translating a heartfelt moment or a whimsical concept into a fun, relevant, and lasting visual story. Whether it’s a vibrant character or a meaningful portrait, I pour my heart into every line.
              </p>
            </div>

            {/* Specialties */}
            <div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--mahogany)', marginBottom: '1rem' }}>
                Specialties
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Digital Illustration', 'Portrait Art', 'Character Design', 'Concept Art'].map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: '12px 16px',
                      border: '1px solid var(--sand)',
                      borderRadius: 2,
                      fontSize: '0.82rem',
                      color: 'var(--mahogany)',
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      backgroundColor: 'var(--vanilla)',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative mt-6">
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  right: -16,
                  bottom: -16,
                  backgroundColor: 'var(--sand)',
                  borderRadius: 4,
                  opacity: 0.5,
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  aspectRatio: '4/4',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <img src={arjun} alt="Arjun Bhatia" className="w-full h-full object-cover" />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: 12,
                  backgroundColor: 'var(--mahogany)',
                  padding: '1rem 1.5rem',
                  borderRadius: 2,
                  zIndex: 2,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--vanilla)' }}>1+</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tobacco)', fontFamily: 'DM Sans, sans-serif' }}>Years Creating</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--vanilla)',
                    border: '1px solid var(--sand)',
                    padding: '1.2rem',
                    borderRadius: 2,
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--tobacco)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      backgroundColor: 'var(--mahogany)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <a.icon size={14} color="var(--vanilla)" />
                  </div>
                  <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, color: 'var(--mahogany)', marginBottom: 4 }}>{a.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
