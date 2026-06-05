import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { Footer } from '../components/Footer'
import { UnifiedPopupModal } from '../components/UnifiedPopupModal'

const drawerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Company Profile', to: '/about-us' },
  { label: 'Partner School', to: '/partners' },
  { label: 'Coaches', to: '/coaches' },
  { label: 'Curriculum', to: '/curriculum' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Tournaments', to: '/tournaments' },
  { label: 'Market Area', to: '/market-area' },
  { label: 'Careers', to: '/career' },
  { label: 'Book Online Class', to: '/book-class' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact-us' }
]

const figmaAssets = {
  heroBg: '/herobanner.png',
  logoIcon: '/updated%20logo%20footer.png',
  studentA: '/im1.png',
  studentB: '/im2.png',
  whyA: '/im1.png',
  whyB: '/im2.png',
  whyC: '/im1.png',
  whyD: '/im3.png',
  featureImageTop: '/master class banner 2.png',
  featureImageBottom: '/master class banner image 1.png',
  testimonial: '/im3.png',
  school1: '/apeejay.jpg',
  school2: '/shri ram global.jpg',
  school3: '/sc3.png',
  school4: '/sc4.png',
  school5: '/the vasant international.png',
  galleryChess: '/im2.png',
}

const students = [
  { src: '/ig1.mp4', poster: '/t1.png' },
  { src: '/ig2.mp4', poster: '/t2.png' },
  { src: '/ig3.mp4', poster: '/t3.png' },
  { src: '/ig4.mp4', poster: '/t4.png' },
  { src: '/ig6.mp4', poster: '/t5.png' },
  { src: '/ig7.mp4', poster: '/t6.png' },
  { src: '/ig8.mp4', poster: '/t1.png' },
  { src: '/ig9.mp4', poster: '/t2.png' },
]

const whyCards = [
  {
    image: '/s1.jpeg',
    title: 'Creativity',
    desc: 'Chess builds creative thinking by training young minds to imagine bold, unconventional moves and strategies.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 20.5h5M12 20.5V15"/><path d="M8.5 13.5C7.3 12.6 6 11 6 9a6 6 0 1 1 12 0c0 2-1.3 3.6-2.5 4.5H8.5z"/>
      </svg>
    )
  },
  {
    image: '/s2.jpeg',
    title: 'Logical Thinking',
    desc: 'Our NEP-aligned chess curriculum sharpens analytical skills and decision-making, essential tools for 21st-century learners.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    )
  },
  {
    image: '/s3.jpeg',
    title: 'Patience',
    desc: 'Every game of chess teaches students to stay calm, think ahead, and never rush a decision.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
      </svg>
    )
  },
  {
    image: '/s4.jpeg',
    title: 'Imagination',
    desc: 'SckoolChess sparks creative imagination, helping students visualise multiple outcomes and develop a strategic mindset early.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.9 6.5 6.6 1-4.75 4.64 1.12 6.57L12 17.77l-5.87 2.94 1.12-6.57L2.5 9.5l6.6-1L12 2z"/>
      </svg>
    )
  },
]

const solutionCards = [
  {
    image: '/special%20div1.png',
    title: 'Specialised Curriculum',
    desc: 'A structured, NEP-aligned chess curriculum covering openings, tactics and endgames built for school students at every level.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    image: '/school%20training%20div2.png',
    title: 'Chess in School (CIS)',
    desc: 'Our flagship Chess in School Program brings expert-led chess coaching into classrooms across Rohini, Pitampura, Noida, Ghaziabad and Navi Mumbai.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    image: '/expert%20trainig%20%20program%20div3.png',
    title: 'Expert Training Programs',
    desc: 'Learn from top chess coaches in Rohini, Pitampura, Gurgaon and Ghaziabad with proven training methodologies for competitive and recreational players.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    image: '/tournaments.png',
    title: 'Tournament Preparation',
    desc: 'From local school tournaments to national championships, SckoolChess prepares every student to compete with confidence and strategy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
  },
]

