import React from 'react';
import styles from 'NavigationProgressBar.module.scss';

import PropTypes from 'prop-types';

export default function NavigationProgressBar({ progress }) {
  return <div className={styles.progress} style={{ width: progress + '%' }}></div>;
}

NavigationProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
