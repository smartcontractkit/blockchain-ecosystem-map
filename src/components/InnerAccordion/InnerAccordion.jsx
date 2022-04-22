import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './InnerAccordion.module.scss';
import ExpandIcon from '@/icons/expand-icon.svg';

export default function InnerAccordion({ title, id, children, expanded, expandToggle }) {
  return (
    <section>
      <h4 id={id} className={styles.accordion__header}>
        <a
          href={`#${id}/`}
          className={clsx('text__short--lg', styles.trigger)}
          aria-expanded={expanded}
          aria-controls={`${id}-sect`}
          id={`${id}-accordionid`}
          onClick={() => expandToggle(id)}
        >
          <span className={styles.icon} aria-hidden="true">
            <ExpandIcon />
          </span>
          {title}
        </a>
      </h4>
      <div
        role="region"
        id={`${id}-sect`}
        aria-labelledby={`${id}-accordionid`}
        className={clsx(styles.panel, { [styles.active]: expanded })}
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
