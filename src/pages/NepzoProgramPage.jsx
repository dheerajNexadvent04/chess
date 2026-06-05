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
  Rocket
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './NepzoProgramPage.css'

export function NepzoProgramPage() {
  const [activeTrack, setActiveTrack] = useState('financial') // 'financial' or 'entrepreneur'
  useScrollReveal([activeTrack])

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

  // Core Pillars (Bottom/Right items on flyers)
  const pillars = [
    {
      title: 'Prepares for the Future',
      icon: <Award size={20} />,
      desc: 'Builds modern capabilities so students are ready for the evolving global landscape.'
    },
    {
      title: 'Develops Life Skills',
      icon: <Users size={20} />,
      desc: 'Fosters high-agency collaboration, confidence, communication, and leadership.'
    },
    {
      title: 'Academic & Cognitive Boost',
      icon: <Brain size={20} />,
      desc: 'Enhances cognitive focus, problem-solving, logical thinking, and academic discipline.'
    },
    {
      title: 'Financial & Business IQ',
      icon: <TrendingUp size={20} />,
      desc: 'Equips students with smart money management, risk evaluation, and investment principles.'
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
      desc: 'Develop confidence, creativity, and a passion to solve real-world problems.',
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

  return (
    <div className="nz-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="nz-hero">
        <img
          className="nz-hero__bg-image"
          src="/nezpo main banner.webp"
          alt="NEPZO Future Ready Learning Background"
        />
        <div className="nz-wrap">
          <div className="nz-hero__inner">
            <div className="nz-hero__logo-strip reveal fade-up" style={{ '--delay': '0.05s' }}>
              <img src="/nepzobg.png" alt="NEPZO Logo" className="nz-hero__partner-logo nz-hero__partner-logo--nepzo" />
              <div className="nz-hero__divider"></div>
              <img src="/logonewbg.png" alt="SckoolChess Logo" className="nz-hero__partner-logo" />
            </div>

            <span className="nz-eyebrow reveal fade-up" style={{ '--delay': '0.15s' }}>
              <Sparkles size={13} style={{ fill: '#fbbf24', stroke: '#E8750A' }} />
              NEP 2020 Aligned | Classes 5 to 10
            </span>

            <h1 className="nz-hero__heading reveal fade-up" style={{ '--delay': '0.25s' }}>
              Future Ready Learning Program
            </h1>

            <p className="nz-hero__sub reveal fade-up" style={{ '--delay': '0.35s' }}>
              An experiential education program powered by SckoolChess, co-designed with NEPZO to equip students with real-world skills, leadership qualities, financial responsibility, and an entrepreneurial mindset.
            </p>

            <div className="nz-hero__actions reveal fade-up" style={{ '--delay': '0.45s' }}>
              <Link to="/book-class" className="nz-btn-primary" id="nepzo-hero-cta">
                <span>Book a Free Session</span>
              </Link>
              <a href="tel:+918447992702" className="nz-btn-ghost">
                <span>Call Program Expert</span>
              </a>
            </div>
          </div>
        </div>
        <div className="nz-hero__decor-text" aria-hidden="true">NEPZO</div>
        
        {/* WAVE TRANSITION */}
        <svg className="nz-hero__wave" viewBox="0 0 1440 56" preserveAspectRatio="none">
          <path fill="#f8fafc" d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z"></path>
        </svg>
      </section>

      {/* ── 2. INTERACTIVE TRACK SELECTOR ── */}
      <section className="nz-tracks-section">
        <div className="nz-wrap">
          <div className="nz-section-header">
            <span className="nz-section-label reveal fade-up" style={{ '--delay': '0.05s' }}>Select Core Program Track</span>
            <h2 className="nz-section-title reveal fade-up" style={{ '--delay': '0.15s' }}>Explore Our Future-Ready Pathways</h2>
            <p className="nz-section-sub reveal fade-up" style={{ '--delay': '0.25s' }}>
              Click the tracks below to see the specific skills students develop and the engaging practical activities they experience.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="nz-track-toggle-container reveal reveal-3d" style={{ '--delay': '0.3s' }}>
            <button
              onClick={() => setActiveTrack('financial')}
              className={`nz-track-toggle-btn ${activeTrack === 'financial' ? 'active active--financial' : ''}`}
              id="btn-track-financial"
            >
              <Wallet size={20} />
              <span>Financial Literacy</span>
            </button>
            <button
              onClick={() => setActiveTrack('entrepreneur')}
              className={`nz-track-toggle-btn ${activeTrack === 'entrepreneur' ? 'active active--entrepreneur' : ''}`}
              id="btn-track-entrepreneur"
            >
              <Rocket size={20} />
              <span>Entrepreneurship</span>
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="nz-track-panel">
            {activeTrack === 'financial' ? (
              <div className="nz-fade-in">
                <div className="nz-track-intro reveal fade-up" style={{ '--delay': '0.05s' }}>
                  <span className="nz-track-badge nz-track-badge--financial">Wealth IQ Track</span>
                  <h3>Financial Literacy Program</h3>
                  <p>
                    Promoting holistic development and 21st century skills. This track helps students understand money values, budgeting, savings, compound interest, banking, and safe digital transactions through simulated experiences.
                  </p>
                </div>

                <div className="nz-panel-grid">
                  {/* Skills Grid */}
                  <div className="nz-panel-column">
                    <h4 className="nz-panel-column-title reveal fade-up" style={{ '--delay': '0.12s' }}>Skills Students Will Learn</h4>
                    <div className="nz-cards-list">
                      {financialSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="nz-skill-card reveal reveal-3d"
                          style={{ '--delay': `${index * 0.05 + 0.15}s` }}
                        >
                          <img src={skill.image} className="nz-skill-img" alt={skill.title} />
                          <div className="nz-skill-content">
                            <h5>{skill.title}</h5>
                            <p>{skill.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities Grid */}
                  <div className="nz-panel-column">
                    <h4 className="nz-panel-column-title reveal fade-up" style={{ '--delay': '0.12s' }}>Activities &amp; Games</h4>
                    <div className="nz-cards-list">
                      {financialActivities.map((act, index) => (
                        <div
                          key={index}
                          className="nz-activity-card reveal reveal-3d"
                          style={{ '--delay': `${index * 0.05 + 0.15}s` }}
                        >
                          <img src={act.image} className="nz-activity-img" alt={act.title} />
                          <div className="nz-activity-content">
                            <h5>{act.title}</h5>
                            <p>{act.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="nz-fade-in">
                <div className="nz-track-intro reveal fade-up" style={{ '--delay': '0.05s' }}>
                  <span className="nz-track-badge nz-track-badge--entrepreneur">Innovation Track</span>
                  <h3>Entrepreneurship Program</h3>
                  <p>
                    Aligning Education with NEP 2020. Building Skills for the 21st Century. This track introduces students to creative business modeling, branding, marketing campaigns, public pitching, and teamwork.
                  </p>
                </div>

                <div className="nz-panel-grid">
                  {/* Skills Grid */}
                  <div className="nz-panel-column">
                    <h4 className="nz-panel-column-title reveal fade-up" style={{ '--delay': '0.12s' }}>Skills Students Will Develop</h4>
                    <div className="nz-cards-list">
                      {entrepreneurSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="nz-skill-card reveal reveal-3d"
                          style={{ '--delay': `${index * 0.05 + 0.15}s` }}
                        >
                          <img src={skill.image} className="nz-skill-img" alt={skill.title} />
                          <div className="nz-skill-content">
                            <h5>{skill.title}</h5>
                            <p>{skill.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities Grid */}
                  <div className="nz-panel-column">
                    <h4 className="nz-panel-column-title reveal fade-up" style={{ '--delay': '0.12s' }}>Practical Activities</h4>
                    <div className="nz-cards-list">
                      {entrepreneurActivities.map((act, index) => (
                        <div
                          key={index}
                          className="nz-activity-card reveal reveal-3d"
                          style={{ '--delay': `${index * 0.05 + 0.15}s` }}
                        >
                          <img src={act.image} className="nz-activity-img" alt={act.title} />
                          <div className="nz-activity-content">
                            <h5>{act.title}</h5>
                            <p>{act.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 3. CORE BENEFITS SECTION (THE 4 PILLARS) ── */}
      <section className="nz-benefits-section">
        <div className="nz-wrap">
          <div className="nz-section-header">
            <span className="nz-section-label reveal fade-up" style={{ '--delay': '0.05s' }}>Program Outcomes</span>
            <h2 className="nz-section-title reveal fade-up" style={{ '--delay': '0.15s' }}>Holistic Growth Ecosystem</h2>
            <p className="nz-section-sub reveal fade-up" style={{ '--delay': '0.25s' }}>
              Empowering school ecosystems with actionable capabilities and structural advantages.
            </p>
          </div>

          <div className="nz-benefits-grid">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="nz-benefit-card reveal reveal-3d"
                style={{ '--delay': `${idx * 0.06 + 0.15}s` }}
              >
                <div className="nz-benefit-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CLOSING CTA BANNER ── */}
      <section className="nz-cta-section">
        <div className="nz-wrap">
          <div className="nz-cta-card reveal reveal-3d" style={{ '--delay': '0.1s' }}>
            <div className="nz-cta-inner">
              <span className="nz-cta-tag">Co-powered by SckoolChess</span>
              <h2>Future Skills. Real Learning. Lasting Impact.</h2>
              <p>
                Aligned with the vision of the National Education Policy (NEP 2020). Partner with SckoolChess to introduce NEPZO’s future readiness programs in your institution today.
              </p>
              <div className="nz-cta-actions">
                <Link to="/book-class" className="nz-btn-primary" id="nepzo-footer-cta">
                  <span>Request Program Details</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="http://www.nepzo.in" target="_blank" rel="noopener noreferrer" className="nz-btn-secondary">
                  <span>Visit www.nepzo.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
