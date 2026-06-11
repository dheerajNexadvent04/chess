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
  Star,
  Wallet,
  Rocket,
  Layers,
  ZoomIn,
  FileText,
  HelpCircle,
  ClipboardList,
  PiggyBank,
  Building,
  Store,
  Presentation,
  Megaphone
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

const programDetails = {
  finance: {
    badge: 'WEALTH IQ MODULE',
    badgeBg: 'rgba(34, 211, 238, 0.12)',
    badgeColor: '#22d3ee',
    title: 'Practical Financial Literacy & Money IQ',
    desc: 'Promoting structured money values, savings strategies, budgeting rules, compound interest basics, banking operations, and digital security in real-world contexts.',
    brochureImg: '/Financial Literacy Bootcamp.png',
    skills: [
      {
        num: '01',
        title: 'Smart Money Management',
        desc: 'Learn to value, budget, and manage personal cash flow responsibly.'
      },
      {
        num: '02',
        title: 'Budgeting and Saving',
        desc: 'Understand saving habits, target-setting, and the magic of compound interest.'
      },
      {
        num: '03',
        title: 'Investment Basics',
        desc: 'Get introduced to stocks, banking fundamentals, and micro-investing structures.'
      },
      {
        num: '04',
        title: 'Financial Decision Making',
        desc: 'Evaluate risks and returns, making logical choices for short & long-term goals.'
      },
      {
        num: '05',
        title: 'Advanced Money & Life Readiness',
        desc: 'Apply financial concepts to simulated real-world scenarios for life preparation.'
      }
    ],
    activities: [
      {
        icon: <FileText size={20} />,
        title: 'Budget Worksheets',
        desc: 'Draft and balance budgets for hypothetical life projects and simulations.'
      },
      {
        icon: <TrendingUp size={20} />,
        title: 'Mock Stock Market Game',
        desc: 'Participate in stock-trading simulations to learn market dynamics safely.'
      },
      {
        icon: <HelpCircle size={20} />,
        title: 'Financial Quizzes',
        desc: 'Fun, competitive trivia to test knowledge on banking, ethics, and savings.'
      },
      {
        icon: <ClipboardList size={20} />,
        title: 'Expense Diary Challenge',
        desc: 'Log and analyze mock daily expenditures to cultivate disciplined habits.'
      },
      {
        icon: <PiggyBank size={20} />,
        title: 'Savings Challenge Competition',
        desc: 'Compete in teams to design the most effective savings strategies.'
      }
    ]
  },
  entrepreneur: {
    badge: 'STARTUP INNOVATION MODULE',
    badgeBg: 'rgba(251, 146, 60, 0.15)',
    badgeColor: '#fb923c',
    title: 'Experiential Entrepreneurship & Startup Incubator',
    desc: 'Fostering a creative startup mindset. Students learn business model generation, marketing campaigns, product branding, public pitching, and collaborative work.',
    brochureImg: '/Entrepreneurship Bootcamp.png',
    skills: [
      {
        num: '01',
        title: 'Entrepreneurial Mindset',
        desc: 'Develop confidence, creativity, resilience, and a passion to solve real-world problems.'
      },
      {
        num: '02',
        title: 'Business Fundamentals',
        desc: 'Understand business models, customer segments, operations, and startup structures.'
      },
      {
        num: '03',
        title: 'Branding & Marketing',
        desc: 'Master product naming, logo creation, branding, and target audience marketing.'
      },
      {
        num: '04',
        title: 'Startup Creation Lab',
        desc: 'Collaborate to turn raw ideas into viable startup projects from scratch.'
      }
    ],
    activities: [
      {
        icon: <Building size={20} />,
        title: 'Local Business Visits',
        desc: 'Visit active commercial enterprises and learn from seasoned local entrepreneurs.'
      },
      {
        icon: <Store size={20} />,
        title: 'Student Startup Stalls',
        desc: 'Set up sales counters at school events to experience selling and generating profit.'
      },
      {
        icon: <Presentation size={20} />,
        title: 'Shark Tank Style Pitching',
        desc: 'Present ideas before mock panels to receive feedback and refine plans.'
      },
      {
        icon: <Megaphone size={20} />,
        title: 'Social Media Campaign Projects',
        desc: 'Create mock digital marketing drives for brands, businesses, or social goals.'
      }
    ]
  }
}
const nepzoSlides = [
  { id: 1, src: '/nepzonew1.jpeg', alt: "1. The Problem: Marks Don't Build the Future" },
  { id: 2, src: '/nepzonew2.jpeg', alt: '2. The Changing World: Jobs are Changing, Skills are Missing' },
  { id: 3, src: '/nepzonew4.jpeg', alt: '3. The Nepzo Solution: Learn to Think. Build. Pitch. Lead.' },
  { id: 4, src: '/nepzonew3.jpeg', alt: '4. The Outcome: Future Ready Minds, Limitless Possibilities' },
]

