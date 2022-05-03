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

export default function Home() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(null);

  const chaptersKeys = Object.keys(chapters);

  const expandPanel = (id) => {
    setIsExpanded(isExpanded && isExpanded === id ? null : id);
  };

  const getDescription = (text) => (text.length > 120 ? `${text.slice(0, 120)}...` : text);

  useEffect(() => {
    const DEFAULT_ACCORDION_ID = 'general-learning-resources';
    const { asPath } = router;
    let id = asPath.split('#')[1];
    id = id ? id : DEFAULT_ACCORDION_ID;
    router.replace(asPath);
    expandPanel(id || null);
  }, []);

  return (
    <div className={styles.container}>
      <Hero />
      {chaptersKeys.map((chapter, index) => (
        <Chapter key={index}>
          {chapters[chapter].map((section) => (
            <Section
              key={section.id}
              title={section.title}
              id={section.id}
              Icon={section.Icon}
              expandToggle={expandPanel}
              expandedId={isExpanded}
            >
              {section.data.map((data) => (
                <InnerAccordion
                  key={data.id}
                  title={data.name}
                  id={data.id}
                  expanded={isExpanded === data.id}
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
