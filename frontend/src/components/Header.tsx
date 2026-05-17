import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setIsLoggedIn(false);
    navigate('/login');
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
    isLoggedIn
      ? { label: 'Logout', href: '#', onClick: handleLogout }
      : { label: 'Login', href: '/login' },
  ];

  return (
    <header
      style={{
        backgroundColor: scrolled ? 'rgba(241,234,218,0.97)' : 'rgba(241,234,218,0.92)',
        borderBottom: scrolled ? '1px solid #CEC1A8' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo — wordmark style */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div
              style={{
                width: 32,
                height: 32,
                background: 'var(--mahogany)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }}
              className="group-hover:scale-105"
            >
              <span style={{ color: 'var(--vanilla)', fontSize: 13, fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 600 }}>S</span>
            </div>
            <span
              style={{
                fontFamily: "'Beth Ellen', cursive",
                fontSize: '1.2rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--mahogany)',
              }}
            >
              Suha Scribbles
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href?.startsWith('/') && !item.onClick ? (
                <Link
                  key={item.label}
                  to={item.href}
                  style={{ color: 'var(--mahogany)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Playfair Display', serif" }}
                  className="hover:opacity-60 transition-opacity"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) { e.preventDefault(); item.onClick(); }
                  }}
                  style={{ color: 'var(--mahogany)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Playfair Display', serif" }}
                  className="hover:opacity-60 transition-opacity"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: 'var(--mahogany)' }}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div style={{ borderTop: '1px solid var(--sand)', backgroundColor: 'var(--vanilla)' }} className="md:hidden py-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (item.onClick) { e.preventDefault(); item.onClick(); }
                  }}
                  style={{ color: 'var(--mahogany)', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '10px 16px' }}
                  className="hover:bg-sand transition-colors rounded"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
