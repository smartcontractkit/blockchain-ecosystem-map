import React, { Fragment, useEffect, useState } from 'react';
import Blockchains from '@/components/Blockchains';
import Chapter from '@/components/Chapter';
import Section from '@/components/Section';
import InnerAccordion from '@/components/InnerAccordion';
import styles from '@/styles/Map.module.scss';
import chapters from '@/data/chapters';
import Card from '@/components/Card';
import Tooltip from 'react-tooltip-lite';
import ExpandCollapseAllButton from '@/components/ExpandCollapseAllButton';
import useFavourite from '@/helpers/useFavourite';
import Navbar from '@/components/Navbar';

export default function Map() {
  const [isExpanded, setIsExpanded] = useState([]);
  const [allSubsections, setAllSubsections] = useState([]);
  const [tooltip, setToolTip] = useState(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  const chaptersKeys = Object.keys(chapters);

  const { getFavourite, addToFavourite, sortItem } = useFavourite();

  const saveExpanded = (value) => {
    localStorage.setItem('opened', JSON.stringify(value));
    setIsExpanded(value);
  };

  const expandPanel = (id) => {
    let newExpandedValues = isExpanded;
    if (newExpandedValues.includes(id)) {
      newExpandedValues = newExpandedValues.filter((value) => value !== id);
    } else if (newExpandedValues.length) {
      newExpandedValues = [...newExpandedValues, id];
    } else {
      newExpandedValues = [id];
    }
    saveExpanded(newExpandedValues);
  };

  const getDescription = (text) => (text.length > 120 ? `${text.slice(0, 120)}...` : text);

  const getExpanded = (id) => isExpanded.includes(id);

  const sectionExpand = (payload, action) => {
    let newExpandedValues = isExpanded;

    if (action === 'add') {
      /* Adds the first id in the section */
      newExpandedValues = [...newExpandedValues, ...payload];
    } else {
      /* Removes every id tied to that section when closed */
      newExpandedValues = newExpandedValues.filter((arr) => {
        return !payload.includes(arr);
      });
    }
    saveExpanded(newExpandedValues);
  };

  /* Logic to expand all and collapse all subsections
    - Get all subsections first
    - if the number of subsections is more than opened subsection, then populate expanded with all subsections else remove all subsections
  */

  const getAllSubSections = () => {
    const allChapters = Object.values(chapters);
    const chaptersData = allChapters.flat().map((res) => res.data);
    const subSectionsId = chaptersData.flat().map((res) => res.id);

    setAllSubsections(subSectionsId);

    return subSectionsId;
  };

  const getAllExpanded = () => allSubsections.length === isExpanded.length;

  const toggleExpandAll = () => {
    if (getAllExpanded()) {
      //if all subsections are opened
      saveExpanded([]);
    } else {
      saveExpanded(allSubsections);
    }
  };

  useEffect(() => {
    const DEFAULT_ACCORDION_ID = getAllSubSections();

    let openedChapters = JSON.parse(localStorage.getItem('opened'));
    openedChapters = openedChapters && openedChapters.length ? openedChapters : [...DEFAULT_ACCORDION_ID];
    saveExpanded(openedChapters);

    const handleResize = () => {
      const height = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
      setBodyHeight(height);
    };

    getAllSubSections();

    window.addEventListener('resize', handleResize, true);
    window.addEventListener('load', handleResize, true);

    return () => {
      window.removeEventListener('resize', handleResize, true);
      window.removeEventListener('load', handleResize, true);
    };
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <div className={styles.container}>
          {chaptersKeys.map((chapter, index) => (
            <Chapter key={index}>
              {chapters[chapter].map((section) => (
                <Section
                  key={section.id}
                  title={section.title}
                  id={section.id}
                  Icon={section.Icon}
                  expandToggle={sectionExpand}
                  expandedIds={isExpanded}
                  bodyHeight={bodyHeight}
                >
                  {section.data.map((data) => (
                    <InnerAccordion
                      key={data.id}
                      title={data.name}
                      id={data.id}
                      expanded={getExpanded(data.id)}
                      expandToggle={expandPanel}
                    >
                      <div className={styles.accordion_contents}>
                        {sortItem(data.items).map((item) => (
                          <Fragment key={item.url}>
                            {item.description ? (
                              <Tooltip
                                isOpen={tooltip === item.url}
                                content={getDescription(item.description)}
                                arrowSize={6}
                              >
                                <Card
                                  addFavourite={() => addToFavourite(item)}
                                  favourite={getFavourite(item.url) ? true : false}
                                  title={item.title}
                                  imageSrc={item.logo}
                                  url={item.url}
                                  size="small"
                                  showTip={setToolTip}
                                />
                              </Tooltip>
                            ) : (
                              <Card
                                addFavourite={() => addToFavourite(item)}
                                favourite={getFavourite(item.url) ? true : false}
                                title={item.title}
                                imageSrc={item.logo}
                                url={item.url}
                                size="small"
                                showTip={setToolTip}
                              />
                            )}
                          </Fragment>
                        ))}
                      </div>
                    </InnerAccordion>
                  ))}
                </Section>
              ))}
            </Chapter>
          ))}

          <Blockchains />

          <ExpandCollapseAllButton expanded={getAllExpanded()} toggleExpanded={toggleExpandAll} />
        </div>
      </main>
    </React.Fragment>
  );
}
