import { useState, useEffect } from 'react';

const useIntersection = (element) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const section = element.current;
    const navHeight = '-100px';

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      {
        rootMargin: navHeight,
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
