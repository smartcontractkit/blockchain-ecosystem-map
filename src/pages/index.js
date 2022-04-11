import { useState, useCallback } from 'react';
import Blockchains from '@/components/Blockchains';
import Chapter from '@/components/Chapter';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import InnerAccordion from '@/components/InnerAccordion';
import styles from '@/styles/Home.module.scss';

import PropTypes from 'prop-types';

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
        {get_started.map((result, index) => (
          <Section key={index} title={result.title} id={result.id}>
            {result.data.map((data, i) => (
              <InnerAccordion
                key={i}
                title={data.name}
                id={data.id}
                expanded={isExpanded === data.id}
                expandToggle={expandPanel}
              >
                <p>Here</p>
              </InnerAccordion>
            ))}
          </Section>
        ))}
      </Chapter>

      {/* Development Cycle */}
      <Chapter>
        {development_cycle.map((result, index) => (
          <Section key={index} title={result.title} id={result.title}>
            {result.data.map((data, i) => (
              <InnerAccordion
                key={i}
                title={data.name}
                id={data.id}
                expanded={isExpanded === data.id}
                expandToggle={expandPanel}
              >
                <p>Here</p>
              </InnerAccordion>
            ))}
          </Section>
        ))}
      </Chapter>

      {/* Share */}

      <Chapter>
        {share.map((result, index) => (
          <Section key={index} title={result.title} id={result.title}>
            {result.data.map((data, i) => (
              <InnerAccordion
                key={i}
                title={data.name}
                id={data.id}
                expanded={isExpanded === data.id}
                expandToggle={expandPanel}
              >
                <p>Here</p>
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
