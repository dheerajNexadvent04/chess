import { useEffect } from 'react';

export function useScrollReveal(dependencies = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    // Immediately reveal elements already in the viewport (handles post-navigation top-of-page content)
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('active');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Short fallback to catch any elements the observer missed
    const fallbackTimer = setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains('active')) {
          el.classList.add('active');
        }
      });
    }, 250);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearTimeout(fallbackTimer);
    };
  }, dependencies);
}
