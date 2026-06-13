import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`preloader ${!loading ? 'hidden' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};
