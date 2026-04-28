import { CalendarDays, GraduationCap, Menu, Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'

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

const schoolLogos = [
  { src: figmaAssets.school1, alt: 'Apeejay School', className: 'logo-square-sm' },
  { src: figmaAssets.school2, alt: 'Shri Ram Global School', className: 'logo-square' },
  { src: '/sc1.png', alt: 'Kingdom of Kids', className: 'logo-square' },
  { src: '/sc2.png', alt: 'Arlington Christian School', className: 'logo-wide' },
  { src: figmaAssets.school5, alt: 'Windy Hill School', className: 'logo-square' },
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

  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    const { body } = document
    const prevOverflow = body.style.overflow
    body.style.overflow = 'hidden'
    return () => {
      body.style.overflow = prevOverflow
    }
  }, [mobileMenuOpen])

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
          <div className="nums">
            <div className="num-block">
              <strong>4,200+</strong>
              <span>Students trained</span>
            </div>
            <div className="num-divider" />
            <div className="num-block">
              <strong>98%</strong>
              <span>Rating improved</span>
            </div>
            <div className="num-divider" />
            <div className="num-block">
              <strong>150+</strong>
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
          </article>
          <article className="feature-image-card has-overlay">
            <img src={figmaAssets.featureImageTop} alt="Student analyzing board" />
            <div className="image-overlay-text">Tactical puzzles · 10,000+</div>
          </article>
        </div>
      </section>

      <section className="figma-section metrics" id="achievements">
        <h2>Key Metrics</h2>
        <p className="sub">One Board. Six Skills Your Child Carries for Life.</p>
        <div className="metric-grid">
          <article>
            <Users size={20} />
            <strong>5000+</strong>
            <span>Number of Students</span>
          </article>
          <article>
            <GraduationCap size={20} />
            <strong>100+</strong>
            <span>Number of Schools</span>
          </article>
          <article>
            <CalendarDays size={20} />
            <strong>15+</strong>
            <span>Number of Years</span>
          </article>
        </div>
      </section>

      <section className="figma-section reviews" id="support">
        <h2>Customer Reviews</h2>
        <p className="sub">
          Lorem ipsum dolor sit amet consectetur. Condimentum tortor tortor dictum sed
          natoque urna risus.
        </p>
        <div className="review-grid">
          <article>
            <span className="stars">?????</span>
            <h4>Good Style of Edu</h4>
            <p>
              Honored to be featured in Voyage L A for their Inspiring Stories series.
              We talked about how Goldenbird Marketing came to be what it is today
              through a little Q and A.
            </p>
            <b>- Joanna A.</b>
          </article>
          <article>
            <span className="stars">?????</span>
            <h4>Loved It!</h4>
            <p>
              Honored to be featured in Voyage L A for their Inspiring Stories series.
              We talked about how Goldenbird Marketing came to be what it is today
              through a little Q and A.
            </p>
            <b>- Brenda</b>
          </article>
          <article>
            <span className="stars">?????</span>
            <h4>Highly Recommend</h4>
            <p>
              Honored to be featured in Voyage L A for their Inspiring Stories series.
              We talked about how Goldenbird Marketing came to be what it is today
              through a little Q and A.
            </p>
            <b>- Jessie</b>
          </article>
        </div>
      </section>

      <section className="figma-section testimonial" id="events">
        <img src={figmaAssets.testimonial} alt="Student story" />
        <div>
          <p className="label">Real Story</p>
          <h3>
            The coaching sessions are engaging and effective - they've really improved
            my game!
          </h3>
          <p className="body">
            My coach explained strategies clearly and helped me sharpen my skills. Now
            I'm winning more games!
          </p>
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
        <div>
          <img src={figmaAssets.logoIcon} alt="Rohini Chess Academy logo" />
          <p>Rohini Chess Academy</p>
        </div>
        <div>
          <h4>Explore Pages</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Programs</p>
          <p>Achievements</p>
          <p>Events</p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>+91-8447992702</p>
          <p>contact@rohinichessacademy.com</p>
          <p>Help & Contact</p>
        </div>
      </footer>
    </div>
  )
}
