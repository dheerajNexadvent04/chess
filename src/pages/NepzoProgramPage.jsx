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
  const [activeProgramTab, setActiveProgramTab] = useState('finance')

  useScrollReveal([activePillar, activeProgramTab])

  const programTabs = {
    finance: {
      title: 'Financial Literacy Program',
      desc: 'NEPZO’s Financial Literacy Program helps students understand money management and financial responsibility through practical and age-appropriate learning experiences:',
      bullets: [
        'Saving and budgeting',
        'Smart spending habits',
        'Banking fundamentals',
        'Digital payments and financial safety',
        'Goal-based financial planning',
        'Understanding value and responsibility'
      ],
      bootcampTitle: 'Financial Literacy Bootcamp',
      bootcampDesc: 'NEP-aligned money management and financial responsibility program.',
      bootcampImage: '/student4.png'
    },
    entrepreneur: {
      title: 'Entrepreneurship Program',
      desc: 'The Entrepreneurship Program introduces students to innovation, leadership, business thinking, communication, and problem-solving through engaging and activity-based learning experiences:',
      bullets: [
        'Creative and entrepreneurial thinking',
        'Leadership and teamwork',
        'Business and startup fundamentals',
        'Presentation and communication skills',
        'Problem-solving and decision-making',
        'Innovation and idea development'
      ],
      bottomText: 'Students interact with real entrepreneurs, startup founders, and business professionals, helping them connect classroom learning with real-world opportunities.',
      bootcampTitle: 'Entrepreneurship Bootcamp',
      bootcampDesc: 'NEP-aligned practical business, startup, and leadership program.',
      bootcampImage: '/student2.png'
    }
  }

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



          <h1 className="nz-hero-title reveal fade-up" style={{ '--delay': '0.2s' }}>
            Preparing Kids For The <span className="gradient-text">Real World</span>
          </h1>

          <p className="nz-hero-desc reveal fade-up" style={{ '--delay': '0.28s' }}>
            The future of education is evolving rapidly. Schools are no longer evaluated only by academic performance, but by how effectively they prepare students with real-world skills, leadership qualities, financial awareness, creativity, and future readiness.
          </p>
          <p className="nz-hero-desc reveal fade-up" style={{ '--delay': '0.32s' }}>
            Designed for students of Classes 5 to 10, the <strong>NEPZO Future Ready Learning Program</strong> (co-powered by <strong>SckoolChess</strong>) helps schools implement practical, skill-based, and experiential learning aligned with the vision of NEP 2020.
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
          src="/superman kid.png"
          alt="Student learning future skills"
          className="nz-hero-person-img"
        />

        {/* Satisfaction card — absolute, overlaps center */}
        <div className="nz-satisfaction-card">
          <div className="avatar-row">
            <img src="/whatsapp/WhatsApp Image 2026-06-08 at 11.38.45 AM (1).jpeg" alt="Student" className="avatar-circle" />
            <img src="/whatsapp/WhatsApp Image 2026-06-08 at 11.38.45 AM.jpeg" alt="Student" className="avatar-circle" />
            <img src="/whatsapp/WhatsApp Image 2026-06-08 at 11.38.46 AM.jpeg" alt="Student" className="avatar-circle" />
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
              <span className="nz-trust-title">NEP 2020 Aligned | Batches for Classes 5 to 10</span>
              <div className="nz-logo-marquee">
                <div className="nz-logo-track">
                  {Array(6).fill(["Think", "Plan", "Create", "Pitch", "Grow"]).flat().map((word, index) => (
                    <span key={index} className="nz-scroll-text">
                      {word}
                    </span>
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
            {/* Tab switcher */}
            <div className="nz-program-tabs reveal fade-up" style={{ '--delay': '0.05s' }}>
              <button
                className={`nz-program-tab ${activeProgramTab === 'finance' ? 'active' : ''}`}
                onClick={() => setActiveProgramTab('finance')}
              >
                Financial Literacy
              </button>
              <button
                className={`nz-program-tab ${activeProgramTab === 'entrepreneur' ? 'active' : ''}`}
                onClick={() => setActiveProgramTab('entrepreneur')}
              >
                Entrepreneurship
              </button>
            </div>

            <h2>{programTabs[activeProgramTab].title}</h2>
            <p>{programTabs[activeProgramTab].desc}</p>
            <ul className="nz-upm-list">
              {programTabs[activeProgramTab].bullets.map((bullet, idx) => (
                <li key={idx}>
                  <span className="nz-upm-list-bullet">✦</span> {bullet}
                </li>
              ))}
            </ul>
            {programTabs[activeProgramTab].bottomText && (
              <p className="nz-upm-bottom-text">{programTabs[activeProgramTab].bottomText}</p>
            )}
            <Link to="/book-class" className="nz-upm-btn">
              Enroll Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — floating session card */}
          <div className="nz-upm-right">
            <div className="nz-upm-card">
              <div className="nz-upm-card__top">
                <h3>{programTabs[activeProgramTab].bootcampTitle}</h3>
                <p>{programTabs[activeProgramTab].bootcampDesc}</p>
              </div>
              <div className="nz-upm-card__img">
                <img src={programTabs[activeProgramTab].bootcampImage} alt="NEPZO Program Session" />
                <div className="nz-upm-card__pills">
                  <span className="nz-upm-card__pill">
                    <Calendar size={13} /> Batches Starting 2025
                  </span>
                  <span className="nz-upm-card__pill">
                    <Users size={13} /> Classes 5 – 10
                  </span>
                </div>
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
              Today's students need more than textbook knowledge. They need confidence, financial awareness, leadership abilities, entrepreneurial thinking, and practical life skills to succeed in a rapidly changing world. NEPZO helps schools create meaningful learning experiences that prepare students not only for examinations, but for life.
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

      {/* ── 5.1 BENEFITS FOR SCHOOLS ── */}
      <section className="nz-benefits-section">
        <div className="nz-wrap">
          <div className="nz-section-header">
            <span className="nz-section-label reveal fade-up" style={{ '--delay': '0.05s' }}>Institutional Perks</span>
            <h2 className="nz-section-title reveal fade-up" style={{ '--delay': '0.12s' }}>Benefits for Schools</h2>
            <p className="nz-section-sub reveal fade-up" style={{ '--delay': '0.2s' }}>
              Schools implementing NEPZO's Future Ready Learning Program can strengthen their academic ecosystem while preparing students with practical life skills and future readiness.
            </p>
          </div>

          <div className="nz-benefits-grid">
            {[
              { title: 'Holistic Student Development', desc: 'Fostering intellectual, emotional, and social capability.' },
              { title: 'Innovation & Entrepreneurial Thinking', desc: 'Inspiring children to create, solve problems, and build startups.' },
              { title: 'Financial Awareness & Responsibility', desc: 'Teaching the value of money, budgeting, and investment safety.' },
              { title: 'Future Career Readiness', desc: 'Preparing students with 21st century industry capabilities.' },
              { title: 'Modern & Progressive School Positioning', desc: 'Standing out as an institution that shapes future leaders.' },
              { title: 'Meaningful Experiential Learning', desc: 'NEP-aligned practical education beyond normal textbooks.' }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="nz-benefit-card reveal reveal-3d"
                style={{ '--delay': `${idx * 0.08 + 0.15}s` }}
              >
                <div className="nz-benefit-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Location Banner (Ideal for Schools In) */}
          <div className="nz-locations-banner reveal fade-up" style={{ '--delay': '0.15s' }}>
            <span className="nz-loc-label">Ideal for Schools in</span>
            <div className="nz-loc-pills">
              {['Rohini', 'Dwarka', 'Indirapuram', 'Noida', 'Gurgaon'].map((loc, idx) => (
                <span key={idx} className="nz-loc-pill">
                  📍 {loc}
                </span>
              ))}
            </div>
            <p className="nz-loc-footnote">
              NEPZO’s programs are designed for schools looking to strengthen their educational offerings with modern, practical, and future-focused learning initiatives.
            </p>
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

          <div className="nz-gallery-grid">
            {[
              {
                badge: 'NEP 2020',
                title: 'Supports NEP 2020 Goals',
                desc: 'Supports NEP 2020 experiential and skill-based learning goals.',
                img: '/t4.jpg'
              },
              {
                badge: 'Branding',
                title: 'Strengthens School Brand',
                desc: 'Strengthens school brand and reputation.',
                img: '/student2.png'
              },
              {
                badge: 'Life Skills',
                title: 'Builds Core Life Skills',
                desc: 'Builds leadership, confidence, and communication skills.',
                img: '/t1.jpg'
              },
              {
                badge: 'Cognitive',
                title: 'Future-Focused Learning',
                desc: 'Introduces future-focused learning opportunities.',
                img: '/student1.png'
              },
              {
                badge: 'Exposure',
                title: 'Real Industry Exposure',
                desc: 'Provides industry exposure through entrepreneurs and professionals.',
                img: '/t2.jpg'
              },
              {
                badge: 'Positioning',
                title: 'Elevates School Positioning',
                desc: 'Enhances parent value perception and school positioning.',
                img: '/t3.jpg'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="nz-gallery-card reveal reveal-3d"
                style={{ '--delay': `${idx * 0.08 + 0.15}s` }}
              >
                <div className="nz-gallery-card-img-wrap">
                  <img src={item.img} alt={item.title} />
                  <div className="nz-gallery-card-overlay" />
                </div>
                <div className="nz-gallery-card-badge">
                  <span>{item.badge}</span>
                </div>
                <div className="nz-gallery-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
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
              <p className="nz-cta-tagline">
                Future Skills. Real Learning. Lasting Impact.
              </p>
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
