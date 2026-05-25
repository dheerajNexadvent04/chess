import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { Footer } from '../components/Footer'

const figmaAssets = {
  heroBg: '/herobanner.png',
  logoIcon: '/updated%20logo%20footer.png',
  studentA: '/im1.png',
  studentB: '/im2.png',
  whyA: '/im1.png',
  whyB: '/im2.png',
  whyC: '/im1.png',
  whyD: '/im3.png',
  featureImageTop: '/im2.png',
  featureImageBottom: '/im1.png',
  testimonial: '/im3.png',
  school1: '/sc1.png',
  school2: '/sc2.png',
  school3: '/sc3.png',
  school4: '/logo.png',
  school5: '/logo1.png',
  galleryChess: '/im2.png',
}

const students = [
  { src: '/ig1.mp4' },
  { src: '/ig2.mp4' },
  { src: '/ig3.mp4' },
  { src: '/ig4.mp4' },
  { src: '/ig6.mp4' },
  { src: '/ig7.mp4' },
  { src: '/ig8.mp4' },
  { src: '/ig9.mp4' },
]

const whyCards = [
  {
    image: '/s1.jpeg',
    title: 'Creativity',
    desc: 'Chess encourages children to imagine multiple scenarios and find unique solutions to complex problems.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 20.5h5M12 20.5V15"/><path d="M8.5 13.5C7.3 12.6 6 11 6 9a6 6 0 1 1 12 0c0 2-1.3 3.6-2.5 4.5H8.5z"/>
      </svg>
    )
  },
  {
    image: '/s2.jpeg',
    title: 'Logical Thinking',
    desc: 'Analyzing positions and planning ahead builds strong deductive reasoning and strategic thinking skills.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    )
  },
  {
    image: '/s3.jpeg',
    title: 'Patience',
    desc: 'Waiting for the right moment to strike and thinking through every move teaches valuable emotional control.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
      </svg>
    )
  },
  {
    image: '/s4.jpeg',
    title: 'Imagination',
    desc: 'The focus required for a game of chess translates directly to improved academic performance and attention span.',
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
    desc: 'Specially designed chess curriculum with grading and certification.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    image: '/school%20training%20div2.png',
    title: 'Chess in School (CIS)',
    desc: 'We partner with leading schools to integrate chess into the school day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    image: '/expert%20trainig%20%20program%20div3.png',
    title: 'Expert Training Programs',
    desc: 'High-intensity coaching for competitive players aiming for national titles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    image: '/touranement%20div4.png',
    title: 'Tournament Preparation',
    desc: 'Structured match practice and analysis to build competitive confidence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
  },
]

const schoolLogos = [
  { src: '/sc1.png', alt: 'Apeejay School', className: 'logo-square-sm' },
  { src: '/sc2.png', alt: 'Shri Ram Global School', className: 'logo-square' },
  { src: '/sc3.png', alt: 'Kingdom of Kids', className: 'logo-square' },
  { src: '/sc4.png', alt: 'Arlington Christian School', className: 'logo-wide' },
  { src: '/sc5.png', alt: 'Partner school', className: 'logo-wide-sm' },
]

const gallery = [
  '/g1.jpeg',
  '/g2.jpeg',
  '/g3.jpeg',
  '/g4.jpeg',
  '/g5.jpeg',
  '/g6.jpeg',
  '/g7.jpeg',
  '/g8.jpeg',
  '/g9.jpeg',
  '/g10.jpeg',
  '/g11.jpeg',
  '/g12.jpeg',
  '/g13.jpeg',
  '/g14.jpeg',
  '/g15.jpeg',
  '/g16.jpeg',
  '/g17.jpeg',
]

