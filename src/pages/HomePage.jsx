import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const figmaAssets = {
  heroBg:
    'https://www.figma.com/api/mcp/asset/2a5580e7-9da5-4e92-95f1-cbae69296834',
  logoIcon:
    'https://www.figma.com/api/mcp/asset/1b6951ad-2515-47b1-9428-61631ba0e8aa',
  studentA:
    'https://www.figma.com/api/mcp/asset/cf6cba4f-f8e0-4fe6-bbc8-b552ddedaf91',
  studentB:
    'https://www.figma.com/api/mcp/asset/dc1be1bc-355c-44ef-be3c-9b4f15320794',
  whyA:
    'https://www.figma.com/api/mcp/asset/0a2009e4-3b43-4830-b543-b4a51965cca4',
  whyB:
    'https://www.figma.com/api/mcp/asset/9b23ff18-dc2f-47b2-bab1-1bbd6c3f0c84',
  whyC:
    'https://www.figma.com/api/mcp/asset/087c9be2-a837-470b-8185-96c0e82036c6',
  whyD:
    'https://www.figma.com/api/mcp/asset/575b8cd9-cc1a-47a6-af24-7e51592eaa24',
  featureImageTop:
    'https://www.figma.com/api/mcp/asset/dc1be1bc-355c-44ef-be3c-9b4f15320794',
  featureImageBottom:
    'https://www.figma.com/api/mcp/asset/cf6cba4f-f8e0-4fe6-bbc8-b552ddedaf91',
  testimonial:
    'https://www.figma.com/api/mcp/asset/f76873c9-ba3e-475e-b5b1-2103cbcb11fa',
  school1:
    'https://www.figma.com/api/mcp/asset/090c1beb-bb4b-4a8d-93d7-0464dde068b0',
  school2:
    'https://www.figma.com/api/mcp/asset/ba82b41c-7105-4187-becb-1d353ceabdd1',
  school3:
    'https://www.figma.com/api/mcp/asset/9b62b7ad-342d-4ac0-9f15-456529b18838',
  school4:
    'https://www.figma.com/api/mcp/asset/2836b325-68da-45ad-a273-e68df51512b8',
  school5:
    'https://www.figma.com/api/mcp/asset/5d84b0e1-5739-4a77-820b-3ef31c50a9cb',
  galleryChess:
    'https://www.figma.com/api/mcp/asset/9b6052df-f8e0-4a74-ad55-6880cb51a6dd',
}

const students = [
  figmaAssets.studentA,
  figmaAssets.studentB,
  figmaAssets.studentA,
  figmaAssets.studentB,
]

const whyCards = [
  { image: figmaAssets.whyA, title: 'Creativity' },
  { image: figmaAssets.studentA, title: 'Logical Thinking' },
  { image: figmaAssets.whyC, title: 'Patience' },
  { image: figmaAssets.whyD, title: 'Concentration' },
]

const solutionCards = [
  { image: figmaAssets.galleryChess, title: 'Regular School Sessions' },
  { image: figmaAssets.studentA, title: 'Chess in School(CIS)' },
  { image: figmaAssets.whyA, title: 'Expert Training Programs' },
  { image: figmaAssets.whyD, title: 'Franchise' },
]

const schoolLogos = [
  { src: figmaAssets.school1, alt: 'Apeejay School', className: 'logo-square-sm' },
  { src: figmaAssets.school2, alt: 'Shri Ram Global School', className: 'logo-square' },
  { src: '/sc1.png', alt: 'Kingdom of Kids', className: 'logo-square' },
  { src: '/sc2.png', alt: 'Arlington Christian School', className: 'logo-wide' },
  { src: '/sc3.png', alt: 'Partner school', className: 'logo-wide-sm' },
]

const gallery = [
  figmaAssets.studentA,
  figmaAssets.studentB,
  figmaAssets.whyA,
  figmaAssets.heroBg,
  figmaAssets.studentB,
  figmaAssets.heroBg,
  figmaAssets.whyA,
  figmaAssets.studentA,
  figmaAssets.galleryChess,
]

const marqueeItems = [
  'WORLD BLITZ CHAMPIONSHIPS LIVE',
  'SICILIAN NAJDORF - NEW VIDEO SERIES',
  '1,200 PUZZLES ADDED',
]

