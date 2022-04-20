import styles from './Section.module.scss';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import ArrowDrop from '@/icons/arrow-drop.svg';
import TimelineIcon from '@/components/TimelineIcon';
import useIntersection from '@/helpers/useIntersection';
import { useStateValue } from '@/context/StateProvider';
import { SET_NOTVISIBLE, SET_VISIBLE } from '@/context/types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Section({ title, id, children, Icon }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const isVisible = useIntersection(ref);

  const [{ visible }, dispatch] = useStateValue();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const revealSection = (section_id) => {
    setTimeout(() => {
      if (ref.current.id === section_id) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  };

  useEffect(() => {
    const id = ref.current.id;
    if (isVisible) {
      dispatch({ type: SET_VISIBLE, payload: id });
    } else {
      dispatch({ type: SET_NOTVISIBLE, payload: id });
    }
    return () => dispatch({ type: SET_NOTVISIBLE, payload: id });
  }, [visible.length, isVisible]);

  useEffect(() => {
    const { asPath } = router;
    const section_id = asPath.split('#')[1];
    revealSection(section_id || null);
  }, []);

  return (
    <div className={styles.container} role="region">
      <h3 id={id} ref={ref} className={styles.title}>
        <button aria-expanded="true" aria-controls="sect3" aria-disabled="true" onClick={toggle}>
          <ArrowDrop style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
          {title}
        </button>
      </h3>
      <div className={styles.body}>{children}</div>
      <div className={styles.timelineIcon}>
        <TimelineIcon isActive={visible[0] === id}>
          <Icon />
        </TimelineIcon>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default Section;
