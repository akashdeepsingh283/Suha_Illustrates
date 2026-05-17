import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import suhani from '../img/s3.png';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, title: 'Print-Ready Formats', description: 'High-resolution, production-ready files perfect for custom frames, wallet cards, or notebook covers.' },
    { icon: Users, title: 'Clear Communication', description: 'I share concept sketches at every stage to ensure the final artwork aligns with your vision.' },
    { icon: Clock, title: 'Flexible Commercial Use', description: 'Clear usage rights included, whether it\'s a personal portrait gift or a custom business card design.' },
    { icon: Heart, title: 'Keeping Memories Safe', description: 'Whimsical designs crafted to capture your real milestones and turn special memories into art.' },
  ];

  return (
    <section id="about" style={{ backgroundColor: 'var(--white-warm)', padding: 'clamp(4rem, 10vw, 7rem) 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-6 sm:space-y-8">
            {/* Label */}
            <div className="flex items-center space-x-3">
              <div style={{ width: 40, height: 1, background: 'var(--tobacco)', flexShrink: 0 }} />
              <span style={{ color: 'var(--tobacco)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
                The Artist
              </span>
            </div>

            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 200, color: 'var(--mahogany)', lineHeight: 1.1 }}>
              About <em style={{ fontFamily: "'Beth Ellen', cursive", fontStyle: 'italic', fontWeight: 300 }}>Suha Scribbles </em>
            </h3>

            <div style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', lineHeight: 1.9, fontFamily: 'Playfair Display, serif', fontWeight: 300 }} className="space-y-4">
              <p>
                Hi, I'm <span style={{ fontWeight: 700 }}>Suhani Killa</span>. My journey with art began in childhood, fueled by a lifelong passion for transforming the world into something playful and full of character. Today, I specialize in bringing a whimsical, cartoonish vision to human portraits, custom doodles, and digital artwork.
              </p>
              <p>
                Over the past two years, I've collaborated with clients across cities to bring unique art onto everyday pieces—from custom frames and notebook covers to personalized wallet cards. Most notably, I had the incredible opportunity to design a full corporate business card ecosystem, marking my biggest and most rewarding project yet.
              </p>
              <p>
                My Artistic Philosophy: I deeply believe that art is fundamentally anchored to emotion. Every piece I create is a vessel for storing memories, translating a heartfelt moment or a whimsical concept into a fun, relevant, and lasting visual story.
              </p>
            </div>

            {/* Specialties */}
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 600, color: 'var(--mahogany)', marginBottom: '1rem' }}>
                Specialties
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {['Digital Illustration', 'Portrait Art', 'Character Design', 'Merchandising & Print Design'].map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: '10px 14px',
                      border: '1px solid var(--sand)',
                      borderRadius: 100,
                      fontSize: 'clamp(0.72rem, 2vw, 0.82rem)',
                      color: 'var(--mahogany)',
                      fontFamily: 'Playfair Display, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      backgroundColor: 'var(--vanilla)',
                      textAlign: 'center',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 sm:space-y-8">
            {/* Profile Image */}
            <div className="relative mt-4 sm:mt-6 mx-auto max-w-sm lg:max-w-none">
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  right: -12,
                  bottom: -12,
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
                <img
                  src={suhani}
                  alt="Suhani Killa"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: -16,
                  right: 8,
                  backgroundColor: 'var(--mahogany)',
                  padding: '0.8rem 1.2rem',
                  borderRadius: 2,
                  zIndex: 2,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 600, color: 'var(--vanilla)' }}>2+</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tobacco)', fontFamily: 'DM Sans, sans-serif' }}>Years Creating</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3 mt-10 sm:mt-12">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--vanilla)',
                    border: '1px solid var(--sand)',
                    padding: 'clamp(0.85rem, 3vw, 1.2rem)',
                    borderRadius: 40,
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--tobacco)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      backgroundColor: 'var(--mahogany)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.6rem',
                      flexShrink: 0,
                    }}
                  >
                    <a.icon size={13} color="var(--vanilla)" />
                  </div>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.82rem, 2.5vw, 1rem)', fontWeight: 600, color: 'var(--mahogany)', marginBottom: 4 }}>{a.title}</h4>
                  <p style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', fontWeight: 400, lineHeight: 1.5 }}>{a.description}</p>
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