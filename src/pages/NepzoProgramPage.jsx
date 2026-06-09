import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  Award,
  Users,
  Brain,
  ArrowRight,
  X,
  Calendar,
  Lightbulb,
  Sparkle,
  Star
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './NepzoProgramPage.css'

const partnerLogos = [
  { src: '/apeejay.jpg', alt: 'Apeejay Education' },
  { src: '/shri ram global.jpg', alt: 'Shri Ram Global School' },
  { src: '/the vasant international.png', alt: 'The Vasant School' },
  { src: 'https://elementorkits-1.nextdin.com/coursely/wp-content/uploads/sites/13/2026/03/Logoipsum-1.png', alt: 'Partner 1' },
  { src: 'https://elementorkits-1.nextdin.com/coursely/wp-content/uploads/sites/13/2026/03/Logoipsum2.png', alt: 'Partner 2' },
  { src: 'https://elementorkits-1.nextdin.com/coursely/wp-content/uploads/sites/13/2026/03/Logoipsum3.png', alt: 'Partner 3' },
  { src: 'https://elementorkits-1.nextdin.com/coursely/wp-content/uploads/sites/13/2026/03/Logoipsum4.png', alt: 'Partner 4' },
]

export function NepzoProgramPage() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [activePillar, setActivePillar] = useState(0)

  useScrollReveal([activePillar])

  useEffect(() => {
    document.title = 'NEPZO Future Ready Learning Program | SckoolChess'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about NEPZO’s Future Ready Learning Program co-powered by SckoolChess. Exploring practical entrepreneurship, leadership, and financial literacy aligned with NEP 2020.'
      )
    }
  }, [])

  // Core Pillars (Pillars from brochure)
  const pillars = [
    {
      title: 'Prepares for the Future',
      icon: <Award size={22} />,
      desc: 'Builds modern capabilities and real-world intelligence so students are ready for the evolving global landscape.',
      color: 'rgba(14, 116, 144, 0.08)',
      iconColor: '#0e7490',
      bannerText: '21st Century Prep'
    },
    {
      title: 'Develops Life Skills',
      icon: <Users size={22} />,
      desc: 'Fosters high-agency collaboration, critical thinking, confidence, communication, and real leadership.',
      color: 'rgba(232, 117, 10, 0.08)',
      iconColor: '#E8750A',
      bannerText: 'High-Agency Skill'
    },
    {
      title: 'Academic & Cognitive Boost',
      icon: <Brain size={22} />,
      desc: 'Enhances cognitive focus, strategic foresight, problem-solving, logical reasoning, and academic discipline.',
      color: 'rgba(14, 116, 144, 0.08)',
      iconColor: '#0e7490',
      bannerText: 'NEP-Aligned IQ'
    },
    {
      title: 'Financial & Business IQ',
      icon: <TrendingUp size={22} />,
      desc: 'Equips students with smart budgeting, money management, risk evaluation, and investment principles.',
      color: 'rgba(232, 117, 10, 0.08)',
      iconColor: '#E8750A',
      bannerText: 'Financial Literacy'
    }
  ]



  return (
    <div className="nz-page">
      {/* ── 1. UNIFIED HERO SECTION WITH BOTTOM CURVE STRIP ── */}
      <section className="nz-premium-hero">
        {/* Glow Orbs */}
        <div className="nz-glow-sphere sphere-1" />
        <div className="nz-glow-sphere sphere-2" />

        {/* Left text content */}
        <div className="nz-hero-text-col">
          <div className="nz-hero__logo-strip reveal fade-up" style={{ '--delay': '0.05s' }}>
            <img src="/nepzobg.png" alt="NEPZO Logo" className="nz-hero__partner-logo nz-hero__partner-logo--nepzo" />
            <div className="nz-hero__divider"></div>
            <img src="/logonewbg.png" alt="SckoolChess Logo" className="nz-hero__partner-logo" />
          </div>

          <span className="nz-hero-pill reveal fade-up" style={{ '--delay': '0.12s' }}>
            <Sparkle size={12} className="pulse-sparkle" />
            NEP 2020 Aligned | Batches for Classes 5 to 10
          </span>

          <h1 className="nz-hero-title reveal fade-up" style={{ '--delay': '0.2s' }}>
            Preparing Kids For The <span className="gradient-text">Real World</span>
          </h1>

          <p className="nz-hero-desc reveal fade-up" style={{ '--delay': '0.28s' }}>
            An experiential education program co-designed by <strong>NEPZO</strong> and powered by <strong>SckoolChess</strong>. We equip young minds with financial intelligence, entrepreneurial spirit, leadership qualities, and critical cognitive abilities.
          </p>

          <div className="nz-hero-actions reveal fade-up" style={{ '--delay': '0.36s' }}>
            <Link to="/book-class" className="nz-hero-btn-primary">
              <span>Schedule Free Session</span>
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+918447992702" className="nz-hero-btn-secondary">
              <span>Talk to Program Expert</span>
            </a>
          </div>
        </div>

        {/* Person image — absolute, extends full height to right edge */}
        <img
          src="/student4.png"
          alt="Student learning future skills"
          className="nz-hero-person-img"
        />

        {/* Satisfaction card — absolute, overlaps center */}
        <div className="nz-satisfaction-card">
          <div className="avatar-row">
            <img src="/c1.jpg" alt="Student" className="avatar-circle" />
            <img src="/c2.jpg" alt="Student" className="avatar-circle" />
            <img src="/c3.jpg" alt="Student" className="avatar-circle" />
            <div className="avatar-plus">+</div>
          </div>
          <div className="satisfaction-num">98%</div>
          <div className="satisfaction-label">Learner Satisfaction</div>
        </div>

        {/* Rotating badge — absolute, top right */}
        <div className="nz-rotating-badge">
          <div className="badge-icon-center">
            <Lightbulb size={22} />
          </div>
          <svg viewBox="0 0 100 100" className="nz-rotating-svg">
            <path
              id="nzCirclePath"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text>
              <textPath href="#nzCirclePath">
                START LEARNING TODAY • UPGRADE SKILL •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Bottom strip — counters left, curve+logos right */}
        <div className="nz-hero-bottom">
          <div className="nz-hero-counters">
            <div className="nz-counter-box">
              <div className="nz-counter-top">
                <Star size={28} className="star-icon" />
                <span className="nz-counter-val">4.8</span>
              </div>
              <span className="nz-counter-lbl">Average Course Rating</span>
            </div>
            <div className="nz-counter-box">
              <div className="nz-counter-top">
                <span className="nz-counter-val">5K+</span>
              </div>
              <span className="nz-counter-lbl">Expert-Led Courses</span>
            </div>
          </div>

          <div className="nz-hero-trust-col">
            <img src="/curve.png" alt="" className="nz-curve-bg" />
            <div className="nz-trust-inner">
              <span className="nz-trust-title">They Trusted Us to Be #1 Online Course in the World</span>
              <div className="nz-logo-marquee">
                <div className="nz-logo-track">
                  {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <img
                      key={`${logo.src}-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="nz-logo-item"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── 4. UPCOMING NEPZO SESSIONS ── */}
      <section className="nz-upcoming-section">
        <div className="nz-wrap nz-upm-inner">

          {/* Left — text content */}
          <div className="nz-upm-left">
            <span className="nz-upm-badge">
              <Calendar size={12} /> Schedule
            </span>
            <h2>Financial Literacy Program</h2>
            <p>
              NEPZO’s Financial Literacy Program helps students understand money management and financial responsibility through practical and age-appropriate learning experiences:
            </p>
            <ul className="nz-upm-list">
              <li>
                <span className="nz-upm-list-bullet">✦</span> Saving and budgeting
              </li>
              <li>
                <span className="nz-upm-list-bullet">✦</span> Smart spending habits
              </li>
              <li>
                <span className="nz-upm-list-bullet">✦</span> Banking fundamentals
              </li>
              <li>
                <span className="nz-upm-list-bullet">✦</span> Digital payments and financial safety
              </li>
              <li>
                <span className="nz-upm-list-bullet">✦</span> Goal-based financial planning
              </li>
              <li>
                <span className="nz-upm-list-bullet">✦</span> Understanding value and responsibility
              </li>
            </ul>
            <Link to="/book-class" className="nz-upm-btn">
              Enroll Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — floating session card */}
          <div className="nz-upm-right">
            <div className="nz-upm-card">
              <div className="nz-upm-card__top">
                <h3>Financial Literacy Bootcamp</h3>
                <p>NEP-aligned money management and financial responsibility program.</p>
              </div>
              <div className="nz-upm-card__img">
                <img src="/student4.png" alt="NEPZO Program Session" />
                <Link to="/book-class" className="nz-upm-card__arrow" aria-label="Enroll">
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className="nz-upm-card__footer">
                <span><Calendar size={13} /> Batches Starting 2025</span>
                <span><Users size={13} /> Classes 5 – 10</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. HOLISTIC GROWTH PILLARS ── */}
      <section className="nz-pillars-section">
        <div className="nz-wrap">
          <div className="nz-section-header">
            <span className="nz-section-label reveal fade-up" style={{ '--delay': '0.05s' }}>Program Outcomes</span>
            <h2 className="nz-section-title reveal fade-up" style={{ '--delay': '0.12s' }}>Our Core Growth Ecosystem</h2>
            <p className="nz-section-sub reveal fade-up" style={{ '--delay': '0.2s' }}>
              Enabling structural advantages and high cognitive lift for school students. Click a card to explore each pillar's details.
            </p>
          </div>

          <div className="nz-pillars-interactive-grid">
            {pillars.map((p, idx) => {
              const isActive = activePillar === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`nz-pillar-interactive-card ${isActive ? 'active' : ''} reveal reveal-3d`}
                  style={{
                    '--delay': `${idx * 0.08 + 0.15}s`,
                    '--theme-bg': p.color,
                    '--theme-color': p.iconColor
                  }}
                >
                  <div className="nz-pillar-card-top">
                    {isActive ? (
                      <span className="nz-pillar-badge">Overview</span>
                    ) : (
                      <span className="nz-pillar-badge-placeholder" />
                    )}
                    <div className="nz-pillar-arrow">
                      {isActive ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                      )}
                    </div>
                  </div>

                  <div className="nz-pillar-card-content">
                    <div className="nz-pillar-icon-wrapper">
                      {p.icon}
                    </div>
                    <h3>{p.title}</h3>
                    <p className="nz-pillar-desc">{p.desc}</p>
                  </div>

                  <div className="nz-pillar-card-bottom-banner">
                    <span>{p.bannerText}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 6. WHY SCHOOLS CHOOSE NEPZO ── */}
      <section className="nz-program-gallery-section">
        <div className="nz-wrap">
          <div className="nz-section-header">
            <span className="nz-section-label reveal fade-up" style={{ '--delay': '0.05s' }}>Value Proposition</span>
            <h2 className="nz-section-title reveal fade-up" style={{ '--delay': '0.12s' }}>Why Schools Choose NEPZO</h2>
            <p className="nz-section-sub reveal fade-up" style={{ '--delay': '0.2s' }}>
              Enabling structural advantages, high cognitive lift, and future-readiness for leading educational institutions.
            </p>
          </div>

          <div className="nz-why-nepzo-grid">
            {[
              {
                icon: <Award size={24} />,
                title: 'Supports NEP 2020 Goals',
                desc: 'Aligns directly with experiential, practical, and skill-based learning frameworks for school pupils.',
                color: 'rgba(124, 58, 237, 0.08)',
                iconColor: '#7c3aed'
              },
              {
                icon: <Star size={24} />,
                title: 'Strengthens School Brand',
                desc: 'Enhances institutional prestige and builds a strong reputation for hosting future-focused education.',
                color: 'rgba(232, 117, 10, 0.08)',
                iconColor: '#E8750A'
              },
              {
                icon: <Users size={24} />,
                title: 'Builds Core Life Skills',
                desc: 'Cultivates high-agency leadership capabilities, personal confidence, and effective communication.',
                color: 'rgba(124, 58, 237, 0.08)',
                iconColor: '#7c3aed'
              },
              {
                icon: <Lightbulb size={24} />,
                title: 'Future-Focused Learning',
                desc: 'Introduces cutting-edge domains and cognitive models that prepare students for the modern landscape.',
                color: 'rgba(232, 117, 10, 0.08)',
                iconColor: '#E8750A'
              },
              {
                icon: <TrendingUp size={24} />,
                title: 'Real Industry Exposure',
                desc: 'Provides students with direct exposure through active entrepreneur mentors and leading industry professionals.',
                color: 'rgba(124, 58, 237, 0.08)',
                iconColor: '#7c3aed'
              },
              {
                icon: <Brain size={24} />,
                title: 'Elevates School Positioning',
                desc: 'Enhances parent value perception and aligns school institutions directly with modern educational outcomes.',
                color: 'rgba(232, 117, 10, 0.08)',
                iconColor: '#E8750A'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="nz-why-card reveal reveal-3d"
                style={{
                  '--delay': `${idx * 0.06 + 0.1}s`,
                  '--theme-bg': item.color,
                  '--theme-color': item.iconColor
                }}
              >
                <div className="nz-why-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREMIUM CALL-TO-ACTION SECTION ── */}
      <section className="nz-premium-cta-section">
        <div className="nz-wrap">
          <div className="nz-cta-card-wrapper reveal reveal-3d" style={{ '--delay': '0.1s' }}>
            <div className="nz-cta-ambient-glow" />
            <div className="nz-cta-content-inner">
              <span className="nz-cta-badge-pill">CO-POWERED BY SCKOOLCHESS</span>
              <h2>Future Readiness Starts Today</h2>
              <p>
                Empower your child or school institution with cutting-edge 21st-century capabilities. Aligning educational structures directly with NEP 2020 frameworks.
              </p>
              <div className="nz-cta-btns">
                <Link to="/book-class" className="nz-cta-btn-primary">
                  <span>Request Program Guide</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="http://www.nepzo.in" target="_blank" rel="noopener noreferrer" className="nz-cta-btn-secondary">
                  <span>Visit Official NEPZO website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL VIEWER ── */}
      {lightboxImage && (
        <div
          className="nz-lightbox-overlay"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded brochure viewer"
        >
          <button
            className="nz-lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close viewer"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Expanded brochure full view"
            className="nz-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
