import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import Link from 'next/link';

const Logo = ({ isHome }) => {
  return (
    <Link href="/" passHref>
      <a className={clsx(styles.logo, { [styles.map_page_logo]: !isHome })}>
        <img src="/eco-map-logo.png" alt="eco map logo" />
      </a>
    </Link>
  );
};

Logo.propTypes = {
  isHome: PropTypes.bool,
};
Logo.defaultProps = {
  isHome: true,
};
export default Logo;
