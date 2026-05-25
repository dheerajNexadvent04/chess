import React, { useState, useEffect, useCallback } from 'react';

const reviewsData = [
  {
    id: 1,
    image: "/r1.png",
    rating: "4.9/5",
    title: "The coaching sessions are engaging and effective—they've really improved my game!",
    body: "My coach explained strategies clearly and helped me sharpen my skills. Now I'm winning more games!",
    name: "Tyler G"
  },
  {
    id: 2,
    image: "/r2.png",
    rating: "5.0/5",
    title: "A phenomenal learning experience for kids!",
    body: "The instructors are patient and know exactly how to keep the children engaged. Highly recommended.",
    name: "Sarah M"
  },
  {
    id: 3,
    image: "/r3.png",
    rating: "4.8/5",
    title: "Best chess academy we've found online.",
    body: "The structured curriculum and interactive puzzles have made a huge difference in my son's logical thinking.",
    name: "David K"
  },
  {
    id: 4,
    image: "/r4.png",
    rating: "5.0/5",
    title: "Incredible growth in just a few months!",
    body: "The personalized training plans designed for every skill level are truly outstanding.",
    name: "Anita R"
  },
  {
    id: 5,
    image: "/r5.png",
    rating: "4.9/5",
    title: "Highly engaging coaches and superb lessons!",
    body: "The interactive classes have built immense confidence in my daughter's tournament play.",
    name: "Vikram S"
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
                    <img src="/r1.png" alt="Reviewer" />
                    <img src="/r2.png" alt="Reviewer" />
                    <img src="/r3.png" alt="Reviewer" />
                    <img src="/r4.png" alt="Reviewer" />
                    <img src="/r5.png" alt="Reviewer" />
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
