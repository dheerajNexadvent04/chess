import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contactDetails } from '../data/siteContent'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvBydd6I0jpFWm4UPgRIUrJkyttZwI8gC-FSV5WMVzFkg1hJdJ1n041jF80eIemf4h/exec'

export function Footer() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(e.target)
    formData.append('type', 'newsletter')

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: new URLSearchParams(formData),
      mode: 'no-cors'
    })
      .then(() => {
        setLoading(false)
        setSuccess(true)
        e.target.reset()
        setTimeout(() => setSuccess(false), 5000)
      })
      .catch((error) => {
        console.error('Error!', error.message)
        setLoading(false)
      })
  }

  return (
    <footer className="figma-footer">
      <div className="figma-footer-inner">
        <div className="footer-col footer-col-brand">
          <div className="footer-brand-row">
            <img src="/logonewbg.png" alt="SckoolChess logo" />
          </div>
          <p className="footer-brand-desc">
            We teach children in Rohini, Dwarka, Gurgaon, Vaishali, and across Delhi NCR to think three moves ahead - on the board and in life. From first piece to first trophy, we train it all.
          </p>
        </div>
        <div className="footer-col footer-col-nav">
          <h4>EXPLORE PAGES</h4>
          <Link to="/">Home</Link>
          <Link to="/about-us">Company Profile</Link>
          <Link to="/partners">Partner School</Link>
          <Link to="/coaches">Coaches</Link>
          <Link to="/curriculum">Curriculum</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/tournaments">Tournaments</Link>
          <Link to="/market-area">Market Area</Link>
          <Link to="/career">Careers</Link>
          <Link to="/book-class?ref=Footer+Nav">Book Online Class</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="footer-col footer-col-contact">
          <h4>CONTACT US</h4>
          <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <Link to="/contact-us?ref=Footer+Nav">Help &amp; Contact</Link>
        </div>
        <div className="footer-col footer-col-benefits">
          <h4>EXCLUSIVE BENEFITS</h4>
          <form className="footer-email-form" onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="Enter Email Here" aria-label="Enter email" required />
            <button type="submit" aria-label="Subscribe" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
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
          {success && <p className="footer-success-msg" style={{color: '#4ade80', fontSize: '13px', marginTop: '8px', marginBottom: '-8px'}}>Subscribed successfully!</p>}
          <p className="footer-benefits-text">
            Apply for our free membership to receive exclusive deals, news, and events.
          </p>
          <p className="footer-social-label">Follow Us With</p>
          <div className="footer-social-icons">
            <a href="https://x.com/sckoolchess" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="footer-social-icon">
              <img src="/twitterlogo.png" alt="X / Twitter" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
            </a>
            <a href="https://www.facebook.com/SckoolChess/videos" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon">
              <img src="/facebooklogo.png" alt="Facebook" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
            </a>
            <a href="https://www.linkedin.com/company/sckoolchess/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-icon">
              <img src="/linkedinlogo.png" alt="LinkedIn" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
            </a>
            <a href="https://www.instagram.com/sckoolchess?igsh=bzMwaTB0YWw2d2Iz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon">
              <img src="/instagramlogo.png" alt="Instagram" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
            </a>
            <a href="https://www.youtube.com/@sckoolchess" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-icon">
              <img src="/youtubelogo.png" alt="YouTube" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
            </a>
          </div>
        </div>
      </div>
      <div className="figma-footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  )
}
