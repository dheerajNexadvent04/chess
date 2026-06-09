import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    image: "/A4.jpeg",
    rating: "5.0/5",
    title: "Excellent Coaching & Management",
    body: "SckoolChess transformed my son's approach to learning. The coaches at this best chess solution provider in Rohini do not just teach chess, they build character, focus and resilience. After just one year, he ranked in the Delhi State U-17 Championship. Highly recommended for all school students in Rohini, Pitampura and across Delhi NCR.",
    name: "Parent of Vatsal Singla, Delhi State U-17 Medallist"
  },
  {
    id: 2,
    image: "/A2.jpeg",
    rating: "5.0/5",
    title: "Selection at the Nationals for SGFI",
    body: "My son Arnav started his chess journey on a strong note. When his interest level declined during Covid, SckoolChess coaches spent a good amount of time to understand his level. Within 6 months, Arnav's confidence improved, leading to his selection at the Nationals for SGFI in Tamil Nadu in 2023. Highly recommended for any parent looking for the best online chess classes in Rohini, Pitampura or across Delhi NCR.",
    name: "Neeti Kakkar (Arnav's Mother)"
  },
  {
    id: 3,
    image: "/A3.jpeg",
    rating: "5.0/5",
    title: "Exceptional Learning Experience",
    body: "I had the pleasure of being a student here at SckoolChess for more than 3 years now and it has been an exceptional experience that has greatly enhanced my chess skills and made me confident. SckoolChess surely has the perfect environment for growth with coaches providing a friendly and knowledgeable ambiance.",
    name: "Bhavya Sharma"
  },
  {
    id: 4,
    image: "/A1.jpeg",
    rating: "5.0/5",
    title: "Awesome Coach & Great Environment",
    body: "I have very good experience with the SckoolChess. It's a very beautiful and good atmosphere for students. I really thank Sachin sir, he is an awesome coach with a nice personality and cheerful attitude! I've learned a lot of great opening traps and mid-game strategies which I use to crush my opponents.",
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

      <div className="testimonial-carousel-inner" style={{ position: 'relative', width: '100%', maxWidth: '1080px' }}>
        <button className="testimonial-nav testimonial-nav-prev" onClick={prev} aria-label="Previous review">
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <button className="testimonial-nav testimonial-nav-next" onClick={next} aria-label="Next review">
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>

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
