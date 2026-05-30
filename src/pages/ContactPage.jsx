import { ChevronDown, Clock, Home, Phone } from 'lucide-react'
import { useState } from 'react'
import { contactDetails } from '../data/siteContent'

const contactHeroImage = '/im1.png'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Number',
    text: contactDetails.phone,
    href: `tel:${contactDetails.phone}`,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    text: 'Monday to Saturday, 09:00 AM - 06:00 PM',
  },
  {
    icon: Home,
    title: 'Address',
    text: 'Rohini, Delhi, India',
  },
]

const contactStats = [
  { value: '4,200+', label: 'Students trained' },
  { value: '98%', label: 'Rating improved' },
  { value: '100+', label: 'Number of Schools' },
  { value: '15+', label: 'Number of Years' },
]

const faqs = [
  {
    question: 'How can I schedule a free trial class?',
    answer:
      'Send us your child age, current chess level, and preferred timing. Our team will suggest the best beginner, intermediate, or advanced batch.',
    image: '/im1.png',
  },
  {
    question: 'Do you offer online and offline chess classes?',
    answer:
      'Yes. We conduct structured online sessions and in-person classes for students in Rohini and nearby Delhi NCR locations.',
    image: '/im2.png',
  },
  {
    question: 'Which age group can join Rohini Chess Academy?',
    answer:
      'Children can start as beginners from a young age, and we also train school students preparing for tournaments and rating improvement.',
    image: '/im3.png',
  },
  {
    question: 'Do you provide school chess programs?',
    answer:
      'Yes. We partner with schools for regular chess sessions, curriculum-based learning, tournament preparation, and chess-in-school programs.',
    image: '/im1.png',
  },
]

export function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <div className="contact-page">

      <section className="contact-form-section" aria-labelledby="contact-form-title">
        <div className="contact-form-copy">
          <p className="contact-kicker">
            <span aria-hidden="true" />
            How it works
          </p>
          <h2 id="contact-form-title">We'd Love to Hear From You</h2>
          <p className="contact-form-intro">
            Tell us what you are looking for and our team will get back with batch
            timings, trial class details, and the right program for your child.
          </p>

          <div className="contact-info-list">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="contact-info-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2.3} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </>
              )

              return item.href ? (
                <a className="contact-info-row" href={item.href} key={item.title}>
                  {content}
                </a>
              ) : (
                <div className="contact-info-row" key={item.title}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>

        <form className="contact-form-card" onSubmit={(event) => event.preventDefault()}>
          <label>
            Your Name
            <input type="text" name="name" placeholder="Enter your name" />
          </label>
          <label>
            Your Email
            <input type="email" name="email" placeholder="Enter your email" />
          </label>
          <label>
            Your Message
            <textarea name="message" placeholder="Write your message" rows="5" />
          </label>
          <button type="submit">Submit Now</button>
        </form>
      </section>

      {/* ── Our Branches Section ── */}
      <section className="contact-branches-section" aria-labelledby="contact-branches-title">
        <div className="contact-branches-header">
          <h2 id="contact-branches-title">Our Academy Branches</h2>
          <p className="contact-branches-intro">
            We conduct structured offline coaching classes at our main branches. Drop by for a trial or session during availability hours.
          </p>
        </div>

        <div className="contact-branches-list">
          <div className="branch-card">
            <div className="branch-card-details">
              <h3>Delhi (Rohini)</h3>
              <div className="branch-info">
                <p>
                  <strong>Location:</strong>
                  140, 2nd Floor, Pocket-21, Sector-24, Rohini, Delhi-110085
                </p>
                <p>
                  <strong>Telephone:</strong>
                  +91 95821 35221, +91 84479 92702
                </p>
                <p>
                  <strong>Email:</strong>
                  sckoolchess@gmail.com
                </p>
                <p>
                  <strong>Availability Hours:</strong>
                  Wed & Fri 4-6 pm | Sat & Sun 2-7 pm
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=140,+Pocket+21,+Sector+24,+Rohini,+Delhi,+110085" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="branch-maps-link"
              >
                Get Directions on Google Maps ↗
              </a>
            </div>
            <div className="branch-card-map">
              <iframe
                title="Google Maps - Rohini Branch"
                src="https://maps.google.com/maps?q=140,%20Pocket%2021,%20Sector%2024,%20Rohini,%20Delhi%20110085&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="branch-card">
            <div className="branch-card-details">
              <h3>Indirapuram Center</h3>
              <div className="branch-info">
                <p>
                  <strong>Location:</strong>
                  FSSF Rd, Nyay Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014
                </p>
                <p>
                  <strong>Telephone:</strong>
                  +91 95821 35221, +91 84479 92702
                </p>
                <p>
                  <strong>Email:</strong>
                  sckoolchess@gmail.com
                </p>
                <p>
                  <strong>Availability Hours:</strong>
                  Mon to Fri 4pm to 7pm
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=FSSF+Rd,+Nyay+Khand+I,+Indirapuram,+Ghaziabad,+Uttar+Pradesh+201014" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="branch-maps-link"
              >
                Get Directions on Google Maps ↗
              </a>
            </div>
            <div className="branch-card-map">
              <iframe
                title="Google Maps - Indirapuram Branch"
                src="https://maps.google.com/maps?q=FSSF%20Rd,%20Nyay%20Khand%20I,%20Indirapuram,%20Ghaziabad%20201014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-stats-section" aria-labelledby="contact-stats-title">
        <div className="contact-stats-media">
          <img src="/im2.png" alt="Students learning chess strategy" />
        </div>

        <div className="contact-stats-copy">
          <p className="contact-kicker">
            <span aria-hidden="true" />
            Statistics
          </p>
          <h2 id="contact-stats-title">Rohini Chess by the Numbers</h2>
          <p>
            From first-time learners to competitive players, our programs are built
            around steady progress, strong fundamentals, and confident decision-making.
          </p>

          <div className="contact-stats-grid">
            {contactStats.map((stat) => (
              <div className="contact-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-faq-section" aria-labelledby="contact-faq-title">
        <div className="contact-faq-copy">
          <p className="contact-kicker">
            <span aria-hidden="true" />
            FAQ
          </p>
          <h2 id="contact-faq-title">Your Questions Answered</h2>

          <div className="contact-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index

              return (
                <div className={`contact-faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                  <button
                    type="button"
                    className="contact-faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`contact-faq-answer-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} strokeWidth={2.3} aria-hidden="true" />
                  </button>
                  <div
                    id={`contact-faq-answer-${index}`}
                    className="contact-faq-answer"
                    aria-hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="contact-faq-media">
          <img src={faqs[Math.max(openFaqIndex, 0)].image} alt="Chess academy students" />
        </div>
      </section>
    </div>
  )
}
