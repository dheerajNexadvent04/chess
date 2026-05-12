import { useState, useEffect, useCallback } from 'react'
import { Award, BookOpen, Brain, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Clock, GraduationCap, Lightbulb, LayoutGrid, Phone, Plus, Scale, ShieldCheck, Star, Target, TrendingUp, Trophy, Building2, User, Users, Wallet, Zap } from 'lucide-react'


const heroCards = [
  { title: '100+', subtitle: 'Students Trained', Icon: Users },
  { title: 'Expert', subtitle: 'Chess Coaches', Icon: GraduationCap },
  { title: 'Tournament', subtitle: 'Ready Training', Icon: ShieldCheck },
]

const heroStats = [
  { value: '4', label: 'Structured\nCourses', Icon: LayoutGrid },
  { value: 'FIDE', label: 'Preparation', Icon: Trophy },
  { value: 'Delhi Chess', label: 'Association\nAffiliated', Icon: Building2 },
  { value: '5 – 15', label: 'Years\nAge Group', Icon: Users },
]

const heroBadges = [
  { label: 'Delhi Chess Association Affiliated', Icon: Award },
  { label: 'Online & Offline Classes', Icon: BookOpen },
  { label: 'Tournament Preparation', Icon: Award },
  { label: 'Expert Coaches', Icon: GraduationCap },
  { label: '100+ Students Trained', Icon: Users },
]

const courses = [
  {
    id: 'walkers',
    name: 'Walkers',
    level: 'Beginner Level',
    color: '#16a34a',
    Icon: User,
    popular: false,
    features: [
      'Learn chess fundamentals',
      'Basic tactics & gameplay',
      'Strong foundation building',
    ],
    details: [
      { Icon: CalendarDays, label: 'Duration: 3 Months' },
      { Icon: Clock,        label: 'Classes: 24 (1 Hr Each)' },
      { Icon: Users,        label: 'Age Group: 5–12 Years' },
      { Icon: Wallet,       label: 'Fees: ₹9,000' },
    ],
  },
  {
    id: 'joggers',
    name: 'Joggers',
    level: 'Intermediate Level',
    color: '#2563eb',
    Icon: TrendingUp,
    popular: true,
    features: [
      'Improve tactics & strategy',
      'Opening & endgame training',
      'Tournament readiness',
    ],
    details: [
      { Icon: CalendarDays, label: 'Duration: 6 Months' },
      { Icon: Clock,        label: 'Classes: 48 (1 Hr Each)' },
      { Icon: Users,        label: 'Age Group: 8–12 Years' },
      { Icon: Wallet,       label: 'Fees: ₹21,000' },
    ],
  },
  {
    id: 'runner',
    name: 'Runner',
    level: 'Advanced Level',
    color: '#9333ea',
    Icon: Trophy,
    popular: false,
    features: [
      'Advanced strategy & openings',
      'FIDE tournament training',
      'Competitive match analysis',
    ],
    details: [
      { Icon: BookOpen,     label: '20 Coaching Classes' },
      { Icon: Target,       label: '20 Practice Sessions' },
      { Icon: Users,        label: 'Age Group: Up to 15 Years' },
      { Icon: Star,         label: 'For 1500+ Chess.com Rating' },
    ],
  },
  {
    id: 'crash',
    name: 'Crash Course',
    level: 'Fast Track Learning',
    color: '#f97316',
    Icon: Zap,
    popular: false,
    features: [
      'Fast track chess learning',
      'Essential openings & tactics',
      'Quick tournament preparation',
    ],
    details: [
      { Icon: CalendarDays, label: 'Duration: 3 Months' },
      { Icon: Clock,        label: 'Classes: 24 (1 Hr Each)' },
      { Icon: Users,        label: 'Age Group: 5–12 Years' },
      { Icon: Wallet,       label: 'Fees: ₹11,000' },
    ],
  },
]

