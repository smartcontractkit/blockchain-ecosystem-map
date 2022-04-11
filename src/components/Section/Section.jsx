import styles from './Section.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ArrowDrop from '@/icons/arrow-drop.svg';

function Section({ title, id, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} role="region">
      <h3 id={id} className={styles.title}>
        <button aria-expanded="true" aria-controls="sect3" aria-disabled="true" onClick={toggle}>
          <ArrowDrop style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
          {title}
        </button>
      </h3>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
