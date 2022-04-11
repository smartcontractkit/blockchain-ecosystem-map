import styles from './Section.module.scss';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Title</h3>
      <div className={styles.body}>Body</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
