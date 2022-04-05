import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import clsx from 'clsx';

function Card({ title, size = 'large', imageSrc, url }) {
  return (
    <a href={url} alt={`${title} website`} target="_blank" rel="noopener noreferrer">
      <div className={clsx(styles.container, styles[`container__${size}`])}>
        <img src={imageSrc} alt={title} />
        {title}
      </div>
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
