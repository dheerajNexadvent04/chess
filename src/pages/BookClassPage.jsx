import { useState, useEffect, useRef } from 'react'
import { Clock, Calendar, CheckCircle, Crown, Users, Brain, Trophy, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { TestimonialCarousel } from '../components/TestimonialCarousel'

// TODO: Replace this with the deployed Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwd44tk1iAWW6brxlSk88PC9wk0JJ1B76xQaoC-tk276Qe3BBDk9KMWT7F2q_1c3blu/exec'

export function BookClassPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = 'Book Online Chess Classes | SckoolChess Delhi NCR'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Book your online chess class with SckoolChess — the best online chess academy in Rohini, Pitampura & Delhi NCR. Expert FIDE coaches, flexible scheduling. Free trial available.'
      )
    }
  }, [])

  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [customDate, setCustomDate] = useState('')
  const [customTime, setCustomTime] = useState('')

  const getNext14Days = () => {
    const dates = []
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }
    for (let i = 1; i <= 14; i++) {
      const d = new Date()
      d.setDate(d.getDate() + i)
      dates.push({
        value: d.toISOString().split('T')[0],
        label: d.toLocaleDateString('en-US', options)
      })
    }
    return dates
  }

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
        setSelectedDate('')
        setSelectedTime('')
        setCustomDate('')
        setCustomTime('')
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
      question: "How do I schedule my first online chess class?",
      answer: "Simply fill out the booking form above with your child's name, location, preferred date and time slot. Our team at SckoolChess will confirm your session and send batch details within 24 hours. A free trial is available for first-time students."
    },
    {
      question: "Do I need any prior chess experience?",
      answer: "No prior experience is required. SckoolChess offers structured programs for complete beginners through to advanced tournament players. Our coaches in Rohini and online assess each student individually and recommend the right batch — beginner, intermediate, or advanced."
    },
    {
      question: "How long is each session?",
      answer: "Each online chess session at SckoolChess is typically 60 minutes long. The session includes live game analysis, concept explanation, tactical puzzles, and personalised feedback from your assigned FIDE-rated or experienced coach."
    },
    {
      question: "What software do we use for the online classes?",
      answer: "SckoolChess online classes are conducted via video conferencing tools and interactive chess platforms. Students will receive all joining details and platform access links after booking their class. No special installation is required to get started."
    },
    {
      question: "What happens if I need to reschedule?",
      answer: "We understand that schedules can change. SckoolChess allows rescheduling with a minimum of 24 hours notice. Simply contact our team at +91-8447992702 or email Sckoolchess@gmail.com and we will arrange an alternative slot for you."
    },
    {
      question: "Is there a free trial class available?",
      answer: "Yes. SckoolChess offers a free trial class for all new students. Fill out the booking form above, select your preferred date and time, and our team will confirm your complimentary first session within 24 hours."
    }
  ]

  return (
    <div className="book-class-page-wrapper">
      <div className="book-class-banner">
        <p>
          <span>Special Offer: Get an exclusive</span>
          <span>Grandmaster chess puzzle free when you book your first class with SckoolChess!</span>
        </p>
      </div>

      {/* Main Booking Section */}
      <section className="premium-booking-section" aria-labelledby="book-class-title">
        <div className="premium-booking-copy">
          <p className="premium-kicker">
            <span aria-hidden="true" />
            Join SckoolChess Online
          </p>
          <h2 id="book-class-title">Schedule Your Online Class</h2>
          <p className="premium-intro">
            Step onto the board with grandmaster strategies.
            Fill out the form to secure your spot in our highly sought-after online chess sessions across Delhi NCR.
          </p>


          <div className="premium-benefits-wrapper">
            <div className="premium-info-list">
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
                  <small>Real-time game analysis and tailored guidance from top chess coaches.</small>
                </span>
              </div>
              <div className="premium-info-row">
                <span className="premium-info-icon" aria-hidden="true">
                  <Crown size={22} strokeWidth={2.3} />
                </span>
                <span>
                  <strong>Expert FIDE Coaches</strong>
                  <small>Learn from titled players with decades of competitive experience in chess.</small>
                </span>
              </div>

            </div>

            <div className="premium-booking-image-wrap">
              <img src="/student4.png" alt="Student chess training session" className="premium-booking-image" />
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
              
              <div className="premium-form-row dropdowns-row">
                <CustomDropdown
                  label="Preferred Date*"
                  options={getNext14Days()}
                  selectedValue={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="Select preferred date"
                  icon={Calendar}
                  hasCustom={true}
                  customPlaceholder="e.g. May 30, 2026 or Next Sunday"
                  customValue={customDate}
                  onCustomChange={setCustomDate}
                  name="date"
                />
                <CustomDropdown
                  label="Preferred Time Slot*"
                  options={[
                    { value: "10:00 AM", label: "10:00 AM - 11:00 AM" },
                    { value: "11:30 AM", label: "11:30 AM - 12:30 PM" },
                    { value: "02:00 PM", label: "02:00 PM - 03:00 PM" },
                    { value: "03:30 PM", label: "03:30 PM - 04:30 PM" },
                    { value: "05:00 PM", label: "05:00 PM - 06:00 PM" },
                    { value: "06:30 PM", label: "06:30 PM - 07:30 PM" },
                    { value: "08:00 PM", label: "08:00 PM - 09:00 PM" }
                  ]}
                  selectedValue={selectedTime}
                  onChange={setSelectedTime}
                  placeholder="Select preferred time slot"
                  icon={Clock}
                  hasCustom={true}
                  customPlaceholder="e.g. 09:00 AM or Evening after 7 PM"
                  customValue={customTime}
                  onCustomChange={setCustomTime}
                  name="time"
                />
              </div>

              <button type="submit" className="premium-submit-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Submitting Request...' : 'Book Class Now'}
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
            <p>Learn directly from titled players, including FIDE Masters and Grandmasters with years of teaching experience at SckoolChess — the best chess academy in Rohini and online across NCR.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Brain size={28} /></div>
            <h3>Custom Curriculum</h3>
            <p>Every student at SckoolChess receives a personalised training plan targeting their specific weaknesses and playing style — NEP-aligned and built for both school and competitive chess.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Users size={28} /></div>
            <h3>1-on-1 Attention</h3>
            <p>Get undivided attention during your online classes to ensure you understand every concept deeply before moving on. Available for students across Rohini, Pitampura, Indirapuram and pan-India.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Trophy size={28} /></div>
            <h3>Tournament Prep</h3>
            <p>We prepare you mentally and strategically for competitive play, helping you handle pressure and opening preparation — from school-level tournaments to FIDE-rated events across Delhi NCR.</p>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* FAQ Section */}
      <section className="premium-faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our online chess classes.</p>
        </div>
        <div className="faq-split-container">
          <div className="faq-image-wrapper">
            <img src="/book now.png" alt="Students studying chess" className="faq-section-image" />
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
        </div>
      </section>
    </div>
  )
}