export function NepzoProgramPage() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [activePillar, setActivePillar] = useState(0)
  const [financeSubTab, setFinanceSubTab] = useState('skills')
  const [entrepreneurSubTab, setEntrepreneurSubTab] = useState('skills')
  const [currentSlide, setCurrentSlide] = useState(0)

  useScrollReveal([activePillar, financeSubTab, entrepreneurSubTab])

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
            <img src="/SUPERMANFINAL.png" alt="SckoolChess Logo" className="nz-hero__partner-logo" />
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

          <div className="nz-hero-actions nz-hero-actions--desktop reveal fade-up" style={{ '--delay': '0.36s' }}>
            <button 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-custom-modal', {
                  detail: { type: 'booking', section: 'Nepzo Hero Section' }
                }));
              }}
              className="nz-hero-btn-primary"
            >
              <span>Schedule Free Session</span>
              <ArrowRight size={16} />
            </button>
            <a href="/DOWNLOAD BROCHURE.pdf" download="DOWNLOAD BROCHURE.pdf" className="nz-hero-btn-secondary">
              <span>Download Brochure</span>
            </a>
          </div>
        </div>

        {/* Graphics Wrapper (Absolute on desktop, Relative block on mobile) */}
        <div className="nz-hero-graphics-mobile-wrap">
          {/* Person image — absolute, extends full height to right edge */}
          <img
            src="/FINALSUPERMAN.png"
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
            <div className="satisfaction-num">80%</div>
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
        </div>

        {/* Mobile Buttons (Visible only on mobile, placed below the graphics wrapper) */}
        <div className="nz-hero-actions nz-hero-actions--mobile reveal fade-up" style={{ '--delay': '0.1s' }}>
          <button 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-custom-modal', {
                detail: { type: 'booking', section: 'Nepzo Hero Section' }
              }));
            }}
            className="nz-hero-btn-primary"
          >
            <span>Schedule Free Session</span>
            <ArrowRight size={16} />
          </button>
          <a href="/DOWNLOAD BROCHURE.pdf" download="DOWNLOAD BROCHURE.pdf" className="nz-hero-btn-secondary">
            <span>Download Brochure</span>
          </a>
        </div>

        {/* Bottom strip — counters left, curve+logos right */}
        <div className="nz-hero-bottom">
          <div className="nz-hero-counters">
            <div className="nz-counter-box">
              <div className="nz-counter-top">
                <Star size={28} className="star-icon" />
                <span className="nz-counter-val">100+</span>
              </div>
              <span className="nz-counter-lbl">Reviews</span>
            </div>
            <div className="nz-counter-box">
              <div className="nz-counter-top">
                <span className="nz-counter-val">5+</span>
              </div>
              <span className="nz-counter-lbl">Courses</span>
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


      {/* ── 4. UPCOMING NEPZO SESSIONS (INTERACTIVE DASHBOARD) ── */}
      <section className="nz-upcoming-section">
        <div className="nz-wrap">
          
          {/* Financial Literacy Card */}
          <div className="nz-program-detail-card finance reveal fade-up" style={{ '--delay': '0.12s' }}>
            
            {/* Card Header */}
            <div className="nz-pd-card-header">
              <div className="nz-pd-card-header-left">
                <span className="nz-pd-badge" style={{
                  background: programDetails.finance.badgeBg,
                  color: programDetails.finance.badgeColor
                }}>
                  {programDetails.finance.badge}
                </span>
                <h2>{programDetails.finance.title}</h2>
                <p>{programDetails.finance.desc}</p>
              </div>
            </div>

            {/* Horizontal Line Divider */}
            <div className="nz-pd-divider" />

            {/* Card Content Grid */}
            <div className="nz-pd-card-grid">
              
              {/* Left Column: Brochure Preview Image */}
              <div className="nz-pd-brochure-col">
                <div 
                  className="nz-pd-brochure-card" 
                  onClick={() => setLightboxImage(programDetails.finance.brochureImg)}
                >
                  <div className="nz-pd-image-wrapper">
                    <img 
                      src={programDetails.finance.brochureImg} 
                      alt={`${programDetails.finance.title} Syllabus`} 
                    />
                    <div className="nz-pd-image-overlay">
                      <ZoomIn size={28} className="nz-zoom-icon" />
                    </div>
                  </div>
                  <div className="nz-pd-image-caption">
                    <ZoomIn size={14} />
                    <span>Click image to expand official syllabus and details</span>
                  </div>
                </div>
              </div>

              {/* Right Column: List of items */}
              <div className="nz-pd-list-col">
                {/* Inner Sub-Tabs Switcher */}
                <div className="nz-inner-tabs">
                  <button
                    className={`nz-inner-tab ${financeSubTab === 'skills' ? 'active' : ''}`}
                    onClick={() => setFinanceSubTab('skills')}
                  >
                    <Layers size={16} />
                    <span>Key Skills Covered</span>
                  </button>
                  <button
                    className={`nz-inner-tab ${financeSubTab === 'activities' ? 'active' : ''}`}
                    onClick={() => setFinanceSubTab('activities')}
                  >
                    <Calendar size={16} />
                    <span>Practical Activities & Labs</span>
                  </button>
                </div>

                {financeSubTab === 'skills' ? (
                  <div className="nz-skills-list">
                    {programDetails.finance.skills.map((skill, idx) => (
                      <div key={idx} className="nz-skill-item">
                        <div className="nz-skill-number" style={{
                          background: programDetails.finance.badgeBg,
                          color: programDetails.finance.badgeColor
                        }}>
                          {skill.num}
                        </div>
                        <div className="nz-skill-text">
                          <h4>{skill.title}</h4>
                          <p>{skill.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="nz-activities-list">
                    {programDetails.finance.activities.map((activity, idx) => (
                      <div key={idx} className="nz-activity-item">
                        <div className="nz-activity-icon-wrapper" style={{
                          background: programDetails.finance.badgeBg,
                          color: programDetails.finance.badgeColor
                        }}>
                          {activity.icon}
                        </div>
                        <div className="nz-activity-text">
                          <h4>{activity.title}</h4>
                          <p>{activity.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Entrepreneurship Card */}
          <div className="nz-program-detail-card entrepreneur reveal fade-up" style={{ '--delay': '0.15s' }}>
            
            {/* Card Header */}
            <div className="nz-pd-card-header">
              <div className="nz-pd-card-header-left">
                <span className="nz-pd-badge" style={{
                  background: programDetails.entrepreneur.badgeBg,
                  color: programDetails.entrepreneur.badgeColor
                }}>
                  {programDetails.entrepreneur.badge}
                </span>
                <h2>{programDetails.entrepreneur.title}</h2>
                <p>{programDetails.entrepreneur.desc}</p>
              </div>
            </div>

            {/* Horizontal Line Divider */}
            <div className="nz-pd-divider" />

            {/* Card Content Grid */}
            <div className="nz-pd-card-grid">
              
              {/* Left Column: Brochure Preview Image */}
              <div className="nz-pd-brochure-col">
                <div 
                  className="nz-pd-brochure-card" 
                  onClick={() => setLightboxImage(programDetails.entrepreneur.brochureImg)}
                >
                  <div className="nz-pd-image-wrapper">
                    <img 
                      src={programDetails.entrepreneur.brochureImg} 
                      alt={`${programDetails.entrepreneur.title} Syllabus`} 
                    />
                    <div className="nz-pd-image-overlay">
                      <ZoomIn size={28} className="nz-zoom-icon" />
                    </div>
                  </div>
                  <div className="nz-pd-image-caption">
                    <ZoomIn size={14} />
                    <span>Click image to expand official syllabus and details</span>
                  </div>
                </div>
              </div>

              {/* Right Column: List of items */}
              <div className="nz-pd-list-col">
                {/* Inner Sub-Tabs Switcher */}
                <div className="nz-inner-tabs">
                  <button
                    className={`nz-inner-tab ${entrepreneurSubTab === 'skills' ? 'active' : ''}`}
                    onClick={() => setEntrepreneurSubTab('skills')}
                  >
                    <Layers size={16} />
                    <span>Key Skills Covered</span>
                  </button>
                  <button
                    className={`nz-inner-tab ${entrepreneurSubTab === 'activities' ? 'active' : ''}`}
                    onClick={() => setEntrepreneurSubTab('activities')}
                  >
                    <Calendar size={16} />
                    <span>Practical Activities & Labs</span>
                  </button>
                </div>

                {entrepreneurSubTab === 'skills' ? (
                  <div className="nz-skills-list">
                    {programDetails.entrepreneur.skills.map((skill, idx) => (
                      <div key={idx} className="nz-skill-item">
                        <div className="nz-skill-number" style={{
                          background: programDetails.entrepreneur.badgeBg,
                          color: programDetails.entrepreneur.badgeColor
                        }}>
                          {skill.num}
                        </div>
                        <div className="nz-skill-text">
                          <h4>{skill.title}</h4>
                          <p>{skill.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="nz-activities-list">
                    {programDetails.entrepreneur.activities.map((activity, idx) => (
                      <div key={idx} className="nz-activity-item">
                        <div className="nz-activity-icon-wrapper" style={{
                          background: programDetails.entrepreneur.badgeBg,
                          color: programDetails.entrepreneur.badgeColor
                        }}>
                          {activity.icon}
                        </div>
                        <div className="nz-activity-text">
                          <h4>{activity.title}</h4>
                          <p>{activity.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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

      {/* ── 5.0 NEPZO CHRONOLOGICAL SYLLABUS SLIDES ── */}
      <section className="nz-slides-section">
        <div className="nz-wrap">
          {/* Desktop Grid Layout (4 columns) */}
          <div className="nz-slides-desktop-grid">
            {nepzoSlides.map((slide) => (
              <div key={slide.id} className="nz-slide-card" onClick={() => setLightboxImage(slide.src)}>
                <img src={slide.src} alt={slide.alt} className="nz-slide-img" />
                <div className="nz-slide-hover-overlay">
                  <ZoomIn size={24} />
                  <span>Click to Expand</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Layout */}
          <div className="nz-slides-mobile-carousel">
            <div className="nz-slides-carousel-track-wrapper">
              <div 
                className="nz-slides-carousel-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {nepzoSlides.map((slide) => (
                  <div key={slide.id} className="nz-slides-carousel-slide" onClick={() => setLightboxImage(slide.src)}>
                    <img src={slide.src} alt={slide.alt} className="nz-slide-img" />
                    <div className="nz-slide-hover-overlay">
                      <ZoomIn size={20} />
                      <span>Click to Expand</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="nz-slides-carousel-dots">
              {nepzoSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`nz-slides-carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
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
                img: '/Supports NEP 2020 Goals.png'
              },
              {
                badge: 'Branding',
                title: 'Strengthens School Brand',
                desc: 'Strengthens school brand and reputation.',
                img: '/Strengthens School Brand.png'
              },
              {
                badge: 'Life Skills',
                title: 'Builds Core Life Skills',
                desc: 'Builds leadership, confidence, and communication skills.',
                img: '/Builds Core Life Skills.png'
              },
              {
                badge: 'Cognitive',
                title: 'Future-Focused Learning',
                desc: 'Introduces future-focused learning opportunities.',
                img: '/Future-Focused Learning.png'
              },
              {
                badge: 'Exposure',
                title: 'Real Industry Exposure',
                desc: 'Provides industry exposure through entrepreneurs and professionals.',
                img: '/Real Industry Exposure.png'
              },
              {
                badge: 'Positioning',
                title: 'Elevates School Positioning',
                desc: 'Enhances parent value perception and school positioning.',
                img: '/Elevates School Positioning.png'
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
                <Link to="/book-class?ref=Nepzo+Page+CTA+Section" className="nz-cta-btn-primary">
                  <span>Request Program Guide</span>
                  <ArrowRight size={16} />
                </Link>
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
