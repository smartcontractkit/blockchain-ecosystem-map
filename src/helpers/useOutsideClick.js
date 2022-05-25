import { useEffect } from 'react';

export const useOutsideClick = (containerRef, clickHandler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInput = event.target.nodeName.toLowerCase() === 'input';
      if (containerRef.current && !containerRef.current.contains(event.target) && !isInput) {
        clickHandler();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, clickHandler]);
};
