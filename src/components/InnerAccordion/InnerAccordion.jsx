import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './InnerAccordion.module.scss';
import ExpandIcon from '@/icons/expand-icon.svg';

export default function InnerAccordion({ title, id, children, expanded, expandToggle }) {
  const toggleAccordion = (e) => {
    e.preventDefault();
    e.stopPropagation();
    expandToggle(id);
  };

  return (
    <section>
      <h3 id={id} className={styles.accordion__header}>
        <a
          href={`#${id}`}
          className={clsx('text__short--lg', styles.trigger)}
          aria-expanded={expanded}
          aria-controls={`${id}-sect`}
          id={`${id}-accordionid`}
          onClick={toggleAccordion}
        >
          <span className={styles.icon} aria-hidden="true">
            <ExpandIcon />
          </span>
          {title}
        </a>
      </h3>
      <div
        role="region"
        id={`${id}-sect`}
        aria-labelledby={`${id}-accordionid`}
        className={clsx(styles.panel, { [styles.active]: expanded })}
        hidden={!expanded}
      >
        {children}
      </div>
    </section>
  );
}

InnerAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  expandToggle: PropTypes.func.isRequired,
};
