import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Calendar, MapPin, X, User, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const categoryWinners = [
  { category: 'Under 7 Champion',        name: 'Akshat Bansal' },
  { category: 'Under 9 Champion',        name: 'Arnav Kakkar',    img: '/A2.jpeg' },
  { category: 'Under 12 Champion',       name: 'Daevik Wadhwan' },
  { category: 'Under 15 Champion',       name: 'Sarthal Deshwal' },
  { category: 'Best Girl',               name: 'Riya Rathi' },
  { category: 'Best Veteran',            name: 'Mr. H. S. Verma' },
  { category: 'Best SckoolChess Student',name: 'Vatsal Singla',   img: '/A4.jpeg' },
  { category: 'Visually Challenged',     name: 'Sourabh Mishra' },
  { category: 'Specially Abled',         name: 'Sonu Bist' },
  { category: 'Youngest Child Award',    name: 'Satakshi' },
]

const galleryImages = [
  { src: '/t1.jpg', caption: 'Tournament Hall Action' },
  { src: '/t2.jpg', caption: 'Prize Distribution Ceremony' },
  { src: '/t3.jpg', caption: 'Young Champions' },
  { src: '/t4.jpg', caption: 'Intense Match Focus' },
  { src: '/t5.jpg', caption: 'Team Celebrations' },
  { src: '/t6.jpg', caption: 'Dignitaries & Organizers' },
  { src: '/t7.jpg', caption: 'Championship Trophy' },
]

