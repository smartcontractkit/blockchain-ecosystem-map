import WelcomeBanner from '@/components/WelcomeBanner';
import WelcomeSection from '@/components/WelcomeSection';
import styles from '@/styles/Home.module.scss';

import chapters from '@/data/chapters';
import WelcomeSectionCard from '@/components/WelcomeSectionCard';

export default function Home() {
  const { get_started, development_cycle, share } = chapters;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.banner}>
          <WelcomeBanner />
        </section>
        <section className={styles.contents}>
          <WelcomeSection tag="fundamentals">
            {get_started.map(({ id, title, data, Icon }) => (
              <WelcomeSectionCard key={id} title={title} totalItem={data.length}>
                <Icon />
              </WelcomeSectionCard>
            ))}
          </WelcomeSection>
          <WelcomeSection tag="development">
            {development_cycle.map(({ id, title, data, Icon }) => (
              <WelcomeSectionCard key={id} title={title} totalItem={data.length}>
                <Icon />
              </WelcomeSectionCard>
            ))}
          </WelcomeSection>
          <WelcomeSection tag="share">
            {share.map(({ id, title, data, Icon }) => (
              <WelcomeSectionCard key={id} title={title} totalItem={data.length}>
                <Icon />
              </WelcomeSectionCard>
            ))}
          </WelcomeSection>
        </section>
      </div>
    </div>
  );
}
