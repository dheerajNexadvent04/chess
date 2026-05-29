import React, { useState, useEffect, useCallback } from 'react';

const reviewsData = [
  {
    id: 1,
    image: "/A4.jpeg",
    rating: "5.0/5",
    title: "Excellent Coaching & Management",
    body: "When Vatsal joined Rohini Chess Academy in 2018 he even didn't know how to play chess. Within a short span of 1 year, he demonstrated great skill and temperament. Recently, he got 3rd position in Delhi State under 9 championship! Really thank full to coaching and management team and wish them future success.",
    name: "Raj Singla (Vatsal's Father)"
  },
  {
    id: 2,
    image: "/A2.jpeg",
    rating: "5.0/5",
    title: "Selection at the Nationals for SGFI",
    body: "My son Arnav started his chess journey on a strong note. When his interest level declined during Covid, RCA coaches spent a good amount of time to understand his level. Within 6 months, Arnav's confidence improved, leading to his selection at the Nationals for SGFI in Tamil Nadu in 2023. Highly recommended!",
    name: "Neeti Kakkar (Arnav's Mother)"
  },
  {
    id: 3,
    image: "/A3.jpeg",
    rating: "5.0/5",
    title: "Exceptional Learning Experience",
    body: "I had the pleasure of being a student here at Rohini Chess Academy for more than 3 years now and it has been an exceptional experience that has greatly enhanced my chess skills and made me confident. RCA surely has the perfect environment for growth with coaches providing a friendly and knowledgeable ambiance.",
    name: "Bhavya Sharma"
  },
  {
    id: 4,
    image: "/A1.jpeg",
    rating: "5.0/5",
    title: "Awesome Coach & Great Environment",
    body: "I have very good experience with the Rohini Chess Academy. It's a very beautiful and good atmosphere for students. I really thank Sachin sir, he is an awesome coach with a nice personality and cheerful attitude! I've learned a lot of great opening traps and mid-game strategies which I use to crush my opponents.",
    name: "Kenisha Dem"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="figma-section testimonial-banner testimonial-carousel-container" id="events" aria-label="Customer Reviews Carousel">
      <img className="testimonial-banner-bg" src="/chess background.png" alt="" aria-hidden="true" />

      <div style={{ position: 'relative', width: '100%', maxWidth: '1080px' }}>
        <button className="testimonial-nav testimonial-nav-prev" onClick={prev} aria-label="Previous review">&#8249;</button>
        <button className="testimonial-nav testimonial-nav-next" onClick={next} aria-label="Next review">&#8250;</button>

        <div className="testimonial-3d-wrapper">
          {reviewsData.map((review, index) => {
            const stateClass = index === currentIndex ? 'active' : 'inactive';
            return (
              <div key={review.id} className={`testimonial-card slide-3d ${stateClass}`}>
                <div className="testimonial-card-left">
                  <img src={review.image} alt="Student testimonial" />
                  <div className="testimonial-overlay">
                    <div className="testimonial-frame"></div>
                    <div className="testimonial-info">
                      <span className="author-name">{review.name.toUpperCase()}</span>
                      <span className="author-loc">Delhi, India</span>
                    </div>
                    <div className="testimonial-score">4.9★</div>
                  </div>
                </div>
                <div className="testimonial-card-right">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-rated">Rated <strong>{review.rating}</strong> by 1,200+ Chess Players</p>
                  <h3>{review.title}</h3>
                  <p className="testimonial-body">{review.body}</p>
                  <div className="testimonial-avatars">
                    <img src="/A4.jpeg" alt="Reviewer" style={{ objectFit: 'cover' }} />
                    <img src="/A2.jpeg" alt="Reviewer" style={{ objectFit: 'cover' }} />
                    <img src="/A3.jpeg" alt="Reviewer" style={{ objectFit: 'cover' }} />
                    <img src="/A1.jpeg" alt="Reviewer" style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="testimonial-dots">
        {reviewsData.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot${i === currentIndex ? ' active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
