import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a short delay to allow initial rendering
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${!loading ? 'hidden' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};
