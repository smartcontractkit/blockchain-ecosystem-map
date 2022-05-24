import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchItem.module.scss';
import OpenNewTabIcon from '@/icons/new-tab.svg';

export default function SearchItem({ href, logo, title, Icon, clear, focus, setFocus }) {
  const linkRef = useRef(null);
  const confirmHref = () => href.includes('http');
  const hasLogo = logo || Icon;

  useEffect(() => {
    if (focus) {
      linkRef.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    // setting focus to that element when it is selected
    setFocus();
  }, [href, setFocus]);

  const handleClick = () => {
    handleSelect();
    if (!confirmHref()) {
      clear();
    }
  };

  return (
    <a
      ref={linkRef}
      href={confirmHref() ? href : `#${href}`}
      target={confirmHref() ? '_blank' : null}
      rel="noopener noreferrer"
      className={styles.item}
      onKeyPress={handleSelect}
      onClick={handleClick}
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
  focus: PropTypes.bool,
  setFocus: PropTypes.func,
  clear: PropTypes.func,
};
