import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome Page</h1>
      <div className={styles.wrapper}>
        <section className={styles.banner}>{/* For the Banner */}</section>
        <section className={styles.contents}>{/* For the contents */}</section>
      </div>
    </div>
  );
}
