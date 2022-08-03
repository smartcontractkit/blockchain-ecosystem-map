import WelcomeBanner from '@/components/WelcomeBanner';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.banner}>
          <WelcomeBanner />
        </section>
        <section className={styles.contents}>{/* For the contents */}</section>
      </div>
    </div>
  );
}
