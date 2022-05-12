import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from '@/context/StateProvider';
import { SET_ACTIVE_SECTION, SET_MORE_ENTITY_SHADOW, SET_PROGRESS } from '@/context/types';
import useIntersection from '@/helpers/useIntersection';

export default function NavbarItemList({ id, navbar, navWidth, children }) {
  const ref = useRef();
  const isVisible = useIntersection(ref, navbar);
  const [{ visible, activeSection }, dispatch] = useStateValue();

  useEffect(() => {
    const updateProgress = (section_id, addedValue) => {
      const listItem = ref.current;

      if (section_id === id && navWidth && navbar) {
        const defaultItemMargin = 4.5;
        let progressWidth = Math.floor((listItem.offsetLeft * 100) / navWidth) + defaultItemMargin;

        if (addedValue) {
          progressWidth += addedValue;
        }

        dispatch({ type: SET_PROGRESS, payload: progressWidth });
        dispatch({ type: SET_ACTIVE_SECTION, payload: section_id });
        /* It will only scroll to the link of an active header if that link isn't visible on the navbar, this helps us scroll only when neccessary */
        if (!isVisible) {
          const defaultScrollLeftMargin = -10;
          navbar.current.scrollTo({
            top: 0,
            left: section_id === 'learn' ? defaultScrollLeftMargin : listItem.offsetLeft + defaultScrollLeftMargin,
            behavior: 'smooth',
          });
        }
      }

      if (activeSection === 'learn' && !section_id) {
        dispatch({ type: SET_PROGRESS, payload: 0 });
        dispatch({ type: SET_ACTIVE_SECTION, payload: null });
      }
    };

    function responsiveness() {
      switch (true) {
        case window.screen.width > 1276:
          updateProgress(visible[0], null);
          break;
        case window.screen.width >= 1024:
          updateProgress(visible[0], -2);
          break;
        case window.screen.width >= 600 && window.screen.width < 1024:
          updateProgress(visible[0], -1);
          break;
        case window.screen.width > 375 && window.screen.width <= 393:
          updateProgress(visible[0], 2);
          break;
        case window.screen.width < 360 && window.screen.width <= 375:
          updateProgress(visible[0], 3);
          break;
        default:
          updateProgress(visible[0], 1);
          break;
      }
    }

    responsiveness();
  }, [visible, navWidth]);

  useEffect(() => {
    if (ref.current.id === 'market-li') {
      if (isVisible) {
        dispatch({ type: SET_MORE_ENTITY_SHADOW, payload: false });
      } else {
        dispatch({ type: SET_MORE_ENTITY_SHADOW, payload: true });
      }
    }
  }, [isVisible]);

  return (
    <li id={`${id}-li`} ref={ref}>
      {children}
    </li>
  );
}

NavbarItemList.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  navbar: PropTypes.object,
  navWidth: PropTypes.number,
};
