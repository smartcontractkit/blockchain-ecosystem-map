import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import clsx from 'clsx';

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
      <img src={imageSrc} alt={title} />
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
        <img
          src={`/images/${favourite ? 'star.svg' : 'star-outline.svg'}`}
          alt={favourite ? 'Favourite icon' : 'non favourite icon'}
        />
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
