import React, { useEffect, useState, useCallback } from 'react';
import { ExternalLink, Heart, Eye, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const backendURL = import.meta.env.VITE_API_BASE_URL;

interface PortfolioItem {
  id: number | string;
  category: string;
  image: string;
  title?: string;
  likes: number;
  views: number;
}

const filters = [
  { id: 'all',           label: 'All Work' },
  { id: 'digital',       label: 'Digital Art' },
  { id: 'portraits',     label: 'Portraits' },
  { id: 'illustrations', label: 'Pet Illustrations' },
  { id: 'commissions',   label: 'Custom Prints' },
];

// In-memory cache so switching tabs doesn't re-fetch
const cloudCache: Record<string, PortfolioItem[]> = {};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll]           = useState(false);
  const [cloudItems, setCloudItems]     = useState<PortfolioItem[]>([]);
  const [loading, setLoading]           = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const fetchCloud = useCallback(async (category: string) => {
    if (cloudCache[category] !== undefined) {
      setCloudItems(cloudCache[category]);
      return;
    }
    setLoading(true);
    try {
      const url =
        category === 'all'
          ? `${backendURL}/cloudinary-images`
          : `${backendURL}/cloudinary-images/${category}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: PortfolioItem[] = await res.json();
      const tagged = data.map((item, idx) => ({
        ...item,
        id: `cloud_${category}_${idx}`,
      }));
      cloudCache[category] = tagged;
      setCloudItems(tagged);
    } catch (err) {
      console.error('Cloudinary fetch error:', err);
      cloudCache[category] = [];
      setCloudItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setShowAll(false);
    fetchCloud(activeFilter);
  }, [activeFilter, fetchCloud]);


  const allItems = cloudItems;
  const itemsToDisplay = showAll ? allItems : allItems.slice(0, 6);
  const modalList      = allItems;

  return (
    <section id="portfolio" style={{ backgroundColor: 'var(--vanilla)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
            <span style={{ color: 'var(--tobacco)', fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
              My Work
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, color: 'var(--mahogany)' }}>
            Visual <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Gallery</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
            From vibrant cartoon portraits to custom product merchandise — explore a diverse showcase of digital art created to bring character and emotion to life.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                padding: '8px 22px',
                borderRadius: 100,
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: activeFilter === f.id ? 'var(--mahogany)' : 'transparent',
                color:           activeFilter === f.id ? 'var(--vanilla)'  : 'var(--mahogany)',
                border:          activeFilter === f.id ? '1px solid var(--mahogany)' : '1px solid var(--sand)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, padding: '3rem 0', color: 'var(--tobacco)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem' }}>
            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
            <span>Loading {filters.find((f) => f.id === activeFilter)?.label ?? ''} …</span>
          </div>
        )}

        {/* Empty state */}
        {!loading && allItems.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--mountain)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', padding: '3rem 0' }}>
            No images found for this category yet.
          </p>
        )}

        {/* Grid */}
        {!loading && allItems.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsToDisplay.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'var(--sand)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
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
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(88,71,56,0.85) 0%, transparent 50%)',
                    opacity: 0, transition: 'opacity 0.3s ease',
                    display: 'flex', alignItems: 'flex-end', padding: '1.2rem',
                  }}
                  className="group-hover:opacity-100"
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                >
                  <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 12, color: 'var(--sand)', fontSize: '0.78rem', fontFamily: 'DM Sans, sans-serif' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Heart size={12} /> {item.likes}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Eye size={12} />  {item.views}</span>
                    </div>
                    <button
                      onClick={() => setModalImageIndex(idx)}
                      style={{ width: 32, height: 32, borderRadius: 2, backgroundColor: 'var(--vanilla)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <ExternalLink size={13} color="var(--mahogany)" />
                    </button>
                  </div>
                </div>

                {/* Cloudinary badge */}
                {String(item.id).startsWith('cloud_') && (
                  <div style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'var(--mahogany)', color: 'var(--vanilla)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 1, fontFamily: 'DM Sans, sans-serif', opacity: 0.85 }}>
                    {item.category}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Show more / less */}
        {!loading && allItems.length > 6 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: '13px 36px',
                backgroundColor: 'transparent',
                color: 'var(--mahogany)',
                border: '1px solid var(--tobacco)',
                borderRadius: 100,
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
              {showAll ? 'Show Less' : `View All ${allItems.length} Works`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {modalImageIndex !== null && (
        <div
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(46,31,21,0.93)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9000 }}
          onClick={() => setModalImageIndex(null)}
        >
          <button
            onClick={() => setModalImageIndex(null)}
            style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(241,234,218,0.15)', border: '1px solid rgba(241,234,218,0.3)', borderRadius: 2, padding: 8, cursor: 'pointer', color: 'var(--vanilla)', zIndex: 1 }}
          >
            <X size={16} />
          </button>

          <div
            style={{ position: 'relative', width: '90%', maxWidth: '900px', maxHeight: '90vh', display: 'flex', alignItems: 'center' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImageIndex(p => p! > 0 ? p! - 1 : p)}
              disabled={modalImageIndex === 0}
              style={{ position: 'absolute', left: -48, background: 'rgba(241,234,218,0.1)', border: '1px solid rgba(241,234,218,0.2)', borderRadius: 2, padding: 10, cursor: modalImageIndex === 0 ? 'default' : 'pointer', color: 'var(--vanilla)', opacity: modalImageIndex === 0 ? 0.3 : 1, zIndex: 1 }}
            >
              <ChevronLeft size={18} />
            </button>

            <img
              src={modalList[modalImageIndex].image}
              alt="Preview"
              style={{ maxHeight: '90vh', maxWidth: '100%', borderRadius: 2, objectFit: 'contain', margin: '0 auto', display: 'block' }}
            />

            <button
              onClick={() => setModalImageIndex(p => p! < modalList.length - 1 ? p! + 1 : p)}
              disabled={modalImageIndex === modalList.length - 1}
              style={{ position: 'absolute', right: -48, background: 'rgba(241,234,218,0.1)', border: '1px solid rgba(241,234,218,0.2)', borderRadius: 2, padding: 10, cursor: modalImageIndex === modalList.length - 1 ? 'default' : 'pointer', color: 'var(--vanilla)', opacity: modalImageIndex === modalList.length - 1 ? 0.3 : 1, zIndex: 1 }}
            >
              <ChevronRight size={18} />
            </button>

            <div style={{ position: 'absolute', bottom: -32, left: '50%', transform: 'translateX(-50%)', color: 'rgba(241,234,218,0.5)', fontSize: '0.72rem', letterSpacing: '0.1em', fontFamily: 'DM Sans, sans-serif' }}>
              {modalImageIndex + 1} / {modalList.length}
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default Portfolio;