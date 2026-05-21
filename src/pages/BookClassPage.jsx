import { useState } from 'react'
import { Clock, Calendar, CheckCircle, Crown, Users, Brain, Trophy, Star, ChevronDown, ChevronUp } from 'lucide-react'

// TODO: Replace this with the deployed Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwd44tk1iAWW6brxlSk88PC9wk0JJ1B76xQaoC-tk276Qe3BBDk9KMWT7F2q_1c3blu/exec'

export function BookClassPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(e.target)

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        setLoading(false)
        setSuccess(true)
        e.target.reset()
      })
      .catch((error) => {
        console.error('Error!', error.message)
        setLoading(false)
      })
  }

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const faqs = [
    {
      question: "Do I need any prior chess experience?",
      answer: "Not at all! We cater to all skill levels. Whether you don't know how the pieces move, or you're an advanced player looking to push your Elo rating over 2000, our coaches will tailor the sessions to your exact level."
    },
    {
      question: "How long is each session?",
      answer: "A standard online session is 60 minutes. This provides enough time for a warm-up puzzle, interactive lesson, real-time gameplay, and a thorough post-game analysis."
    },
    {
      question: "What software do we use for the online classes?",
      answer: "We primarily use Zoom for video communication and screen sharing, while playing the actual games on an interactive Lichess or Chess.com study board."
    },
    {
      question: "What happens if I need to reschedule?",
      answer: "We offer flexible scheduling. As long as you notify your coach at least 24 hours in advance, you can easily reschedule your session for another time at no extra cost."
    }
  ]

  return (
    <div className="book-class-page-wrapper">
      <div className="book-class-banner">
        <p>⭐ Special Offer: Get an exclusive Grandmaster chess puzzle free when you book your first class!</p>
      </div>

      {/* Main Booking Section */}
      <section className="premium-booking-section" aria-labelledby="book-class-title">
        <div className="premium-booking-copy">
          <p className="premium-kicker">
            <span aria-hidden="true" />
            Join Rohini Chess Academy
          </p>
          <h2 id="book-class-title">Schedule Your Online Class</h2>
          <p className="premium-intro">
            Step onto the board with grandmaster strategies. 
            Fill out the form below to secure your spot in our highly sought-after online sessions.
          </p>

          <div className="premium-info-list" style={{ marginTop: '2.5rem' }}>
             <div className="premium-info-row">
                <span className="premium-info-icon" aria-hidden="true">
                  <Calendar size={22} strokeWidth={2.3} />
                </span>
                <span>
                  <strong>Flexible Scheduling</strong>
                  <small>Pick a date and time that fits your lifestyle perfectly.</small>
                </span>
             </div>
             <div className="premium-info-row">
                <span className="premium-info-icon" aria-hidden="true">
                  <Clock size={22} strokeWidth={2.3} />
                </span>
                <span>
                  <strong>Live Interactive Sessions</strong>
                  <small>Real-time game analysis and tailored guidance from the masters.</small>
                </span>
             </div>
          </div>
        </div>

        <div className="premium-form-container">
          {success ? (
            <div className="premium-success-card">
              <CheckCircle size={56} className="success-icon" />
              <h3>Checkmate! Booking Successful</h3>
              <p>Your class request has been sent securely. We will contact you soon with the next move.</p>
              <button type="button" onClick={() => setSuccess(false)} className="premium-submit-btn" style={{ marginTop: '1.5rem', width: 'auto', padding: '12px 32px' }}>
                Book Another Class
              </button>
            </div>
          ) : (
            <form className="premium-form-card" onSubmit={handleSubmit}>
              <div className="premium-form-row">
                <label>
                  Your Name*
                  <input type="text" name="name" placeholder="Enter your full name" required />
                </label>
                <label>
                  Your Email ID*
                  <input type="email" name="email" placeholder="Enter your email" required />
                </label>
              </div>

              <div className="premium-form-row">
                <label>
                  Your Phone Number*
                  <input type="tel" name="phone" placeholder="Enter your phone number" required />
                </label>
                <label>
                  Your Location*
                  <input type="text" name="location" placeholder="City, Country" required />
                </label>
              </div>
              
              <div className="premium-form-row">
                 <label>
                  Preferred Date*
                  <input type="date" name="date" required />
                </label>
                <label>
                  Preferred Time*
                  <input type="time" name="time" required />
                </label>
              </div>

              <label className="textarea-label">
                Your Message*
                <textarea name="message" placeholder="Tell us about your chess experience and goals..." rows="4" required />
              </label>

              <button type="submit" className="premium-submit-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Submitting Request...' : 'Book Class Now'}
                {!loading && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="premium-features-section">
        <div className="section-header">
          <h2>Why Train With Us?</h2>
          <p>We provide a world-class chess education designed to unlock your full potential on the board.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Crown size={28} /></div>
            <h3>Elite Coaches</h3>
            <p>Learn directly from titled players, including FIDE Masters and Grandmasters with years of teaching experience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Brain size={28} /></div>
            <h3>Custom Curriculum</h3>
            <p>Every student receives a personalized training plan targeting their specific weaknesses and playing style.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Users size={28} /></div>
            <h3>1-on-1 Attention</h3>
            <p>Get undivided attention during your classes to ensure you understand every concept deeply before moving on.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Trophy size={28} /></div>
            <h3>Tournament Prep</h3>
            <p>We prepare you mentally and strategically for competitive play, helping you handle pressure and opening preparation.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="premium-testimonials-section">
        <div className="section-header">
          <h2>Student Success Stories</h2>
          <p>Don't just take our word for it. See what our students have to say.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
            </div>
            <p className="quote">"My daughter's Elo rating jumped 300 points in just 3 months! The coaches are incredible and make complex tactics easy to understand."</p>
            <div className="author">- Sarah M. (Parent)</div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
            </div>
            <p className="quote">"I was stuck at 1200 for over a year. After taking online classes here, I finally broke 1500 and I'm still climbing. Highly recommend!"</p>
            <div className="author">- David K. (Adult Improver)</div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
              <Star fill="#ffd04d" color="#ffd04d" size={18} />
            </div>
            <p className="quote">"The post-game analysis is eye-opening. My coach spots brilliant moves and blunders I would have never noticed on my own."</p>
            <div className="author">- Michael T. (Tournament Player)</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="premium-faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our online chess classes.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
