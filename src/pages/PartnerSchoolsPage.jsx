import { useEffect, useState } from 'react'

const partnerSchools = [
  {
    name: 'Apeejay Sheikh Sarai',
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
    images: [
      '/sss1.jpg',
      '/sss2.jpeg',
      '/sss3.jpeg',
    ],
    description:
      "Apeejay School Kharghar reflects the Apeejay Education Society's commitment to quality education with global outlook and strong values. The school emphasizes integrated personality development, leadership, and lifelong learning through a student-first academic environment.",
  },
]

export function PartnerSchoolsPage() {
  const partnerLogos = [
    { src: '/sc1.png', alt: 'Apeejay Education' },
    { src: '/sc2.png', alt: 'Valedra' },
    { src: '/sc3.png', alt: 'The Vasant School' },
    { src: '/logo.png', alt: 'Rohini Chess Academy' },
    { src: '/sc1.png', alt: 'Apeejay Education' },
  ]

  return (
    <div className="partners-page">
      {partnerSchools.map((school, index) => (
        <PartnerShowcaseSection
          key={school.name}
          school={school}
          schoolNumber={index + 1}
          totalSchools={partnerSchools.length}
          reverse={index % 2 === 1}
        />
      ))}

      <section className="partners-logos-section" aria-label="Partner school logos">
        <h2>Schools We Have Worked With So Far...</h2>
        <div className="partners-logos-marquee">
          <div className="partners-logos-track">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div className="partners-logo-card" key={`${logo.src}-${index}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function PartnerShowcaseSection({ school, schoolNumber, totalSchools, reverse }) {
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
    <section
      className={`partners-hero-section ${reverse ? 'reverse' : ''}`}
      aria-label={`${school.name} showcase`}
    >
      <div className="partners-copy">
        <p className="partners-kicker">
          <span aria-hidden="true" />
          School Partners
        </p>
        <h1>{school.name}</h1>
        <p>{school.description}</p>
        <div className="partners-meta">
          <span>{String(schoolNumber).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(totalSchools).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="partners-gallery">
        <div className="partners-gallery-stage">
          {school.images.map((image, index) => (
            <img
              key={`${school.name}-${image}`}
              src={image}
              alt={`${school.name} campus view ${index + 1}`}
              className={`partners-gallery-image ${index === activeImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="partners-gallery-controls">
          <button type="button" onClick={goPrev} aria-label={`Previous image for ${school.name}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14.5 6L8.5 12L14.5 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="partners-gallery-dots" aria-label={`${school.name} image indicators`}>
            {school.images.map((_, index) => (
              <button
                key={`${school.name}-dot-${index}`}
                type="button"
                className={index === activeImageIndex ? 'active' : ''}
                aria-label={`Go to image ${index + 1} for ${school.name}`}
                onClick={() => setActiveImageIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button type="button" onClick={goNext} aria-label={`Next image for ${school.name}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9.5 6L15.5 12L9.5 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
