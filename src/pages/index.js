import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Blockchains from '@/components/Blockchains';
import Chapter from '@/components/Chapter';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import InnerAccordion from '@/components/InnerAccordion';
import styles from '@/styles/Home.module.scss';
import chapters from '@/data/chapters';
import Card from '@/components/Card';

export default function Home() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(null);

  const chaptersKeys = Object.keys(chapters);

  const expandPanel = (id) => {
    setIsExpanded(isExpanded && isExpanded === id ? null : id);
  };

  useEffect(() => {
    const { asPath } = router;
    const id = asPath.split('#')[1];
    expandPanel(id || null);
  }, []);

  return (
    <div className={styles.container}>
      <Hero />

      <Blockchains />
      {chaptersKeys.map((chapter, index) => (
        <Chapter key={index}>
          {chapters[chapter].map((section) => (
            <Section key={section.id} title={section.title} id={section.id} Icon={section.Icon}>
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
