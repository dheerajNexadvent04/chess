import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Trophy, Calendar, MapPin, X, User,
  Award, Star, Shield, Users, ChevronRight, Zap
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './TournamentPage.css'

/* ─── Data ─── */
const TOP3 = [
  {
    rank: 2, name: 'Satyam Prakash',
    score: '6.5 / 7', prize: 'Runner-up',
    medal: 'silver',
  },
  {
    rank: 1, name: 'Samarth Gaba',
    score: '6.5 / 7 (Better Buchholz)', prize: '₹3,100 + Trophy',
    rating: 'FIDE 1392', medal: 'gold',
  },
  {
    rank: 3, name: 'Love Jindal',
    score: '6.0 / 7', prize: 'Second Runner-up',
    img: '/c4.jpg', note: 'Now SckoolChess Coach', medal: 'bronze',
  },
]

const CATEGORIES = [
  { label: 'Under 7',               name: 'Akshat Bansal',   icon: Star },
  { label: 'Under 9',               name: 'Arnav Kakkar',    icon: Star,   img: '/A2.jpeg' },
  { label: 'Under 12',              name: 'Daevik Wadhwan',  icon: Star },
  { label: 'Under 15',              name: 'Sarthal Deshwal', icon: Star },
  { label: 'Best Girl',             name: 'Riya Rathi',      icon: Award },
  { label: 'Best Veteran',          name: 'Mr. H. S. Verma', icon: Shield },
  { label: 'Best SckoolChess Student', name: 'Vatsal Singla', icon: Award, img: '/A4.jpeg' },
  { label: 'Visually Challenged',   name: 'Sourabh Mishra',  icon: Award },
  { label: 'Specially Abled',       name: 'Sonu Bist',       icon: Award },
  { label: 'Youngest Child Award',  name: 'Satakshi',        icon: Star },
]

const GALLERY = [
  { src: '/t1.jpg', caption: 'Tournament Hall Action',        span: 'wide' },
  { src: '/t2.jpg', caption: 'Prize Distribution Ceremony',  span: 'tall' },
  { src: '/t3.jpg', caption: 'Young Champions',               span: '' },
  { src: '/t4.jpg', caption: 'Intense Match Focus',           span: '' },
  { src: '/t5.jpg', caption: 'Team Celebrations',             span: '' },
  { src: '/t6.jpg', caption: 'Dignitaries & Organizers',     span: '' },
  { src: '/t7.jpg', caption: 'Championship Trophy',           span: '' },
]

const MEDAL_CFG = {
  gold:   { bg: 'linear-gradient(145deg,#fbbf24,#d97706)', shadow: 'rgba(251,191,36,0.45)', txt: '#7c2d12' },
  silver: { bg: 'linear-gradient(145deg,#e2e8f0,#94a3b8)', shadow: 'rgba(148,163,184,0.5)', txt: '#1e293b' },
  bronze: { bg: 'linear-gradient(145deg,#fdba74,#ea580c)', shadow: 'rgba(234,88,12,0.45)',  txt: '#fff'    },
}

