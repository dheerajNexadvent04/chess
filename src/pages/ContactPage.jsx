import { ChevronDown, Clock, Home, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
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

const statTargets = {
  studentsTrained: 4200,
  ratingImproved: 98,
  gmInstructors: 150,
  totalStudents: 5000,
  schools: 100,
  years: 15,
}

const contactStats = [
  { key: 'studentsTrained', suffix: '+', label: 'Students trained' },
  { key: 'ratingImproved', suffix: '%', label: 'Rating improved' },
  { key: 'gmInstructors', suffix: '+', label: 'GM instructors' },
  { key: 'totalStudents', suffix: '+', label: 'Number of Students' },
  { key: 'schools', suffix: '+', label: 'Number of Schools' },
  { key: 'years', suffix: '+', label: 'Number of Years' },
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
  const [statCounts, setStatCounts] = useState({
    studentsTrained: 0,
    ratingImproved: 0,
    gmInstructors: 0,
    totalStudents: 0,
    schools: 0,
    years: 0,
  })
  const statsSectionRef = useRef(null)
  const statsStartedRef = useRef(false)

  useEffect(() => {
    const node = statsSectionRef.current
    if (!node) return undefined

    const durationMs = 1400
    let rafId = 0

    const animate = () => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setStatCounts({
          studentsTrained: Math.round(statTargets.studentsTrained * eased),
          ratingImproved: Math.round(statTargets.ratingImproved * eased),
          gmInstructors: Math.round(statTargets.gmInstructors * eased),
          totalStudents: Math.round(statTargets.totalStudents * eased),
          schools: Math.round(statTargets.schools * eased),
          years: Math.round(statTargets.years * eased),
        })

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick)
        }
      }

      rafId = window.requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || statsStartedRef.current) return
        statsStartedRef.current = true
        animate()
        observer.disconnect()
      },
      { threshold: 0.32 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <img className="contact-hero-image" src={contactHeroImage} alt="Chess academy classroom" />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1 id="contact-title">Contact Us</h1>
          <div className="contact-hero-rule" aria-hidden="true" />
          <p>
            Have a question about batches, school programs, or trial classes? Reach out
            and our team will help you choose the right chess path.
          </p>
        </div>
      </section>

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

      <section className="contact-stats-section" ref={statsSectionRef} aria-labelledby="contact-stats-title">
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
              <div className="contact-stat" key={stat.key}>
                <strong>
                  {statCounts[stat.key].toLocaleString()}
                  {stat.suffix}
                </strong>
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
