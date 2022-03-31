import React from 'react';
import styles from './Colors.module.scss';
import clsx from 'clsx';

export default function Colors() {
  return (
    <div>
      <h2>Brand Colors</h2>
      <div className={clsx(styles.box, styles.brand_900)}></div>
    </div>
  );
}
