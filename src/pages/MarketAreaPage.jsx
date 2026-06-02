import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Phone, Globe } from 'lucide-react'

const serviceAreas = [
  {
    city: 'Rohini',
    desc: 'Best chess academy in Delhi. Offline and online classes available for students of all levels across Rohini, Gurgaon, Noida, Ghaziabad and Navi Mumbai.',
    keywords: 'best chess classes in Rohini, top chess academy in Rohini, best chess academy in Delhi',
    highlight: true,
  },
  {
    city: 'Pitampura',
    desc: 'Top chess classes in Pitampura for school students and beginners. NEP-aligned curriculum with expert coaches.',
    keywords: 'chess classes in Pitampura, online chess classes Pitampura',
  },
  {
    city: 'Paschim Vihar',
    desc: 'Chess classes in Paschim Vihar — NEP-aligned curriculum for all ages, from absolute beginners to tournament players.',
    keywords: 'chess classes Paschim Vihar',
  },
  {
    city: 'Shalimar Bagh',
    desc: 'Chess coaching in Shalimar Bagh for kids, teens and competitive players seeking structured improvement.',
    keywords: 'chess coaching Shalimar Bagh',
  },
  {
    city: 'Dwarka',
    desc: 'Online and offline chess classes serving students across Dwarka. Book a free trial with expert coaches today.',
    keywords: 'chess classes Dwarka Delhi',
  },
  {
    city: 'Ashok Vihar',
    desc: 'Chess classes in Ashok Vihar — structured coaching for all skill levels with experienced FIDE coaches.',
    keywords: 'chess classes Ashok Vihar',
  },
  {
    city: 'Punjabi Bagh',
    desc: 'Chess coaching in Punjabi Bagh — expert FIDE-rated coaches available online for students across West Delhi.',
    keywords: 'chess coaching Punjabi Bagh',
  },
  {
    city: 'Budh Vihar',
    desc: 'Chess classes in Budh Vihar — beginner to advanced programs available with SckoolChess expert coaches.',
    keywords: 'chess classes Budh Vihar',
  },
  {
    city: 'Avantika',
    desc: 'Chess coaching in Avantika — part of North Delhi\'s top chess network with SckoolChess structured programs.',
    keywords: 'chess coaching Avantika Rohini',
  },
  {
    city: 'Nagloi',
    desc: 'Chess classes near Nagloi — online sessions and school chess programs available through SckoolChess.',
    keywords: 'chess classes near Nagloi',
  },
  {
    city: 'Narela',
    desc: 'Online chess classes available for students in Narela and nearby areas. Structured batches for all levels.',
    keywords: 'online chess classes Narela',
  },
  {
    city: 'Indirapuram',
    desc: 'SckoolChess coaching centre in Indirapuram — serving Vaishali, Kaushambi and Noida with offline and online classes.',
    keywords: 'chess classes Indirapuram, online chess Indirapuram',
    highlight: true,
  },
  {
    city: 'Vaishali',
    desc: 'Best online chess classes in Vaishali — book a free trial today with SckoolChess expert coaches.',
    keywords: 'chess classes Vaishali, online chess Vaishali',
  },
  {
    city: 'Gurgaon',
    desc: 'Online chess classes in Gurgaon for school students and competitive players. Expert FIDE coaches available.',
    keywords: 'chess classes Gurgaon, online chess Gurgaon',
  },
  {
    city: 'Noida',
    desc: 'Chess coaching in Noida — structured programs for beginners and advanced students preparing for FIDE tournaments.',
    keywords: 'chess classes Noida, chess academy Noida',
  },
  {
    city: 'Navi Mumbai',
    desc: 'Chess classes in Navi Mumbai through our Apeejay School Nerul partnership. Online sessions available pan-India.',
    keywords: 'chess classes Navi Mumbai',
  },
  {
    city: 'Vasundhara',
    desc: 'Online chess classes in Vasundhara and Ghaziabad — expert coaching available for students across Vasundhara and the wider NCR region.',
    keywords: 'chess classes Vasundhara, online chess Vasundhara',
  },
]

const stats = [
  { value: '17+', label: 'Cities Served' },
  { value: '5,000+', label: 'Students Trained' },
  { value: '22+', label: 'Partner Schools' },
  { value: '10+', label: 'Years of Experience' },
]

