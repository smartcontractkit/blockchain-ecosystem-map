import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavItem.module.scss';

export default function NavItem({ href, children, isSelected }) {
  const navItemClasses = clsx('text__short--md', styles.navItem, { [styles.selected]: isSelected });
  return (
    <a href={href} className={navItemClasses}>
      {children}
    </a>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

NavItem.defaultProps = {
  isSelected: false,
};
