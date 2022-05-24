import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import clsx from 'clsx';

import Favourite from '@/icons/star.svg';
import NotFavourite from '@/icons/star-outline.svg';

function Card({ title, size = 'large', imageSrc, url, favourite, addFavourite }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.container, styles[`container__${size}`])}
      onClick={(e) => e.stopPropagation()}
    >
      <img src={imageSrc} alt={title} />
      {title}
      <button
        aria-label="favourite"
        className={clsx(styles.favourite, { [styles.active]: favourite })}
        onClick={(e) => {
          e.preventDefault();
          addFavourite(url);
        }}
      >
        {favourite ? <Favourite /> : <NotFavourite />}
      </button>
    </a>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  url: PropTypes.string.isRequired,
  favourite: PropTypes.bool,
  addFavourite: PropTypes.func,
};

export default Card;
