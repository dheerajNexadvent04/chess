import { useEffect } from 'react'
import { ArrowUpRight, FileText } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const aboutHeroImage = '/comapany profile banner2.png'
const coachingImage = '/CP affiliated banner2.png'
const missionBoardImage = '/cp career banner2.png'
const visionKidImage = '/cp partnership banner2.png'

const curriculumDetails = [
  {
    title: "Fundamentals",
    description: "Students begin by understanding the chessboard, piece movement, rules and essential gameplay concepts required to build a strong foundation for competitive play.",
    topics: ["Chess board and pieces", "Check, checkmate and stalemate", "Basic gameplay understanding", "Rules of the game", "Castling, promotion and en passant", "Opening principles", "Chess notation basics", "Time management in games"],
    image: "/fundamentals.jpg"
  },
  {
    title: "Openings",
    description: "Students learn critical opening systems, positional development and safe opening habits that help create strong early-game positions in both school and competitive chess tournaments.",
    topics: ["Basic opening ideas", "Pawn development", "Indian Game introduction", "Central control concepts", "Common opening traps", "Top-rated opening moves"],
    image: "/opening.jpg"
  },
  {
    title: "Tactics",
    description: "Our curriculum focuses heavily on tactical pattern recognition and practical combinations that improve real match performance for students at every level.",
    topics: ["Forks", "Skewers", "Double attacks", "Puzzle-solving practice", "Pins", "Discovered attacks", "Back-rank checkmates", "Zwischenzug concepts"],
    image: "/tactics.jpg"
  },
  {
    title: "Endgames",
    description: "Students develop the ability to convert winning positions confidently through structured endgame training — a critical skill for every tournament-ready chess player across Rohini, Pitampura, Dwarka and Delhi NCR.",
    topics: ["King and Queen checkmates", "Rook pawn endgames", "Practical endgame strategies", "King and Rook checkmates", "Opposition concepts", "Pawn promotion technique"],
    image: "/endgame.jpg"
  },
  {
    title: "Tournament Activities",
    description: "Students regularly participate in practice games, puzzle contests and mini-tournaments to build confidence and competitive exposure across Rohini, Pitampura, Noida and NCR.",
    topics: ["Practice matches", "Result analysis", "Competitive preparation", "Puzzle competitions", "Friendly tournaments", "Post-game debriefs"],
    label: "Activities Included",
    image: "/tournament.jpg"
  }
];

