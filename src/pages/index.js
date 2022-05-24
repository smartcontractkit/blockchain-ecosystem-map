import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Blockchains from '@/components/Blockchains';
import Chapter from '@/components/Chapter';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import InnerAccordion from '@/components/InnerAccordion';
import styles from '@/styles/Home.module.scss';
import chapters from '@/data/chapters';
import Card from '@/components/Card';
import Tooltip from 'react-tooltip-lite';
import dynamic from 'next/dynamic';
import steps from '@/data/intro-steps';
import ExpandCollapseAllButton from '@/components/ExpandCollapseAllButton';

const Intro = dynamic(() => import('@/components/Intro'), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState([]);
  const [allSubsections, setAllSubsections] = useState([]);
  const [introSteps, setIntroSteps] = useState(steps);

  const chaptersKeys = Object.keys(chapters);

  const [favourites, setFavourites] = useState([]);

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
      newExpandedValues = [...newExpandedValues, payload];
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
  const getFavourite = (url) => {
    return favourites.includes(url);
  };

  const addToFavourite = (url) => {
    let newFav = favourites;
    if (getFavourite(url)) {
      newFav = newFav.filter((res) => res !== url);
    } else if (newFav.length) {
      newFav = [...newFav, url];
    } else {
      newFav = [url];
    }

    setFavourites(newFav);
  };
  useEffect(() => {
    const DEFAULT_ACCORDION_ID = 'general-learning-resources';
    const { asPath } = router;
    router.replace(asPath);

    let openedChapters = JSON.parse(localStorage.getItem('opened'));
    openedChapters = openedChapters && openedChapters.length ? openedChapters : [DEFAULT_ACCORDION_ID];
    saveExpanded(openedChapters);

    /* For the Inrojs */
    function regulateSteps() {
      let stepsUpdate = introSteps;
      if (window.screen.width < 768 || (window.screen.width >= 1276 && window.screen.width < 1380)) {
        stepsUpdate = stepsUpdate.filter((step) => step.element !== '#github');
      } else if ((window.screen.width >= 768 && window.screen.width < 1276) || window.screen.width > 1380) {
        if (stepsUpdate.length === 4) {
          stepsUpdate.push({
            element: '#github',
            intro: 'The app is Opensource, so feel free to contribute too',
          });
        }
      }
      setIntroSteps(stepsUpdate);
    }

    regulateSteps();
    getAllSubSections();
  }, []);

  return (
    <div className={styles.container}>
      <Intro steps={introSteps} />

      <Hero />
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
                    {data.items.map((item) => (
                      <Fragment key={item.url}>
                        {item.description ? (
                          <Tooltip content={getDescription(item.description)} arrowSize={6}>
                            <Card
                              addFavourite={addToFavourite}
                              favourite={getFavourite(item.url)}
                              title={item.title}
                              imageSrc={item.logo}
                              url={item.url}
                              size="small"
                            />
                          </Tooltip>
                        ) : (
                          <Card
                            addFavourite={addToFavourite}
                            favourite={getFavourite(item.url)}
                            title={item.title}
                            imageSrc={item.logo}
                            url={item.url}
                            size="small"
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
  );
}
