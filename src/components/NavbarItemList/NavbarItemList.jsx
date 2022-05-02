import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from '@/context/StateProvider';
import { SET_ACTIVE_SECTION, SET_MORE_ENTITY_SHADOW, SET_PROGRESS } from '@/context/types';
import useIntersection from '@/helpers/useIntersection';

export default function NavbarItemList({ id, children }) {
  const ref = useRef();
  const navbar = useRef();
  const isVisible = useIntersection(ref, navbar);
  const [{ visible, activeSection }, dispatch] = useStateValue();

  useEffect(() => {
    const updateProgress = (section_id, addedValue) => {
      const listItem = ref.current;

      if (section_id === id) {
        const defaultItemMargin = 4.5;
        const navWidth = navbar.current.offsetWidth;
        let progressWidth = Math.floor((listItem.offsetLeft * 100) / navWidth) + defaultItemMargin;

        if (addedValue && addedValue > 0) {
          progressWidth += addedValue;
        }

        dispatch({ type: SET_PROGRESS, payload: progressWidth });
        dispatch({ type: SET_ACTIVE_SECTION, payload: section_id });
      }

      if (activeSection === 'learn' && !section_id) {
        dispatch({ type: SET_PROGRESS, payload: 0 });
        dispatch({ type: SET_ACTIVE_SECTION, payload: null });
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

  useEffect(() => {
    if (ref.current.id === 'market-li') {
      if (isVisible) {
        dispatch({ type: SET_MORE_ENTITY_SHADOW, payload: false });
      } else {
        dispatch({ type: SET_MORE_ENTITY_SHADOW, payload: true });
      }
    }
  }, [isVisible]);

  useEffect(() => {
    navbar.current = document.querySelector('#nav');
  }, []);

  return (
    <li id={`${id}-li`} ref={ref}>
      {children}
    </li>
  );
}

NavbarItemList.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
