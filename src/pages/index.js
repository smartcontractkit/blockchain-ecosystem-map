import { Fragment, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
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

const Intro = dynamic(() => import('@/components/Intro'), {
  ssr: false,
});

export default function Home() {
  // const router = useRouter();
  const [isExpanded, setIsExpanded] = useState([]);
  const [introSteps, setIntroSteps] = useState(steps);

  const chaptersKeys = Object.keys(chapters);

  const saveExpanded = (value) => {
    localStorage.setItem('chapters', JSON.stringify(value));
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
  const getExpanded = (id) => {
    return isExpanded.includes(id);
  };

  const sectionExpand = (ids, action) => {
    let newExpandedValues = isExpanded;

    if (action === 'add') {
      newExpandedValues = [...newExpandedValues, ...ids];
    } else {
      newExpandedValues = newExpandedValues.filter((arr) => {
        return !ids.includes(arr);
      });
    }
    saveExpanded(newExpandedValues);
  };

  useEffect(() => {
    const openedChapters = JSON.parse(localStorage.getItem('chapters'));
    setIsExpanded(openedChapters ?? []);

    /* For the Inrojs */
    function regulateSteps() {
      let stepsUpdate = introSteps;
      if (window.screen.width < 1276) {
        stepsUpdate = stepsUpdate.filter((step) => step.element !== '#github');
      } else {
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
                            <Card title={item.title} imageSrc={item.logo} url={item.url} size="small" />
                          </Tooltip>
                        ) : (
                          <Card title={item.title} imageSrc={item.logo} url={item.url} size="small" />
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
    </div>
  );
}