const pathwayLevels = [
  {
    id: 'walkers',
    label: 'Level 1',
    name: 'Walkers',
    color: '#22c55e',
    desc: 'Learn fundamentals, basic tactics & simple gameplay strategies.',
    duration: 'Duration: 3 Months',
    tag: 'Beginner Friendly',
    icon: 'fa-chess-pawn'
  },
  {
    id: 'joggers',
    label: 'Level 2',
    name: 'Joggers',
    color: '#3b82f6',
    desc: 'Improve openings, tactics, endgames & tournament readiness.',
    duration: 'Duration: 6 Months',
    tag: 'Skill Building',
    icon: 'fa-chess-knight'
  },
  {
    id: 'runner',
    label: 'Level 3',
    name: 'Runner',
    color: '#a855f7',
    desc: 'Advanced strategy, FIDE preparation & competitive training.',
    duration: 'Ongoing Training',
    tag: 'Competitive Edge',
    icon: 'fa-chess-rook'
  },
  {
    id: 'coach',
    label: 'Fast Track Option',
    name: 'Crash Course',
    color: '#f97316',
    desc: 'Accelerated learning for fast progress in shorter time.',
    duration: 'Duration: 3 Months',
    tag: 'Excellence & Mentorship',
    icon: 'fa-bolt'
  },
]

const curriculumTabs = [
  { id: 'walkers', label: 'Walkers', color: '#22c55e', icon: 'fa-person-walking' },
  { id: 'joggers', label: 'Joggers', color: '#3b82f6', icon: 'fa-person-running' },
  { id: 'runner', label: 'Runner', color: '#a855f7', icon: 'fa-person-running' },
  { id: 'crash', label: 'Crash Course', color: '#f97316', icon: 'fa-rocket' },
]

const detailedCurriculum = {
  walkers: [
    {
      Icon: GraduationCap,
      title: 'Fundamentals',
      items: [
        'Chess board & pieces',
        'Rules of the game',
        'Check, Checkmate & Stalemate',
        'Castling, Promotion, En Passant',
        'Opening principles',
      ],
    },
    {
      Icon: BookOpen,
      title: 'Openings',
      items: [
        'Basic opening ideas',
        'Common opening traps',
        'Ruy Lopez (Intro)',
        'Italian Game (Intro)',
        'Good opening habits',
      ],
    },
    {
      Icon: Target,
      title: 'Tactics',
      items: [
        'Fork, Pin, Skewer',
        'Discovered attack',
        'Back rank checkmate',
        'Elementary checkmates',
        'Puzzle solving',
      ],
    },
    {
      Icon: Trophy,
      title: 'Endgames & Activities',
      items: [
        'King & Queen checkmate',
        'King & Rook checkmate',
        'Basic pawn endgames',
        'Puzzle contests',
        'Fun mini tournaments',
      ],
    },
  ],
  joggers: [
    {
      Icon: BookOpen,
      title: 'Chess Openings',
      items: [
        'Italian Game basics',
        'Four Knights Opening',
        'Ruy Lopez',
        "Queen's Gambit (Declined)",
      ],
    },
    {
      Icon: Target,
      title: 'Middle Game Tactics',
      items: [
        'Double Attack',
        'Discovered Attack',
        'Removing the Defender',
        'Deflection & Decoy',
        'Pin, Fork, Skewer',
        'Discovered & Double Check',
      ],
    },
    {
      Icon: Trophy,
      title: 'Endgame Training',
      items: [
        'Queen & Rook Checkmate',
        'Double Bishops Checkmate',
        'Pawn Endgame — Fundamentals',
        'Rook Endgame — Fundamentals',
      ],
    },
    {
      Icon: Star,
      title: 'Activities',
      items: [
        'Timed puzzle contests',
        'Friendly chess tournaments',
        'Online gameplay sessions',
        'Checkmate in 2 & 3 moves',
        'Doubt clearing sessions',
      ],
    },
  ],
  runner: [
    {
      Icon: BookOpen,
      title: 'Advanced Openings',
      items: [
        'Sicilian Defence (multiple lines)',
        'Ruy Lopez — advanced theory',
        "Queen's Gambit (accepted & declined)",
        'French Defence',
      ],
    },
    {
      Icon: Target,
      title: 'Middle Game Strategy',
      items: [
        'Open Files and Outposts',
        'Decoy, Pin, Fork, Double Attack',
        'Creating tactical patterns',
        'Advanced pattern recognition',
      ],
    },
    {
      Icon: Trophy,
      title: 'Advanced Endgames',
      items: [
        'Bishop & Knight Checkmate',
        'Pawn Endgame — Advanced',
        'Rook Endgame — Advanced',
        'Queen Endgame — Advanced',
      ],
    },
    {
      Icon: Award,
      title: 'Tournament Prep',
      items: [
        'Practice sessions & doubt clearing',
        'Tournament rules & notation',
        'Tournament simulation games',
        'Online & OTB tournament play',
        'FIDE rating game exposure',
      ],
    },
  ],
  crash: [
    {
      Icon: ShieldCheck,
      title: 'Chess Basics (Accelerated)',
      items: [
        'Chess board, pieces, movement',
        'Piece capture, defence, attack',
        'Castling, En Passant rules',
        'Opening principles — fundamentals',
        'Checkmate in 1 & 2 moves',
      ],
    },
    {
      Icon: BookOpen,
      title: 'Openings Covered',
      items: [
        'Ruy Lopez',
        'French Defence',
        "Queen's Gambit (Declined)",
      ],
    },
    {
      Icon: Target,
      title: 'Tactics Training',
      items: [
        'Double Attack',
        'Discovered Attack',
        'Deflection & Decoy',
        'Pin, Fork, Skewer',
      ],
    },
    {
      Icon: Trophy,
      title: 'Endgames',
      items: [
        'Queen & Rook Checkmate',
        'Double Bishops Checkmate',
        'Pawn Endgame — Basic',
        'Rook Endgame — Basic',
      ],
    },
  ],
}

