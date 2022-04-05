import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './InnerAccordion.module.scss';
import ExpandIcon from '@/icons/expand-icon.svg';

export default function InnerAccordion({ title, id, children, expanded, expandToggle }) {
  return (
    <React.Fragment>
      <h3>
        <button
          className={clsx('text__short--lg', styles.trigger)}
          aria-expanded={expanded}
          aria-controls={`${id}-sect`}
          id={`${id}-accordionid`}
          onClick={() => expandToggle(id)}
        >
          <span className={clsx(styles.icon)} aria-hidden="true">
            <ExpandIcon />
          </span>
          {title}
        </button>
      </h3>
      <section
        role="region"
        id={`${id}-sect`}
        aria-labelledby={`${id}-accordionid`}
        hidden={!expanded}
        className={styles.panel}
      >
        {children}
      </section>
    </React.Fragment>
  );
}

InnerAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  expandToggle: PropTypes.func.isRequired,
};
