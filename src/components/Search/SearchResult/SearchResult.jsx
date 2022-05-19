import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.scss';
import SearchItem from '../SearchItem';
import { useState } from 'react';

export default function SearchResult({ blockchains, chapters, resources, sections, clear }) {
  const [showResources, setShowResources] = useState(false);
  const [showBlockchain, setShowBlockchain] = useState(false);
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    setShowResources(resources.length > 0);
    setShowSections(chapters.length > 0 || sections.length > 0);
    setShowBlockchain(blockchains.length > 0);
  }, [blockchains, chapters, resources, sections]);
  return (
    <div className={styles.results}>
      <div className={styles.content}>
        {showBlockchain && (
          <div className={styles.section}>
            <h4>Blockchain</h4>
            {blockchains.map(({ url, logo, title }) => (
              <SearchItem clear={clear} href={url} key={url} logo={logo} title={title} />
            ))}
          </div>
        )}
        {showResources && (
          <div className={styles.section}>
            <h4>Resources</h4>
            {resources.map(({ title, Icon, logo, url }) => (
              <SearchItem clear={clear} href={url} key={url} logo={logo} Icon={Icon} title={title} />
            ))}
          </div>
        )}

        {showSections && (
          <div className={styles.section}>
            <h4>Sections</h4>
            {chapters.map(({ id, title, Icon }) => (
              <SearchItem clear={clear} href={id} key={id} Icon={Icon} title={title} />
            ))}
            {sections.map(({ id, title, Icon, logo }) => (
              <SearchItem clear={clear} href={id} key={id} logo={logo} Icon={Icon} title={title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

SearchResult.propTypes = {
  resources: PropTypes.array,
  blockchains: PropTypes.array,
  chapters: PropTypes.array,
  sections: PropTypes.array,
  clear: PropTypes.func,
};