const tournamentFeatures = [
  'CBSE Tournament Preparation',
  'State Level Chess Events',
  'FIDE Rating Exposure',
  'Online Tournament Training',
  'Chess.com & Lichess Practice',
  'Over the Board Tournament Training',
]

const benefits = [
  { Icon: Target,     label: 'Improves\nConcentration' },
  { Icon: Brain,      label: 'Develops\nLogical Thinking' },
  { Icon: Scale,      label: 'Better\nDecision Making' },
  { Icon: Clock,      label: 'Improves\nPatience' },
  { Icon: Lightbulb,  label: 'Enhances\nMemory' },
  { Icon: TrendingUp, label: 'Builds\nConfidence' },
]

const whyFeatures = [
  'Structured chess curriculum',
  'Beginner to advanced progression',
  'Tournament focused coaching',
  'Age appropriate batches',
  'Online and offline classes',
  'Personalized attention',
]

const faqs = [
  {
    q: 'What is the best age to start chess?',
    a: 'Chess can be started as early as age 5. Our programs are designed specifically for children aged 5–15, with age-appropriate curricula that build skills progressively.',
  },
  {
    q: 'Do beginners need prior experience?',
    a: 'No prior experience is needed! Our Walkers course starts from absolute basics — board setup, piece movement, and fundamental rules — so anyone can begin.',
  },
  {
    q: 'Are online chess classes available?',
    a: 'Yes! We offer both online and offline classes. Online sessions are conducted via Zoom/Google Meet with live coaching, puzzles, and interactive gameplay.',
  },
  {
    q: 'How long does it take to become tournament ready?',
    a: 'Most students are ready for their first tournament within 3–6 months. Our Runner and Crash Course tracks are specifically designed to accelerate tournament preparation.',
  },
  {
    q: 'Do students participate in competitions?',
    a: 'Absolutely. We prepare students for CBSE tournaments, state-level events, and FIDE-rated competitions. We also provide training on Chess.com and Lichess platforms.',
  },
  {
    q: 'What is included in the trial class?',
    a: 'The free trial includes a 45-minute live session with a coach, an assessment of the student\'s current level, and a personalised course recommendation.',
  },
]

