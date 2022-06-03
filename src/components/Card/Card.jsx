import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import clsx from 'clsx';

import Favourite from '@/icons/star.svg';
import NotFavourite from '@/icons/star-outline.svg';

function Card({ title, size = 'large', imageSrc, url, favourite, addFavourite, showTip }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.container, styles[`container__${size}`], {
        [styles.animate_favourite]: favourite,
        [styles.animate_not_favourite]: !favourite,
      })}
      onClick={(e) => e.stopPropagation()}
      onMouseOver={() => showTip(url)}
      onMouseLeave={() => showTip(null)}
    >
      <img src={imageSrc} alt="" />
      {title}
      <button
        aria-label="favourite"
        className={clsx(styles.favourite, { [styles.active]: favourite })}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
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
  showTip: PropTypes.func,
};

Card.defaultProps = {
  favourite: false,
};

export default Card;
