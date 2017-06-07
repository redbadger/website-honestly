import React from 'react';
import styles from './style.css';

const Principle = ({ number, title, description }) =>
  <li className={styles.container}>
    <div className={styles.leftCol}>
      <div className={styles.number}>{number}</div>
    </div>
    <div className={styles.rightCol}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
    </div>
  </li>;

Principle.propTypes = {
  number: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default Principle;
