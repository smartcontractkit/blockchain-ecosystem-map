import Blockchains from '@/components/Blockchains';
import Hero from '@/components/Hero';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />

      <Blockchains />
    </div>
  );
}
