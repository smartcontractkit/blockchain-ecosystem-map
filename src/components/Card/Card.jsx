import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

function Card({ title, size = 'large', imageSrc, url }) {
  return (
    <a
      href={url}
      alt={`${title} website`}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.container, styles[`container__${size}`])}
    >
      <Image src={imageSrc} layout="fixed" width={50} height={50} objectFit="cover" alt={title} />
      {title}
    </a>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  url: PropTypes.string.isRequired,
};

export default Card;
