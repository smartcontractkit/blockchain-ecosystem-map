import Blockchains from '@/components/Blockchains';
import Hero from '@/components/Hero';
import styles from '@/styles/Home.module.scss';

import PropTypes from 'prop-types';

export default function Home({ chapters }) {
  console.log('-------------------------------');
  console.log(chapters);
  console.log('-------------------------------');

  return (
    <div className={styles.container}>
      <Hero />

      <Blockchains />
    </div>
  );
}

Home.propTypes = {
  chapters: PropTypes.object,
};
