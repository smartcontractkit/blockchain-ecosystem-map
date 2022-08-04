import React from 'react';
import styles from './WelcomeSectionCard.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NewTabIcon from '@/icons/new-tab.svg';

export default function WelcomeSectionCard({ title, totalItem, children }) {
  const linkText = title.toLowerCase();

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.title}>
          <span className={styles.icon}>{children}</span>
          {title}
        </div>
        <div className={styles.count}>{totalItem}</div>
      </div>
      <div className={styles.card}>
        <Link href={`/map#${linkText}`} passHref>
          <a className={styles.overlay}>
            <span className={styles.link}>
              <NewTabIcon />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}

WelcomeSectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  totalItem: PropTypes.number,
  children: PropTypes.node,
};