const schoolLogos = [
  { src: '/apeejay.jpg', alt: 'Apeejay School', className: 'logo-square-sm' },
  { src: '/shri ram global.jpg', alt: 'Shri Ram Global School', className: 'logo-wide-sm' },
  { src: '/the vasant international.png', alt: 'The Vasant International Pre-School', className: 'logo-square-sm' },
]

const col1 = [
  '/g1.jpeg',
  '/g2.jpeg',
  '/g3.jpeg',
  '/g4.jpeg',
  '/g5.jpeg',
  '/g6.jpeg',
]

const col2 = [
  '/g7.jpeg',
  '/g8.jpeg',
  '/g9.jpeg',
  '/g10.jpeg',
  '/g11.jpeg',
  '/g12.jpeg',
]

const col3 = [
  '/g13.jpeg',
  '/g14.jpeg',
  '/g15.jpeg',
  '/g16.jpeg',
  '/g17.jpeg',
  '/g1.jpeg',
]

const marqueeItems = [
  'SckoolChess | Best Chess Classes in Rohini and Indirapuram',
  'Top Chess Coaches in North Delhi and Gurgaon',
  'NEP-Aligned Chess Training for Schools',
  'Chess in School Program | Rohini, Pitampura, Noida and Navi Mumbai',
  'Best Online Chess Classes in Rohini, Pitampura, Paschim Vihar, Vaishali, Indirapuram, Vasundhara and Dwarka',
]

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'Company Profile' },
  { href: '/partners', label: 'Partner School' },
  { href: '/coaches', label: 'Coaches' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/contact-us', label: 'Contact' },
]

