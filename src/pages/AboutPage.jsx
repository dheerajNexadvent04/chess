import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const slideshowImages = Array.from({ length: 15 }, (_, i) => `/about_slide${i + 1}.jpeg`)
const coachingImage = '/l2.png'
const missionBoardImage = '/cp career banner2.png'
const visionKidImage = '/cp partnership banner2.png'

export function AboutPage() {
  useScrollReveal();
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    document.title = "About SckoolChess | Best Chess Solution Provider in Noida, Ghaziabad, Indirapuram, Delhi and Navi Mumbai"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', "Learn about SckoolChess, a NEP-aligned chess solution provider offering the best chess classes in Rohini, Pitampura, Dwarka, Vaishali and across Delhi NCR. Affiliated to Delhi Chess Association.")
    }
  }, [])

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 15)
    }, 3200)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="about-page">
      <p className="about-page-kicker reveal fade-up">About us</p>

      <section className="about-hero-first reveal fade-up">
        <div className="about-hero-first-image">
          {slideshowImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Chess training session ${idx + 1}`}
              className={idx === activeSlide ? 'active' : ''}
            />
          ))}
        </div>

        <div className="about-hero-first-head">
          <h1>
            Empowering Schools &amp; Students
            <br />
            with Chess Intelligence
          </h1>

          <p>
            SckoolChess, a flagship brand of Rohini Chess Academy Pvt. Ltd., is an official Chess in School (CIS) Partner affiliated with AICF and a leader in Chess Intelligence for schools in NCR. With 5,000+ students benefitted across 12 partner schools in 10 cities and 2 regions, we are committed to shaping the future of young learners.
          </p>

          <Link to="/contact-us" className="about-hero-first-btn">
            GET IN TOUCH
          </Link>
        </div>
      </section>

      <section className="about-coaching-section reveal fade-up" aria-label="Master chess coaching" id="about-details">
        <div className="about-coaching-copy">
          <h2>
            About <span>SckoolChess</span>
          </h2>

          <p className="about-coaching-subtext">
            SckoolChess is built with a singular focus: to empower schools and school children with a structured Chess Intelligence Program. We believe that chess, when taught with the right curriculum and coaching, becomes a powerful tool to strengthen creativity, imagination, concentration and patience in young learners.
          </p>

          <p className="about-coaching-body">
            As a recognised Chess in School (CIS) program partner under the All India Chess Federation (AICF), SckoolChess brings future-ready learning into classrooms and after-school environments. Our Chess Intelligence Program is designed to go far beyond moves and strategies: every session is crafted to build core character &amp; cognitive skills—Creativity, Imagination, Concentration, Patience, Logical Thinking, Decision Making, Confidence, and Sportsmanship. Our vision is to make structured chess education accessible to students across India and help schools build future-ready learning environments. Currently, we serve students from a wide range of reputed schools including DPS Rohini, Ryan International School, DAV Public School, Bal Bharati Public School, Heritage School, Apeejay School, Mount Abu School, and many other leading institutions across Delhi NCR and Navi Mumbai.
          </p>

          <Link className="about-coaching-btn" to="/book-class">
            Start Your Free Trial
          </Link>
        </div>

        <div className="about-coaching-image-wrap">
          <img src={coachingImage} alt="Kids receiving chess coaching" />
        </div>
      </section>

      <section className="about-duo-section" aria-label="Mission and vision">
        <article className="about-duo-row reveal fade-up">
          <div className="about-duo-copy">
            <span className="about-duo-kicker">PROGRAMS</span>
            <h3>Our Programs</h3>
            <p>
              SckoolChess delivers chess education through multiple formats designed to fit the needs of schools, students, and parents. We have designed a specifically curated curriculum for our partner schools in Delhi NCR and Navi Mumbai, structured for every skill level from complete beginners to students preparing for competitive tournaments.
            </p>
            <p>
              Our core formats include: Chess Programs for Schools (curated curriculum integrated into the school calendar with assessments), After-School Chess Programs (dedicated and weekend batches), Online Live Chess Training (instructor-led from home), Chess Clubs, Workshops &amp; Summer Camps, Inter-School Tournaments, and Tournament Preparation Sessions.
            </p>
            <Link className="about-duo-btn" to="/curriculum">
              EXPLORE CURRICULUM
            </Link>
          </div>
          <div className="about-duo-image-wrap">
            <img src={missionBoardImage} alt="Chess board strategy pattern" />
          </div>
        </article>

        <article className="about-duo-row reverse reveal fade-up">
          <div className="about-duo-image-wrap">
            <img src={visionKidImage} alt="Student focusing on a chess move" />
          </div>
          <div className="about-duo-copy">
            <span className="about-duo-kicker">REACH &amp; PARTNERS</span>
            <h3>Where We Operate &amp; Our Commitment</h3>
            <p style={{ fontSize: '15px', color: '#6c6c6c', lineHeight: '1.6', margin: '12px 0 24px' }}>
              SckoolChess has built a growing student community across Delhi NCR and Navi Mumbai (Rohini, Pitampura, Paschim Vihar, Dwarka, Indirapuram, Noida, Gurgaon, and Navi Mumbai). School principals and management teams appreciate our approach because we manage chess programs end-to-end (curriculum design, coach deployment, assessments, tournaments, and parent communication) so schools do not have to. We are proud to partner with leading institutions:
            </p>
            <div className="partners-grid-inline">
              <div className="partner-inline-card">
                <img src="/apeejay.jpg" alt="Apeejay Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <div className="partner-inline-info">
                  <strong>Apeejay School</strong>
                  <span>Pitampura, Saket, Sheikh Sarai, Noida, Faridabad, Mumbai &amp; Jalandhar</span>
                </div>
              </div>
              <div className="partner-inline-card">
                <img src="/shri ram global.jpg" alt="Shri Ram Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <div className="partner-inline-info">
                  <strong>Shri Ram Global</strong>
                  <span>Pre-School(s) in Delhi</span>
                </div>
              </div>
              <div className="partner-inline-card">
                <img src="/the vasant international.png" alt="The Vasant Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <div className="partner-inline-info">
                  <strong>The Vasant Pre-School</strong>
                  <span>Delhi</span>
                </div>
              </div>
            </div>
            <Link className="about-duo-btn" style={{ marginTop: '24px' }} to="/partners">
              LEARN MORE
            </Link>
          </div>
        </article>
      </section>
    </div>
  )
}
