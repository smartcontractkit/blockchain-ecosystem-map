import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExpandCollapseAllButton.module.scss';
import ExpandAll from '@/icons/expand-all.svg';
import CollapseAll from '@/icons/collapse-all.svg';

export default function ExpandCollapseAllButton({ expanded, toggleExpanded }) {
  function getContent() {
    if (expanded) {
      return (
        <>
          <CollapseAll />
          <span>Collapse all</span>
        </>
      );
    } else {
      return (
        <>
          <ExpandAll />
          <span>Expand all</span>
        </>
      );
    }
  }
  return (
    <button className={styles.btn} onClick={toggleExpanded}>
      {getContent()}
    </button>
  );
}

ExpandCollapseAllButton.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func,
};
