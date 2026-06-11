import { useState, useEffect } from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvBydd6I0jpFWm4UPgRIUrJkyttZwI8gC-FSV5WMVzFkg1hJdJ1n041jF80eIemf4h/exec'

export function UnifiedPopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState('booking') // 'booking' or 'inquiry'
  const [sourceSection, setSourceSection] = useState('General')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const handleOpen = (e) => {
      setFormType(e.detail.type || 'booking')
      setSourceSection(e.detail.section || 'General')
      setSuccess(false)
      setLoading(false)
      setIsOpen(true)
    }
    window.addEventListener('open-custom-modal', handleOpen)
    return () => window.removeEventListener('open-custom-modal', handleOpen)
  }, [])

  if (!isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(e.target)
    formData.append('type', formType)
    formData.append('source_page', window.location.pathname)
    formData.append('source_section', sourceSection)
    formData.append('Form Name', formType === 'booking' ? 'Booking Form Modal' : 'Inquiry Form Modal')
    formData.append('date', new Date().toLocaleString())

    // Map fields for the sheet
    const nameVal = e.target.elements['name'] ? e.target.elements['name'].value : ''
    const emailVal = e.target.elements['email'] ? e.target.elements['email'].value : ''
    const phoneVal = e.target.elements['phone'] ? e.target.elements['phone'].value : ''
    const locationVal = e.target.elements['location'] ? e.target.elements['location'].value : ''
    const messageVal = e.target.elements['message'] ? e.target.elements['message'].value : ''
    const schoolOrgVal = e.target.elements['school_org'] ? e.target.elements['school_org'].value : ''

    // Ensure unified column mapping for Google Sheets Apps Script:
    formData.append('name', nameVal)
    formData.append('email', emailVal)
    formData.append('phone', phoneVal)
    formData.append('location', locationVal || schoolOrgVal || 'Not specified')
    formData.append('time', messageVal || 'No message details')

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: new URLSearchParams(formData),
      mode: 'no-cors'
    })
      .then(() => {
        setLoading(false)
        setSuccess(true)
        e.target.reset()
      })
      .catch((error) => {
        console.error('Error submitting form!', error.message)
        setLoading(false)
      })
  }

  return (
    <div className="collab-modal-overlay" onClick={handleClose}>
      <div className="collab-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="collab-modal-close" onClick={handleClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {success ? (
          <div className="collab-success-state" style={{ textAlign: 'center', padding: '20px 0' }}>
            <div className="collab-success-icon-wrap" style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '20px' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E8750A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Submission Successful!</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginTop: '10px' }}>
              {formType === 'booking' 
                ? 'Your online class request has been sent successfully. Our team will contact you within 24 hours.' 
                : 'Thank you for reaching out. Our team will get back to you shortly.'}
            </p>
            <button onClick={handleClose} className="collab-success-close-btn" style={{ marginTop: '24px' }}>Close</button>
          </div>
        ) : (
          <div className="collab-form-wrapper">
            <div className="collab-form-header">
              <h2>{formType === 'booking' ? 'Book Online Class' : 'Get In Touch / Collaborate'}</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.4' }}>
                {formType === 'booking' 
                  ? 'Sign up for a complimentary online chess session with our certified master coaches.' 
                  : 'Partner with SckoolChess or make general inquiries about our program and centers.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="collab-form">
              <div className="collab-form-grid">
                <div className="collab-form-group collab-full-width">
                  <label htmlFor="modalName">Full Name *</label>
                  <input type="text" id="modalName" name="name" placeholder="Enter your full name" required />
                </div>

                <div className="collab-form-group">
                  <label htmlFor="modalEmail">Email Address *</label>
                  <input type="email" id="modalEmail" name="email" placeholder="Enter your email address" required />
                </div>

                <div className="collab-form-group">
                  <label htmlFor="modalPhone">Phone Number *</label>
                  <input type="tel" id="modalPhone" name="phone" placeholder="Enter your phone number" required />
                </div>

                {formType === 'booking' ? (
                  <div className="collab-form-group collab-full-width">
                    <label htmlFor="modalLocation">Location (City, Country) *</label>
                    <input type="text" id="modalLocation" name="location" placeholder="e.g. Rohini, Delhi or Paschim Vihar" required />
                  </div>
                ) : (
                  <>
                    <div className="collab-form-group collab-full-width">
                      <label htmlFor="modalSchool">School / Organization Name</label>
                      <input type="text" id="modalSchool" name="school_org" placeholder="Enter school or company name (optional)" />
                    </div>

                    <div className="collab-form-group collab-full-width">
                      <label htmlFor="modalMessage">Message / Collaboration Details *</label>
                      <textarea id="modalMessage" name="message" placeholder="Write your requirements or details here..." rows="4" required></textarea>
                    </div>
                  </>
                )}
              </div>

              <button type="submit" className="collab-submit-btn" disabled={loading} style={{ background: '#E8750A', borderColor: '#E8750A', color: '#ffffff' }}>
                {loading ? 'Submitting...' : (formType === 'booking' ? 'Book Free Trial Class' : 'Submit Inquiry')}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
