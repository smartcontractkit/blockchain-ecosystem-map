import Image from 'next/image';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.container}>
      <Image
        className={styles.image}
        src={'/images/bg-hero.png'}
        layout="fill"
        objectFit="cover"
        alt=""
        objectPosition="center"
        priority
        quality="100"
      />
      <h1>Ecosystem Map</h1>
      <p>Everything you need to start building blockchain applications</p>
    </section>
  );
}

export default Hero;
