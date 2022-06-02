import { useEffect } from 'react';

export const useFocusOut = (containerRef, clickHandler) => {
  useEffect(() => {
    const handleFocusOut = (event) => {
      const tab = event.keyCode === 9;
      const searchOptions = event.target.className && event.target.className.includes('Search');

      if (tab && !searchOptions) {
        clickHandler();
      }
    };

    document.addEventListener('keyup', handleFocusOut);
    return () => {
      document.addEventListener('keyup', handleFocusOut);
    };
  }, [containerRef, clickHandler]);
};
