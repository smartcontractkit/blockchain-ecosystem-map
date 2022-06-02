import { useEffect } from 'react';

export const useOutsideClick = (containerRef, clickHandler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInput = event.target.nodeName.toLowerCase() === 'input';
      const isSvg = event.target.nodeName.toLowerCase() === 'svg';

      if (containerRef.current && !containerRef.current.contains(event.target) && !isInput && !isSvg) {
        clickHandler(); //callback function
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
