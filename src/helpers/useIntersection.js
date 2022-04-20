import { useState, useEffect } from 'react';

const useIntersection = (element) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const section = element.current;
    const option = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry.target);
      setState(entry.isIntersecting);
    }, option);

    section && observer.observe(section);
    return () => {
      observer.unobserve(section);
    };
  }, []);

  return isVisible;
};

export default useIntersection;