export function HomePage() {
  useEffect(() => {
    document.title = "SckoolChess | Best Chess Academy in Rohini, Delhi NCR"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', "SckoolChess — India's top NEP-aligned chess academy. Best chess classes in Rohini, Pitampura, Paschim Vihar, Dwarka, Vaishali, Indirapuram, Vasundhara, Gurgaon and online pan-India. 5,000+ students trained.")
    }
  }, [])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [featureCounts, setFeatureCounts] = useState({
    students: 0,
    rating: 0,
    retention: 0,
  })

  const [metricsCounts, setMetricsCounts] = useState({
    students: 0,
    schools: 0,
    years: 0,
  })
  const featureNumsRef = useRef(null)
  const featureCountStartedRef = useRef(false)
  const metricsSectionRef = useRef(null)
  const metricsCountStartedRef = useRef(false)
  const reviewGridRef = useRef(null)
  const studentScrollRef = useRef(null)
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  })

  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    const { body } = document
    const prevOverflow = body.style.overflow
    body.style.overflow = 'hidden'
    return () => {
      body.style.overflow = prevOverflow
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const node = featureNumsRef.current
    if (!node) return undefined

    const targets = {
      students: 5000,
      rating: 98,
      retention: 80,
    }
    const durationMs = 1400
    let rafId = 0

    const animate = () => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setFeatureCounts({
          students: Math.round(targets.students * eased),
          rating: Math.round(targets.rating * eased),
          retention: Math.round(targets.retention * eased),
        })

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick)
        }
      }

      rafId = window.requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || featureCountStartedRef.current) return
        featureCountStartedRef.current = true
        animate()
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const node = metricsSectionRef.current
    if (!node) return undefined

    const targets = {
      students: 5000,
      schools: 12,
      years: 10,
    }
    const durationMs = 1400
    let rafId = 0

    const animate = () => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setMetricsCounts({
          students: Math.round(targets.students * eased),
          schools: Math.round(targets.schools * eased),
          years: Math.round(targets.years * eased),
        })

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick)
        }
      }

      rafId = window.requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || metricsCountStartedRef.current) return
        metricsCountStartedRef.current = true
        animate()
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (rafId) window.cancelAnimationFrame(rafId)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])



  const closeMobileMenu = () => setMobileMenuOpen(false)

  const scrollReviews = (direction) => {
    const grid = reviewGridRef.current
    if (!grid) return

    const firstCard = grid.querySelector('.review-card')
    if (!firstCard) return

    const cardWidth = firstCard.getBoundingClientRect().width
    const gap = parseFloat(window.getComputedStyle(grid).columnGap || '0')
    const scrollAmount = cardWidth + gap

    grid.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  const onStudentPointerDown = (event) => {
    const node = studentScrollRef.current
    if (!node) return
    const target = event.target
    if (target instanceof Element && target.closest('.student-video-toggle')) return

    dragStateRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: node.scrollLeft,
      moved: false,
    }

    node.setPointerCapture(event.pointerId)
    node.classList.add('is-dragging')
  }

  const onStudentPointerMove = (event) => {
    const node = studentScrollRef.current
    const drag = dragStateRef.current
    if (!node || !drag.isDown) return

    const delta = event.clientX - drag.startX
    if (Math.abs(delta) > 4) {
      dragStateRef.current.moved = true
    }
    node.scrollLeft = drag.scrollLeft - delta
  }

  const endStudentDrag = (pointerId) => {
    const node = studentScrollRef.current
    if (!node) return
    dragStateRef.current.isDown = false
    node.classList.remove('is-dragging')
    if (pointerId !== undefined && node.hasPointerCapture(pointerId)) {
      node.releasePointerCapture(pointerId)
    }
  }

  const onStudentPointerUp = (event) => {
    endStudentDrag(event.pointerId)
  }

  const onStudentPointerCancel = (event) => {
    endStudentDrag(event.pointerId)
  }

  return (
    <div className="figma-home">
      <section className="figma-hero">
        <img className="figma-hero-bg" src={figmaAssets.heroBg} alt="" />
        <div className="figma-overlay" />

        <header className={`figma-nav ${headerScrolled ? 'is-scrolled' : ''}`}>
          <Link 
            to="/book-class" 
            className="header-mobile-book-btn" 
            onClick={closeMobileMenu}
          >
            Book Online Class
          </Link>
          <button
            type="button"
            className="figma-mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className="figma-brand">
            <img src="/revised logo.png" alt="SckoolChess logo" />
          </div>
          <nav>
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions-wrapper figma-header-actions-wrapper">
            <div className="figma-nav-right">
              <a className="figma-support-link" href="#support">
                Support
              </a>
              <Link to="/nepzo-program">
                <img src="/nepzobg.png" alt="Nepzo Logo" className="header-partner-logo" />
              </Link>
              <Link 
                className="book-class-highlight" 
                to="/book-class"
              >
                Book Online Class
              </Link>
            </div>
          </div>
        </header>

        <div
          className={`figma-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
          onClick={closeMobileMenu}
        />
        <aside className={`figma-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="figma-mobile-drawer-head">
            <button type="button" aria-label="Close menu" onClick={closeMobileMenu}>
              <X size={18} />
            </button>
          </div>
          <nav className="figma-mobile-drawer-links">
            {drawerLinks.map((item) => {
              const isHighlight = item.to === '/book-class'
              return (
                <NavLink 
                  key={`drawer-${item.to}`} 
                  to={item.to} 
                  onClick={(e) => {
                    closeMobileMenu()
                    if (isHighlight) {
                      e.preventDefault()
                      window.dispatchEvent(new CustomEvent('open-custom-modal', {
                        detail: { type: 'booking', section: 'Mobile Drawer' }
                      }))
                    }
                  }}
                  className={({ isActive }) => {
                    return isActive ? 'active' : ''
                  }}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
          <div className="figma-mobile-drawer-footer">
            <Link to="/nepzo-program" onClick={closeMobileMenu} className="drawer-nepzo-link">
              <img src="/nepzobg.png" alt="Nepzo Logo" className="drawer-nepzo-logo" />
            </Link>
          </div>
        </aside>

        <div className="figma-hero-content">
          <p className="hero-kicker-label" style={{ fontSize: '13px', fontWeight: '800', color: '#F5A623', textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0' }}>
            STRUCTURED CHESS COACHING FOR KIDS
          </p>
          <h1>We make your chess dreams a reality</h1>
          <p>
            <strong>India's #1 NEP-Aligned Chess Academy for Schools and Students</strong>
            <br /><br />
            We help students discover their inner champion through structured chess training. Join SckoolChess, the best chess academy in Rohini, Pitampura, Paschim Vihar, Dwarka, Vaishali, Indirapuram, Vasundhara and Gurgaon to start your child’s winning journey today.
          </p>
          <p className="trust-chip" style={{ background: 'rgba(255, 255, 255, 0.07)', border: '1px solid rgba(255, 255, 255, 0.12)', padding: '8px 16px', borderRadius: '24px', fontSize: '13.5px', color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start' }}>
            <span className="trust-chip-icon" aria-hidden="true" style={{ display: 'inline-flex' }}>
              <img src="/flash.png" alt="" style={{ width: '14px', height: '14px' }} />
            </span>
            Trusted by 5,000+ students across Rohini, Pitampura, Noida and Navi Mumbai
          </p>
          <div className="figma-hero-actions">
            <a 
              href="/book-class"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-custom-modal', {
                  detail: { type: 'booking', section: 'Hero Section' }
                }));
              }}
            >
              Start a Free Trial
            </a>
            <a className="ghost" href="/curriculum">
              Explore Chess Programs
            </a>
          </div>
        </div>

        <div className="figma-marquee" aria-label="Latest updates">
          <div className="figma-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="figma-marquee-item" key={`${item}-${index}`}>
                {item}
                <span className="figma-marquee-sep" aria-hidden="true">
                  ♛
                </span>
              </span>
            ))}
          </div>
          <div className="figma-marquee-track" aria-hidden="true">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="figma-marquee-item" key={`${item}-ghost-${index}`}>
                {item}
                <span className="figma-marquee-sep" aria-hidden="true">
                  ♛
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-section student-section">
        <img
          className="student-section-bg-left"
          src="/left side element.png"
          alt=""
          aria-hidden="true"
        />
        <h2>What Our Students Say</h2>
        <p className="sub" style={{ textAlign: 'center', color: '#6b7a99', fontSize: '16px', maxWidth: '640px', margin: '8px auto 48px' }}>
          Real stories from young champions trained at SckoolChess across Rohini, Pitampura, Noida and Ghaziabad.
        </p>
        <div
          ref={studentScrollRef}
          className="student-scroll"
          role="region"
          aria-label="Student stories"
          onPointerDown={onStudentPointerDown}
          onPointerMove={onStudentPointerMove}
          onPointerUp={onStudentPointerUp}
          onPointerCancel={onStudentPointerCancel}
          onPointerLeave={onStudentPointerCancel}
        >
          <div className="student-grid">
            {students.map((student, idx) => (
              <article key={`${student.src}-${idx}`}>
                <StudentVideoCard src={student.src} fallbackSrc={student.fallbackSrc} poster={student.poster} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-section why-section" id="programs">
        <img
          className="why-section-bg"
          src="/right side element.png"
          alt=""
          aria-hidden="true"
        />
        <h2>Give Your Child the Best Gift of Their Life</h2>
        <p className="sub">One Board. Six Skills Your Child Carries for Life.</p>
        <div className="why-scroll" role="region" aria-label="Chess benefits">
          <div className="why-grid">
            {whyCards.map((card) => (
              <article key={card.title} className="why-card">
                <img className="why-card-image" src={card.image} alt={card.title} />
                <div className="why-card-shade" />
                <div className="why-card-content">
                  <span className="why-card-icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-section school-row">
        <h2>Schools Associated With Us</h2>
        <p className="sub" style={{ textAlign: 'center', color: '#6c6c6c', fontSize: '15px', maxWidth: '640px', margin: '8px auto 48px' }}>
          Proud chess partner for leading schools in Rohini, Pitampura, Noida, Navi Mumbai and across NCR.
        </p>
        <div className="school-logo-marquee" aria-label="Associated schools">
          <div className="school-logo-track">
            {[...schoolLogos, ...schoolLogos].map((logo, idx) => (
              <img
                className={logo.className}
                key={`${logo.src}-${idx}`}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
          <div className="school-logo-track" aria-hidden="true">
            {[...schoolLogos, ...schoolLogos].map((logo, idx) => (
              <img
                className={logo.className}
                key={`${logo.src}-copy-${idx}`}
                src={logo.src}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

      <section className="figma-section feature" id="about">
        <div className="feature-main">
          <h2>
            Master Chess<br />
            With <span className="text-primary">SckoolChess</span>
          </h2>
          <p>
            Accelerate your game with structured lessons by top coaches in Rohini, Pitampura, Paschim Vihar, Shalimar Bagh, Dwarka, Vaishali and Gurgaon. Our future-ready, NEP-aligned learning programs are designed to build champions at every school level.
          </p>
          <a 
            className="start-btn" 
            href="/book-class"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('open-custom-modal', {
                detail: { type: 'booking', section: 'Features Section' }
              }));
            }}
          >
            Start Your Free Trial
          </a>
          <div className="nums" ref={featureNumsRef}>
            <div className="num-block">
              <strong>{featureCounts.students >= 5000 ? '5K' : featureCounts.students.toLocaleString()}+</strong>
              <span>Students Trained</span>
            </div>
            <div className="num-divider" />
            <div className="num-block">
              <strong>{featureCounts.retention}%</strong>
              <span>Student Win Rate</span>
            </div>
          </div>
        </div>
        <div className="feature-side">
          <article className="feature-image-card">
            <img src={figmaAssets.featureImageBottom} alt="Students playing chess" />
          </article>
          <article className="feature-blue-card">
            <div className="pill-wrapper">
              <div className="pill">
                <span className="pill-icon">
                  <img src="/queen white backgorund.png" alt="" />
                </span>
                Opening Theory
              </div>
            </div>
            <h4>Build a Deadly Opening Repertoire</h4>
            <p>Learn Sicilian, King's Indian, and more from top GMs.</p>
            <a href="/courses-offered" className="explore-btn">
              Explore
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </a>
          </article>
          <article className="feature-white-card">
            <div className="pill-wrapper">
              <div className="pill light">
                <span className="pill-icon">
                  <img src="/king blue backgroudn.png" alt="" />
                </span>
                Endgames
              </div>
            </div>
            <h4>Win Winning Endgames</h4>
            <p>Master rook endings, pawn structure, and conversion technique.</p>
            <a href="/courses-offered" className="learn-more-btn">
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </a>
          </article>
          <article className="feature-image-card has-overlay">
            <img src={figmaAssets.featureImageTop} alt="Student analyzing board" />
            <div className="image-overlay-text" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
              <strong>Winning Edge Gainer</strong>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>"SckoolChess gave my child the competitive edge I was always looking for."</span>
            </div>
          </article>
        </div>
      </section>

      <section className="figma-section solutions-section">
        <h2>Our Solutions</h2>
        <p className="sub">One Board. Six Skills Your Child Carries for Life.</p>
        <div className="solutions-scroll" role="region" aria-label="Our solutions">
          <div className="solutions-grid">
            {solutionCards.map((card) => (
              <article key={card.title} className="solutions-card">
                <img className="solutions-card-image" src={card.image} alt={card.title} />
                <div className="solutions-card-shade" />
                <div className="solutions-card-content">
                  <span className="solutions-card-icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-section metrics" id="achievements" ref={metricsSectionRef}>
        <img
          className="metrics-bg-left"
          src="/left-side2.png"
          alt=""
          aria-hidden="true"
        />
        <h2>Key Metrics</h2>
        <p className="sub">Numbers That Reflect Our Commitment to Chess Excellence</p>
        <div className="metric-grid">
          <article className="metric-card metric-card-left">
            <div className="metric-icon-wrap">
              <img src="/student.png" alt="" aria-hidden="true" />
            </div>
            <strong>{metricsCounts.students.toLocaleString()}+</strong>
            <span>Students Trained</span>
          </article>
          <article className="metric-card metric-card-center">
            <div className="metric-icon-wrap">
              <img src="/home.png" alt="" aria-hidden="true" />
            </div>
            <strong>{metricsCounts.schools}+</strong>
            <span>Partner Schools</span>
          </article>
          <article className="metric-card metric-card-right">
            <div className="metric-icon-wrap">
              <img src="/calander.png" alt="" aria-hidden="true" />
            </div>
            <strong>{metricsCounts.years}+</strong>
            <span>Titles Won</span>
          </article>
        </div>
        <div className="metrics-marquee" aria-label="Achievements ticker">
          <div className="metrics-marquee-track">
            {[
              'Aryan Sharma - 1st Place, Delhi State U13',
              'Priya Mehra - 2nd Place, Delhi State U13',
              'Rohit Kumar - 2nd Place, Delhi State U13',
              'Riya Gupta - 1st Place, Delhi State U11',
            ]
              .concat([
                'Aryan Sharma - 1st Place, Delhi State U13',
                'Priya Mehra - 2nd Place, Delhi State U13',
                'Rohit Kumar - 2nd Place, Delhi State U13',
                'Riya Gupta - 1st Place, Delhi State U11',
              ])
              .map((item, index) => (
                <span className="metrics-marquee-item" key={`${item}-${index}`}>
                  <span className="metrics-marquee-dot" aria-hidden="true" />
                  {item}
                </span>
              ))}
          </div>
        </div>
      </section>

      {false && (<section className="figma-section reviews" id="support">
        <h2>Customer Reviews</h2>
        <p className="sub">
          Lorem ipsum dolor sit amet consectetur. Condimentum tortor tortor dictum sed
          natoque urna risus.
        </p>
        <div className="review-row">
          <button
            className="review-nav review-nav-left"
            aria-label="Previous reviews"
            onClick={() => scrollReviews('prev')}
          >
            ‹
          </button>
          <div className="review-grid" ref={reviewGridRef}>
            <article className="review-card">
              <span className="stars">★★★★★</span>
              <h4>Good Style of Edu</h4>
              <p>
                Honored to be featured in Voyage L A for their Inspiring Stories series.
                We talked about how Goldenbird Marketing came to be what it is today
                through a little Q and A.
              </p>
              <b>– Joanna A.</b>
            </article>
            <article className="review-card">
              <span className="stars">★★★★★</span>
              <h4>Loved It!</h4>
              <p>
                Honored to be featured in Voyage L A for their Inspiring Stories series.
                We talked about how Goldenbird Marketing came to be what it is today
                through a little Q and A.
              </p>
              <b>– Brenda</b>
            </article>
            <article className="review-card">
              <span className="stars">★★★★★</span>
              <h4>Highly Recommend</h4>
              <p>
                Honored to be featured in Voyage L A for their Inspiring Stories series.
                We talked about how Goldenbird Marketing came to be what it is today
                through a little Q and A.
              </p>
              <b>– Jessie</b>
            </article>
          </div>
          <button
            className="review-nav review-nav-right"
            aria-label="Next reviews"
            onClick={() => scrollReviews('next')}
          >
            ›
          </button>
        </div>
      </section>)}

      <TestimonialCarousel />

      <section className="figma-section gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-columns-container">
          <div className="gallery-column side-column">
            <div className="gallery-column-track scroll-up">
              {col1.concat(col1).map((src, idx) => (
                <img key={`col1-${idx}`} src={src} alt="Gallery item" />
              ))}
            </div>
          </div>
          <div className="gallery-column center-column">
            <div className="gallery-column-track scroll-down">
              {col2.concat(col2).map((src, idx) => (
                <img key={`col2-${idx}`} src={src} alt="Gallery item" />
              ))}
            </div>
          </div>
          <div className="gallery-column side-column">
            <div className="gallery-column-track scroll-up">
              {col3.concat(col3).map((src, idx) => (
                <img key={`col3-${idx}`} src={src} alt="Gallery item" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <UnifiedPopupModal />
    </div>
  )
}

function StudentVideoCard({ src, fallbackSrc, poster }) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSrc, setActiveSrc] = useState(src)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const togglePlayback = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
      } catch {
        return
      }
      setIsPlaying(true)
      return
    }

    video.pause()
    setIsPlaying(false)
  }

  const handleVideoError = () => {
    if (!fallbackSrc || activeSrc === fallbackSrc) return
    setActiveSrc(fallbackSrc)
    setIsPlaying(false)
  }

  return (
    <div className="student-video-card" ref={containerRef}>
      <video
        ref={videoRef}
        className="student-video"
        src={inView ? activeSrc : undefined}
        poster={poster}
        preload="none"
        playsInline
        onError={handleVideoError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        type="button"
        className="student-video-toggle"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
}
