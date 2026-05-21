import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AchievementPage() {
  useScrollReveal();

  const achievements = [
    '/gal1.jpg', '/gal2.jpg', '/gal3.jpg', '/gal4.jpg', 
    '/gal5.jpeg', '/gal6.jpeg', '/gal7.jpeg', '/gal8.jpg', 
    '/gal9.jpeg', '/gal10.jpeg', '/gal11.jpeg', '/gal12.jpeg'
  ];

  const learningMoments = [
    '/gnn1.jpeg', '/gnn2.jpg', '/gnn3.jpg', '/gnn4.jpg', 
    '/gnn5.jpg', '/gnn6.jpeg', '/gnn7.jpg', '/gnn8.jpg'
  ];

  return (
    <div className="achievement-page" >
      <section className="gallery-section reveal fade-up">
        <h2 className="gallery-heading">Our Achievements</h2>
        <div className="gallery-marquee-container right-to-left">
          <div className="gallery-marquee-track">
            {/* Double the array for seamless infinite scroll */}
            {[...achievements, ...achievements].map((src, index) => (
              <div key={`ach-${index}`} className="gallery-card">
                <img src={src} alt={`Achievement ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section reveal fade-up">
        <h2 className="gallery-heading">Our Learning Moments</h2>
        <div className="gallery-marquee-container left-to-right">
          <div className="gallery-marquee-track">
            {/* Double the array for seamless infinite scroll */}
            {[...learningMoments, ...learningMoments].map((src, index) => (
              <div key={`lm-${index}`} className="gallery-card">
                <img src={src} alt={`Learning Moment ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
