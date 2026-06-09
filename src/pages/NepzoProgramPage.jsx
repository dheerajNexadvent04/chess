import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  Award,
  Users,
  Brain,
  Sparkles,
  ArrowRight,
  Wallet,
  Rocket,
  X,
  Maximize2,
  CheckCircle2,
  Calendar,
  Layers,
  Lightbulb,
  Sparkle
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './NepzoProgramPage.css'

export function NepzoProgramPage() {
  const [activeTrack, setActiveTrack] = useState('financial') // 'financial' or 'entrepreneur'
  const [activeSubTab, setActiveSubTab] = useState('skills') // 'skills' or 'activities'
  const [lightboxImage, setLightboxImage] = useState(null)

  useScrollReveal([activeTrack, activeSubTab])

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
      iconColor: '#0e7490'
    },
    {
      title: 'Develops Life Skills',
      icon: <Users size={22} />,
      desc: 'Fosters high-agency collaboration, critical thinking, confidence, communication, and real leadership.',
      color: 'rgba(232, 117, 10, 0.08)',
      iconColor: '#E8750A'
    },
    {
      title: 'Academic & Cognitive Boost',
      icon: <Brain size={22} />,
      desc: 'Enhances cognitive focus, strategic foresight, problem-solving, logical reasoning, and academic discipline.',
      color: 'rgba(14, 116, 144, 0.08)',
      iconColor: '#0e7490'
    },
    {
      title: 'Financial & Business IQ',
      icon: <TrendingUp size={22} />,
      desc: 'Equips students with smart budgeting, money management, risk evaluation, and investment principles.',
      color: 'rgba(232, 117, 10, 0.08)',
      iconColor: '#E8750A'
    }
  ]

  // Data for Financial Literacy Track (Flyer 1)
  const financialSkills = [
    {
      title: 'Smart Money Management',
      desc: 'Learn to value, budget, and manage personal cash flow responsibly.',
      image: '/c1.jpg'
    },
    {
      title: 'Budgeting and Saving',
      desc: 'Understand saving habits, target-setting, and the magic of compound interest.',
      image: '/c2.jpg'
    },
    {
      title: 'Investment Basics',
      desc: 'Get introduced to stocks, banking fundamentals, and micro-investing structures.',
      image: '/c3.jpg'
    },
    {
      title: 'Financial Decision Making',
      desc: 'Evaluate risks and returns, making logical choices for short & long-term goals.',
      image: '/c4.jpg'
    },
    {
      title: 'Advanced Money & Life Readiness',
      desc: 'Apply financial concepts to simulated real-world scenarios for life preparation.',
      image: '/c5.jpg'
    }
  ]

  const financialActivities = [
    {
      title: 'Budget Worksheets',
      desc: 'Draft and balance budgets for hypothetical life projects and simulations.',
      image: '/s1.jpeg'
    },
    {
      title: 'Mock Stock Market Game',
      desc: 'Participate in stock-trading simulations to learn market dynamics safely.',
      image: '/s2.jpeg'
    },
    {
      title: 'Financial Quizzes',
      desc: 'Fun, competitive trivia to test knowledge on banking, ethics, and savings.',
      image: '/s3.jpeg'
    },
    {
      title: 'Expense Diary Challenge',
      desc: 'Log and analyze mock daily expenditures to cultivate disciplined habits.',
      image: '/s4.jpeg'
    },
    {
      title: 'Savings Challenge Competition',
      desc: 'Compete in teams to design the most effective savings strategies.',
      image: '/c6.jpeg'
    }
  ]

  // Data for Entrepreneurship Track (Flyer 2)
  const entrepreneurSkills = [
    {
      title: 'Entrepreneurial Mindset',
      desc: 'Develop confidence, creativity, resilience, and a passion to solve real-world problems.',
      image: '/n1.jpg'
    },
    {
      title: 'Business Fundamentals',
      desc: 'Understand business models, customer segments, operations, and startup structures.',
      image: '/n2.jpg'
    },
    {
      title: 'Branding & Marketing',
      desc: 'Master product naming, logo creation, branding, and target audience marketing.',
      image: '/n3.jpg'
    },
    {
      title: 'Startup Creation Lab',
      desc: 'Collaborate to turn raw ideas into viable startup projects from scratch.',
      image: '/n4.jpg'
    }
  ]

  const entrepreneurActivities = [
    {
      title: 'Local Business Visits',
      desc: 'Visit active commercial enterprises and learn from seasoned local entrepreneurs.',
      image: '/n5.jpg'
    },
    {
      title: 'Student Startup Stalls',
      desc: 'Set up sales counters at school events to experience selling and generating profit.',
      image: '/g1.jpeg'
    },
    {
      title: 'Shark Tank Style Pitching',
      desc: 'Present ideas before mock panels to receive feedback and refine plans.',
      image: '/g2.jpeg'
    },
    {
      title: 'Social Media Campaign Projects',
      desc: 'Create mock digital marketing drives for brands, businesses, or social goals.',
      image: '/g3.jpeg'
    }
  ]

  const handleTrackChange = (track) => {
    setActiveTrack(track)
    // Keep or reset sub-tab when track changes
  }

  return (
    <div className="nz-page">
      {/* ── 1. PREMIUM SPLIT HERO SECTION ── */}
      <section className="nz-premium-hero">
        {/* Glow Spheres */}
        <div className="nz-glow-sphere sphere-1" />
        <div className="nz-glow-sphere sphere-2" />
        
        <div className="nz-wrap">
          <div className="nz-hero-split-grid">
            {/* Left Content */}
            <div className="nz-hero-left">
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

            {/* Right Interactive Preview */}
            <div className="nz-hero-right reveal reveal-3d" style={{ '--delay': '0.25s' }}>
              <div className="nz-hero-preview-box">
                {/* Dashed outer orbit */}
                <div className="nz-orbit-dashed" />
                
                {/* Main Image Shield */}
                <div className="nz-preview-shield">
                  <div className="nz-shield-glow" />
                  <img src="/student4.png" alt="Student learning future skills" className="nz-preview-student-img" />
                </div>

                {/* Floating Cards */}
                <div className="nz-float-badge badge-wealth">
                  <div className="badge-icon"><Wallet size={16} /></div>
                  <div className="badge-text">
                    <strong>Financial IQ</strong>
                    <span>Smart Money</span>
                  </div>
                </div>

                <div className="nz-float-badge badge-startups">
                  <div className="badge-icon"><Rocket size={16} /></div>
                  <div className="badge-text">
                    <strong>Startups</strong>
                    <span>Pitching & Launching</span>
                  </div>
                </div>

                <div className="nz-float-badge badge-cognitive">
                  <div className="badge-icon"><Brain size={16} /></div>
                  <div className="badge-text">
                    <strong>Cognitive Lift</strong>
                    <span>Logic & Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Waves Transition */}
        <svg className="nz-hero-bottom-wave" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#f8fafc" d="M0,60 C480,10 960,10 1440,60 L1440,60 L0,60 Z"></path>
        </svg>
      </section>

      {/* ── 2. STATS OVERVIEW STRIP ── */}
      <section className="nz-stats-strip">
        <div className="nz-wrap">
          <div className="nz-stats-strip-grid">
            <div className="nz-stat-item">
              <div className="nz-stat-num">5 - 10</div>
              <div className="nz-stat-lbl">Target Classes</div>
            </div>
            <div className="nz-stat-sep" />
            <div className="nz-stat-item">
              <div className="nz-stat-num">NEP 2020</div>
              <div className="nz-stat-lbl">Curriculum Framework</div>
            </div>
            <div className="nz-stat-sep" />
            <div className="nz-stat-item">
              <div className="nz-stat-num">Experiential</div>
              <div className="nz-stat-lbl">Learning Methods</div>
            </div>
            <div className="nz-stat-sep" />
            <div className="nz-stat-item">
              <div className="nz-stat-num">2 Tracks</div>
              <div className="nz-stat-lbl">Finances & Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE PROGRAM TRACKS ── */}
      <section className="nz-curriculum-section">
        <div className="nz-wrap">
          <div className="nz-section-header">
            <span className="nz-section-label reveal fade-up" style={{ '--delay': '0.05s' }}>Interactive Syllabus Browser</span>
            <h2 className="nz-section-title reveal fade-up" style={{ '--delay': '0.12s' }}>Explore Our Future-Ready Tracks</h2>
            <p className="nz-section-sub reveal fade-up" style={{ '--delay': '0.2s' }}>
              Select a track below and switch between Key Skills and Practical Labs to see how we transform theory into actionable capability.
            </p>
          </div>

          {/* Track Selection Buttons */}
          <div className="nz-track-tab-container reveal reveal-3d" style={{ '--delay': '0.25s' }}>
            <button
              onClick={() => handleTrackChange('financial')}
              className={`nz-track-tab-btn ${activeTrack === 'financial' ? 'active active-financial' : ''}`}
            >
              <div className="tab-btn-icon"><Wallet size={18} /></div>
              <span>Financial Literacy Program</span>
            </button>
            <button
              onClick={() => handleTrackChange('entrepreneur')}
              className={`nz-track-tab-btn ${activeTrack === 'entrepreneur' ? 'active active-entrepreneur' : ''}`}
            >
              <div className="tab-btn-icon"><Rocket size={18} /></div>
              <span>Entrepreneurship Program</span>
            </button>
          </div>

          {/* Core Panel Content */}
          <div className="nz-curriculum-panel reveal reveal-3d" style={{ '--delay': '0.3s' }}>
            {/* Header / Intro */}
            <div className="nz-panel-header">
              <div className="nz-panel-meta">
                <span className={`nz-panel-badge ${activeTrack === 'financial' ? 'badge-financial' : 'badge-entrepreneur'}`}>
                  {activeTrack === 'financial' ? 'WEALTH IQ MODULE' : 'STARTUP INNOVATION MODULE'}
                </span>
                <h3>
                  {activeTrack === 'financial'
                    ? 'Practical Financial Literacy & Money IQ'
                    : 'Experiential Entrepreneurship & Startup Incubator'}
                </h3>
                <p>
                  {activeTrack === 'financial'
                    ? 'Promoting structured money values, savings strategies, budgeting rules, compound interest basics, banking operations, and digital security in real-world contexts.'
                    : 'Fostering a creative startup mindset. Students learn business model generation, marketing campaigns, product branding, public pitching, and collaborative work.'}
                </p>
              </div>

              {/* Sub-tab selection (Skills vs Activities) */}
              <div className="nz-subtab-container">
                <button
                  onClick={() => setActiveSubTab('skills')}
                  className={`nz-subtab-btn ${activeSubTab === 'skills' ? 'active' : ''}`}
                >
                  <Layers size={15} />
                  <span>Key Skills Covered</span>
                </button>
                <button
                  onClick={() => setActiveSubTab('activities')}
                  className={`nz-subtab-btn ${activeSubTab === 'activities' ? 'active' : ''}`}
                >
                  <Calendar size={15} />
                  <span>Practical Activities & Labs</span>
                </button>
              </div>
            </div>

            {/* Split Content (Flyer Showcase on Left, Dynamic List on Right) */}
            <div className="nz-panel-body-grid">
              {/* Left Column: Flyer Showcase */}
              <div className="nz-panel-flyer-col">
                <div className="nz-flyer-card">
                  <div className="nz-flyer-image-container">
                    <img
                      src={activeTrack === 'financial' ? '/nepzocontent1.jpeg' : '/nepzocontent2.jpeg'}
                      alt="Program Brochure Content"
                      className="nz-flyer-img"
                    />
                    <div className="nz-flyer-overlay" />
                    <button
                      className="nz-flyer-zoom-btn"
                      onClick={() => setLightboxImage(activeTrack === 'financial' ? '/nepzocontent1.jpeg' : '/nepzocontent2.jpeg')}
                      aria-label="Zoom Brochure Image"
                    >
                      <Maximize2 size={18} />
                      <span>View Full Brochure</span>
                    </button>
                  </div>
                  <div className="nz-flyer-footer">
                    <Sparkles size={16} className="text-warning" />
                    <span>Click image to expand official syllabus and details</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Cards List */}
              <div className="nz-panel-list-col">
                <div className="nz-curriculum-list-wrap">
                  {/* Financial Track -> Skills */}
                  {activeTrack === 'financial' && activeSubTab === 'skills' && (
                    <div className="nz-list-fade">
                      {financialSkills.map((item, index) => (
                        <div className="nz-curriculum-row" key={index}>
                          <div className="nz-row-num">0{index + 1}</div>
                          <div className="nz-row-details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Financial Track -> Activities */}
                  {activeTrack === 'financial' && activeSubTab === 'activities' && (
                    <div className="nz-list-fade">
                      {financialActivities.map((item, index) => (
                        <div className="nz-curriculum-row" key={index}>
                          <img src={item.image} alt="" className="nz-row-avatar" />
                          <div className="nz-row-details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Entrepreneurship Track -> Skills */}
                  {activeTrack === 'entrepreneur' && activeSubTab === 'skills' && (
                    <div className="nz-list-fade">
                      {entrepreneurSkills.map((item, index) => (
                        <div className="nz-curriculum-row" key={index}>
                          <div className="nz-row-num">0{index + 1}</div>
                          <div className="nz-row-details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Entrepreneurship Track -> Activities */}
                  {activeTrack === 'entrepreneur' && activeSubTab === 'activities' && (
                    <div className="nz-list-fade">
                      {entrepreneurActivities.map((item, index) => (
                        <div className="nz-curriculum-row" key={index}>
                          <img src={item.image} alt="" className="nz-row-avatar" />
                          <div className="nz-row-details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOLISTIC GROWTH PILLARS ── */}
      <section className="nz-pillars-section">
        <div className="nz-wrap">
          <div className="nz-section-header">
            <span className="nz-section-label reveal fade-up" style={{ '--delay': '0.05s' }}>Program Outcomes</span>
            <h2 className="nz-section-title reveal fade-up" style={{ '--delay': '0.12s' }}>Our Core Growth Ecosystem</h2>
            <p className="nz-section-sub reveal fade-up" style={{ '--delay': '0.2s' }}>
              Enabling structural advantages and high cognitive lift for school students.
            </p>
          </div>

          <div className="nz-pillars-grid">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="nz-pillar-card reveal reveal-3d"
                style={{
                  '--delay': `${idx * 0.08 + 0.15}s`,
                  '--theme-bg': p.color,
                  '--theme-color': p.iconColor
                }}
              >
                <div className="nz-pillar-icon-box">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="nz-pillar-check-row">
                  <CheckCircle2 size={14} className="check-icon" />
                  <span>NEP-Aligned Objective</span>
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
