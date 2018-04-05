// @flow
import React from 'react';
import styles from './style.css';

type PrincipleProps = {
  number: string,
  title: string,
  description: string,
};

const Principle = ({ number, title, description }: PrincipleProps) => (
  <li className={styles.container}>
    <div className={styles.leftCol}>
      <div className={styles.number}>{number}</div>
    </div>
    <div className={styles.rightCol}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
    </div>
  </li>
);

export default Principle;
