import styles from './Section.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import ArrowDrop from '@/icons/arrow-drop.svg';
import TimelineIcon from '@/components/TimelineIcon';
import { useStateValue } from '@/context/StateProvider';
import useToggleVisibility from '@/helpers/useToggleVisibility';
import clsx from 'clsx';

function Section({ title, id, children, Icon, expandToggle, expandedId }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const [{ visible }] = useStateValue();
  useToggleVisibility(ref);

  const childrenIds = children.map((child) => child.props.id);

  useEffect(() => {
    if (childrenIds.includes(expandedId)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [expandedId]);

  const toggle = () => {
    const accordionId = children[0].props.id;
    if (isOpen) {
      expandToggle(null);
      setIsOpen(false);
    } else {
      expandToggle(accordionId);
      setIsOpen(true);
      window.history.replaceState({}, null, `#${accordionId}`);
    }
  };

  return (
    <div className={styles.container} role="region" onClick={toggle}>
      <h3 id={id} ref={ref} className={styles.title}>
        <button
          aria-expanded={isOpen}
          className={clsx({ [styles.active]: isOpen })}
          aria-controls="sect3"
          onClick={toggle}
        >
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
  expandToggle: PropTypes.func.isRequired,
  expandedId: PropTypes.string,
};

export default Section;