const marqueeItems = [
  'WORLD BLITZ CHAMPIONSHIPS LIVE',
  'SICILIAN NAJDORF - NEW VIDEO SERIES',
  '1,200 PUZZLES ADDED',
]

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'Company Profile' },
  { href: '/partners', label: 'School Partners' },
  { href: '/coaches', label: 'Coaches' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/book-class', label: 'Book Online Class' },
]

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [featureCounts, setFeatureCounts] = useState({
    students: 0,
    rating: 0,
    retention: 0,
  })
  const [puzzleModalOpen, setPuzzleModalOpen] = useState(false)
  const [puzzleSubmitted, setPuzzleSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-trigger popup on page load
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPuzzlePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setPuzzleModalOpen(true);
        sessionStorage.setItem('hasSeenPuzzlePopup', 'true');
      }, 3000); // 3 second delay for better UX
      return () => clearTimeout(timer);
    }
  }, []);
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
  const galleryRef = useRef(null)
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
      schools: 22,
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

  useEffect(() => {
    const node = galleryRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const images = node.querySelectorAll('img')
    images.forEach((img, i) => {
      const col = i % 3
      img.style.transitionDelay = `${col * 0.12}s`
      observer.observe(img)
    })

    return () => observer.disconnect()
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
            <img src="/logonew-removebg.png" alt="Sckool Chess logo" />
          </div>
          <nav>
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className={item.href === '/book-class' ? 'book-class-highlight' : ''}
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
              <a className="figma-contact-btn" href="/contact-us">
                Contact
              </a>
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
            {navItems.map((item) => (
              <Link 
                key={`drawer-${item.href}`} 
                to={item.href} 
                onClick={closeMobileMenu}
                className={item.href === '/book-class' ? 'book-class-highlight' : ''}
              >
                {item.label}
              </Link>
            ))}
            <a href="#support" onClick={closeMobileMenu}>
              Support
            </a>
            <a href="/contact-us" onClick={closeMobileMenu}>
              Contact
            </a>
          </nav>
        </aside>

        <div className="figma-hero-content">
          <p className="trust-chip">
            <span className="trust-chip-icon" aria-hidden="true">
              <img src="/flash.png" alt="" />
            </span>
            Trusted by 5,000+ Businesses
          </p>
          <h1>Every Chess Master Was Once a Beginner.</h1>
          <p>
            We teach children in Rohini to think three moves ahead - on the board and
            in life. From first piece to first trophy, we train it all.
          </p>
          <div className="figma-hero-actions">
            <a href="tel:+918447992702">Book a Free Trial Class</a>
            <a className="ghost" href="/courses-offered">
              See Our Chess Programs
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
        <h2>Listen From Our Students</h2>
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
                <StudentVideoCard src={student.src} fallbackSrc={student.fallbackSrc} />
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
        <h2>School Associated With Us</h2>
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
            With <span className="text-primary">Rohini Chess</span><br />
            Academy.
          </h2>
          <p>
            Accelerate your game with structured lessons, live analysis,
            and personalized training plans designed for every skill
            level.
          </p>
          <a className="start-btn" href="/courses-offered">Start Your Free Trial</a>
          <div className="nums" ref={featureNumsRef}>
            <div className="num-block">
              <strong>{featureCounts.students >= 5000 ? '5K' : featureCounts.students.toLocaleString()}+</strong>
              <span>Students trained</span>
            </div>
            <div className="num-divider" />
            <div className="num-block">
              <strong>{featureCounts.retention}%</strong>
              <span>Student retention</span>
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
            <div className="image-overlay-text">Tactical puzzles · 10,000+</div>
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
        <p className="sub">One Board. Six Skills Your Child Carries for Life.</p>
        <div className="metric-grid">
          <article className="metric-card metric-card-left">
            <div className="metric-icon-wrap">
              <img src="/student.png" alt="" aria-hidden="true" />
            </div>
            <strong>{metricsCounts.students.toLocaleString()}+</strong>
            <span>Number of Students</span>
          </article>
          <article className="metric-card metric-card-center">
            <div className="metric-icon-wrap">
              <img src="/home.png" alt="" aria-hidden="true" />
            </div>
            <strong>{metricsCounts.schools}+</strong>
            <span>Number of Schools</span>
          </article>
          <article className="metric-card metric-card-right">
            <div className="metric-icon-wrap">
              <img src="/calander.png" alt="" aria-hidden="true" />
            </div>
            <strong>{metricsCounts.years}+</strong>
            <span>Number of Years</span>
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
        <div className="gallery-grid" ref={galleryRef}>
          {gallery.map((src, idx) => (
            <img key={`${src}-${idx}`} src={src} alt="Gallery" />
          ))}
        </div>
      </section>

      <Footer />

      {/* ── Floating Puzzle CTA ── */}
      <button 
        className="puzzle-floating-cta"
        onClick={() => setPuzzleModalOpen(true)}
      >
        <span className="cta-icon">🎁</span>
        <span className="cta-text">Free Puzzle</span>
      </button>

      {/* ── Puzzle Lead Modal ── */}
      {puzzleModalOpen && (
        <div className="puzzle-modal-overlay">
          <div className="puzzle-modal-card">
            <button 
              className="puzzle-modal-close" 
              onClick={() => {
                setPuzzleModalOpen(false)
                setPuzzleSubmitted(false)
              }}
            >
              <X size={24} />
            </button>

            {!puzzleSubmitted ? (
              <div className="puzzle-modal-content">
                <div className="puzzle-modal-header">
                  <div className="puzzle-icon-wrap">🧩</div>
                  <h2>Get Your Free Chess Puzzle!</h2>
                  <p>Master the board with our hand-picked collection of championship-level puzzles. Enter your details to download the PDF instantly.</p>
                </div>

                <form 
                  className="puzzle-modal-form"
                  action="https://formspree.io/f/YOUR_FORM_ID" // Replace YOUR_FORM_ID with your actual ID from Formspree
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    
                    const form = e.target;
                    const data = new FormData(form);
                    
                    try {
                      const response = await fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: { 'Accept': 'application/json' }
                      });
                      
                      if (response.ok) {
                        setIsSubmitting(false);
                        setPuzzleSubmitted(true);
                      } else {
                        throw new Error('Submission failed');
                      }
                    } catch (err) {
                      // Fallback for demo purposes if ID is not set
                      setTimeout(() => {
                        setIsSubmitting(false);
                        setPuzzleSubmitted(true);
                      }, 1000);
                    }
                  }}
                >
                  <div className="puzzle-input-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="alex@example.com" required />
                  </div>
                  <div className="puzzle-input-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+91 00000 00000" required />
                  </div>
                  <button type="submit" className="puzzle-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Send Me the PDF'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="puzzle-success-content">
                <div className="success-icon">✅</div>
                <h2>Success!</h2>
                <p>Your chess puzzle PDF is ready for download. Challenge your mind!</p>
                <a 
                  href="/chess-puzzles.pdf" 
                  download 
                  className="puzzle-download-btn"
                  onClick={() => {
                    // Reset after some time if needed
                  }}
                >
                  Download PDF Now
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function StudentVideoCard({ src, fallbackSrc }) {
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

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration) || video.duration <= 1) return

    const randomPoint = Math.random() * (video.duration * 0.8)
    video.currentTime = randomPoint
  }

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
        preload="none"
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
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
