import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contactDetails, navLinks } from '../data/siteContent'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  if (isHomePage) {
    return <Outlet />
  }

  return (
    <div className="site">
      <header className="header">
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="nav-link"
                href={link.to}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="sckool-link"
              href="https://sckoolchess.com"
              target="_blank"
              rel="noreferrer"
            >
              SckoolChess
            </a>
            <a className="contact-btn" href={`tel:${contactDetails.phone}`}>
              CONTACT
            </a>
          </div>
        </div>
      </header>

      <main className="page">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/logo.png" alt="Rohini Chess Academy logo" />
          <p>No. 1 Chess Academy in Rohini</p>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
        <div className="footer-links">
          <a href="/#about">About</a>
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
    </div>
  )
}
