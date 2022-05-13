import { useState, useEffect } from 'react';

const useIntersection = (element, root = null) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const section = element.current;
    const navHeight = !root ? '-100px' : '-30px';
    const rootElement = root?.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      {
        root: rootElement,
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
