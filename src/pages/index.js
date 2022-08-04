import WelcomeBanner from '@/components/WelcomeBanner';
import WelcomeSection from '@/components/WelcomeSection';
import styles from '@/styles/Home.module.scss';

import chapters from '@/data/chapters';
import WelcomeSectionCard from '@/components/WelcomeSectionCard';

export default function Home() {
  const { get_started, development_cycle, share } = chapters;

  const sections = [
    {
      tag: 'fundamentals',
      content: get_started,
    },
    {
      tag: 'development',
      content: development_cycle,
    },
    {
      tag: 'share',
      content: share,
    },
  ];

  const getCardDatas = (data) => {
    const cardData = data.map((res) => res.items).flat();
    return cardData;
  };
  const countCardData = (data) => getCardDatas(data).length;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.banner}>
          <WelcomeBanner />
        </section>
        <section className={styles.contents}>
          {sections.map(({ tag, content }, index) => (
            <WelcomeSection key={index + tag} tag={tag}>
              {content.map(({ id, title, data, Icon }) => (
                <WelcomeSectionCard key={id} title={title} totalItem={countCardData(data)} items={getCardDatas(data)}>
                  <Icon />
                </WelcomeSectionCard>
              ))}
            </WelcomeSection>
          ))}
        </section>
      </div>
    </div>
  );
}
