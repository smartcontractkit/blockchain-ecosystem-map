import React, { Fragment, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.scss';
import SearchItem from '../SearchItem';

import { useFocusTrap } from '@/helpers/useFocusTrap';
import { useOutsideClick } from '@/helpers/clickOutside';

export default function SearchResult({ hasBlockchains, hasResources, hasSections, clear, data }) {
  const resultRef = useRef(null);
  const [focus, setFocus] = useFocusTrap(data.length);

  const handleClick = useCallback(
    (target, value) => {
      const index = data.findIndex((res) => res[target] === value);

      setFocus(index);
    },
    [focus, data]
  );

  useOutsideClick(resultRef, () => clear());

  return (
    <div ref={resultRef} className={styles.results}>
      <div className={styles.content}>
        <div className={styles.section}>
          {hasBlockchains && <h4>Blockchain</h4>}
          {data.map(({ title, Icon, logo, url, heading }) => (
            <Fragment key={url}>
              {heading === 'blockchains' && (
                <SearchItem
                  focus={data[focus] && data[focus]['url'] === url}
                  setFocus={() => handleClick('url', url)}
                  clear={clear}
                  href={url}
                  Icon={Icon}
                  key={url}
                  logo={logo}
                  title={title}
                />
              )}
            </Fragment>
          ))}
          {hasResources && <h4>Resources</h4>}
          {data.map(({ title, Icon, logo, url, heading }) => (
            <Fragment key={url}>
              {heading === 'resources' && (
                <SearchItem
                  focus={data[focus] && data[focus]['url'] === url}
                  setFocus={() => handleClick('url', url)}
                  clear={clear}
                  href={url}
                  Icon={Icon}
                  key={url}
                  logo={logo}
                  title={title}
                />
              )}
            </Fragment>
          ))}
          {hasSections && <h4>Sections</h4>}
          {data.map(({ title, Icon, logo, id, heading }) => (
            <Fragment key={id}>
              {heading === 'sections' && (
                <SearchItem
                  focus={data[focus] && data[focus]['id'] === id}
                  setFocus={() => handleClick('id', id)}
                  clear={clear}
                  href={id}
                  Icon={Icon}
                  key={id}
                  logo={logo}
                  title={title}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

SearchResult.propTypes = {
  hasBlockchains: PropTypes.bool,
  hasResources: PropTypes.bool,
  hasSections: PropTypes.bool,
  data: PropTypes.array,
  clear: PropTypes.func,
};
