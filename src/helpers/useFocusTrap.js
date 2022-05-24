import { useState, useCallback, useEffect } from 'react';

export const useFocusTrap = (size, initialFocus = -1) => {
  const [currentFocus, setCurrentFocus] = useState(initialFocus);

  const handleKeyDown = useCallback(
    (e) => {
      const isKeyUp = e.keyCode === 38;
      const isKeyDown = e.keyCode === 40;

      if (size) {
        if (isKeyDown) {
          // Down arrow
          e.preventDefault();
          setCurrentFocus((currentFocus) => (currentFocus === size - 1 ? 0 : currentFocus + 1));
        } else if (isKeyUp) {
          // Up arrow
          e.preventDefault();
          setCurrentFocus((currentFocus) => (currentFocus === 0 ? size - 1 : currentFocus - 1));
        }
      }
    },
    [currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
};
