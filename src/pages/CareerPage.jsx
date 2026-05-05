import { BriefcaseBusiness, MapPin, Send, Sparkles, Target, Users, Zap } from 'lucide-react'
import { useState } from 'react'

const openings = [
  'Chess Coach (Beginner Program)',
  'Tournament Prep Coach',
  'Content & Curriculum Associate',
  'School Program Coordinator',
]

export function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    role: openings[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitted) setSubmitted(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="career-page">
      <section className="career-hero" aria-labelledby="career-title">
        <div className="career-hero-media">
          <div className="career-collage" aria-label="Coaching moments collage">
            <img className="career-collage-main" src="/im2.png" alt="Students learning chess with coach" />
            <img className="career-collage-card career-collage-card-a" src="/im1.png" alt="Chess class activity" />
            <img className="career-collage-card career-collage-card-b" src="/im3.png" alt="Children practicing chess strategy" />
            <img className="career-collage-card career-collage-card-c" src="/home.png" alt="Academy chess training highlight" />
          </div>
          <div className="career-hero-badge">
            <Sparkles size={16} strokeWidth={2.4} />
            We are hiring passionate mentors
          </div>
        </div>

        <div className="career-hero-form-wrap">
          <p className="career-kicker">
            <BriefcaseBusiness size={16} strokeWidth={2.2} />
            Careers At Rohini Chess Academy
          </p>
          <h1 id="career-title">Build Young Minds Through Chess</h1>
          <p className="career-intro">
            Join our coaching team and help students grow sharper, calmer, and more
            strategic every day.
          </p>

          <form className="career-form-card" onSubmit={onSubmit}>
            <div className="career-form-grid">
              <label>
                Your Name*
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={onChange}
                />
              </label>

              <label>
                Your Email ID*
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={onChange}
                />
              </label>

              <label>
                Your Phone Number*
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={onChange}
                />
              </label>

              <label>
                Your Location*
                <div className="career-input-icon">
                  <MapPin size={15} strokeWidth={2.3} />
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="City, State"
                    value={formData.location}
                    onChange={onChange}
                  />
                </div>
              </label>
            </div>

            <label className="career-role-select">
              Position*
              <select name="role" value={formData.role} onChange={onChange}>
                {openings.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Your Message*
              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell us about your coaching experience, tournament achievements, or why you want to join."
                value={formData.message}
                onChange={onChange}
              />
            </label>

            <div className="career-form-foot">
              <button type="submit">
                Submit Application
                <Send size={16} strokeWidth={2.4} />
              </button>
              <span>{formData.message.length}/300</span>
            </div>

            {submitted ? (
              <p className="career-submit-note">
                Thanks! We received your details and our hiring team will contact you.
              </p>
            ) : null}
          </form>
        </div>
      </section>
      
      <section className="career-services">
        <div className="career-services-header">
          <h2>Empowering Your Coaching Career</h2>
          <p>Join a community where passion meets professional growth. We provide the tools and support you need to inspire the next generation of chess masters.</p>
        </div>
        <div className="career-services-grid">
          <div className="career-service-card">
            <div className="service-icon-box">
              <Users size={28} strokeWidth={2.2} />
            </div>
            <span className="service-number">01</span>
            <h3>Expert Mentorship</h3>
            <p>Work alongside Grandmasters and experienced coaches to refine your teaching techniques and chess knowledge.</p>
            <button className="apply-now-btn" onClick={() => document.getElementById('career-title').scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
          </div>

          <div className="career-service-card">
            <div className="service-icon-box">
              <Target size={28} strokeWidth={2.2} />
            </div>
            <span className="service-number">02</span>
            <h3>Global Community</h3>
            <p>Connect with a worldwide network of chess enthusiasts and educators dedicated to student success.</p>
            <button className="apply-now-btn" onClick={() => document.getElementById('career-title').scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
          </div>

          <div className="career-service-card">
            <div className="service-icon-box">
              <Zap size={28} strokeWidth={2.2} />
            </div>
            <span className="service-number">03</span>
            <h3>Modern Curriculum</h3>
            <p>Utilize our cutting-edge training materials and digital platforms to deliver engaging and effective lessons.</p>
            <button className="apply-now-btn" onClick={() => document.getElementById('career-title').scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}
