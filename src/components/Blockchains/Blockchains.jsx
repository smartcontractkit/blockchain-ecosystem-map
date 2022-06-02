import React from 'react';
import Card from '@/components/Card';
import blockchains from '@/data/blockchains.yaml';

import styles from './Blockchains.module.scss';
import useFavourite from '@/helpers/useFavourite';

export default function Blockchains() {
  const { getFavourite, addToFavourite, sortItem } = useFavourite();

  return (
    <section className={styles.container} id="blockchains-section">
      <h2>Blockchains</h2>
      <div className={styles.contents}>
        {sortItem(blockchains).map((blockchain, index) => (
          <Card
            key={index}
            addFavourite={() => addToFavourite(blockchain)}
            favourite={getFavourite(blockchain.url) ? true : false}
            title={blockchain.name}
            imageSrc={blockchain.logo}
            url={blockchain.url}
            showTip={() => {}}
          />
        ))}
      </div>
    </section>
  );
}
