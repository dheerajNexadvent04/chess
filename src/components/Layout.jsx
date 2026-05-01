import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contactDetails, navLinks } from '../data/siteContent'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about-us'
  const supportLink = navLinks.find((link) => link.label === 'SUPPORT')
  const primaryNavLinks = navLinks.filter((link) => link.label !== 'SUPPORT')

  if (isHomePage) {
    return <Outlet />
  }

  return (
    <div className="site">
      <header className={`header ${isAboutPage ? 'about-header' : ''}`}>
        <div className="header-main">
          <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Rohini Chess Academy logo" />
          </NavLink>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((state) => !state)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {primaryNavLinks.map((link) => (
              <a
                key={link.label}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                href={link.to}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {isAboutPage && supportLink ? (
              <a
                className="nav-link about-mobile-only"
                href={supportLink.to}
                onClick={() => setMenuOpen(false)}
              >
                {supportLink.label}
              </a>
            ) : null}
            {isAboutPage ? (
              <a
                className="nav-link about-mobile-only about-mobile-contact"
                href={`tel:${contactDetails.phone}`}
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </a>
            ) : null}
          </nav>

          <div className="header-actions">
            {isAboutPage && supportLink ? (
              <a
                className="about-support-link"
                href={supportLink.to}
                onClick={() => setMenuOpen(false)}
              >
                {supportLink.label}
              </a>
            ) : null}
            <a className="contact-btn" href={`tel:${contactDetails.phone}`}>
              CONTACT
            </a>
          </div>
        </div>
      </header>

      <main className="page">
        <Outlet />
      </main>

      {isAboutPage ? (
        <footer className="figma-footer">
          <div className="figma-footer-inner">
            <div className="footer-col footer-col-brand">
              <div className="footer-brand-row">
                <img src="/logo.png" alt="Rohini Chess Academy logo" />
                <span className="footer-brand-name">
                  Rohini Chess
                  <br />
                  Academy
                </span>
              </div>
              <p className="footer-brand-desc">
                Lorem ipsum dolor sit amet consectetur. Duis mi commodo ultricies aenean
                in turpis diam facilisi. Orci quam tincidunt elit eleifend non tellus ut.
                Tortor mollis sapien sed arcu.
              </p>
            </div>
            <div className="footer-col footer-col-nav">
              <h4>EXPLORE PAGES</h4>
              <a href="/">Home</a>
              <a href="/about-us">About Us</a>
              <a href="/#programs">Programs</a>
              <a href="/#achievements">Achievements</a>
              <a href="/#events">Events</a>
            </div>
            <div className="footer-col footer-col-contact">
              <h4>CONTACT US</h4>
              <a href="tel:+15412307066">+1-5412307066</a>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
              <a href="/#support">Help &amp; Contact</a>
              <a href="#faq">Faq</a>
            </div>
            <div className="footer-col footer-col-benefits">
              <h4>EXCLUSIVE BENEFITS</h4>
              <form className="footer-email-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter Email Here" aria-label="Enter email" />
                <button type="submit" aria-label="Subscribe">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
              <p className="footer-benefits-text">
                Apply for our free membership to receive exclusive deals, news, and events.
              </p>
              <p className="footer-social-label">Follow Us With</p>
              <div className="footer-social-icons">
                <a href="#" aria-label="X / Twitter" className="footer-social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="footer-social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="footer-social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="footer-social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="figma-footer-bottom">
            <p>© 2026 All Rights Reserved</p>
          </div>
        </footer>
      ) : (
        <footer className="footer">
          <div className="footer-brand">
            <img src="/logo.png" alt="Rohini Chess Academy logo" />
            <p>No. 1 Chess Academy in Rohini</p>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </div>
          <div className="footer-links">
            <NavLink to="/about-us">About</NavLink>
            <NavLink to="/partnered-schools">Partnered Schools</NavLink>
            <NavLink to="/coaches">Coaches</NavLink>
            <NavLink to="/courses-offered">Courses</NavLink>
            <a href="https://sckoolchess.com" target="_blank" rel="noreferrer">
              SckoolChess
            </a>
          </div>
          <p className="footer-copy">
            Copyright {new Date().getFullYear()} Rohini Chess Academy. All rights
            reserved.
          </p>
        </footer>
      )}
    </div>
  )
}
