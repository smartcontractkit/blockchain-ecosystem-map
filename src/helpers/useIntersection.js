import { useState, useEffect } from 'react';

const useIntersection = (element, root = null, margin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const section = element.current;
    const rootMargin = !root ? margin : '-30px';
    const rootElement = root?.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      {
        root: rootElement,
        rootMargin,
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
