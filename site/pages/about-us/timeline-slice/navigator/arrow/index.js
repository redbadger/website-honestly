import React from 'react';
import styles from './style.css';

const Arrow = ({ direction }) => (
  <div className={direction === 'left' ? styles.arrowLeft : styles.arrowRight}>
    <div />
    <div className={styles.innerArrow} />
  </div>
);

Arrow.propTypes = {
  direction: React.PropTypes.bool.isRequired,
};

export default Arrow;
