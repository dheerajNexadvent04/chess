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
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact-us' }
]

const cityRow1 = ['Rohini', 'Pitampura', 'Paschim Vihar', 'Shalimar Bagh', 'Dwarka', 'Ashok Vihar']
const cityRow2 = ['Punjabi Bagh', 'Sonipat', 'Faridabad', 'Indirapuram', 'Vaishali', 'Kaushambi']
const cityRow3 = ['Gurgaon', 'Noida', 'Navi Mumbai', 'Vasundhara', 'Ghaziabad']

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [pausedRows, setPausedRows] = useState({})
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about-us'
  const usesLightHeader = ['/about-us', '/contact-us', '/partners', '/partnered-schools', '/coaches', '/career', '/curriculum', '/book-class', '/achievements', '/tournaments', '/blog', '/market-area'].includes(location.pathname) || location.pathname.startsWith('/blog/')
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
            onClick={() => setMenuOpen(false)}
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
              <a href="https://nepzo.in/" target="_blank" rel="noopener noreferrer">
                <img src="/nepzobg.png" alt="Nepzo Logo" className="header-partner-logo" />
              </a>
              <NavLink 
                className="nav-link book-class-highlight" 
                to="/book-class" 
                onClick={() => setMenuOpen(false)}
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
              <div className="drawer-header-logos">
                <Link to="/" onClick={() => setMenuOpen(false)} className="drawer-brand-logo-link">
                  <img src="/logonewbg.png" alt="SckoolChess logo" className="drawer-brand-logo" />
                </Link>
                <a href="https://nepzo.in/" target="_blank" rel="noopener noreferrer" className="drawer-nepzo-link" onClick={() => setMenuOpen(false)}>
                  <img src="/nepzobg.png" alt="Nepzo Logo" className="drawer-nepzo-logo" />
                </a>
              </div>
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
                      return isActive ? 'active' : ''
                    }}
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </nav>
          </aside>
        </>
      ) : null}

      <main className="page">
        <Outlet />
      </main>

      {/* ── Location Tags Strip ── */}
      <section className="ma-tags-section">
        <div className="ma-tags-inner">
          <p className="ma-tags-label">Chess Classes Near You</p>
          
          {/* Desktop view (normal wrap) */}
          <div className="ma-tags-desktop-wrap">
            {[...cityRow1, ...cityRow2, ...cityRow3].map((loc) => (
              <Link key={loc} to="/book-class" className="ma-tag">{loc}</Link>
            ))}
          </div>

          {/* Mobile view (scrolling marquee rows) */}
          <div className="ma-tags-mobile-marquee">
            {[cityRow1, cityRow2, cityRow3].map((row, idx) => {
              const directionClass = idx % 2 === 0 ? 'row-left' : 'row-right';
              const isPaused = !!pausedRows[idx];
              return (
                <div
                  key={idx}
                  className={`ma-tags-marquee-row ${directionClass} ${isPaused ? 'is-paused' : ''}`}
                  onMouseEnter={() => setPausedRows(prev => ({ ...prev, [idx]: true }))}
                  onMouseLeave={() => setPausedRows(prev => ({ ...prev, [idx]: false }))}
                  onClick={() => setPausedRows(prev => ({ ...prev, [idx]: !prev[idx] }))}
                  onTouchStart={() => setPausedRows(prev => ({ ...prev, [idx]: !prev[idx] }))}
                >
                  <div className="ma-tags-marquee-track">
                    <div className="ma-tags-marquee-group">
                      {row.map((loc) => (
                        <Link key={loc} to="/book-class" className="ma-tag">{loc}</Link>
                      ))}
                    </div>
                    <div className="ma-tags-marquee-group" aria-hidden="true">
                      {row.map((loc) => (
                        <Link key={`${loc}-dup`} to="/book-class" className="ma-tag">{loc}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <UnifiedPopupModal />
    </div>
  )
}
