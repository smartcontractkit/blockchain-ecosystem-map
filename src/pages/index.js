import WelcomeBanner from '@/components/WelcomeBanner';
import styles from '@/styles/Home.module.scss';

import chapters from '@/data/chapters';
import WelcomeSectionCard from '@/components/WelcomeSectionCard';
import { countItems, getItems } from '@/helpers/getCardData';

export default function Home() {
  const { get_started, development_cycle, share } = chapters;

  const sections = [...get_started, ...development_cycle, ...share];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.banner}>
          <WelcomeBanner />
        </section>
        <section className={styles.contents}>
          {sections.map(({ id, title, data, Icon }, index) => (
            <WelcomeSectionCard key={id + index} title={title} totalItem={countItems(data)} items={getItems(data)}>
              <Icon />
            </WelcomeSectionCard>
          ))}
        </section>
      </div>
    </div>
  );
}
