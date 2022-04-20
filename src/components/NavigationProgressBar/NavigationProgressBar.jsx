import React from 'react';
import styles from './NavigationProgressBar.module.scss';

import PropTypes from 'prop-types';

export default function NavigationProgressBar({ progress }) {
  progress = progress <= 100 ? progress + 4.5 : 100;
  return <div className={styles.progress} style={{ width: progress + '%' }}></div>;
}

NavigationProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
