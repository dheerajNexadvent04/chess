import { coaches } from '../data/siteContent'
import { Phone, Instagram, Facebook, Twitter, Award, Clock, Languages, Target } from 'lucide-react'

export function CoachesPage() {
  return (
    <div className="inner-page coaches-page">
      <header className="inner-header">
        <h1>Our Coaches</h1>
        <p>
          Experienced and student-focused mentors for every stage of chess
          learning.
        </p>
      </header>

      <section className="section">
        <div className="coach-v2-container">
          {coaches.map((coach, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <article key={coach.name} className={`coach-v3-card ${isReversed ? 'coach-v3-card--reversed' : ''}`}>
                {/* Decorative Background Piece */}
                <div className="coach-v3-card__bg-piece">{idx % 2 === 0 ? '♘' : '♖'}</div>

                {/* Image Side */}
                <div className="coach-v3-card__image-wrap">
                  <img src={coach.image} alt={coach.name} />
                  <div className="coach-v3-card__image-overlay"></div>
                </div>

                {/* Content Side */}
                <div className="coach-v3-card__content">
                  <div className="coach-v3-header">
                    <div className="coach-v3-header__main">
                      <span className="coach-v3-tag">Lead Mentor</span>
                      <h2>{coach.name}</h2>
                      <p className="coach-v3-role">{coach.title}</p>
                    </div>
                    <div className="coach-v3-socials">
                      <a href={`tel:${coach.socials.phone}`} className="social-pill"><Phone size={14} /> <span>Call</span></a>
                      <div className="social-icons">
                        <a href={coach.socials.instagram} aria-label="Instagram"><Instagram size={18} /></a>
                        <a href={coach.socials.facebook} aria-label="Facebook"><Facebook size={18} /></a>
                      </div>
                    </div>
                  </div>

                  <div className="coach-v3-body">
                    <div className="coach-v3-bio">
                      <p>{coach.bio}</p>
                    </div>

                    <div className="coach-v3-stats">
                      <div className="stat-item">
                        <Award size={18} />
                        <div className="stat-text">
                          <label>Expertise</label>
                          <span>{coach.info.specialty}</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <Target size={18} />
                        <div className="stat-text">
                          <label>Peak Rating</label>
                          <span>{coach.info.rating}</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <Clock size={18} />
                        <div className="stat-text">
                          <label>Experience</label>
                          <span>{coach.info.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  )
}
