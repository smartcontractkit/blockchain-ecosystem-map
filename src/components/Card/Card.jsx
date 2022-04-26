import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import clsx from 'clsx';

function Card({ title, size = 'large', imageSrc, url }) {
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
