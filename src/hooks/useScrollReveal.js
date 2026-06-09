import { useEffect } from 'react';

export function useScrollReveal(dependencies = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing once revealed
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Fallback: force active class after a short delay in case IntersectionObserver doesn't fire
    const fallbackTimer = setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains('active')) {
          el.classList.add('active');
        }
      });
    }, 1000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearTimeout(fallbackTimer);
    };
  }, dependencies);
}
