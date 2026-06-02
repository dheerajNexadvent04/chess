import { useEffect, useState } from 'react'

const partnerSchools = [
  {
    name: 'Apeejay School Sheikh Sarai',
    location: 'New Delhi',
    students: '1,500+',
    partnerSince: '2014',
    images: [
      '/s1.webp',
      '/s2.webp',
      '/s3.webp',
    ],
    description:
      'Apeejay School, Sheikh Sarai, New Delhi, was established in 1973 to cater to the educational needs of children in South Delhi. SckoolChess partners with this institution to bring structured, NEP-aligned chess classes that build strategic thinking and complete personality development.',
  },
  {
    name: 'Apeejay School Noida',
    location: 'Noida',
    students: '1,800+',
    partnerSince: '2015',
    images: [
      '/ss2%20(2).jpg',
      '/ss2.jpg',
      '/ss3.jpg',
    ],
    description:
      'Apeejay School, Noida, founded in 1981 under Apeejay Education Society, is set across a spacious green campus in Sector 16A. SckoolChess brings its Chess in School program here, nurturing confident learners with strong critical thinking and CBSE-aligned outcomes through expert chess coaching.',
  },
  {
    name: 'Apeejay School Nerul',
    location: 'Navi Mumbai',
    students: '1,200+',
    partnerSince: '2016',
    images: [
      '/ssss1.png',
      '/ssss2.png',
      '/ssss3.png',
    ],
    description:
      'Apeejay School Nerul, Navi Mumbai, established in 1986, has built a long-standing reputation for holistic education from Nursery to XII. SckoolChess partners with this institution to deliver structured chess training that balances academic excellence with physical, emotional, and social growth at every level.',
  },
  {
    name: 'Apeejay School Kharghar',
    location: 'Kharghar',
    students: '1,100+',
    partnerSince: '2017',
    images: [
      '/sss1.jpg',
      '/sss2.jpeg',
      '/sss3.jpeg',
    ],
    description:
      "Apeejay School Kharghar reflects the Apeejay Education Society's commitment to quality education with a global outlook and strong values. SckoolChess delivers its Chess in School program here, emphasising integrated personality development, leadership, and lifelong learning through a student-first academic environment.",
  },
  {
    name: 'Apeejay School Pitampura',
    location: 'Pitampura',
    students: '2,000+',
    partnerSince: '2018',
    images: [
      '/pitam1.png',
      '/pitam2.jpg',
      '/pitam3.jpg',
      '/pitam4.jpg',
      '/pitam5.jpg',
    ],
    description:
      'Apeejay School Pitampura, established in 1992, has consistently ranked among the top schools in Delhi. SckoolChess is the dedicated chess partner for this institution, creating a nurturing environment where students excel in both academics and sports — with a special emphasis on developing strategic thinking through its advanced chess programs.',
  },
  {
    name: 'Apeejay School Saket',
    location: 'New Delhi',
    students: '1,400+',
    partnerSince: '2016',
    images: [
      '/pitams1.jpg',
      '/pitams2.jpg',
      '/pitams3.jpg',
      '/pitams4.jpg',
      '/pitams5.jpg',
    ],
    description:
      'Apeejay School Saket is a premier institution in South Delhi, known for its commitment to holistic excellence. SckoolChess partners with this school to deliver a future-ready chess learning platform that balances traditional values with modern educational techniques, fostering a community of critical thinkers and future leaders.',
  },
]