export function CurriculumPage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [slideDir, setSlideDir] = useState('next')
  const [animKey, setAnimKey] = useState(0)
  const [activeTab, setActiveTab] = useState('walkers')
  const [tabKey, setTabKey] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTournament, setActiveTournament] = useState(0)
  const [tournamentKey, setTournamentKey] = useState(0)

  const handleTab = useCallback((id) => {
    setActiveTab(id)
    setTabKey(k => k + 1)
  }, [])

  const goNext = useCallback(() => {
    setSlideDir('next')
    setActiveFeature(f => (f + 1) % whyFeatures.length)
    setAnimKey(k => k + 1)
  }, [])

  const goPrev = useCallback(() => {
    setSlideDir('prev')
    setActiveFeature(f => (f - 1 + whyFeatures.length) % whyFeatures.length)
    setAnimKey(k => k + 1)
  }, [])

  const goTo = useCallback((i) => {
    setSlideDir(i > activeFeature ? 'next' : 'prev')
    setActiveFeature(i)
    setAnimKey(k => k + 1)
  }, [activeFeature])

  const tNext = useCallback(() => {
    setActiveTournament(f => (f + 1) % tournamentFeatures.length)
    setTournamentKey(k => k + 1)
  }, [])

  const tPrev = useCallback(() => {
    setActiveTournament(f => (f - 1 + tournamentFeatures.length) % tournamentFeatures.length)
    setTournamentKey(k => k + 1)
  }, [])

  const tGoTo = useCallback((i) => {
    setActiveTournament(i)
    setTournamentKey(k => k + 1)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setSlideDir('next')
      setActiveFeature(f => (f + 1) % whyFeatures.length)
      setAnimKey(k => k + 1)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTournament(f => (f + 1) % tournamentFeatures.length)
      setTournamentKey(k => k + 1)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="curriculum-page" aria-label="Curriculum page">

      {/* ── Hero ── */}
      <div className="curriculum-hero">
        <img className="curriculum-hero-bg" src="/herobanner.png" alt="" aria-hidden="true" />
        <div className="curriculum-hero-overlay" />

        <div className="curriculum-hero-main">
          <div className="curriculum-hero-left">
            <p className="curriculum-kicker">Structured chess coaching for kids</p>
            <h1>
              Chess Courses
              <br />
              Designed to
              <br />
              Build <span>Champions</span>
            </h1>
            <p>
              Structured chess coaching for children aged 5 to 15 years from beginner
              learning to tournament level preparation.
            </p>
            <div className="curriculum-hero-actions">
              <a href="tel:+918447992702">
                <CalendarDays size={35} strokeWidth={2} style={{ marginRight: 8 }} />
                Book Free Trial
              </a>
              <a className="ghost" href="/courses-offered">
                View Courses →
              </a>
            </div>

            <div className="curriculum-hero-stats">
              {heroStats.map((stat) => (
                <div key={stat.value + stat.label} className="curriculum-hero-stat">
                  <stat.Icon size={35} strokeWidth={1.8} />
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="curriculum-hero-right" aria-label="Key highlights">
            {heroCards.map((card, index) => (
              <article key={card.title} className={`curriculum-floating-card card-${index + 1}`}>
                <div className="curriculum-card-icon">
                  <card.Icon size={24} strokeWidth={2} />
                </div>
                <div className="curriculum-card-text">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── Badge bar ── */}
      <div className="curriculum-badge-row">
        {heroBadges.map((badge) => (
          <article key={badge.label}>
            <badge.Icon size={35} strokeWidth={2} />
            <span>{badge.label}</span>
          </article>
        ))}
      </div>

      {/* ── Why Parents Choose ── */}
      <div className="curriculum-why">
        <div className="curriculum-why-image">
          <img src="/n1.jpg" alt="Chess coaching session at Rohini Chess Academy" />
        </div>

        <div className="curriculum-why-content">
          <p className="curriculum-why-kicker">
            <span className="kicker-dot" />
            About Rohini Chess Academy
          </p>
          <h2>Why Parents Choose<br />Rohini Chess Academy</h2>
          <p className="curriculum-why-desc">
            Professional chess coaching designed to improve strategic thinking,
            concentration, and tournament performance.
          </p>

          {/* Carousel */}
          <div className="curriculum-feature-carousel">
            <div className="carousel-row">
              <button className="carousel-arrow" onClick={goPrev} aria-label="Previous feature">
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>

              <div className="carousel-body">
                <div key={animKey} className="carousel-slide">
                  <div className="carousel-check">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <p className="carousel-feature-text">
                    {whyFeatures[activeFeature]}
                  </p>
                </div>

                <div className="carousel-dots" role="tablist">
                  {whyFeatures.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === activeFeature}
                      className={`carousel-dot${i === activeFeature ? ' active' : ''}`}
                      onClick={() => goTo(i)}
                      aria-label={`Feature ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button className="carousel-arrow" onClick={goNext} aria-label="Next feature">
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Courses Section ── */}
      <div className="curriculum-courses">
        <div className="curriculum-courses-header">
          <p className="curriculum-courses-kicker">Our Courses</p>
          <h2>Chess Courses for Every Level</h2>
          <p>Choose the perfect program for your child's chess journey.</p>
        </div>

        <div className="curriculum-courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-card${course.popular ? ' course-card--popular' : ''}`}
            >
              {course.popular && (
                <span className="course-popular-badge">Most Popular</span>
              )}

              <div className="course-card-header">
                <div className="course-icon-circle" style={{ background: course.color }}>
                  <course.Icon size={28} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 style={{ color: course.color }}>{course.name}</h3>
                  <p>{course.level}</p>
                </div>
              </div>

              <ul className="course-features">
                {course.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={15} strokeWidth={2.2} style={{ color: course.color, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="course-divider" />

              <ul className="course-details">
                {course.details.map((d) => (
                  <li key={d.label}>
                    <d.Icon size={15} strokeWidth={2} style={{ color: course.color, flexShrink: 0 }} />
                    {d.label}
                  </li>
                ))}
              </ul>

              <a href="/contact" className="course-btn" style={{ background: course.color }}>
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ── Learning Pathway ── */}
      <div className="curriculum-pathway">
        <div className="curriculum-pathway-left">
          <p className="curriculum-pathway-kicker">
            <Trophy size={14} style={{ marginRight: 6 }} />
            LEARN & GROW
          </p>
          <h2>Your Child's Chess<br />Journey Roadmap</h2>
          <p className="curriculum-pathway-desc">
            A carefully structured learning path from first moves to tournament readiness.
            Each level builds skills, confidence, and a love for chess.
          </p>
          <a href="tel:+918447992702" className="curriculum-pathway-cta">
            <CalendarDays size={20} strokeWidth={2} style={{ marginRight: 10 }} />
            Book Free Trial
          </a>

          <div className="pathway-social-proof">
            <div className="pathway-avatars">
              <img src="/n2.jpg" alt="" />
              <img src="/n3.jpg" alt="" />
              <img src="/n4.jpg" alt="" />
            </div>
            <div className="pathway-rating">
              <div className="pathway-stars">
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <strong>4.9/5</strong>
              </div>
              <span>Trusted by 1,000+ parents</span>
            </div>
          </div>
        </div>

        <div className="curriculum-pathway-right-wrapper">
          <div className="curriculum-pathway-right">
            {pathwayLevels.map((level, idx) => (
              <div key={level.id} className="pathway-step">
                {/* Number indicator */}
                <div className="pathway-number" style={{ color: level.color }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Card */}
                <div className="pathway-card" style={{ '--pw-color': level.color }}>
                  <div className="pathway-circle" style={{ borderColor: `${level.color}40`, background: `${level.color}08` }}>
                    <i className={`fa-solid ${level.icon}`} style={{ fontSize: '32px', color: level.color }}></i>
                  </div>

                  <p className="pathway-level-label" style={{ color: level.color }}>{level.label}</p>
                  <h3 className="pathway-level-name">{level.name}</h3>
                  <p className="pathway-level-desc">{level.desc}</p>

                  <div className="pathway-duration-pill" style={{ background: `${level.color}12`, color: level.color }}>
                    <Clock size={14} style={{ marginRight: 6 }} />
                    {level.duration}
                  </div>

                  <div className="pathway-card-footer" style={{ background: `${level.color}08`, borderTop: `1px solid ${level.color}15` }}>
                    {level.icon === 'crown' ? <Star size={14} color={level.color} /> : <TrendingUp size={14} color={level.color} />}
                    <span style={{ color: level.color }}>{level.tag}</span>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>

       {/* ── Detailed Curriculum ── */}
      <div
        className="curriculum-detailed"
        style={{ '--dc-accent': curriculumTabs.find(t => t.id === activeTab).color }}
      >
        <div className="curriculum-detailed-top">
          <div className="curriculum-detailed-header">
            <p className="curriculum-detailed-kicker">
              <span className="kicker-dot" />
              Detailed Curriculum
            </p>
            <h2>What Your Child<br /><span>Will Learn</span></h2>
            <p className="dc-desc">
              Step-by-step curriculum designed to build strong chess fundamentals and advanced thinking.
            </p>
          </div>

          <div className="curriculum-tabs-container">
            <nav className="curriculum-tabs" role="tablist">
              {curriculumTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`dc-tab${activeTab === tab.id ? ' active' : ''}`}
                  onClick={() => handleTab(tab.id)}
                  style={{ '--tab-color': tab.color }}
                >
                  <div className="tab-icon-circle">
                    <i className={`fa-solid ${tab.icon}`}></i>
                  </div>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && <div className="tab-pointer" />}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="curriculum-detailed-main">
          <div className="dc-grid">
            {detailedCurriculum[activeTab].map((section, sIdx) => (
              <div key={section.title} className="dc-col">
                <div className="dc-col-header">
                  <div className="dc-col-icon">
                    <section.Icon size={32} />
                  </div>
                  <h3>{section.title}</h3>
                  <p className="dc-col-desc">Comprehensive learning path for this stage.</p>
                </div>
                <ul className="dc-items">
                  {section.items.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Benefits of Learning Chess ── */}
      <div className="curriculum-benefits">
        <p className="curriculum-benefits-kicker">
          <span className="kicker-dot" />
          Benefits of Learning Chess
        </p>
        <h2 className="curriculum-benefits-h2">Chess Builds Skills That Last a Lifetime</h2>
        
        <div className="benefits-marquee-container">
          <div className="benefits-marquee-track">
            {/* Double the items for seamless looping */}
            {[...benefits, ...benefits].map((b, idx) => (
              <div key={`${b.label}-${idx}`} className="benefit-card">
                <div className="benefit-icon-wrap">
                  <b.Icon size={30} strokeWidth={1.6} />
                </div>
                <p className="benefit-label">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tournament Ready Training ── */}
      <div className="curriculum-tournament">
        {/* Left: 3 images — 1 tall + 2 stacked */}
        <div className="tournament-images">
          <div className="tournament-img-large">
            <img src="/n5.jpg" alt="Student focused on chess" />
          </div>
          <div className="tournament-img-stack">
            <div className="tournament-img-top">
              <img src="/n1.jpg" alt="Students winning trophy" />
            </div>
            <div className="tournament-img-bottom">
              <img src="/n2.jpg" alt="Chess classroom session" />
            </div>
          </div>
        </div>

        {/* Right: text content */}
        <div className="tournament-content">
          <p className="tournament-kicker">
            <span className="kicker-dot" />
            Tournament Ready Training
          </p>
          <h2>Preparing Students for<br />Real World Competitions</h2>
          <p className="tournament-desc">
            We provide complete exposure to national and international chess tournaments
            to help students grow and achieve.
          </p>

          <div className="curriculum-feature-carousel">
            <div className="carousel-row">
              <button className="carousel-arrow" onClick={tPrev} aria-label="Previous feature">
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>

              <div className="carousel-body">
                <div key={tournamentKey} className="carousel-slide">
                  <div className="carousel-check">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <p className="carousel-feature-text">
                    {tournamentFeatures[activeTournament]}
                  </p>
                </div>

                <div className="carousel-dots" role="tablist">
                  {tournamentFeatures.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === activeTournament}
                      className={`carousel-dot${i === activeTournament ? ' active' : ''}`}
                      onClick={() => tGoTo(i)}
                    />
                  ))}
                </div>
              </div>

              <button className="carousel-arrow" onClick={tNext} aria-label="Next feature">
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ + Banner ── */}
      <div className="curriculum-faq-section">
        {/* Left: FAQ accordion */}
        <div className="faq-left">
          <p className="faq-kicker">
            <span className="kicker-dot" />
            Frequently Asked Questions
          </p>
          <h2 className="faq-heading">Got Questions?<br />We Have Answers.</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                  <button
                    className="faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q">{faq.q}</span>
                    <span className="faq-icon">
                      <Plus size={18} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className="faq-body">
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Landscape Banner */}
        <div className="faq-right-banner">
          <img src="/n3.jpg" alt="Students practicing chess" className="faq-landscape-image" />
        </div>
      </div>

    </section>
  )
}
