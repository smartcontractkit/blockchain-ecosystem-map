import React from 'react';
import styles from './Colors.module.scss';
import clsx from 'clsx';

export default function Colors() {
  const opacity = ['04', '08', '12', '40B', '40BG'];
  const neutral_colors = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '720',
    '750',
    '800',
    '900',
    '940',
    '950',
  ].reverse();
  const brand_colors = ['50', '100', '200', '500', '600', '620', '650', '800', '900', '920', '950'].reverse();
  return (
    <div>
      <h2 className={styles.heading}>Overlay</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles[`overlay__08`])}></div>
          <small>$overlay-08</small>
        </div>
      </div>

      <h2 className={styles.heading}>Opacity</h2>
      <div className={styles.container}>
        {opacity.map((color, index) => (
          <div key={index}>
            <div className={clsx(styles.box, styles[`opacity__${color}`])}></div>
            <small>$opacity-{color}</small>
          </div>
        ))}
      </div>
      <h2 className={styles.heading}>Neutral Colors</h2>
      <div className={styles.container}>
        {neutral_colors.map((color, index) => (
          <div key={index}>
            <div className={clsx(styles.box, styles[`neutral__${color}`])}></div>
            <small>$neutral-{color}</small>
          </div>
        ))}
      </div>

      <h2 className={styles.heading}>Brand Colors</h2>
      <div className={styles.container}>
        {brand_colors.map((color, index) => (
          <div key={index}>
            <div className={clsx(styles.box, styles[`brand__${color}`])}></div>
            <small>$brand-{color}</small>
          </div>
        ))}
      </div>

      <h2 className={styles.heading}>Brown</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles[`brown__900`])}></div>
          <small>$brown-900</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles[`brown__800`])}></div>
          <small>$brown-800</small>
        </div>
      </div>

      <h2 className={styles.heading}>Accent</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles[`accent__500`])}></div>
          <small>$accent-900</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles[`accent__200`])}></div>
          <small>$accent-800</small>
        </div>
      </div>

      <h2 className={styles.heading}>Hint</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles.hint__light)}></div>
          <small>$hint-light</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.hint__dark)}></div>
          <small>$hint-dark</small>
        </div>
      </div>

      <h2 className={styles.heading}>Gradient</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles.gradient, styles['dark-blue'])}></div>
          <small>$dark-blue-gradient</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.gradient, styles['light-blue'])}></div>
          <small>$light-blue-gradient</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.gradient, styles['dark-brown'])}></div>
          <small>$dark-brown-gradient</small>
        </div>
      </div>

      <h2 className={styles.heading}>Others</h2>
      <div className={styles.container}>
        <div>
          <div className={clsx(styles.box, styles.pink)}></div>
          <small>$pink</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.beige)}></div>
          <small>$beige</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.error)}></div>
          <small>$error</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.warning)}></div>
          <small>$warning</small>
        </div>
        <div>
          <div className={clsx(styles.box, styles.success)}></div>
          <small>$success</small>
        </div>
      </div>
    </div>
  );
}