function CustomDropdown({
  label,
  options,
  selectedValue,
  onChange,
  placeholder,
  icon: Icon,
  hasCustom,
  customPlaceholder,
  customValue,
  onCustomChange,
  name
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleSelect = (val) => {
    onChange(val)
    setIsOpen(false)
  }

  const isCustomSelected = selectedValue === "custom"
  const currentOption = options.find(o => o.value === selectedValue)
  
  let displayText = placeholder
  if (selectedValue) {
    if (selectedValue === "custom") {
      displayText = "Custom (Write your own)"
    } else if (currentOption) {
      displayText = currentOption.label
    }
  }

  return (
    <div className="custom-dropdown-container" ref={dropdownRef}>
      <label className="select-label">
        {label}
        <div 
          className={`custom-select-trigger ${isOpen ? 'active' : ''} ${selectedValue ? 'has-value' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setIsOpen(!isOpen)
            }
          }}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="trigger-text-wrapper">
            {Icon && <Icon size={16} className="trigger-icon" />}
            <span className="trigger-text">{displayText}</span>
          </div>
          <ChevronDown size={18} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
        </div>
      </label>

      {isOpen && (
        <ul className="custom-dropdown-menu" role="listbox">
          {hasCustom && (
            <li
              className={`custom-dropdown-item custom-option-item ${selectedValue === "custom" ? 'selected' : ''}`}
              onClick={() => handleSelect("custom")}
              role="option"
              aria-selected={selectedValue === "custom"}
            >
              Custom (Write your own)
            </li>
          )}
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`custom-dropdown-item ${selectedValue === opt.value ? 'selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
              role="option"
              aria-selected={selectedValue === opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {/* Visually hidden required input for native form validation */}
      <input
        type="text"
        tabIndex={-1}
        required
        value={isCustomSelected ? customValue : selectedValue}
        onChange={() => {}}
        style={{
          opacity: 0,
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none'
        }}
        name={name}
      />

      {isCustomSelected && (
        <div className="custom-write-input-container">
          <input
            type="text"
            placeholder={customPlaceholder}
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
            required
            className="custom-write-input"
          />
        </div>
      )}
    </div>
  )
}