export function MarketAreaPage() {
  useEffect(() => {
    document.title = 'SckoolChess | Chess Classes Near Me — Service Areas Delhi NCR'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Find SckoolChess chess classes near you. We serve Rohini, Pitampura, Dwarka, Paschim Vihar, Shalimar Bagh, Indirapuram, Vaishali, Gurgaon, Noida and more.'
      )
    }
  }, [])

  return (
    <div className="market-area-page">

      {/* ── Hero ── */}
      <section className="ma-hero">
        <div className="ma-hero__inner">
          <p className="ma-hero__kicker">
            <MapPin size={16} strokeWidth={2.3} />
            Chess Classes Near You
          </p>
          <h1 className="ma-hero__heading">
            Chess Classes Across Delhi NCR &amp; Beyond
          </h1>
          <p className="ma-hero__sub">
            SckoolChess provides expert chess coaching across Rohini, Pitampura, Paschim Vihar, Shalimar Bagh, Dwarka, Indirapuram, Vaishali, Vasundhara, Gurgaon, Noida, Navi Mumbai and pan-India online. Find your nearest centre or book online.
          </p>
          <div className="ma-hero__actions">
            <Link to="/book-class" className="ma-btn-primary">Book a Free Trial</Link>
            <a href="tel:+918447992702" className="ma-btn-secondary">
              <Phone size={16} strokeWidth={2.3} /> Call Us Now
            </a>
          </div>
        </div>
        <div className="ma-hero__bg-text" aria-hidden="true">SCKOOLCHESS</div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="ma-stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="ma-stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Service Areas Grid ── */}
      <section className="ma-areas-section">
        <div className="ma-areas-inner">
          <div className="ma-areas-header">
            <p className="ma-areas-kicker">Our Service Areas</p>
            <h2 className="ma-areas-heading">Find Chess Classes in Your City</h2>
            <p className="ma-areas-sub">
              SckoolChess offers chess classes online and offline across all these locations. Don't see your area? Online classes are available pan-India.
            </p>
          </div>

          <div className="ma-grid">
            {serviceAreas.map((area, idx) => (
              <div
                key={area.city}
                className={`ma-card ${area.highlight ? 'ma-card--highlight' : ''}`}
                style={{ '--delay': `${idx * 0.05}s` }}
              >
                <div className="ma-card__top">
                  <div className="ma-card__icon">
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  {area.highlight && (
                    <span className="ma-card__badge">Centre Available</span>
                  )}
                </div>
                <h3 className="ma-card__city">{area.city}</h3>
                <p className="ma-card__desc">{area.desc}</p>
                <Link to="/book-class" className="ma-card__cta">
                  Book a Class <ArrowRight size={15} strokeWidth={2.3} />
                </Link>
              </div>
            ))}

            {/* Pan-India card */}
            <div className="ma-card ma-card--pan-india">
              <div className="ma-card__top">
                <div className="ma-card__icon ma-card__icon--globe">
                  <Globe size={20} strokeWidth={2} />
                </div>
                <span className="ma-card__badge">Pan-India Online</span>
              </div>
              <h3 className="ma-card__city">Your City</h3>
              <p className="ma-card__desc">Don't see your area listed? SckoolChess online classes are available to students anywhere across India.</p>
              <Link to="/book-class" className="ma-card__cta">
                Book a Free Trial <ArrowRight size={15} strokeWidth={2.3} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location Tags Strip ── */}
      <section className="ma-tags-section">
        <div className="ma-tags-inner">
          <p className="ma-tags-label">Chess Classes Near You</p>
          <div className="ma-tags-wrap">
            {[
              'Rohini', 'Pitampura', 'Paschim Vihar', 'Shalimar Bagh', 'Dwarka',
              'Ashok Vihar', 'Punjabi Bagh', 'Budh Vihar', 'Avantika', 'Nagloi',
              'Narela', 'Indirapuram', 'Vaishali', 'Kaushambi', 'Gurgaon', 'Noida',
              'Navi Mumbai', 'Vasundhara', 'Ghaziabad'
            ].map((loc) => (
              <Link key={loc} to="/book-class" className="ma-tag">{loc}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="ma-cta-section">
        <div className="ma-cta-inner">
          <div className="ma-cta-content">
            <h2>Ready to Start Your Chess Journey?</h2>
            <p>Book a free trial class with SckoolChess today — available online for students across India and offline in Rohini and Indirapuram.</p>
          </div>
          <div className="ma-cta-actions">
            <Link to="/book-class" className="ma-btn-primary">Book Free Trial</Link>
            <Link to="/contact-us" className="ma-btn-secondary">
              Contact Us <ArrowRight size={16} strokeWidth={2.3} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
