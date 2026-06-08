import { ChevronDown, Clock, Home, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import { contactDetails } from '../data/siteContent'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwd44tk1iAWW6brxlSk88PC9wk0JJ1B76xQaoC-tk276Qe3BBDk9KMWT7F2q_1c3blu/exec'

const contactHeroImage = '/im1.png'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Number',
    text: '+91 95821 35221, +91 84479 92702',
    href: 'tel:+918447992702',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    text: 'Rohini: Wed & Fri 4-6 pm, Sat & Sun 2-7 pm | Indirapuram: Mon to Fri 4-7 pm',
  },
  {
    icon: Home,
    title: 'Address',
    text: 'Rohini (Sector-24, Delhi) & Indirapuram (Ghaziabad, UP), Delhi NCR',
  },
]

const contactStats = [
  { value: '5,000+', label: 'Students Trained' },
  { value: '98%', label: 'Rating Improved' },
  { value: '22+', label: 'Number of Schools' },
  { value: '10+', label: 'Number of Years' },
]

const faqs = [
  {
    question: 'What is the Sckoolchess Future Ready Learning Program?',
    answer:
      'Sckoolchess offers a structured Future Ready Learning Program that helps schools develop critical thinking, concentration, creativity, decision-making, and problem-solving skills among students through professional chess education and activity-based learning.',
  },
  {
    question: 'How does chess support the National Education Policy (NEP)?',
    answer:
      'Chess strongly aligns with NEP objectives by encouraging experiential learning, analytical thinking, cognitive development, discipline, holistic growth, and skill-based education in an engaging and student-friendly manner.',
  },
  {
    question: 'What is Chess in School (CIS) by AICF?',
    answer:
      'Chess in School (CIS) is an initiative supported by the All India Chess Federation (AICF) to promote structured chess education and grassroots chess development in schools across India.',
  },
  {
    question: 'Does Sckoolchess work with private and international schools?',
    answer:
      'Yes, Sckoolchess collaborates with private schools, international schools, CBSE schools, and educational institutions for chess curriculum programs, workshops, tournaments, and extracurricular learning initiatives.',
  },
  {
    question: 'Does Sckoolchess have training experience across multiple cities?',
    answer:
      'Yes, Sckoolchess has experience training students across Rohini, Pitampura, Dwarka, Noida, Indirapuram, Gurgaon, Delhi NCR, and Navi Mumbai through both online and offline chess programs.',
  },
  {
    question: 'Does Sckoolchess use experienced and FIDE-rated coaches?',
    answer:
      'Yes, Sckoolchess works with experienced trainers, FIDE-rated coaches, tournament players, and student-focused mentors to provide structured and professional chess training.',
  },
  {
    question: 'What support does Sckoolchess provide to schools?',
    answer:
      'Sckoolchess provides complete chess ecosystem support including curriculum planning, specialized study material, chess kits, tournament support, workshops, chess activities, and inter-school competition management.',
  },
  {
    question: 'What benefits do schools get by introducing chess education?',
    answer:
      'Chess education helps schools promote concentration, logical thinking, leadership, discipline, student engagement, confidence, strategic thinking, and future-ready learning skills among students.',
  },
  {
    question: 'Can Sckoolchess organize chess tournaments and activity programs?',
    answer:
      'Yes, Sckoolchess conducts intra-school tournaments, inter-school competitions, chess festivals, workshops, summer camps, and chess activity programs for schools and educational institutions.',
  },
  {
    question: 'Why do principals, coordinators, and school administrators choose Sckoolchess?',
    answer:
      'Schools choose Sckoolchess for its structured implementation approach, NEP-aligned programs, experienced coaching team, professional school support, tournament ecosystem, and strong focus on holistic student development.',
  },
]

export function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(e.target)
    formData.append('type', 'contact_inquiry')
    formData.append('source_page', window.location.pathname)
    formData.append('source_section', 'Contact Us Form')
    formData.append('Form Name', 'Contact Page Form')
    formData.append('date', new Date().toLocaleString())

    // Map fields for the sheet
    const nameVal = e.target.elements['name'] ? e.target.elements['name'].value : ''
    const emailVal = e.target.elements['email'] ? e.target.elements['email'].value : ''
    const phoneVal = e.target.elements['phone'] ? e.target.elements['phone'].value : ''
    const messageVal = e.target.elements['message'] ? e.target.elements['message'].value : ''

    formData.append('name', nameVal)
    formData.append('email', emailVal)
    formData.append('phone', phoneVal)
    formData.append('time', messageVal || 'No message details')

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        setLoading(false)
        setSuccess(true)
        e.target.reset()
        setTimeout(() => setSuccess(false), 5000)
      })
      .catch((error) => {
        console.error('Error submitting form!', error.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    document.title = 'Contact SckoolChess | Chess Classes in Rohini Delhi NCR'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Get in touch with SckoolChess — the best chess solution provider in Delhi. Find chess classes in Pitampura, Indirapuram & online across Delhi NCR. Book a free trial today.'
      )
    }
  }, [])

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
            timings, trial class details, and the right chess program for your child in Delhi or online.
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

        <form className="contact-form-card" onSubmit={handleSubmit}>
          <label>
            Your Name *
            <input type="text" name="name" placeholder="Enter your name" required />
          </label>
          <label>
            Your Email *
            <input type="email" name="email" placeholder="Enter your email" required />
          </label>
          <label>
            Your Phone Number *
            <input type="tel" name="phone" placeholder="Enter your phone number" required />
          </label>
          <label>
            Your Message *
            <textarea name="message" placeholder="Write your message" rows="5" required />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Now'}
          </button>
          {success && (
            <p style={{ color: '#4ade80', fontSize: '14px', marginTop: '12px', textAlign: 'center', fontWeight: 'bold' }}>
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </section>

      {/* ── Our Branches Section ── */}
      <section className="contact-branches-section" aria-labelledby="contact-branches-title">
        <div className="contact-branches-header">
          <h2 id="contact-branches-title">Our Solution Provider Branches</h2>
          <p className="contact-branches-intro">
            We conduct structured offline coaching classes at our main branches. Drop by for a trial or session during availability hours.
          </p>
        </div>

        <div className="contact-branches-list">
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
                  Sckoolchess@gmail.com
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
                  Sckoolchess@gmail.com
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
        </div>
      </section>

      <section className="contact-stats-section" aria-labelledby="contact-stats-title">
        <div className="contact-stats-media">
          <img src="/contact us.png" alt="Students learning chess strategy" />
        </div>

        <div className="contact-stats-copy">
          <p className="contact-kicker">
            <span aria-hidden="true" />
            Statistics
          </p>
          <h2 id="contact-stats-title">SckoolChess by the Numbers</h2>
          <p>
            From first-time learners to competitive players, our programs are built
            around steady progress, strong fundamentals, and confident decision-making — across Rohini, Pitampura, Indirapuram and online across Delhi NCR.
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

          <div className="contact-faq-list partner-faq-scroll-list">
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
          <img src="/contact us 2.png" alt="Chess solution provider students" />
        </div>
      </section>
    </div>
  )
}
