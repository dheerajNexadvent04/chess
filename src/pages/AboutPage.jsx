import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const slideshowImages = Array.from({ length: 15 }, (_, i) => `/about_slide${i + 1}.jpeg`)
const coachingImage = '/l2.png'
const missionBoardImage = '/cp career banner2.png'
const visionKidImage = '/cp partnership banner2.png'
const chooseUsImage = '/student3.png'
const skillsVisionImage = '/student4.png'

export function AboutPage() {
  useScrollReveal();
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    document.title = "About SckoolChess | Best Chess Solution Provider in Noida, Ghaziabad, Indirapuram, Delhi and Navi Mumbai"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', "Learn about SckoolChess, a NEP-aligned chess solution provider offering the best chess classes in Rohini, Pitampura, Dwarka, Vaishali and across Delhi NCR. Affiliated to All India Chess Federation (AICF).")
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

      {/* Hero Section */}
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

      {/* 01 WHO WE ARE Section */}
      <section className="about-coaching-section reveal fade-up" aria-label="Master chess coaching" id="about-details">
        <div className="about-coaching-copy">
          <h2>
            About <span>SckoolChess</span>
          </h2>

          <p className="about-coaching-subtext">
            SckoolChess is built with a singular focus: to empower schools and school children with a structured Chess Intelligence Program. We believe that chess, when taught with the right curriculum and coaching, becomes a powerful tool to strengthen creativity, imagination, concentration and patience in young learners.
          </p>

          <p className="about-coaching-body">
            As a recognised Chess in School (CIS) program partner under the All India Chess Federation (AICF), SckoolChess brings future-ready learning into classrooms and after-school environments. We have grown into a trusted name in school chess education across Delhi NCR and Navi Mumbai, with over 5,000 students already benefitted from our programs.
          </p>

          <p className="about-coaching-body" style={{ marginTop: '12px' }}>
            We serve students through both our online classes and offline academy centres. Students attending our programs come from a wide range of reputed schools including DPS Rohini, Ryan International School, DAV Public School, Bal Bharati Public School, Heritage School, Apeejay School, Mount Abu School, and many other leading institutions across Delhi NCR and Navi Mumbai.
          </p>

          <Link className="about-coaching-btn" to="/book-class">
            Start Your Free Trial
          </Link>
        </div>

        <div className="about-coaching-image-wrap">
          <img src={coachingImage} alt="Kids receiving chess coaching" />
        </div>
      </section>

      {/* Alternating Duo Sections representing Section 02, 03, 04, 05 */}
      <section className="about-duo-section" aria-label="Mission and vision">
        
        {/* 02 WHAT WE OFFER */}
        <article className="about-duo-row reveal fade-up">
          <div className="about-duo-copy">
            <span className="about-duo-kicker">02 WHAT WE OFFER</span>
            <h3>Our Programs</h3>
            <p>
              SckoolChess delivers chess education through multiple formats designed to fit the needs of schools, students, and parents. We have designed a specifically curated curriculum for our partner schools in Delhi NCR and Navi Mumbai, structured for every skill level from complete beginners to students preparing for competitive tournaments:
            </p>
            <ul style={{ paddingLeft: '20px', color: '#4f4f4f', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
              <li><strong>Chess Programs for Schools:</strong> Curated curriculum integrated into the school calendar with structured coaching and periodic assessments.</li>
              <li><strong>After-School Chess Programs:</strong> Dedicated batches for students beyond school hours, including weekend batches.</li>
              <li><strong>Online Live Chess Training:</strong> Live instructor-led sessions accessible from home, ideal for outstation students.</li>
              <li><strong>Chess Clubs, Workshops and Summer Camps:</strong> Immersive short-term programs that spark interest and build a chess community in school.</li>
              <li><strong>Inter-School Tournaments:</strong> Competitive events that give students real match experience and exposure.</li>
              <li><strong>Tournament Preparation Sessions:</strong> Focused coaching for students gearing up for state and national-level competitions.</li>
            </ul>
            <Link className="about-duo-btn" style={{ marginTop: '24px' }} to="/curriculum">
              EXPLORE CURRICULUM
            </Link>
          </div>
          <div className="about-duo-image-wrap">
            <img src={missionBoardImage} alt="Chess board strategy pattern" />
          </div>
        </article>

        {/* 03 OUR REACH */}
        <article className="about-duo-row reverse reveal fade-up">
          <div className="about-duo-image-wrap">
            <img src={visionKidImage} alt="Student focusing on a chess move" />
          </div>
          <div className="about-duo-copy">
            <span className="about-duo-kicker">03 OUR REACH</span>
            <h3>Where We Operate</h3>
            <p style={{ fontSize: '15px', color: '#6c6c6c', lineHeight: '1.6', margin: '12px 0 24px' }}>
              SckoolChess has built a growing student community across Delhi NCR and Navi Mumbai. We currently serve students in Rohini, Pitampura, Paschim Vihar, Dwarka, Indirapuram, Noida, Gurgaon, and Navi Mumbai through both offline and online learning channels. Our goal is to extend this reach to schools across every city in India. We are proud to partner with leading schools:
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

        {/* 04 WHY CHOOSE US */}
        <article className="about-duo-row reveal fade-up">
          <div className="about-duo-copy">
            <span className="about-duo-kicker">04 WHY SCHOOLS &amp; PARENTS CHOOSE US</span>
            <h3>Our Commitment to Schools</h3>
            <p>
              School principals and management teams value and appreciate our approach because we manage chess programs end-to-end. From curriculum design and coach deployment to assessments, tournaments, and parent communication, SckoolChess handles everything so schools do not have to. This complete ownership and accountability is what sets us apart:
            </p>
            <ol className="about-commitment-list" style={{ paddingLeft: '20px', color: '#4f4f4f', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
              <li><strong>End-to-end program management:</strong> From curriculum design and coach deployment to assessments, tournaments, and parent communication.</li>
              <li><strong>Specifically curated curriculum:</strong> Aligned to the Chess in School (CIS) framework under AICF and customized for each partner school.</li>
              <li><strong>Expert coaches:</strong> Trained to work with school-age children, using a student-friendly and age-appropriate teaching approach.</li>
              <li><strong>Regular tournament exposure:</strong> Inter-school tournament opportunities to give students real competitive match experience and build confidence.</li>
              <li><strong>Strong core pillars:</strong> Focused on developing creativity, imagination, concentration, and patience.</li>
              <li><strong>Supportive learning environment:</strong> Safe and structured spaces with consistent coach presence and progress tracking.</li>
              <li><strong>Flexible delivery options:</strong> Classes run through both offline academy centres and online live sessions to suit every student's schedule.</li>
              <li><strong>Extracurricular activities:</strong> Weekend batches, after-school programs, summer camps, and workshops to complement main school curriculum.</li>
              <li><strong>Transparent reporting:</strong> Regular progress communication with school management to ensure complete accountability.</li>
              <li><strong>Trusted credentials:</strong> Relied on by over 5,000 students and their families across Delhi NCR and Navi Mumbai.</li>
            </ol>
          </div>
          <div className="about-duo-image-wrap">
            <img src={chooseUsImage} alt="School children participating in a SckoolChess event" />
          </div>
        </article>

        {/* 05 SKILLS & VISION */}
        <article className="about-duo-row reverse reveal fade-up">
          <div className="about-duo-image-wrap">
            <img src={skillsVisionImage} alt="SckoolChess student in classroom learning board strategies" />
          </div>
          <div className="about-duo-copy">
            <span className="about-duo-kicker">05 SKILLS WE DEVELOP &amp; OUR VISION</span>
            <h3>Building Future-Ready Learners</h3>
            <p>
              Our Chess Intelligence Program is designed to go far beyond moves and strategies. Every session is crafted to build the cognitive and character skills that help children succeed in school, in competitions, and in life:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', color: '#4f4f4f', margin: '16px 0 20px', fontWeight: '600' }}>
              <div>• Creativity</div>
              <div>• Imagination</div>
              <div>• Concentration</div>
              <div>• Patience</div>
              <div>• Logical Thinking</div>
              <div>• Decision Making</div>
              <div>• Confidence</div>
              <div>• Sportsmanship</div>
            </div>
            <p style={{ marginTop: '16px' }}>
              <strong>Our Vision:</strong> To make structured chess education accessible to students across India and help schools build future-ready learning environments. Whether a child is taking their first step into chess or preparing for national-level competitions, SckoolChess provides the curriculum, coaching, mentorship, and end-to-end support needed to succeed.
            </p>
            <Link className="about-duo-btn" style={{ marginTop: '24px' }} to="/contact-us">
              PARTNER WITH US
            </Link>
          </div>
        </article>

      </section>
    </div>
  )
}
