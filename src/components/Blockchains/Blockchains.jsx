import React from 'react';
import Card from '@/components/Card';
import blockchains from '@/data/blockchains.yaml';

import styles from './Blockchains.module.scss';

export default function Blockchains() {
  return (
    <section className={styles.container} id="blockchains-section">
      <h2>Blockchains</h2>
      <div className={styles.contents}>
        {blockchains.map((blockchain, index) => (
          <Card key={index} title={blockchain.name} imageSrc={blockchain.logo} url={blockchain.url} />
        ))}
      </div>
    </section>
  );
}
