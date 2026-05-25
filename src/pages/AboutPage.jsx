import { ArrowUpRight, FileText } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const aboutHeroImage = '/im2.png'
const coachingImage =
  'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&w=1200&q=80'
const missionBoardImage = '/im1.png'
const visionKidImage = '/im2.png'

const curriculumDetails = [
  {
    title: "Fundamentals",
    description: "Students begin by understanding the chessboard, piece movement, rules, and essential gameplay concepts required to build a strong foundation.",
    topics: ["Chess board & pieces", "Rules of the game", "Check, checkmate & stalemate", "Castling, promotion & en passant", "Basic gameplay understanding", "Opening principles"],
    image: "/fundamentals.jpg"
  },
  {
    title: "Openings",
    description: "Students learn practical opening systems, positional development, and safe opening habits that help create strong early-game positions.",
    topics: ["Basic opening ideas", "Center control concepts", "Piece development", "Common opening traps", "Italian Game introduction", "Ruy Lopez introduction"],
    image: "/opening.jpg"
  },
  {
    title: "Tactics",
    description: "The curriculum focuses heavily on tactical pattern recognition and practical combinations that improve real match performance.",
    topics: ["Forks", "Pins", "Skewers", "Discovered attacks", "Double attacks", "Back rank checkmates", "Puzzle solving practice"],
    image: "/tactics.jpg"
  },
  {
    title: "Endgames",
    description: "Students develop the ability to convert winning positions confidently through structured endgame training.",
    topics: ["King & Queen checkmate", "King & Rook checkmate", "Basic pawn endgames", "Opposition concepts", "Practical endgame strategies"],
    image: "/endgame.jpg"
  },
  {
    title: "Tournament Activities",
    description: "Students regularly participate in practice games, puzzle contests, and mini tournaments to build confidence and competitive exposure.",
    topics: ["Practice matches", "Puzzle competitions", "Match analysis", "Friendly tournaments", "Competitive preparation"],
    label: "Activities Included",
    image: "/tournament.jpg"
  }
];

export function AboutPage() {
  useScrollReveal();

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
            Since 2009, Rohini Chess Academy Has Been Turning Curious Beginners Into
            Confident Players — One Move At A Time. We Believe Chess Is The Greatest
            Classroom On Earth.
          </p>

          <a className="about-hero-first-btn" href="#about-details">
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
            Rohini Chess Academy is providing chess classes online or offline in various schools in Delhi, NCR and other places in India and Abroad.
          </p>

          <p className="about-coaching-body">
            Rohini Chess Academy takes the fundamental principles of Chess education and applies them to today's young and bright children. With experienced coaches and a scientific training program (chess openings, chess endgames, etc.), we are confident in educating tomorrow's Chess wizards.
          </p>

          <a className="about-coaching-btn" href="/courses-offered">
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
              There are several FIDE/AICF rated chess tournaments which happens regularly across India and special Delhi Chess Association tournaments in Delhi. Prize money is INR &gt;10 Lacs and individual highest prizes are as high as INR 1.25 lacs.
            </p>
            <p>
              <strong>School Tournaments</strong><br />
              Every year there are AICF (All India Chess Federation) and Delhi Chess Association (DCA) special School team tournaments.
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
            <span className="about-duo-kicker">PARTNERSHIPS</span>
            <h3>Our Partnership with Leading Schools & Learning Institutes:</h3>
            <div className="partners-grid-inline">
              <div className="partner-inline-card">
                <img src="/updated logo.png" alt="Apeejay Logo Placeholder" style={{ width: '40px', height: '40px' }} />
                <div className="partner-inline-info">
                  <strong>Apeejay School</strong>
                  <span>Pitampura, Saket, Sheikh Sarai, Noida, Faridabad, Mumbai & Jalandhar</span>
                </div>
              </div>
              <div className="partner-inline-card">
                <img src="/updated logo.png" alt="Shri Ram Logo Placeholder" style={{ width: '40px', height: '40px' }} />
                <div className="partner-inline-info">
                  <strong>Shri Ram Global</strong>
                  <span>Pre-School(s) in Delhi</span>
                </div>
              </div>
              <div className="partner-inline-card">
                <img src="/updated logo.png" alt="Kingdom of Kids Logo Placeholder" style={{ width: '40px', height: '40px' }} />
                <div className="partner-inline-info">
                  <strong>Kingdom of Kids</strong>
                  <span>Delhi & Gurgaon</span>
                </div>
              </div>
              <div className="partner-inline-card">
                <img src="/updated logo.png" alt="GD Goenka Logo Placeholder" style={{ width: '40px', height: '40px' }} />
                <div className="partner-inline-info">
                  <strong>GD Goenka La Petite</strong>
                  <span>Delhi</span>
                </div>
              </div>
              <div className="partner-inline-card">
                <img src="/updated logo.png" alt="The Vasant Logo Placeholder" style={{ width: '40px', height: '40px' }} />
                <div className="partner-inline-info">
                  <strong>The Vasant Pre-School</strong>
                  <span>Delhi</span>
                </div>
              </div>
            </div>
            <a className="about-duo-btn" style={{ marginTop: '24px' }} href="/courses-offered">
              LEARN MORE

            </a>
          </div>
        </article>
      </section>
    </div>
  )
}
