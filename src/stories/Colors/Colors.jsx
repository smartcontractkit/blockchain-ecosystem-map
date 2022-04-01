import React from 'react';
import styles from './Colors.module.scss';
import clsx from 'clsx';

export default function Colors() {
  return (
    <div>
      <h2 className={styles.heading}>Neutral Colors</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles.neutral__900)}></div>
          <small>$neutral-900</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.neutral__800)}></div>
          <small>$neutral-800</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.neutral__700)}></div>
          <small>$neutral-600</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.neutral__100)}></div>
          <small>$neutral-100</small>
        </div>
      </div>

      <h2 className={styles.heading}>Brand Colors</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles.brand__900)}></div>
          <small>$brand-900</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.brand__800)}></div>
          <small>$brand-800</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.brand__600)}></div>
          <small>$brand-600</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.brand__200)}></div>
          <small>$brand-200</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.brand__100)}></div>
          <small>$brand-100</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.brand__50)}></div>
          <small>$brand-50</small>
        </div>
      </div>
    </div>
  );
}