export function TournamentPage() {
  useScrollReveal()
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    document.title = 'SckoolChess Tournaments | Chess Competitions in Rohini Delhi NCR'
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', 'Explore chess tournaments organised by SckoolChess in Rohini and Delhi NCR. FIDE-rated, school-level and open chess competitions for all ages and skill levels.')
    const esc = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])

  return (
    <div className="trn-page">

      {/* ─── Hero ─── */}
      <section className="trn-hero">
        <div className="trn-hero__bg" style={{ backgroundImage: "url('/t1.jpg')" }} />
        <div className="trn-hero__veil" />
        <div className="trn-hero__body reveal fade-up">
          <span className="trn-eyebrow">SckoolChess Championships</span>
          <h1>Tournaments &amp; Events</h1>
          <p>Competitive chess events for students, schools and clubs across Rohini, Pitampura, Noida and Delhi NCR.</p>
          <div className="trn-hero__meta">
            <span><Calendar size={14} strokeWidth={2} /> 19–20 Oct 2019</span>
            <span><MapPin size={14} strokeWidth={2} /> Rohini, New Delhi</span>
          </div>
        </div>
      </section>

      {/* ─── Event Write-up ─── */}
      <section className="trn-writeup">
        <div className="trn-wrap">
          <div className="trn-writeup__grid reveal fade-up">

            <div className="trn-writeup__text">
              <p className="trn-overline">Featured Event</p>
              <h2>SckoolChess Diwali Bonanza Open Chess Tournament</h2>
              <div className="trn-meta-row">
                <span><Calendar size={14} /> 19 – 20 October 2019</span>
                <span><MapPin size={14} /> Bansal Bhawan, Sector-16, Rohini, New Delhi</span>
              </div>

              <p>
                The SckoolChess Diwali Bonanza Open Chess Tournament was held at Bansal Bhawan, Sector-16, Rohini, New Delhi from 19 to 20 October 2019. A total of <strong>114 players</strong> participated, including <strong>17 internationally rated players</strong>, across two days with a time control of 25 minutes plus 5-second increment from move one.
              </p>
              <p>
                The total prize fund of the event was <strong>Rs. 25,500</strong> distributed across <strong>7 Swiss System rounds</strong>.
              </p>
              <p>
                1st prize of Rs. 3,100 plus trophy was awarded to <strong>Mr. Samarth Gaba</strong> who holds an international FIDE rating of 1392. Satyam Prakash secured 2nd position and Love Jindal secured 3rd position. Both Samarth and Satyam scored 6.5 out of 7 rounds — Samarth emerged winner on superior Buchholz tie-break.
              </p>
              <p>
                The prize distribution ceremony was presided over by <strong>Mr. M. K. Bansal</strong> (Owner of Bansal Bhawan) along with our coaches Mr. Anil Shivpuri, Mr. Hamid Hasan, Mr. Manohar Lal, Mr. Vasudeven, Mr. Sunil Sharma, Dr. Shilpi Jain and <strong>Mr. Sachin Jain</strong> (Tournament Director).
              </p>
              <p className="trn-closing">
                All in all, it was a memorable event. Students got a great opportunity to display their skills and demonstrated that chess is a game where children learn to be responsible for their actions.
              </p>
            </div>

            <div className="trn-writeup__sidebar">
              <div className="trn-sidebar-img">
                <img src="/t2.jpg" alt="Prize distribution ceremony" />
              </div>
              <div className="trn-sidebar-stats">
                <div className="trn-sidebar-stat">
                  <strong>114</strong><span>Players</span>
                </div>
                <div className="trn-sidebar-stat">
                  <strong>17</strong><span>FIDE Rated</span>
                </div>
                <div className="trn-sidebar-stat">
                  <strong>7</strong><span>Rounds</span>
                </div>
                <div className="trn-sidebar-stat">
                  <strong>₹25,500</strong><span>Prize Fund</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Podium (exact screenshot style) ─── */}
      <section className="trn-podium-section">
        <div className="trn-wrap">
          <p className="trn-overline" style={{ textAlign: 'center', display: 'block', marginBottom: '8px' }}>Overall Standings</p>
          <h2 className="trn-h2 reveal fade-up">Tournament Winners</h2>

          <div className="trn-podium reveal fade-up">

            {/* 2nd Place */}
            <div className="trn-podium__slot trn-podium__slot--silver">
              <div className="trn-podium__player">
                <div className="trn-podium__avatar trn-podium__avatar--plain">
                  <User size={28} strokeWidth={1.5} />
                </div>
                <div className="trn-podium__num trn-podium__num--silver">2</div>
                <h3>Satyam Prakash</h3>
                <span className="trn-podium__score">6.5 / 7 pts</span>
                <span className="trn-podium__prize">Runner-up</span>
              </div>
              <div className="trn-podium__platform trn-podium__platform--silver">2ND</div>
            </div>

            {/* 1st Place */}
            <div className="trn-podium__slot trn-podium__slot--gold">
              <div className="trn-podium__trophy"><Trophy size={38} strokeWidth={1.4} /></div>
              <div className="trn-podium__player trn-podium__player--gold">
                <div className="trn-podium__avatar trn-podium__avatar--gold">
                  <User size={32} strokeWidth={1.5} />
                </div>
                <div className="trn-podium__num trn-podium__num--gold">1</div>
                <h3>Samarth Gaba</h3>
                <span className="trn-podium__fide">FIDE 1392</span>
                <span className="trn-podium__score">6.5 / 7 pts (Better Buchholz)</span>
                <span className="trn-podium__prize trn-podium__prize--gold">₹3,100 + Trophy</span>
              </div>
              <div className="trn-podium__platform trn-podium__platform--gold">1ST</div>
            </div>

            {/* 3rd Place */}
            <div className="trn-podium__slot trn-podium__slot--bronze">
              <div className="trn-podium__player">
                <div className="trn-podium__avatar">
                  <img src="/c4.jpg" alt="Love Jindal" />
                </div>
                <div className="trn-podium__num trn-podium__num--bronze">3</div>
                <h3>Love Jindal</h3>
                <span className="trn-podium__score">6.0 / 7 pts</span>
                <span className="trn-podium__prize">Second Runner-up</span>
              </div>
              <div className="trn-podium__platform trn-podium__platform--bronze">3RD</div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Category Winners ─── */}
      <section className="trn-cats-section">
        <div className="trn-wrap">
          <p className="trn-overline" style={{ textAlign:'center', display:'block', marginBottom:'8px' }}>Special Recognition</p>
          <h2 className="trn-h2 reveal fade-up">Category Award Winners</h2>
          <p className="trn-sub reveal fade-up">
            Among other participants, special awards were given across age brackets and categories celebrating every level of competitive chess.
          </p>

          <div className="trn-cats-grid">
            {categoryWinners.map((w, i) => (
              <div className="trn-cat-row reveal fade-up" key={i} style={{ '--d': `${i * 0.035}s` }}>
                <div className="trn-cat-row__avatar">
                  {w.img
                    ? <img src={w.img} alt={w.name} />
                    : <User size={16} strokeWidth={1.8} />
                  }
                </div>
                <div className="trn-cat-row__info">
                  <span>{w.category}</span>
                  <strong>{w.name}</strong>
                </div>
                <ChevronRight size={15} className="trn-cat-row__arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      <section className="trn-gallery-section">
        <div className="trn-wrap">
          <p className="trn-overline" style={{ textAlign:'center', display:'block', marginBottom:'8px' }}>Gallery</p>
          <h2 className="trn-h2 reveal fade-up">Moments from the Championship</h2>
          <p className="trn-sub reveal fade-up">Capturing the intense focus, dedication and proud moments of the Diwali Bonanza 2019.</p>

          <div className="trn-gallery reveal fade-up">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`trn-gimg trn-gimg--${i === 0 ? 'big' : 'sm'}`}
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="trn-gimg__hover"><span>{img.caption}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Upcoming ─── */}
      <section className="trn-upcoming">
        <div className="trn-wrap">
          <div className="trn-upcoming__card reveal fade-up">
            <div className="trn-upcoming__left">
              <p className="trn-overline">What's Next</p>
              <h3>Upcoming Tournaments</h3>
              <p>Stay tuned for upcoming chess tournaments and competitive events organised by SckoolChess across Rohini, Pitampura, Noida, Gurgaon and Delhi NCR.</p>
            </div>
            <div className="trn-upcoming__actions">
              <Link to="/contact-us" className="trn-btn-primary">Register Interest</Link>
              <Link to="/book-class" className="trn-btn-outline">Book Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="trn-cta">
        <div className="trn-wrap">
          <div className="trn-cta__inner reveal fade-up">
            <h2>Ready to Train for the Next Championship?</h2>
            <p>SckoolChess provides DCA-affiliated training, FIDE guidelines guidance, and extensive tournament practice to prepare every student to compete with confidence.</p>
            <div className="trn-cta__btns">
              <Link to="/book-class" className="trn-btn-primary">Book a Free Trial</Link>
              <Link to="/contact-us" className="trn-btn-outline">Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      {lightbox && (
        <div className="trn-lb" onClick={() => setLightbox(null)}>
          <div className="trn-lb__box" onClick={e => e.stopPropagation()}>
            <button className="trn-lb__close" onClick={() => setLightbox(null)}><X size={20} /></button>
            <img src={lightbox.src} alt={lightbox.caption} />
            <p>{lightbox.caption}</p>
          </div>
        </div>
      )}

    </div>
  )
}
