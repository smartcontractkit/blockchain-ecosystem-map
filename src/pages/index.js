import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Blockchains from '@/components/Blockchains';
import Chapter from '@/components/Chapter';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import InnerAccordion from '@/components/InnerAccordion';
import styles from '@/styles/Home.module.scss';

import PropTypes from 'prop-types';
import Card from '@/components/Card';

export default function Home({ chapters }) {
  const router = useRouter();
  const [isExpanded, setisExpanded] = useState(null);

  const chaptersKeys = Object.keys(chapters);

  const expandPanel = ({ id, section_id }) => {
    const { opened } = router.query;
    setisExpanded(opened && opened === id ? null : id);
    const queryData = {
      activelink: section_id,
      opened: opened && opened === id ? null : id,
    };

    // updateLink(section_id);
    router.replace({
      query: queryData,
    });
  };

  useEffect(() => {
    setisExpanded(router.query.opened);
  }, [router.query.opened]);

  return (
    <div className={styles.container}>
      <Hero />

      <Blockchains />

      {chaptersKeys.map((chapter, index) => (
        <Chapter key={index}>
          {chapters[chapter].map((result) => (
            <Section key={result.id} title={result.title} id={result.id}>
              {result.data.map((data) => (
                <InnerAccordion
                  key={data.id}
                  title={data.name}
                  id={data.id}
                  expanded={isExpanded === data.id}
                  expandToggle={(id) => expandPanel({ id, section_id: result.id })}
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
      ))}
    </div>
  );
}

Home.propTypes = {
  chapters: PropTypes.object,
};
