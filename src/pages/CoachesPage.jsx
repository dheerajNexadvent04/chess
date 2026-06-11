import { useEffect } from 'react'
import { coaches } from '../data/siteContent'
import { Phone, Instagram, Facebook, Twitter, Award, Clock, Languages, Target } from 'lucide-react'

export function CoachesPage() {
  useEffect(() => {
    document.title = 'SckoolChess Coaches | Top Chess Coaches in Delhi'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Meet the top chess coaches in Delhi at SckoolChess. Expert mentors with FIDE ratings, state titles and 5–20+ years of experience teaching chess in Delhi NCR.'
      )
    }
  }, [])

  return (
    <div className="inner-page coaches-page">
      <header className="inner-header">
        <h1>Our Coaches</h1>
        <p>
          Experienced and student-focused mentors for every stage of chess learning.
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

      {/* ── Coaches Bottom CTA Section ── */}
      <section className="coaches-cta-section">
        <div className="coaches-cta-card">
          <div className="coaches-cta-content">
            <h2>Ready to Raise Your Game?</h2>
            <p>Book a session with one of our master coaches and start your personalized chess journey today.</p>
          </div>
          <div className="coaches-cta-actions">
            <a href="/book-class?ref=Coaches+Page+CTA" className="coaches-cta-btn">
              Book Your Online Class
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
