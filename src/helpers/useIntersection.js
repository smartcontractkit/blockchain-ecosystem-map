import { useState, useEffect } from 'react';

const useIntersection = (element) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const section = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      {
        rootMargin: '-100px',
      }
    );

    section && observer.observe(section);
    return () => {
      observer.unobserve(section);
    };
  }, []);

  return isVisible;
};

export default useIntersection;