export function PartnerSchoolsPage() {
  useEffect(() => {
    document.title = 'SckoolChess | Chess Partner for Schools in Delhi NCR'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'SckoolChess is the trusted chess partner for 20+ leading schools in Delhi, Noida & Navi Mumbai. NEP-aligned chess in school programs for every student.'
      )
    }
  }, [])

  const partnerLogos = [
    { src: '/apeejay.jpg', alt: 'Apeejay Education' },
    { src: '/shri ram global.jpg', alt: 'Shri Ram Global School' },
    { src: '/the vasant international.png', alt: 'The Vasant School' },
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const [activeSchool, setActiveSchool] = useState(null)
  const [collabModalOpen, setCollabModalOpen] = useState(false)

  const reviews = [
    {
      text: "SckoolChess has been an incredible partner in nurturing our students' strategic thinking and confidence. Their structured chess programs and expert coaches have made a real difference to our school community.",
      author: "— Principal, Apeejay School, Sheikh Sarai"
    },
    {
      text: "The Chess in School program introduced by SckoolChess has received amazing feedback from parents. It has significantly enhanced our students' concentration and cognitive skills across all year groups.",
      author: "— Principal, Apeejay School, Noida"
    },
    {
      text: "Their coaches are highly professional, patient, and skilled. SckoolChess's structured tournament preparation has helped our school win multiple inter-school chess championships across Delhi NCR.",
      author: "— Activity Coordinator, Apeejay School, Nerul"
    }
  ]

  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  const goPrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  const scrollToTimeline = () => {
    const el = document.getElementById('partner-timeline-v2')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openModal = (school) => {
    setActiveSchool(school)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setActiveSchool(null)
  }

  // Timeline Scroll Logic
  useEffect(() => {
    const section = document.getElementById('partner-timeline-v2');
    if (!section) return;

    const trackFill = section.querySelector('.partner-timeline-track-fill');
    const steps = section.querySelectorAll('.partner-school-card');
    const nodeWrappers = section.querySelectorAll('.partner-node-wrapper');
    const nodes = section.querySelectorAll('.partner-node');

    function updateTimeline() {
      const windowHeight = window.innerHeight;
      const headerHeight = 86;
      const activationY = headerHeight + (windowHeight - headerHeight) / 2;

      const track = section.querySelector('.partner-timeline-track');
      if (!track) return;

      // Pin track bottom
      if (nodeWrappers.length > 0) {
        const lastNodeRect = nodeWrappers[nodeWrappers.length - 1].getBoundingClientRect();
        const lastNodeCenterY = lastNodeRect.top + lastNodeRect.height / 2;
        
        const parentRect = track.parentElement.getBoundingClientRect();
        const offsetFromBottom = parentRect.bottom - lastNodeCenterY - 10;
        
        track.style.bottom = `${offsetFromBottom}px`;
        track.style.height = 'auto';
      }
      
      const finalTrackRect = track.getBoundingClientRect();
      const trackHeight = finalTrackRect.height || 1;
      
      let fillPixels = activationY - finalTrackRect.top;
      let fillProgress = Math.max(0, Math.min(1, fillPixels / trackHeight));

      if (trackFill) {
        trackFill.style.transform = `scaleY(${fillProgress})`;
      }

      steps.forEach((step, index) => {
        const node = nodes[index];
        const wrapper = nodeWrappers[index];
        if (!wrapper) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const nodeCenterY = wrapperRect.top + wrapperRect.height / 2;

        const isReached = (activationY + 10) >= nodeCenterY;

        if (isReached) {
          if (node) node.setAttribute('data-reached', 'true');
          step.setAttribute('data-reached', 'true');
        } else {
          if (node) node.setAttribute('data-reached', 'false');
          step.setAttribute('data-reached', 'false');
        }
      });
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateTimeline();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateTimeline();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="partners-page">
      <PartnerSchoolsHero onCollabClick={() => setCollabModalOpen(true)} />
      
      <section id="partner-timeline-v2" className="partner-timeline-v2">
        <div className="pt-container">
          <div className="pt-timeline">
            <div className="partner-timeline-track">
              <div className="partner-timeline-track-bg"></div>
              <div className="partner-timeline-track-fill"></div>
            </div>
          </div>
          
          <div className="pt-steps">
            {partnerSchools.map((school, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={school.name} className={`partner-school-card ${isEven ? 'is-even' : 'is-odd'}`}>
                  <div className="partner-node-wrapper">
                    <div className="partner-node">
                      <span className="partner-node-num">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  
                  <div className="partner-card-content">
                    <div className="partner-info-side">
                      <div className="partner-kicker">
                        <span className="dot"></span>
                        SCHOOL PARTNERS
                      </div>
                      <h2 className="partner-school-name">{school.name}</h2>
                      <p className="partner-school-desc">{school.description}</p>
                      
                      <div className="partner-chips-container">
                        <div className="partner-info-chip">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          {school.location}
                        </div>
                        <div className="partner-info-chip">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                          {school.students} Students
                        </div>
                        <div className="partner-info-chip">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          Partner Since {school.partnerSince}
                        </div>
                      </div>
                      
                      <button className="view-gallery-btn" onClick={() => openModal(school)}>
                        View Gallery
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </button>
                    </div>
                    
                    <div className="partner-image-side">
                      <img src={school.images[0]} alt={`${school.name} campus`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="partners-combined-section" aria-label="Partners reviews and logos">
        <div className="partners-combined-container">
          {/* Left Side: Review Carousel */}
          <div className="partners-review-card-wrapper">
            <div className="partners-card-header">
              <svg className="partner-header-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
              <h3>Voices from Our Partners</h3>
            </div>
            
            <div className="partners-review-body">
              <span className="quote-mark-left">“</span>
              <p className="partners-review-text">
                {reviews[activeReviewIndex].text}
              </p>
              <span className="quote-mark-right">”</span>
              <p className="partners-review-author">
                {reviews[activeReviewIndex].author}
              </p>
            </div>
            
            <div className="partners-review-footer">
              <div className="carousel-nav-left">
                <button onClick={() => setActiveReviewIndex(0)} className="nav-double-arrow" disabled={activeReviewIndex === 0} aria-label="First review">«</button>
                <button onClick={goPrevReview} className="nav-single-arrow" disabled={activeReviewIndex === 0} aria-label="Previous review">‹</button>
                <span className="tiny-dot"></span>
                <span className="tiny-dot"></span>
                <span className="tiny-dot"></span>
              </div>
              
              <div className="carousel-nav-dots">
                {reviews.map((_, i) => (
                  <button 
                    key={i} 
                    className={`carousel-nav-dot ${i === activeReviewIndex ? 'active' : ''}`} 
                    onClick={() => setActiveReviewIndex(i)} 
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              
              <div className="carousel-nav-right">
                <button onClick={goPrevReview} className="carousel-arrow-btn" aria-label="Previous review">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button onClick={goNextReview} className="carousel-arrow-btn" aria-label="Next review">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Side: Trusted Logos */}
          <div className="partners-logos-card-wrapper">
            <div className="partners-card-header">
              <svg className="partner-header-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
              <h3>Trusted by Leading Schools</h3>
            </div>
            
            <div className="partners-logos-marquee">
              <div className="partners-logos-track">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div className="partner-logo-box" key={`${logo.src}-${index}`}>
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="partners-logos-footer">
              <button onClick={scrollToTimeline} className="view-partners-link-btn">
                View All Partners
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {modalOpen && activeSchool && (
        <PartnerGalleryModal school={activeSchool} onClose={closeModal} />
      )}

      {collabModalOpen && (
        <PartnerCollabModal isOpen={collabModalOpen} onClose={() => setCollabModalOpen(false)} />
      )}
    </div>
  )
}

function PartnerGalleryModal({ school, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % school.images.length)
    }, 3200)
    return () => window.clearInterval(intervalId)
  }, [school.images.length])

  const goPrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + school.images.length) % school.images.length)
  }

  const goNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % school.images.length)
  }

  return (
    <div className="partner-modal-overlay">
      <div className="partner-modal-content">
        <button className="partner-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="partner-modal-gallery">
          <div className="partner-modal-stage">
            {school.images.map((image, index) => (
              <img
                key={`${school.name}-${image}`}
                src={image}
                alt={`${school.name} campus view ${index + 1}`}
                className={`partner-modal-image ${index === activeImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="partner-modal-controls">
            <button type="button" onClick={goPrev} aria-label="Previous image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="partner-modal-dots">
              {school.images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  className={index === activeImageIndex ? 'active' : ''}
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
            <button type="button" onClick={goNext} aria-label="Next image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PartnerSchoolsHero({ onCollabClick }) {
  return (
    <div className="partner-hero-wrapper">
      <section className="partner-hero-section">
        <div className="partner-hero-content">
        <div className="partner-hero-header-row">
          <p className="partner-hero-kicker">
            <span className="dot" aria-hidden="true"></span>
            SCHOOL PARTNERS
          </p>
          <div className="partner-hero-socials">
            <a href="https://www.linkedin.com/company/sckoolchess/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="partner-social-link" title="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://www.instagram.com/sckoolchess?igsh=bzMwaTB0YWw2d2Iz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="partner-social-link" title="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" /></svg>
            </a>
          </div>
        </div>
        <h1>Our Partnered Schools</h1>
        <p className="partner-hero-desc">
          We are proud to collaborate with leading schools across Delhi NCR to promote chess education, creativity, critical thinking and holistic development through our NEP-aligned Chess in School program.
        </p>
        <div className="partner-hero-cta-wrapper">
          <button className="partner-hero-cta-btn" onClick={onCollabClick}>
            Contact Us to Collaborate
          </button>
        </div>
        <div className="partner-hero-metrics">
          <div className="partner-metric-card">
            <div className="partner-metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M12 2v20"/><path d="M5 22V10l7-8 7 8v12"/><path d="M9 22v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"/><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>
            </div>
            <strong>20+</strong>
            <span>Partner Schools</span>
          </div>
          <div className="partner-metric-card">
            <div className="partner-metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <strong>10,000+</strong>
            <span>Students Trained</span>
          </div>
          <div className="partner-metric-card">
            <div className="partner-metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>
            </div>
            <strong>150+</strong>
            <span>Tournaments</span>
          </div>
          <div className="partner-metric-card">
            <div className="partner-metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <strong>10+</strong>
            <span>Years of Impact</span>
          </div>
        </div>
      </div>
      <div className="partner-hero-image-wrap">
        <img src="/partnered schook banner picture.png" alt="School assembly" className="partner-main-image" />
        <div className="partner-floating-badge">
          <div className="badge-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
          </div>
          <strong>Building<br/>Stronger<br/>Together</strong>
        </div>
      </div>
    </section>
    </div>
  )
}

function PartnerCollabModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(e.target)
    formData.append('Form Name', 'School Collaboration Form')
    formData.append('type', 'school_collab')

    // Extract values safely to match sheet columns used by the BookClass form
    const schoolNameVal = e.target.elements['School Name'] ? e.target.elements['School Name'].value : ''
    const contactNameVal = e.target.elements['Contact Name'] ? e.target.elements['Contact Name'].value : ''
    const designationVal = e.target.elements['Designation'] ? e.target.elements['Designation'].value : ''
    const emailVal = e.target.elements['Email'] ? e.target.elements['Email'].value : ''
    const phoneVal = e.target.elements['Phone'] ? e.target.elements['Phone'].value : ''
    const messageVal = e.target.elements['Message'] ? e.target.elements['Message'].value : ''

    formData.append('name', contactNameVal)
    formData.append('email', emailVal)
    formData.append('phone', phoneVal)
    formData.append('location', schoolNameVal)
    formData.append('date', designationVal)
    formData.append('time', messageVal || 'No message details')

    fetch('https://script.google.com/macros/s/AKfycbwd44tk1iAWW6brxlSk88PC9wk0JJ1B76xQaoC-tk276Qe3BBDk9KMWT7F2q_1c3blu/exec', {
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

  return (
    <div className="collab-modal-overlay" onClick={onClose}>
      <div className="collab-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="collab-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {success ? (
          <div className="collab-success-state">
            <div className="collab-success-icon-wrap">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E8750A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Collaboration Request Sent!</h2>
            <p>Thank you for reaching out. Our team will get back to you shortly to discuss collaboration opportunities.</p>
            <button onClick={onClose} className="collab-success-close-btn">Close</button>
          </div>
        ) : (
          <div className="collab-form-wrapper">
            <div className="collab-form-header">
              <h2>Collaborate With Us</h2>
              <p>Partner with SckoolChess to introduce NEP-aligned chess education and tournaments to your school.</p>
            </div>

            <form onSubmit={handleSubmit} className="collab-form">
              <div className="collab-form-grid">
                <div className="collab-form-group">
                  <label htmlFor="schoolName">School Name *</label>
                  <input type="text" id="schoolName" name="School Name" placeholder="Enter school name" required />
                </div>

                <div className="collab-form-group">
                  <label htmlFor="contactName">Contact Name *</label>
                  <input type="text" id="contactName" name="Contact Name" placeholder="Enter contact name" required />
                </div>

                <div className="collab-form-group">
                  <label htmlFor="designation">Designation / Role *</label>
                  <input type="text" id="designation" name="Designation" placeholder="e.g. Principal, Coordinator" required />
                </div>

                <div className="collab-form-group">
                  <label htmlFor="collabEmail">Email Address *</label>
                  <input type="email" id="collabEmail" name="Email" placeholder="Enter email address" required />
                </div>

                <div className="collab-form-group">
                  <label htmlFor="collabPhone">Phone Number *</label>
                  <input type="tel" id="collabPhone" name="Phone" placeholder="Enter phone number" required />
                </div>

                <div className="collab-form-group collab-full-width">
                  <label htmlFor="collabMessage">Message / Collaboration Details</label>
                  <textarea id="collabMessage" name="Message" placeholder="Write your requirements or details here..." rows="4"></textarea>
                </div>
              </div>

              <button type="submit" className="collab-submit-btn" disabled={loading}>
                {loading ? 'Sending Request...' : 'Send Collaboration Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
