import { useEffect, useState } from 'react'

const partnerSchools = [
  {
    name: 'Apeejay Sheikh Sarai',
    location: 'New Delhi',
    students: '1,500+',
    partnerSince: '2014',
    images: [
      '/s1.webp',
      '/s2.webp',
      '/s3.webp',
    ],
    description:
      'Apeejay School, Sheikh Sarai, New Delhi, was established in 1975 to cater to the educational needs of children in South Delhi. The school blends value-based learning with strong academics, broad co-curricular exposure, and technology-enabled teaching to support complete personality development.',
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
      'Apeejay School, Noida, founded in 1981 under Apeejay Education Society, is set across a spacious green campus in Sector 16A. Known for high academic standards and excellence in co-curricular activities, it has nurtured generations of confident learners with strong CBSE outcomes.',
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
      'Apeejay School, Nerul, Navi Mumbai, established in 1986, has built a long-standing reputation for holistic education from Nursery to XII. The institution is recognized for balancing academic excellence with physical, emotional, and social growth, preparing students for success at every level.',
  },
  {
    name: 'Apeejay School Kharghar',
    location: 'Kharghar',
    students: '1,000+',
    partnerSince: '2017',
    images: [
      '/sss1.jpg',
      '/sss2.jpeg',
      '/sss3.jpeg',
    ],
    description:
      "Apeejay School Kharghar reflects the Apeejay Education Society's commitment to quality education with global outlook and strong values. The school emphasizes integrated personality development, leadership, and lifelong learning through a student-first academic environment.",
  },
  {
    name: 'Apeejay School Pitampura',
    location: 'Pitampura',
    students: '2,000+',
    partnerSince: '2013',
    images: [
      '/pitam1.png',
      '/pitam2.jpg',
      '/pitam3.jpg',
      '/pitam4.jpg',
      '/pitam5.jpg',
    ],
    description:
      'Apeejay School, Pitampura, established in 1990, has consistently ranked among the top schools in Delhi. The institution is dedicated to creating a nurturing environment where students excel in both academics and sports, with a special emphasis on developing strategic thinking through its advanced chess programs.',
  },
  {
    name: 'Apeejay School Saket',
    location: 'New Delhi',
    students: '1,400+',
    partnerSince: '2018',
    images: [
      '/pitams1.jpg',
      '/pitams2.jpg',
      '/pitams3.jpg',
      '/pitams4.jpg',
      '/pitams5.jpg',
    ],
    description:
      'Apeejay School, Saket, is a premier institution in South Delhi known for its commitment to holistic excellence. The school provides a vibrant learning platform that balances traditional values with modern educational techniques, fostering a community of critical thinkers and future leaders.',
  },
]

export function PartnerSchoolsPage() {
  const partnerLogos = [
    { src: '/sc1.png', alt: 'Apeejay Education' },
    { src: '/sc2.png', alt: 'Valedra' },
    { src: '/sc3.png', alt: 'The Vasant School' },
    { src: '/sc4.png', alt: 'Partner School' },
    { src: '/sc5.png', alt: 'Partner School' },
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const [activeSchool, setActiveSchool] = useState(null)

  const reviews = [
    {
      text: "Rohini Chess Academy has been an incredible partner in nurturing our students' strategic thinking and confidence. Their structured programs and expert coaches make a real difference.",
      author: "— Principal, Apeejay School, Sheikh Sarai"
    },
    {
      text: "The chess curriculum introduced by Rohini Chess Academy has received amazing feedback from parents. It has significantly enhanced our students' concentration and cognitive skills.",
      author: "— Principal, Apeejay School, Noida"
    },
    {
      text: "Their coaches are highly professional, patient, and skilled. The academy's structured tournament preparation has helped our school win multiple inter-school chess championships.",
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
      <PartnerSchoolsHero />
      
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

function PartnerSchoolsHero() {
  return (
    <div className="partner-hero-wrapper">
      <section className="partner-hero-section">
        <div className="partner-hero-content">
        <p className="partner-hero-kicker">
          <span className="dot" aria-hidden="true"></span>
          SCHOOL PARTNERS
        </p>
        <h1>Our Partnered Schools</h1>
        <p className="partner-hero-desc">
          We are proud to collaborate with leading schools across Delhi NCR to promote chess education, creativity, critical thinking and holistic development.
        </p>
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
        <img src="/n1.jpg" alt="School assembly" className="partner-main-image" />
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