const navItems = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About us' },
  { href: '#programs', label: 'Programs' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#events', label: 'Events' },
]

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featureCounts, setFeatureCounts] = useState({
    students: 0,
    rating: 0,
    instructors: 0,
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
    const node = featureNumsRef.current
    if (!node) return undefined

    const targets = {
      students: 4200,
      rating: 98,
      instructors: 150,
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
          instructors: Math.round(targets.instructors * eased),
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
      schools: 100,
      years: 15,
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
    }
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="figma-home">
      <section className="figma-hero">
        <img className="figma-hero-bg" src={figmaAssets.heroBg} alt="" />
        <div className="figma-overlay" />

        <header className="figma-nav">
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
            <img src={figmaAssets.logoIcon} alt="Rohini Chess Academy" />
            <span>Rohini Chess Academy</span>
          </div>
          <nav>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="figma-nav-right">
            <a className="figma-support-link" href="#support">
              Support
            </a>
            <a className="figma-contact-btn" href="tel:+918447992702">
              Contact
            </a>
          </div>
        </header>

        <div
          className={`figma-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
          onClick={closeMobileMenu}
        />
        <aside className={`figma-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="figma-mobile-drawer-head">
            <strong>Menu</strong>
            <button type="button" aria-label="Close menu" onClick={closeMobileMenu}>
              <X size={18} />
            </button>
          </div>
          <nav className="figma-mobile-drawer-links">
            {navItems.map((item) => (
              <a key={`drawer-${item.href}`} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            ))}
            <a href="#support" onClick={closeMobileMenu}>
              Support
            </a>
            <a href="tel:+918447992702" onClick={closeMobileMenu}>
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
        <div className="student-scroll" role="region" aria-label="Student stories">
          <div className="student-grid">
            {students.map((src, idx) => (
              <article key={`${src}-${idx}`}>
                <img src={src} alt="Student" />
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
        <h2>Why Chess For Your Child?</h2>
        <p className="sub">One Board. Six Skills Your Child Carries for Life.</p>
        <div className="why-scroll" role="region" aria-label="Chess benefits">
          <div className="why-grid">
            {whyCards.map((card) => (
              <article key={card.title} className="why-card">
                <img className="why-card-image" src={card.image} alt={card.title} />
                <div className="why-card-shade" />
                <div className="why-card-content">
                  <span className="why-card-icon" aria-hidden="true">
                    <img src="/bulb.png" alt="" />
                  </span>
                  <h3>{card.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque eget et sed
                    nunc netus faucibus.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-section school-row">
        <h3>School Associated With Us</h3>
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
          <h3>
            Master Chess<br />
            With <span className="text-primary">Rohini Chess</span><br />
            Academy.
          </h3>
          <p>
            Accelerate your game with structured lessons, live analysis,
            and personalized training plans designed for every skill
            level.
          </p>
          <a className="start-btn" href="/courses-offered">Start Your Free Trial</a>
          <div className="nums" ref={featureNumsRef}>
            <div className="num-block">
              <strong>{featureCounts.students.toLocaleString()}+</strong>
              <span>Students trained</span>
            </div>
            <div className="num-divider" />
            <div className="num-block">
              <strong>{featureCounts.rating}%</strong>
              <span>Rating improved</span>
            </div>
            <div className="num-divider" />
            <div className="num-block">
              <strong>{featureCounts.instructors}+</strong>
              <span>GM instructors</span>
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
                    <img src="/bulb.png" alt="" />
                  </span>
                  <h3>{card.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque eget et sed
                    nunc netus faucibus.
                  </p>
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

      <section className="figma-section reviews" id="support">
        <h2>Customer Reviews</h2>
        <p className="sub">
          Lorem ipsum dolor sit amet consectetur. Condimentum tortor tortor dictum sed
          natoque urna risus.
        </p>
        <div className="review-row">
          <button className="review-nav review-nav-left" aria-label="Previous reviews">
            ‹
          </button>
          <div className="review-grid">
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
          <button className="review-nav review-nav-right" aria-label="Next reviews">
            ›
          </button>
        </div>
      </section>

      <section className="figma-section testimonial-banner" id="events" aria-label="Chess banner">
        <img className="testimonial-banner-bg" src="/chess background.png" alt="" aria-hidden="true" />
        <div className="testimonial-card">
          <div className="testimonial-card-left">
            <img src={figmaAssets.testimonial} alt="Student testimonial" />
          </div>
          <div className="testimonial-card-right">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-rated">Rated <strong>4.9/5</strong> by 1,200+ Chess Players</p>
            <h3>The coaching sessions are engaging and effective—they've really improved my game!</h3>
            <p className="testimonial-body">
              My coach explained strategies clearly and helped me sharpen my skills. Now I'm winning more games!
            </p>
            <div className="testimonial-avatars">
              <img src={figmaAssets.studentA} alt="Reviewer" />
              <img src={figmaAssets.studentB} alt="Reviewer" />
              <img src={figmaAssets.whyA} alt="Reviewer" />
              <img src={figmaAssets.whyC} alt="Reviewer" />
              <img src={figmaAssets.whyD} alt="Reviewer" />
            </div>
          </div>
        </div>
      </section>

      <section className="figma-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {gallery.map((src, idx) => (
            <img key={`${src}-${idx}`} src={src} alt="Gallery" />
          ))}
        </div>
      </section>

      <footer className="figma-footer">
        <div className="figma-footer-inner">
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-row">
              <img src={figmaAssets.logoIcon} alt="Rohini Chess Academy logo" />
              <span className="footer-brand-name">Rohini Chess<br />Academy</span>
            </div>
            <p className="footer-brand-desc">
              Lorem ipsum dolor sit amet consectetur. Duis mi commodo ultricies aenean in turpis diam facilisi. Orci quam tincidunt elit eleifend non tellus ut. Tortor mollis sapien sed arcu.
            </p>
          </div>
          <div className="footer-col footer-col-nav">
            <h4>EXPLORE PAGES</h4>
            <a href="/">Home</a>
            <a href="#about">About Us</a>
            <a href="#programs">Programs</a>
            <a href="#achievements">Achievements</a>
            <a href="#events">Events</a>
          </div>
          <div className="footer-col footer-col-contact">
            <h4>CONTACT US</h4>
            <a href="tel:+15412307066">+1-5412307066</a>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
            <a href="#support">Help &amp; Contact</a>
            <a href="#faq">Faq</a>
          </div>
          <div className="footer-col footer-col-benefits">
            <h4>EXCLUSIVE BENEFITS</h4>
            <form className="footer-email-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter Email Here" aria-label="Enter email" />
              <button type="submit" aria-label="Subscribe">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </form>
            <p className="footer-benefits-text">
              Apply for our free membership to receive exclusive deals, news, and events.
            </p>
            <p className="footer-social-label">Follow Us With</p>
            <div className="footer-social-icons">
              <a href="#" aria-label="X / Twitter" className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="figma-footer-bottom">
          <p>© 2026 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
