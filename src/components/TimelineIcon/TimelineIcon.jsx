import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './TimelineIcon.module.scss';

export default function TimelineIcon({ isActive, children }) {
  const iconClasses = clsx(styles.timeline__icon, { [styles.active]: isActive });

  return <div className={iconClasses}>{children}</div>;
}

TimelineIcon.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
