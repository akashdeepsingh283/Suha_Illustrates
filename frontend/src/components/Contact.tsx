import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
const API = import.meta.env.VITE_API_BASE_URL;

interface ContactProps {
  isLoggedIn: boolean;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  border: '1px solid var(--sand)',
  borderRadius: 2,
  fontSize: 'clamp(0.82rem, 2.5vw, 0.88rem)',
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: 300,
  color: 'var(--mahogany)',
  backgroundColor: 'var(--vanilla)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'var(--mahogany)',
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: 400,
  marginBottom: 6,
};

const Contact: React.FC<ContactProps> = ({ isLoggedIn }) => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', budget: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) { toast.error('Please sign in before submitting the form.'); return; }
    try {
      const res = await axios.post(`${API}/order`, formData);
      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', project: '', budget: '', message: '' });
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'snoopyydoodles@gmail.com', link: 'mailto:snoopyydoodles@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+91 93687 76711', link: 'tel:+919368776711' },
    { icon: MapPin, title: 'Location', value: 'Agra, India', link: 'https://maps.google.com/?q=Agra' },
  ];

  return (
    <section id="contact" style={{ backgroundColor: 'var(--white-warm)', padding: 'clamp(4rem, 10vw, 7rem) 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
            <span style={{ color: 'var(--tobacco)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
              Get in Touch
            </span>
            <div style={{ width: 40, height: 1, background: 'var(--tobacco)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 8vw, 3.8rem)', fontWeight: 400, color: 'var(--mahogany)' }}>
            Let's Create <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Together</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', maxWidth: 500, margin: '1rem auto 0', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: 300, padding: '0 8px' }}>
            Ready to bring your artistic vision to life? I'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Form */}
          <div style={{ backgroundColor: 'var(--vanilla)', border: '1px solid var(--sand)', borderRadius: 4, padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <MessageSquare size={15} color="var(--tobacco)" />
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 600, color: 'var(--mahogany)' }}>Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name + Email row — stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {[{ id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' }].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={labelStyle}>{f.label}</label>
                    <input
                      type={f.type} id={f.id} name={f.id} value={(formData as any)[f.id]}
                      onChange={handleInputChange} placeholder={f.placeholder} required
                      style={{ ...inputStyle, borderColor: focusedField === f.id ? 'var(--tobacco)' : 'var(--sand)' }}
                      onFocus={() => setFocusedField(f.id)} onBlur={() => setFocusedField(null)}
                    />
                  </div>
                ))}
              </div>

              {/* Project + Budget row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  { id: 'project', label: 'Project Type', options: [{ v: '', l: 'Select type' }, { v: 'portrait', l: 'Portrait Commission' }, { v: 'illustration', l: 'Digital Illustration' }, { v: 'character', l: 'Character Design' }, { v: 'other', l: 'Other' }] },
                  { id: 'budget', label: 'Budget Range', options: [{ v: '', l: 'Select range' }, { v: 'under-500', l: 'Under $500' }, { v: '500-1000', l: '$500 – $1,000' }, { v: '1000-2500', l: '$1,000 – $2,000' }, { v: 'over-2500', l: 'Over $2,000' }] },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={labelStyle}>{f.label}</label>
                    <select
                      id={f.id} name={f.id} value={(formData as any)[f.id]}
                      onChange={handleInputChange} required
                      style={{ ...inputStyle, borderColor: focusedField === f.id ? 'var(--tobacco)' : 'var(--sand)', appearance: 'auto' }}
                      onFocus={() => setFocusedField(f.id)} onBlur={() => setFocusedField(null)}
                    >
                      {f.options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Project Details</label>
                <textarea
                  id="message" name="message" rows={5} value={formData.message}
                  onChange={handleInputChange} required
                  placeholder="Tell me about your project, style preferences, timeline..."
                  style={{ ...inputStyle, resize: 'none', borderColor: focusedField === 'message' ? 'var(--tobacco)' : 'var(--sand)' }}
                  onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                />
              </div>

              <button
                type="submit" disabled={!isLoggedIn}
                style={{
                  width: '100%', padding: '13px',
                  backgroundColor: isLoggedIn ? 'var(--mahogany)' : 'var(--sand)',
                  color: isLoggedIn ? 'var(--vanilla)' : 'var(--mountain)',
                  border: 'none', borderRadius: 2,
                  fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 400, cursor: isLoggedIn ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => { if (isLoggedIn) e.currentTarget.style.backgroundColor = 'var(--mahogany-dark)'; }}
                onMouseLeave={e => { if (isLoggedIn) e.currentTarget.style.backgroundColor = 'var(--mahogany)'; }}
              >
                <Send size={13} />
                {isLoggedIn ? 'Send Message' : 'Sign in to send'}
              </button>

              {!isLoggedIn && (
                <p style={{ fontSize: '0.78rem', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                  You must{' '}
                  <a href="/login" style={{ color: 'var(--mahogany)', textDecoration: 'underline' }}>sign in</a>
                  {' '}to submit a message.
                </p>
              )}
            </form>
          </div>

          {/* Right info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact info */}
            <div style={{ backgroundColor: 'var(--vanilla)', border: '1px solid var(--sand)', borderRadius: 4, padding: 'clamp(1.2rem, 4vw, 2rem)' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 600, color: 'var(--mahogany)', marginBottom: '1.2rem' }}>
                Contact Info
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div style={{ width: 34, height: 34, backgroundColor: 'var(--mahogany)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <info.icon size={13} color="var(--vanilla)" />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mountain)', fontFamily: 'DM Sans, sans-serif' }}>{info.title}</div>
                      <a
                        href={info.link}
                        style={{ color: 'var(--mahogany)', fontSize: 'clamp(0.78rem, 2.5vw, 0.88rem)', fontFamily: 'DM Sans, sans-serif', fontWeight: 400, textDecoration: 'none', wordBreak: 'break-all' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--tobacco)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--mahogany)')}
                      >{info.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={{ backgroundColor: 'var(--vanilla)', border: '1px solid var(--sand)', borderRadius: 4, padding: 'clamp(1.2rem, 4vw, 2rem)' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Calendar size={14} color="var(--tobacco)" />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 600, color: 'var(--mahogany)' }}>Availability</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: 'rgba(181,158,125,0.1)', border: '1px solid var(--tobacco)', borderRadius: 2, marginBottom: '0.8rem', gap: 8 }}>
                <span style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.82rem)', color: 'var(--mahogany)', fontFamily: 'DM Sans, sans-serif' }}>Current Status</span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tobacco)', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }}>Available</span>
              </div>
              <div style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.82rem)', color: 'var(--text-muted)', lineHeight: 2, fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                <p><span style={{ color: 'var(--mahogany)', fontWeight: 400 }}>Response Time:</span> Within 24 hours</p>
                <p><span style={{ color: 'var(--mahogany)', fontWeight: 400 }}>Next Available:</span> This week</p>
                <p><span style={{ color: 'var(--mahogany)', fontWeight: 400 }}>Typical Timeline:</span> 3–7 days</p>
              </div>
            </div>

            {/* FAQ */}
            <div style={{ backgroundColor: 'var(--mahogany)', borderRadius: 4, padding: 'clamp(1.2rem, 4vw, 2rem)' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 4vw, 1.2rem)', fontWeight: 600, color: 'var(--vanilla)', marginBottom: '1rem' }}>Quick Questions</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { q: 'How long does a project take?', a: 'Most projects completed within 3–7 days.' },
                  { q: 'Do you offer revisions?', a: 'Yes, up to 3 revisions with every project.' },
                  { q: 'What file formats?', a: 'High-res PNG, JPEG, and source files (PSD/AI).' },
                ].map((faq, i) => (
                  <div key={i}>
                    <p style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.82rem)', fontWeight: 500, color: 'var(--tobacco)', fontFamily: 'DM Sans, sans-serif', marginBottom: 2 }}>{faq.q}</p>
                    <p style={{ fontSize: 'clamp(0.72rem, 2vw, 0.78rem)', color: 'var(--sand)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;