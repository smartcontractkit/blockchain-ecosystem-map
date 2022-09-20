import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import Link from 'next/link';

const Logo = ({ isHome, showBorder }) => {
  return (
    <Link href="/" passHref>
      <a className={clsx(styles.logo, { [styles.map_page_logo]: !isHome, [styles.logo_border]: showBorder })}>
        <img src="/blockchain-eco-logo.png" alt="blockchain eco logo" />
        <img src="/blockchain-eco-text.png" alt="blockchain eco logo text" />
      </a>
    </Link>
  );
};

Logo.propTypes = {
  isHome: PropTypes.bool,
  showBorder: PropTypes.bool,
};
Logo.defaultProps = {
  isHome: true,
  showBorder: false,
};
export default Logo;
