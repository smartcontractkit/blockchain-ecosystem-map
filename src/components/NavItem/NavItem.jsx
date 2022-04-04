import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavItem.module.scss';

export default function NavItem({ id, text, children, isActive }) {
  const navItemClasses = clsx('text__short--md', styles.navItem, { [styles.active]: isActive });
  return (
    <a href={`#${id}`} className={navItemClasses}>
      {children} {text}
    </a>
  );
}

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
};

NavItem.defaultProps = {
  isActive: false,
};
