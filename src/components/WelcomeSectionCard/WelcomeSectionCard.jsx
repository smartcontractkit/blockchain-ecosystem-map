import React from 'react';
import styles from './WelcomeSectionCard.module.scss';
// import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function WelcomeSectionCard({ title, totalItem, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.title}>
          <span className={styles.icon}>{children}</span>
          {title}
        </div>
        <div className={styles.count}>{totalItem}</div>
      </div>
      <div className={styles.card}></div>
    </div>
  );
}

WelcomeSectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  totalItem: PropTypes.number,
  children: PropTypes.node,
};
