import React from 'react';
import styles from './WelcomeSection.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Subtract from '@/icons/tag-subtract.svg';

const TAGS = {
  fundamentals: '01',
  development: '02',
  share: '03',
};

export default function WelcomeSection({ tag, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.tag, styles[`tag--${tag}`])}>
        <span>{TAGS[tag]}</span>
        <span>{tag === 'share' ? 'Share and promote' : tag}</span>
        <span className={styles.subtract}>
          <Subtract />
        </span>
      </div>
      <div className={clsx(styles.container, styles[`container--${tag}`])}> {children} </div>
    </div>
  );
}

WelcomeSection.propTypes = {
  tag: PropTypes.oneOf(Object.keys(TAGS)),
  children: PropTypes.node,
};
