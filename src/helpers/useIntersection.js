import { useState, useEffect } from 'react';

const useIntersection = (element) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const elm = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      {
        // threshold: 1,
        rootMargin: '-100px',
      }
    );

    elm && observer.observe(elm);
    return () => {
      observer.unobserve(elm);
    };
  }, []);

  return isVisible;
};

export default useIntersection;
