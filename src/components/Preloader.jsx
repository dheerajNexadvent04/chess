import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${!loading ? 'hidden' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};
