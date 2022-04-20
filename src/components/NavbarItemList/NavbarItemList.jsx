import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from '@/context/StateProvider';
import { SET_ACTIVESECTION, SET_PROGRESS } from '@/context/types';

export default function NavbarItemList({ id, navbar, children }) {
  const ref = useRef();
  const [{ visible, activeSection }, dispatch] = useStateValue();

  useEffect(() => {
    const updateProgress = (section_id, addedValue) => {
      const listItem = ref.current;
      if (section_id === id) {
        const navwidth = navbar.current.offsetWidth;
        let left = Math.floor((listItem.offsetLeft * 100) / navwidth);
        if (addedValue && addedValue > 0) {
          left += addedValue;
        }

        dispatch({ type: SET_PROGRESS, payload: left });
        dispatch({ type: SET_ACTIVESECTION, payload: section_id });
      }

      if (activeSection === 'learn' && !section_id) {
        dispatch({ type: SET_PROGRESS, payload: 0 });
        dispatch({ type: SET_ACTIVESECTION, payload: null });
      }
    };

    updateProgress(visible[0], null);

    window.addEventListener(
      'resize',
      function () {
        /* In the future for responsiveness if needed we can check for screen width to know which rough value can be added */
        updateProgress(visible[0], null);
      },
      true
    );

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [visible]);

  return (
    <li id={`${id}-li`} ref={ref}>
      {children}
    </li>
  );
}

NavbarItemList.propTypes = {
  id: PropTypes.string.isRequired,
  navbar: PropTypes.object,
  children: PropTypes.node.isRequired,
};
