import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavItem.module.scss';

export default function NavItem({ href, children, isSelected, scrollToHeading }) {
  const navItemClasses = clsx('text__short--md', styles.navItem, { [styles.selected]: isSelected });
  const id = href.replace('#', '');

  return (
    <a href={`#${id}`} className={navItemClasses} onClick={() => scrollToHeading(id)}>
      {children}
    </a>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool.isRequired,
  scrollToHeading: PropTypes.func,
};

NavItem.defaultProps = {
  isSelected: false,
};
