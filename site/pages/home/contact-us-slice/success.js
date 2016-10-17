import React from 'react';
import styles from './style.css';
import Cain from './cain';

const Success = () => (
  <section className={styles.successContainer}>
    <Cain
      says="Got it! Thanks"
      goodNews
    />
  </section>
);

export default Success;
