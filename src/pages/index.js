import WelcomeBanner from '@/components/WelcomeBanner';
import WelcomeSection from '@/components/WelcomeSection';
import styles from '@/styles/Home.module.scss';
import SectionDivider from '@/icons/section-divider.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.banner}>
          <WelcomeBanner />
        </section>
        <section className={styles.contents}>
          <WelcomeSection tag="fundamentals" />
          <WelcomeSection tag="development">
            <h2>development</h2>
            <span className={styles.divider}>
              <SectionDivider />
            </span>
          </WelcomeSection>
          <WelcomeSection tag="share" />
        </section>
      </div>
    </div>
  );
}