export function AboutPage() {
  useScrollReveal();

  useEffect(() => {
    document.title = "About SckoolChess | Best Chess Academy in Noida, Ghaziabad, Indirapuram, Delhi and Navi Mumbai"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', "Learn about SckoolChess, a NEP-aligned chess academy offering the best chess classes in Rohini, Pitampura, Dwarka, Vaishali and across Delhi NCR. Affiliated to Delhi Chess Association.")
    }
  }, [])

  return (
    <div className="about-page">
      <p className="about-page-kicker reveal fade-up">About us</p>

      <section className="about-hero-first reveal fade-up">
        <div className="about-hero-first-image">
          <img src={aboutHeroImage} alt="Chess training session" />
        </div>

        <div className="about-hero-first-head">
          <h1>
            Where Champions
            <br />
            Are Shaped, Not Born.
          </h1>

          <p>
            Since 2022, SckoolChess has been turning curious beginners into confident players. As the best chess academy in Rohini and across Delhi NCR, we believe chess is the greatest classroom on earth.
          </p>

          <a 
            className="about-hero-first-btn" 
            href="#about-details"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('open-custom-modal', {
                detail: { type: 'inquiry', section: 'About Hero' }
              }));
            }}
          >
            GET IN TOUCH
          </a>
        </div>
      </section>

      <section className="curriculum-detail-v5" aria-label="Curriculum Details">
        <div className="curriculum-detail-v5__container">
          {curriculumDetails.map((detail, idx) => {
            const isReverse = idx % 2 === 0;
            return (
              <div 
                key={detail.title} 
                className={`curriculum-detail-v5__row ${isReverse ? 'curriculum-detail-v5__row--reverse' : ''}`}
              >
                <div className="curriculum-detail-v5__content">
                  <h3 className="curriculum-detail-v5__title">{detail.title}</h3>
                  <div className="curriculum-detail-v5__desc-wrap">
                    <p className="curriculum-detail-v5__description">{detail.description}</p>
                  </div>
                  <div className="curriculum-detail-v5__topics-wrap">
                    <p className="curriculum-detail-v5__topics-label">{detail.label || "Topics Covered"}</p>
                    <ul className="curriculum-detail-v5__list">
                      {detail.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="curriculum-detail-v5__image-wrap">
                  <img src={detail.image} alt={detail.title} className="curriculum-detail-v5__image" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-coaching-section reveal fade-up" aria-label="Master chess coaching" id="about-details">
        <div className="about-coaching-copy">
          <h2>
            Affiliated to <span>Delhi Chess</span> Association.
          </h2>

          <p className="about-coaching-subtext">
            SckoolChess provides top chess classes online or offline in various schools in Delhi NCR and other places in India and abroad, backed by the credibility of the Delhi Chess Association.
          </p>

          <p className="about-coaching-body">
            SckoolChess applies the fundamental principles of chess education to today's young and bright children. With experienced coaches and a NEP-aligned, scientific approach to chess openings, tactics and endgames, we are confident in educating tomorrow's chess champions across Rohini, Pitampura, Paschim Vihar, Shalimar Bagh, Dwarka, Vaishali and Gurgaon.
          </p>

          <a className="about-coaching-btn" href="/book-class">
            Start Your Free Trial
          </a>
        </div>

        <div className="about-coaching-image-wrap">
          <img src={coachingImage} alt="Kids receiving chess coaching" />
        </div>
      </section>

      <section className="about-duo-section" aria-label="Mission and vision">
        <article className="about-duo-row reveal fade-up">
          <div className="about-duo-copy">
            <span className="about-duo-kicker">TOURNAMENTS</span>
            <h3>Career opportunities</h3>
            <p>
              <strong>FIDE / AICF / DCA Tournaments</strong><br />
              There are several FIDE and AICF-rated chess tournaments that happen regularly across India, and special Delhi Chess Association tournaments in Delhi. Prize money is Rs. 40,000 to Rs. 1 Lakh and individual top prizes can be as high as Rs. 25 Lakh. SckoolChess prepares every student to compete at this level.
            </p>
            <p>
              <strong>School Tournaments</strong><br />
              Every year, there are AICF, All India Chess Federation and Delhi Chess Association (DCA) special school-level tournaments. SckoolChess students consistently rank and win at these events across Rohini, Pitampura, Noida and Delhi NCR.
            </p>
            <a className="about-duo-btn" href="/career">
              LEARN MORE
            </a>
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
            <span className="about-duo-kicker">PARTNERS</span>
            <h3>Our Partnership with Leading Schools and Learning Institutes</h3>
            <p style={{ fontSize: '15px', color: '#6c6c6c', lineHeight: '1.6', margin: '12px 0 24px' }}>
              SckoolChess is the trusted chess-in-school partner for Apeejay Schools, Nepzo and 12+ leading institutions across Rohini, Pitampura, Noida and Navi Mumbai.
            </p>
            <div className="partners-grid-inline">
              <div className="partner-inline-card">
                <img src="/apeejay.jpg" alt="Apeejay Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <div className="partner-inline-info">
                  <strong>Apeejay School</strong>
                  <span>Pitampura, Saket, Sheikh Sarai, Noida, Faridabad, Mumbai & Jalandhar</span>
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
            <a className="about-duo-btn" style={{ marginTop: '24px' }} href="/partners">
              LEARN MORE
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}