/* ─── Component ─── */
export function TournamentPage() {
  useScrollReveal()
  const [lb, setLb] = useState(null)

  useEffect(() => {
    document.title = 'SckoolChess Tournaments | Chess Competitions Delhi NCR'
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', 'Explore chess tournaments organised by SckoolChess in Rohini and Delhi NCR. FIDE-rated, school-level and open chess competitions for all ages and skill levels.')
    const esc = (e) => { if (e.key === 'Escape') setLb(null) }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])

  // Dynamic interactive scroll wave animation
  useEffect(() => {
    const heroWave = document.querySelector('.t2-hero__wave path')
    const podiumSection = document.querySelector('.t2-podium-section')
    const topWave = document.querySelector('.t2-wave-top path')
    const botWave = document.querySelector('.t2-wave-bot path')

    const handleScroll = () => {
      // 1. Hero Bottom Wave & Parallax Exit
      const scrollTop = window.scrollY
      if (heroWave) {
        const heroThreshold = 500
        const progress = Math.min(1, scrollTop / heroThreshold)
        // cpY starts at 110 (gentle roundness) and goes to 70 (slightly deeper curve) on scroll down
        const cpY = 110 - (progress * 40)
        heroWave.setAttribute('d', `M0,180 C360,${cpY} 1080,${cpY} 1440,180 L1440,180 L0,180 Z`)
      }

      const heroPhoto = document.querySelector('.t2-hero__photo')
      const heroContent = document.querySelector('.t2-hero__content')
      if (heroPhoto) {
        heroPhoto.style.transform = `translateY(${scrollTop * 0.35}px)`
      }
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollTop * 0.15}px)`
        heroContent.style.opacity = Math.max(0, 1 - (scrollTop / 550))
      }

      // 2. Podium Section Waves
      if (podiumSection && (topWave || botWave)) {
        const rect = podiumSection.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const totalHeight = rect.height + viewportHeight
        const scrolled = viewportHeight - rect.top
        const progress = Math.max(0, Math.min(1, scrolled / totalHeight))

        // Top Wave (curves down): cpY starts at 56 (original depth) and goes to 75 (deeper downward curve)
        if (topWave) {
          const cpYTop = 56 + (progress * 19)
          topWave.setAttribute('d', `M0,0 C480,${cpYTop} 960,${cpYTop} 1440,0 L1440,0 L0,0 Z`)
        }

        // Bottom Wave (curves up): cpY starts at 24 (original depth) and goes to 10 (deeper upward curve)
        if (botWave) {
          const cpYBot = 24 - (progress * 14)
          botWave.setAttribute('d', `M0,80 C480,${cpYBot} 960,${cpYBot} 1440,80 L1440,80 L0,80 Z`)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    // Initial run
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="t2-page">

      {/* ════════════ HERO ════════════ */}
      <header className="t2-hero">
        <div className="t2-hero__photo" style={{ backgroundImage: "url('/tournamnent.webp')" }} />
        <div className="t2-hero__scrim" />

        {/* floating chess squares */}
        <div className="t2-hero__chessboard" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
        </div>

        <div className="t2-hero__content">
          <span className="t2-eyebrow"><Zap size={12} /> SckoolChess Championships</span>
          <h1>Tournaments<br />&amp; Events</h1>
          <p>Competitive chess events for students, schools and clubs across Rohini, Pitampura, Noida and Delhi NCR.</p>

          <div className="t2-hero__chips">
            <span><Calendar size={13} /> 19 – 20 Oct 2019</span>
            <span><MapPin size={13} /> Rohini, New Delhi</span>
            <span><Users size={13} /> 114 Players</span>
            <span><Trophy size={13} /> ₹25,500 Prize Pool</span>
          </div>
        </div>

        {/* bottom wave */}
        <svg className="t2-hero__wave" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path d="M0,180 C360,110 1080,110 1440,180 L1440,180 L0,180 Z" fill="#f4f6fb" />
        </svg>
      </header>

      {/* ════════════ EVENT OVERVIEW ════════════ */}
      <section className="t2-overview">
        <div className="t2-wrap">

          {/* pill label */}
          <p className="t2-section-label">Featured Event</p>
          <h2 className="t2-section-title reveal fade-up">
            SckoolChess Diwali Bonanza<br />Open Chess Tournament
          </h2>

          <div className="t2-overview__body">

            {/* — Narrative text — */}
            <div className="t2-overview__prose reveal reveal-3d">
              <div className="t2-overview__meta">
                <span><Calendar size={14} strokeWidth={2} /> 19 – 20 October 2019</span>
                <span><MapPin size={14} strokeWidth={2} /> Bansal Bhawan, Sector-16, Rohini, New Delhi</span>
              </div>

              <p>
                The SckoolChess Diwali Bonanza Open Chess Tournament was held at Bansal Bhawan, Sector-16, Rohini, New Delhi.
                A total of <strong>114 players</strong> participated, including <strong>17 internationally FIDE-rated players</strong>,
                across two days with a time control of 25 minutes + 5-second increment.
                The total prize fund was <strong>Rs. 25,500</strong>, distributed across <strong>7 Swiss System rounds</strong>.
              </p>
              <p>
                The 1st prize of <strong>Rs. 3,100 + Trophy</strong> was awarded to <strong>Mr. Samarth Gaba</strong> (FIDE 1392).
                Satyam Prakash secured 2nd position and Love Jindal secured 3rd.
                Both Samarth and Satyam scored 6.5/7 — Samarth won on superior Buchholz tie-break.
              </p>
              <p>
                The prize distribution ceremony was presided over by <strong>Mr. M. K. Bansal</strong> (Owner of Bansal Bhawan),
                our coaches Mr. Anil Shivpuri, Mr. Hamid Hasan, Mr. Manohar Lal, Mr. Vasudeven, Mr. Sunil Sharma,
                Dr. Shilpi Jain and <strong>Mr. Sachin Jain</strong> (Tournament Director).
              </p>
              <p className="t2-italic">
                It was a memorable event — students got a great opportunity to display their skills and demonstrated that
                chess is a game where children learn to be responsible for their actions.
              </p>
            </div>

            {/* — Stats strip — */}
            <div className="t2-overview__stats reveal reveal-3d">
              {[
                { v: '114',     l: 'Players',          icon: Users   },
                { v: '17',      l: 'FIDE Rated',        icon: Star    },
                { v: '7',       l: 'Swiss Rounds',      icon: Shield  },
                { v: '₹25,500', l: 'Prize Fund',        icon: Trophy  },
              ].map(({ v, l, icon: Icon }) => (
                <div className="t2-stat" key={l}>
                  <div className="t2-stat__icon"><Icon size={18} strokeWidth={1.8} /></div>
                  <strong>{v}</strong>
                  <span>{l}</span>
                </div>
              ))}

              <div className="t2-overview__img">
                <img src="/t2.jpg" alt="Prize distribution ceremony" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════ PODIUM ════════════ */}
      <section className="t2-podium-section">
        {/* dark wave top */}
        <svg className="t2-wave-top" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,0 C480,56 960,56 1440,0 L1440,0 L0,0 Z" fill="#f8fafc" />
        </svg>

        <div className="t2-wrap">
          <p className="t2-section-label t2-section-label--light">Overall Standings</p>
          <h2 className="t2-section-title t2-section-title--light reveal fade-up">Tournament Winners</h2>
          <p className="t2-section-sub t2-section-sub--light reveal fade-up">
            Top performers across 7 gruelling Swiss rounds of the Diwali Bonanza 2019.
          </p>

          {/* Podium arena */}
          <div className="t2-podium">

            {/* 2nd — Silver */}
            <div className="t2-slot t2-slot--silver reveal reveal-3d">
              <div className="t2-slot__card">
                <div className="t2-slot__avatar t2-slot__avatar--plain">
                  <User size={26} strokeWidth={1.5} />
                </div>
                <div className="t2-medal" style={{ background: MEDAL_CFG.silver.bg, boxShadow: `0 6px 20px ${MEDAL_CFG.silver.shadow}` }}>
                  <span style={{ color: MEDAL_CFG.silver.txt }}>2</span>
                </div>
                <h3>{TOP3[0].name}</h3>
                <p className="t2-slot__score">{TOP3[0].score}</p>
                <p className="t2-slot__prize">{TOP3[0].prize}</p>
              </div>
              <div className="t2-platform t2-platform--silver">2nd Place</div>
            </div>

            {/* 1st — Gold (center, tallest) */}
            <div className="t2-slot t2-slot--gold reveal reveal-3d">
              <div className="t2-slot__trophy"><Trophy size={42} strokeWidth={1.3} /></div>
              <div className="t2-slot__card t2-slot__card--gold">
                <div className="t2-slot__avatar t2-slot__avatar--gold">
                  <User size={30} strokeWidth={1.5} />
                </div>
                <div className="t2-medal" style={{ background: MEDAL_CFG.gold.bg, boxShadow: `0 6px 20px ${MEDAL_CFG.gold.shadow}` }}>
                  <span style={{ color: MEDAL_CFG.gold.txt }}>1</span>
                </div>
                <h3>{TOP3[1].name}</h3>
                <span className="t2-fide-pill">{TOP3[1].rating}</span>
                <p className="t2-slot__score">{TOP3[1].score}</p>
                <p className="t2-slot__prize t2-slot__prize--gold">{TOP3[1].prize}</p>
              </div>
              <div className="t2-platform t2-platform--gold">1st Place</div>
            </div>

            {/* 3rd — Bronze */}
            <div className="t2-slot t2-slot--bronze reveal reveal-3d">
              <div className="t2-slot__card">
                <div className="t2-slot__avatar">
                  <img src="/c4.jpg" alt="Love Jindal" />
                </div>
                <div className="t2-medal" style={{ background: MEDAL_CFG.bronze.bg, boxShadow: `0 6px 20px ${MEDAL_CFG.bronze.shadow}` }}>
                  <span style={{ color: MEDAL_CFG.bronze.txt }}>3</span>
                </div>
                <h3>{TOP3[2].name}</h3>
                <span className="t2-coach-pill">{TOP3[2].note}</span>
                <p className="t2-slot__score">{TOP3[2].score}</p>
                <p className="t2-slot__prize">{TOP3[2].prize}</p>
              </div>
              <div className="t2-platform t2-platform--bronze">3rd Place</div>
            </div>

          </div>
        </div>

        {/* light wave bottom */}
        <svg className="t2-wave-bot" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 C480,24 960,24 1440,80 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* ════════════ CATEGORY WINNERS ════════════ */}
      <section className="t2-cats">
        <div className="t2-wrap">
          <p className="t2-section-label">Special Recognition</p>
          <h2 className="t2-section-title reveal fade-up">Category Award Winners</h2>
          <p className="t2-section-sub reveal fade-up">
            Special awards across age brackets and categories — celebrating every player's achievement.
          </p>

          <div className="t2-cats__grid">
            {CATEGORIES.map((c, i) => {
              const Icon = c.icon
              return (
                <div className="t2-cat-card reveal reveal-3d" key={i} style={{ '--d': `${i * 0.04}s` }}>
                  <div className="t2-cat-card__num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="t2-cat-card__avatar">
                    {c.img
                      ? <img src={c.img} alt={c.name} />
                      : <Icon size={18} strokeWidth={1.8} />
                    }
                  </div>
                  <div className="t2-cat-card__body">
                    <span>{c.label}</span>
                    <strong>{c.name}</strong>
                  </div>
                  <Trophy size={14} className="t2-cat-card__trophy" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════ GALLERY ════════════ */}
      <section className="t2-gallery">
        <div className="t2-wrap">
          <p className="t2-section-label">Gallery</p>
          <h2 className="t2-section-title reveal fade-up">Moments from the Championship</h2>
          <p className="t2-section-sub reveal fade-up">
            Capturing the focus, dedication and proud moments of Diwali Bonanza 2019.
          </p>

          <div className="t2-gallery__mosaic">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`t2-gimg t2-gimg--${img.span || 'sm'} reveal reveal-3d`}
                onClick={() => setLb(img)}
              >
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="t2-gimg__cap"><span>{img.caption}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ UPCOMING + CTA ════════════ */}
      <section className="t2-bottom">
        <div className="t2-wrap t2-bottom__grid">

          {/* Upcoming card */}
          <div className="t2-upcoming reveal reveal-3d">
            <span className="t2-upcoming__tag"><Zap size={11} /> Upcoming</span>
            <h3>Stay Tuned for Our Next Tournament</h3>
            <p>
              New FIDE-rated and school-level events are being planned across Rohini, Pitampura,
              Noida, Gurgaon and Delhi NCR. Register your interest to be notified first.
            </p>
            <Link to="/contact-us" className="t2-btn-white">Register Interest <ChevronRight size={15} /></Link>
          </div>

          {/* CTA card */}
          <div className="t2-cta reveal reveal-3d">
            <Trophy size={36} className="t2-cta__icon" />
            <h3>Ready to Train for the Next Championship?</h3>
            <p>SckoolChess provides DCA-affiliated training, FIDE guidance and extensive tournament practice.</p>
            <div className="t2-cta__btns">
              <Link to="/book-class" className="t2-btn-orange">Book Free Trial</Link>
              <Link to="/contact-us" className="t2-btn-ghost">Enquire Now</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════ LIGHTBOX ════════════ */}
      {lb && (
        <div className="t2-lb" onClick={() => setLb(null)}>
          <div className="t2-lb__box" onClick={e => e.stopPropagation()}>
            <button className="t2-lb__close" onClick={() => setLb(null)}><X size={18} /></button>
            <img src={lb.src} alt={lb.caption} />
            <p>{lb.caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}
