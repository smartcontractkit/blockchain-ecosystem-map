import styles from './Search.module.scss';
import SearchIcon from '@/icons/search-icon.svg';
import CloseIcon from '@/icons/close.svg';
import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { searchItem } from './fuse';
import filterMatchedResult from '@/helpers/filterMatchedResult';
import SearchResult from './SearchResult';

export default function Search() {
  const inputRef = useRef();
  const [focus, setFocus] = useState(false);
  const [hasContents, setHasContents] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const [showResources, setShowResources] = useState(false);
  const [showBlockchain, setShowBlockchain] = useState(false);
  const [showSections, setShowSections] = useState(false);

  const handleSearch = (e) => {
    // Remove the scroll padding top to prevent scroll on key press
    if (e.nativeEvent.path[6].style) {
      e.nativeEvent.path[6].style.scrollPaddingTop = 'unset';
    }

    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      const { resource, blockchain, chapter } = searchItem(value);
      const resourcesData = filterMatchedResult(resource, 'resources');
      const blockchainData = filterMatchedResult(blockchain, 'blockchains');
      const chapterData = filterMatchedResult(chapter, 'sections');

      const gotContents = resourcesData.length > 0 || blockchainData.length > 0 || chapterData.length > 0;

      /* Need to separate those with id from those without id from the resource data */
      const getSections = resourcesData.filter((res) => res.id);
      const getResources = resourcesData.filter((res) => res.url);

      setShowResources(getResources.length > 0);
      setShowSections(chapterData.length > 0 || getSections.length > 0);
      setShowBlockchain(blockchainData.length > 0);

      setData([...blockchainData, ...getResources, ...chapterData, ...getSections]);
      setHasContents(gotContents);

      // return the scroll padding top to its normal value
      setTimeout(() => {
        if (e.nativeEvent.path[6].style) {
          e.nativeEvent.path[6].style.scrollPaddingTop = '12rem';
        }
      });
    }
  };
  const clear = () => {
    setSearch('');
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const f = e.keyCode === 70;
      const ctrl = e.ctrlKey;
      const f3 = e.keyCode === 114;
      const esc = e.keyCode === 27;

      if (f3 || (ctrl && f)) {
        e.preventDefault();
        inputRef.current.focus();
      }

      if (esc) {
        e.preventDefault();
        inputRef.current.blur();
        clear();
      }
    });

    return () => {
      window.removeEventListener('keydown', () => {});
    };
  }, []);
  return (
    <div className={styles.search}>
      <div className={clsx(styles.search_container, { [styles.focused]: focus })}>
        <input
          ref={inputRef}
          type="text"
          autoFocus
          aria-label="Enter a search term"
          placeholder="Search specific resources…"
          onChange={handleSearch}
          onFocus={() => setFocus(true)}
          value={search}
        />
        <span className={styles.search_icon}>
          <SearchIcon />
        </span>

        {hasContents && search.length > 0 && (
          <SearchResult
            clear={clear}
            hasBlockchains={showBlockchain}
            hasResources={showResources}
            hasSections={showSections}
            data={data}
          />
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
