import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { contactDetails, navLinks } from '../data/siteContent'
import { Footer } from './Footer'
import { UnifiedPopupModal } from './UnifiedPopupModal'

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

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about-us'
  const usesLightHeader = ['/about-us', '/contact-us', '/partners', '/partnered-schools', '/coaches', '/career', '/curriculum', '/book-class', '/achievements', '/tournaments', '/blog', '/market-area', '/nepzo', '/nepzo-program'].includes(location.pathname) || location.pathname.startsWith('/blog/')
  const supportLink = navLinks.find((link) => link.label === 'SUPPORT')
  const primaryNavLinks = navLinks.filter((link) => link.label !== 'SUPPORT')

  useEffect(() => {
    if (!menuOpen || !usesLightHeader) return undefined

    const { body } = document
    const prevOverflow = body.style.overflow
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = prevOverflow
    }
  }, [usesLightHeader, menuOpen])

  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (isHomePage) {
    return <Outlet />
  }

  return (
    <div className="site">
      <header className={`header ${usesLightHeader ? 'about-header' : ''} ${headerScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-main">
          <Link 
            to="/book-class" 
            className="header-mobile-book-btn" 
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.dispatchEvent(new CustomEvent('open-custom-modal', {
                detail: { type: 'booking', section: 'Mobile Header' }
              }));
            }}
          >
            Book Online Class
          </Link>
          <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
            <img src="/logonewbg.png" alt="SckoolChess logo" />
          </NavLink>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((state) => !state)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''} ${usesLightHeader ? 'about-desktop-nav' : ''}`}>
            {primaryNavLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${link.to === '/book-class' ? 'book-class-highlight' : ''}`.trim()}
                to={link.to}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {usesLightHeader && supportLink ? (
              <a
                className="nav-link about-mobile-only"
                href={supportLink.to}
                onClick={() => setMenuOpen(false)}
              >
                {supportLink.label}
              </a>
            ) : null}
            {usesLightHeader ? (
              <a
                className="nav-link about-mobile-only about-mobile-contact"
                href={`tel:${contactDetails.phone}`}
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </a>
            ) : null}
          </nav>

          <div className="header-actions-wrapper">
            <div className="header-actions">
              {usesLightHeader && supportLink ? (
                <a
                  className="about-support-link"
                  href={supportLink.to}
                  onClick={() => setMenuOpen(false)}
                >
                  {supportLink.label}
                </a>
              ) : null}
              <Link to="/nepzo-program">
                <img src="/nepzobg.png" alt="Nepzo Logo" className="header-partner-logo" />
              </Link>
              <NavLink 
                className="nav-link book-class-highlight" 
                to="/book-class" 
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-custom-modal', {
                    detail: { type: 'booking', section: 'Desktop Header' }
                  }));
                }}
              >
                BOOK ONLINE CLASS
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      {usesLightHeader ? (
        <>
          <div
            className={`about-drawer-backdrop ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(false)}
          />
          <aside className={`about-mobile-drawer ${menuOpen ? 'open' : ''}`}>
            <div className="about-mobile-drawer-head">
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <nav className="about-mobile-drawer-links">
              {drawerLinks.map((link) => {
                const isBookClass = link.to === '/book-class'
                return (
                  <NavLink 
                    key={`about-drawer-${link.label}`} 
                    to={link.to} 
                    onClick={(e) => {
                      setMenuOpen(false)
                      if (isBookClass) {
                        e.preventDefault()
                        window.dispatchEvent(new CustomEvent('open-custom-modal', {
                          detail: { type: 'booking', section: 'Mobile Drawer' }
                        }))
                      }
                    }}
                    className={({ isActive }) => {
                      return `${isActive ? 'active' : ''} ${isBookClass ? 'book-class-highlight' : ''}`.trim()
                    }}
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </nav>
            <div className="about-mobile-drawer-footer">
              <Link to="/nepzo-program" onClick={() => setMenuOpen(false)} className="drawer-nepzo-link">
                <img src="/nepzobg.png" alt="Nepzo Logo" className="drawer-nepzo-logo" />
              </Link>
            </div>
          </aside>
        </>
      ) : null}

      <main className="page">
        <Outlet />
      </main>

      <Footer />
      <UnifiedPopupModal />
    </div>
  )
}
