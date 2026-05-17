import React, { useEffect, useState } from 'react';
import { ExternalLink, Heart, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
const backendURL = import.meta.env.VITE_API_BASE_URL;

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/4.jpg';
import img4 from '../img/5.jpg';
import img5 from '../img/6.JPG';
import img6 from '../img/31.jpg';
import img7 from '../img/IMG_1851.JPG';
import img8 from '../img/IMG_1948.JPG';
import img9 from '../img/IMG_1959.JPG';
import img10 from '../img/IMG_1969.JPG';
import img11 from '../img/IMG_1981.JPG';
import img12 from '../img/IMG_2004.JPG';
import img13 from '../img/IMG_2011.JPG';
import img14 from '../img/IMG_2015.JPG';
import img15 from '../img/IMG_2016.JPG';
import img16 from '../img/IMG_2020.JPG';
import img17 from '../img/IMG_2022.JPG';
import img18 from '../img/IMG_2030.JPG';
import img19 from '../img/IMG_2043.JPG';
import img20 from '../img/IMG_2047.JPG';
import img21 from '../img/IMG_2049.JPG';
import img22 from '../img/IMG_2050.JPG';
import img23 from '../img/IMG_2051.JPG';
import img25 from '../img/IMG_2178.JPG';
import img26 from '../img/IMG_2291.JPG';
import img27 from '../img/IMG_2315.JPG';
import img28 from '../img/IMG_2335.JPG';
import img29 from '../img/IMG_2339.JPG';
import img30 from '../img/IMG_2395.JPG';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [cloudImages, setCloudImages] = useState<any[]>([]);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'digital', label: 'Digital Art' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'illustrations', label: 'Illustrations' },
    { id: 'commissions', label: 'Commissions' },
  ];

  const portfolioItems = [
    { id: 1, category: 'portraits', image: img1, likes: 87, views: 66 },
    { id: 2, category: 'commissions', image: img2, likes: 42, views: 73 },
    { id: 3, category: 'digital', image: img3, likes: 56, views: 93 },
    { id: 4, category: 'illustrations', image: img4, likes: 70, views: 75 },
    { id: 5, category: 'commissions', image: img5, likes: 39, views: 99 },
    { id: 6, category: 'digital', image: img6, likes: 92, views: 87 },
    { id: 7, category: 'portraits', image: img7, likes: 64, views: 98 },
    { id: 8, category: 'illustrations', image: img8, likes: 51, views: 59 },
    { id: 9, category: 'commissions', image: img9, likes: 76, views: 77 },
    { id: 10, category: 'digital', image: img10, likes: 84, views: 81 },
    { id: 11, category: 'digital', image: img11, likes: 33, views: 94 },
    { id: 12, category: 'illustrations', image: img12, likes: 59, views: 79 },
    { id: 13, category: 'commissions', image: img13, likes: 47, views: 68 },
    { id: 14, category: 'portraits', image: img14, likes: 98, views: 65 },
    { id: 15, category: 'digital', image: img15, likes: 44, views: 77 },
    { id: 16, category: 'illustrations', image: img16, likes: 73, views: 88 },
    { id: 17, category: 'commissions', image: img17, likes: 29, views: 69 },
    { id: 18, category: 'portraits', image: img18, likes: 62, views: 84 },
    { id: 19, category: 'digital', image: img19, likes: 79, views: 91 },
    { id: 20, category: 'illustrations', image: img20, likes: 88, views: 52 },
    { id: 21, category: 'commissions', image: img21, likes: 36, views: 95 },
    { id: 22, category: 'portraits', image: img22, likes: 91, views: 71 },
    { id: 23, category: 'digital', image: img23, likes: 74, views: 86 },
    { id: 25, category: 'commissions', image: img25, likes: 97, views: 99 },
    { id: 26, category: 'portraits', image: img26, likes: 53, views: 80 },
    { id: 27, category: 'digital', image: img27, likes: 45, views: 72 },
    { id: 28, category: 'illustrations', image: img28, likes: 66, views: 60 },
    { id: 29, category: 'commissions', image: img29, likes: 89, views: 93 },
    { id: 30, category: 'portraits', image: img30, likes: 61, views: 58 },
  ];

  useEffect(() => {
    fetch(`${backendURL}/cloudinary-images`)
      .then(r => r.json())
      .then(data => setCloudImages(data))
      .catch(() => {});
  }, []);

  const allItems = [...portfolioItems, ...cloudImages.map((item, idx) => ({ ...item, id: 1000 + idx }))];
  const filteredItems = activeFilter === 'all' ? allItems : allItems.filter(i => i.category === activeFilter);
  const itemsToDisplay = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="portfolio" style={{ backgroundColor: 'var(--vanilla)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
            <span style={{ color: 'var(--tobacco)', fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
              MY WORK 
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, color: 'var(--mahogany)' }}>
            Visual <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Gallery</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.0 rem', maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
           From vibrant cartoon portraits to custom product merchandise—explore a diverse showcase of digital art created to bring character and emotion to life.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => { setActiveFilter(f.id); setShowAll(false); }}
              style={{
                padding: '8px 20px',
                borderRadius: 2,
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: activeFilter === f.id ? 'var(--mahogany)' : 'transparent',
                color: activeFilter === f.id ? 'var(--vanilla)' : 'var(--mahogany)',
                border: activeFilter === f.id ? '1px solid var(--mahogany)' : '1px solid var(--sand)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsToDisplay.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: 'var(--sand)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(88,71,56,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              className="group"
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title || ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(88,71,56,0.85) 0%, transparent 50%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.2rem',
                }}
                className="group-hover:opacity-100"
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
              >
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 12, color: 'var(--sand)', fontSize: '0.78rem', fontFamily: 'DM Sans, sans-serif' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Heart size={12} />
                      <span>{item.likes}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Eye size={12} />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setModalImageIndex(filteredItems.findIndex(i => i.id === item.id))}
                    style={{ width: 32, height: 32, borderRadius: 2, backgroundColor: 'var(--vanilla)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  >
                    <ExternalLink size={13} color="var(--mahogany)" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {filteredItems.length > 6 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: '13px 36px',
                backgroundColor: 'transparent',
                color: 'var(--mahogany)',
                border: '1px solid var(--tobacco)',
                borderRadius: 2,
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--mahogany)'; e.currentTarget.style.color = 'var(--vanilla)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--mahogany)'; }}
            >
              {showAll ? 'Show Less' : 'View Full Gallery'}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalImageIndex !== null && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(46,31,21,0.92)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9000 }}>
          <button onClick={() => setModalImageIndex(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(241,234,218,0.15)', border: '1px solid rgba(241,234,218,0.3)', borderRadius: 2, padding: 8, cursor: 'pointer', color: 'var(--vanilla)' }}>
            <X size={16} />
          </button>
          <div style={{ position: 'relative', width: '90%', maxWidth: '900px', maxHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setModalImageIndex(p => (p! > 0 ? p! - 1 : p))}
              style={{ position: 'absolute', left: -44, background: 'rgba(241,234,218,0.1)', border: '1px solid rgba(241,234,218,0.2)', borderRadius: 2, padding: 8, cursor: 'pointer', color: 'var(--vanilla)', zIndex: 1 }}
            >
              <ChevronLeft size={18} />
            </button>
            <img src={filteredItems[modalImageIndex].image} alt="Preview" style={{ maxHeight: '90vh', maxWidth: '100%', borderRadius: 2, objectFit: 'contain', margin: '0 auto', display: 'block' }} />
            <button
              onClick={() => setModalImageIndex(p => (p! < filteredItems.length - 1 ? p! + 1 : p))}
              style={{ position: 'absolute', right: -44, background: 'rgba(241,234,218,0.1)', border: '1px solid rgba(241,234,218,0.2)', borderRadius: 2, padding: 8, cursor: 'pointer', color: 'var(--vanilla)', zIndex: 1 }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
