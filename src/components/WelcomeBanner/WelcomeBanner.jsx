import Link from 'next/link';
import React from 'react';

import styles from './WelcomeBanner.module.scss';

export default function WelcomeBanner() {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.label}>smart contracts ecosystem</span>
        <h1 className={styles.heading}>Everything you need to start developing blockchain apps</h1>
      </div>

      <div className="content">
        <Link href="/map" passHref>
          <a className="get_started">Get started</a>
        </Link>
        <div className="overview">
          Explore the ecosystem map to get familiar with the landscape of hundreds of tools.
        </div>
      </div>
    </div>
  );
}
