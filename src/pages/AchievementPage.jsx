import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { achievers } from '../data/siteContent';

const ALL_GALLERY_IMAGES = [
  '/gal1.jpg', '/gal2.jpg', '/gal3.jpg', '/gal4.jpg',
  '/gal5.jpeg', '/gal6.jpeg', '/gal7.jpeg', '/gal8.jpg',
  '/gal9.jpeg', '/gal10.jpeg', '/gal11.jpeg', '/gal12.jpeg',
  '/gnn1.jpeg', '/gnn2.jpg', '/gnn3.jpg', '/gnn4.jpg',
  '/gnn5.jpg', '/gnn6.jpeg', '/gnn7.jpg', '/gnn8.jpg',
];

export function AchievementPage() {
  useScrollReveal();

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openGallery = (index = 0) => {
    setStartIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  return (
    <div className="achievement-page">

      {/* ── Full-Width Hero Banner ── */}
      <section className="achievement-hero-banner">
        <img
          src="/achievementhero.jpeg"
          alt="Achievements That Build Champions"
          className="achievement-hero-img"
        />
      </section>

      {/* ── Achievements Showcase Section ── */}
      <section className="ach-showcase-section">
        <div className="ach-showcase-inner">

          {/* Header Row */}
          <div className="ach-showcase-header">
            <div className="ach-showcase-header-left">
              <p className="ach-showcase-kicker">Highlights</p>
              <h2 className="ach-showcase-title">Our Achievements</h2>
            </div>
            <button className="ach-view-all-btn ach-view-all-desktop" onClick={() => openGallery(0)}>
              View All Achievements <span>→</span>
            </button>
          </div>

          {/* Main Grid: left hero (1 student) + right 3 stacked cards (3 students) */}
          <div className="ach-showcase-grid">

            {/* Left — Large Hero Card (Vatsal Singla) */}
            {achievers[3] && (
              <div className="ach-hero-card" onClick={() => openGallery(3)} style={{ cursor: 'pointer' }}>
                <img src={achievers[3].image} alt={achievers[3].name} className="ach-hero-card-img" />
                <div className="ach-hero-card-overlay">
                  <div className="ach-hero-card-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                  </div>
                  <div className="ach-hero-card-text">
                    <p className="ach-hero-card-award">Father: Raj Singla</p>
                    <h3>{achievers[3].name}</h3>
                    <p className="ach-hero-card-desc">{achievers[3].achievement}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Right — Three Stacked Info Cards */}
            <div className="ach-side-cards">
              {achievers.slice(0, 3).map((student, idx) => (
                <div key={student.name} className="ach-side-card" onClick={() => openGallery(idx)} style={{ cursor: 'pointer' }}>
                  <img src={student.image} alt={student.name} className="ach-side-card-img" />
                  <div className="ach-side-card-body">
                    <div className="ach-side-card-text">
                      <h4>{student.name}</h4>
                      <p>{student.achievement}</p>
                    </div>
                    <div className={`ach-side-card-icon ${idx === 0 ? 'ach-icon-gold' : idx === 1 ? 'ach-icon-silver' : 'ach-icon-bronze'}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Stats Bar */}
          <div className="ach-stats-bar">
            <div className="ach-stat-item">
              <div className="ach-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="20" width="4" height="4"/><rect x="10" y="12" width="4" height="12"/><rect x="18" y="4" width="4" height="20"/></svg>
              </div>
              <div>
                <span className="ach-stat-num">5000+</span>
                <span className="ach-stat-label">Matches Played</span>
              </div>
            </div>
            <div className="ach-stat-divider" />
            <div className="ach-stat-item">
              <div className="ach-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <div>
                <span className="ach-stat-num">120+</span>
                <span className="ach-stat-label">Medals Won</span>
              </div>
            </div>
            <div className="ach-stat-divider" />
            <div className="ach-stat-item">
              <div className="ach-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <span className="ach-stat-num">22+</span>
                <span className="ach-stat-label">Partner Schools</span>
              </div>
            </div>
            <div className="ach-stat-divider" />
            <div className="ach-stat-item">
              <div className="ach-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <span className="ach-stat-num">95%</span>
                <span className="ach-stat-label">Parent Satisfaction</span>
              </div>
            </div>
          </div>

          <button className="ach-view-all-btn ach-view-all-mobile" onClick={() => openGallery(0)}>
            View All Achievements <span>→</span>
          </button>

        </div>
      </section>



      {/* ── Learning Moments Collage Section ── */}
      <section className="lm-section" id="gallery">
        <div className="lm-inner">

          {/* Header */}
          <div className="lm-header">
            <p className="lm-kicker">Learning Moments</p>
            <h2 className="lm-title">Growing Together, One Move at a Time</h2>
          </div>

          {/* Collage: portrait | 2×2 landscape | portrait */}
          <div className="lm-collage">
            <div className="lm-portrait lm-portrait-left" onClick={() => openGallery(12)}>
              <img src="/gnn1.jpeg" alt="Student focused on chess" />
              <div className="lm-img-hover" />
            </div>

            <div className="lm-landscape-grid">
              <div className="lm-landscape" onClick={() => openGallery(13)}>
                <img src="/gnn2.jpg" alt="Students with certificates" />
                <div className="lm-img-hover" />
              </div>
              <div className="lm-landscape" onClick={() => openGallery(14)}>
                <img src="/gnn3.jpg" alt="Kids playing chess" />
                <div className="lm-img-hover" />
              </div>
              <div className="lm-landscape" onClick={() => openGallery(15)}>
                <img src="/gnn4.jpg" alt="Chess lesson in progress" />
                <div className="lm-img-hover" />
              </div>
              <div className="lm-landscape" onClick={() => openGallery(16)}>
                <img src="/gnn5.jpg" alt="Students at chess table" />
                <div className="lm-img-hover" />
              </div>
            </div>

            <div className="lm-portrait lm-portrait-right" onClick={() => openGallery(19)}>
              <img src="/gnn8.jpg" alt="Student with trophy" />
              <div className="lm-img-hover" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="lm-cta">
            <button className="lm-view-more-btn" onClick={() => openGallery(12)}>
              View More Moments <span>→</span>
            </button>
          </div>

        </div>
      </section>

      {/* ── What Students Learn Here ── */}
      <AchLearnSection />

      {/* ── Popup Gallery Modal ── */}
      {galleryOpen && (
        <GalleryModal
          images={ALL_GALLERY_IMAGES}
          startIndex={startIndex}
          onClose={closeGallery}
        />
      )}

    </div>
  );
}

const LEARN_FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/>
      </svg>
    ),
    title: 'Strategic Thinking',
    desc: 'Enhances problem solving and critical thinking skills.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
    title: 'Tournament Exposure',
    desc: 'Regular participation builds experience and confidence.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Confidence Building',
    desc: 'Every win and learning shapes a stronger personality.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: 'Competitive Mindset',
    desc: 'Encourages discipline, focus and determination.',
  },
];

const ACH_TESTIMONIALS = [
  { text: "Rohini Chess Academy has played a huge role in my child's growth. The training, guidance, and tournaments have boosted his confidence and sharpened his thinking.", author: "~ Parent of Aarav, Grade 5 Student" },
  { text: "My daughter started as a complete beginner and now participates in district-level tournaments. The coaches are incredibly patient and inspiring.", author: "~ Parent of Priya, Grade 6 Student" },
  { text: "The academy's structured approach to chess has improved my son's concentration and academic performance remarkably.", author: "~ Parent of Rohan, Grade 4 Student" },
];

function AchLearnSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveIdx(p => (p + 1) % ACH_TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Feature cards */}
      <section className="ach-learn-section">
        <div className="ach-learn-inner">
          <p className="ach-learn-kicker">What Students Learn Here</p>
          <div className="ach-learn-grid">
            {LEARN_FEATURES.map((f) => (
              <div key={f.title} className="ach-learn-card">
                <div className="ach-learn-icon">{f.icon}</div>
                <div>
                  <h4 className="ach-learn-title">{f.title}</h4>
                  <p className="ach-learn-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="ach-testi-section">
        <div className="ach-testi-inner">
          <div className="ach-testi-quote-icon">"</div>
          <div className="ach-testi-avatar">
            <img src="/gnn7.jpg" alt="Parent" />
          </div>
          <div className="ach-testi-body">
            <p className="ach-testi-text">{ACH_TESTIMONIALS[activeIdx].text}</p>
            <p className="ach-testi-author">{ACH_TESTIMONIALS[activeIdx].author}</p>
            <div className="ach-testi-dots">
              {ACH_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`ach-testi-dot${i === activeIdx ? ' active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="ach-testi-chess-img">
            <img src="/gal2.jpg" alt="Chess tournament" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="ach-cta-banner">
        <div className="ach-cta-inner">
          <div className="ach-cta-left">
            <div className="ach-cta-crown">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 19h20v2H2z" fill="#F5A623" stroke="none"/>
                <path d="M2 19l3-10 5 6 4-9 4 9 5-6 3 10"/>
                <circle cx="2" cy="9" r="1.5" fill="#F5A623" stroke="none"/>
                <circle cx="22" cy="9" r="1.5" fill="#F5A623" stroke="none"/>
                <circle cx="12" cy="3" r="1.5" fill="#F5A623" stroke="none"/>
              </svg>
            </div>
            <div>
              <h3 className="ach-cta-title">Ready to Begin Your Chess Journey?</h3>
              <p className="ach-cta-sub">Join thousands of young minds learning, growing and winning with us.</p>
            </div>
          </div>
          <a href="/book-class" className="ach-cta-btn">Book Online Class →</a>
        </div>
      </section>
    </>
  );
}

function GalleryModal({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const thumbsRef = useRef(null);
  const activeThumbRef = useRef(null);

  const goPrev = useCallback(() => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setCurrent((p) => (p + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [goPrev, goNext, onClose]);

  // Scroll active thumbnail into view when current changes
  useEffect(() => {
    if (!thumbsRef.current || !activeThumbRef.current) return;
    const strip = thumbsRef.current;
    const thumb = activeThumbRef.current;
    const stripRect = strip.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const offset = thumbRect.left - stripRect.left + strip.scrollLeft - stripRect.width / 2 + thumbRect.width / 2;
    strip.scrollTo({ left: offset, behavior: 'smooth' });
  }, [current]);

  return (
    <div className="partner-modal-overlay" onClick={onClose}>
      <div className="partner-modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Counter */}
        <div className="partner-modal-counter">{current + 1} / {images.length}</div>

        {/* Close */}
        <button className="partner-modal-close" onClick={onClose} aria-label="Close gallery">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="partner-modal-gallery">

          {/* Main stage with arrows overlaid */}
          <div className="partner-modal-stage">
            <button className="partner-modal-arrow partner-modal-arrow-prev" onClick={goPrev} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Gallery image ${i + 1}`}
                className={`partner-modal-image${i === current ? ' active' : ''}`}
              />
            ))}

            <button className="partner-modal-arrow partner-modal-arrow-next" onClick={goNext} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="partner-modal-controls">
            <div className="partner-modal-thumbs" ref={thumbsRef}>
              {images.map((src, i) => (
                <button
                  key={src}
                  ref={i === current ? activeThumbRef : null}
                  className={`partner-modal-thumb${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to image ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
