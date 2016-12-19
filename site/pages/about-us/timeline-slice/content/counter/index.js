import React from 'react';
import styles from './style.css';

const Counter = ({ title, value }) => {
  return (
    <div className={styles.counter}>
      <div className={styles.title}>{title}</div>
      <div className={styles.count}>{value}</div>
    </div>
  );
};

Counter.propTypes = {
  title: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default Counter;
