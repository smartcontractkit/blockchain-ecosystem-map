import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import Link from 'next/link';
const { NEXT_BLOCKCHAIN_URL } = process.env;

const Logo = ({ isHome, showBorder }) => {
  return (
    <Link href={NEXT_BLOCKCHAIN_URL || '#'} passHref>
      <a className={clsx(styles.logo, { [styles.map_page_logo]: !isHome, [styles.logo_border]: showBorder })}>
        <img src="/logo.svg" alt="blockchain logo" />
        <img src="/blockchain-logo-text.svg" alt="blockchain logo text" />
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
