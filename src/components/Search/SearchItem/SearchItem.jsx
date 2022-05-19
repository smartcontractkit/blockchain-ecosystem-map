import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchItem.module.scss';
import OpenNewTabIcon from '@/icons/new-tab.svg';

export default function SearchItem({ href, logo, title, Icon, clear }) {
  const confirmHref = () => href.includes('http');
  const hasLogo = logo || Icon;
  return (
    <a
      href={confirmHref() ? href : `#${href}`}
      target={confirmHref() ? '_blank' : null}
      rel="noopener noreferrer"
      className={styles.item}
      onClick={() => !confirmHref() && clear()}
    >
      <span className={styles.left}>
        <span className={styles.logo}>{hasLogo && <>{logo ? <img src={logo} alt={title} /> : <Icon />}</>}</span>
        <span className={styles.text}>{title}</span>
        {confirmHref() && (
          <span className={styles.link_icon}>
            <OpenNewTabIcon />
          </span>
        )}
      </span>
    </a>
  );
}

SearchItem.propTypes = {
  href: PropTypes.string.isRequired,
  logo: PropTypes.string,
  Icon: PropTypes.func,
  title: PropTypes.string,
  clear: PropTypes.func,
};
