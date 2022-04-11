import { useState, useCallback } from 'react';
import Blockchains from '@/components/Blockchains';
import Chapter from '@/components/Chapter';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import InnerAccordion from '@/components/InnerAccordion';
import styles from '@/styles/Home.module.scss';

import PropTypes from 'prop-types';
import Card from '@/components/Card';

export default function Home({ chapters }) {
  const [isExpanded, setisExpanded] = useState(null);

  const { get_started, development_cycle, share } = chapters;

  const expandPanel = useCallback(
    (value) => {
      setisExpanded(isExpanded && isExpanded === value ? null : value);
    },
    [isExpanded]
  );

  return (
    <div className={styles.container}>
      <Hero />

      <Blockchains />

      {/* Get started */}
      <Chapter>
        {get_started.map((result) => (
          <Section key={result.id} title={result.title} id={result.id}>
            {result.data.map((data) => (
              <InnerAccordion
                key={data.id}
                title={data.name}
                id={data.id}
                expanded={isExpanded === data.id}
                expandToggle={expandPanel}
              >
                <div className={styles.accordion_contents}>
                  {data.items.map((item) => (
                    <Card key={item.url} title={item.title} imageSrc={item.logo} url={item.url} size="small" />
                  ))}
                </div>
              </InnerAccordion>
            ))}
          </Section>
        ))}
      </Chapter>

      {/* Development Cycle */}
      <Chapter>
        {development_cycle.map((result) => (
          <Section key={result.id} title={result.title} id={result.title}>
            {result.data.map((data) => (
              <InnerAccordion
                key={data.id}
                title={data.name}
                id={data.id}
                expanded={isExpanded === data.id}
                expandToggle={expandPanel}
              >
                <div className={styles.accordion_contents}>
                  {data.items.map((item) => (
                    <Card key={item.url} title={item.title} imageSrc={item.logo} url={item.url} size="small" />
                  ))}
                </div>
              </InnerAccordion>
            ))}
          </Section>
        ))}
      </Chapter>

      {/* Share */}

      <Chapter>
        {share.map((result) => (
          <Section key={result.id} title={result.title} id={result.title}>
            {result.data.map((data) => (
              <InnerAccordion
                key={data.id}
                title={data.name}
                id={data.id}
                expanded={isExpanded === data.id}
                expandToggle={expandPanel}
              >
                <div className={styles.accordion_contents}>
                  {data.items.map((item) => (
                    <Card key={item.url} title={item.title} imageSrc={item.logo} url={item.url} size="small" />
                  ))}
                </div>
              </InnerAccordion>
            ))}
          </Section>
        ))}
      </Chapter>
    </div>
  );
}

Home.propTypes = {
  chapters: PropTypes.object,
};
