import React from 'react';
import styles from './Search.module.scss';
import SearchIcon from '@/icons/search-icon.svg';
import CloseIcon from '@/icons/close.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { searchItem } from './fuse';
import filterMatchedResult from '@/helpers/filterMatchedResult';
import SearchResult from './SearchResult';

export default function Search() {
  const [focus, setFocus] = useState(false);
  const [hasContents, setHasContents] = useState(false);
  const [search, setSearch] = useState('');
  const [blockchains, setBlockhains] = useState([]);
  const [resources, setResources] = useState([]);
  const [chapters, setChapters] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      const { resource, blockchain, chapter } = searchItem(value);
      const resourcesData = filterMatchedResult(resource);
      const blockchainData = filterMatchedResult(blockchain);
      const chapterData = filterMatchedResult(chapter);

      const gotContents = resourcesData.length > 0 || blockchainData.length > 0 || chapterData.length > 0;

      setResources([...resourcesData]);
      setBlockhains([...blockchainData]);
      setChapters([...chapterData]);
      setHasContents(gotContents);
    }
  };
  const clear = () => {
    setSearch('');
  };
  return (
    <div className={styles.search}>
      <div className={clsx(styles.search_container, { [styles.focused]: focus })}>
        <input
          placeholder="Search specific resources…"
          onChange={handleSearch}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={search}
        />
        <span className={styles.search_icon}>
          <SearchIcon />
        </span>

        {hasContents && search.length > 0 && (
          <SearchResult clear={clear} chapters={chapters} blockchains={blockchains} resources={resources} />
        )}
      </div>
      {search.length > 0 && (
        <button onClick={clear} className={styles.close}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
