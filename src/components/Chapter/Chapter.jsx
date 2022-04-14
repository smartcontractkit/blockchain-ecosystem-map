import PropTypes from 'prop-types';
import styles from './Chapter.module.scss';

function Chapter({ children }) {
  return (
    <section className={styles.container}>
      <div className={styles.timeline} aria-hidden="true"></div>
      {children}
    </section>
  );
}

Chapter.propTypes = {
  children: PropTypes.node,
};

export default Chapter;
