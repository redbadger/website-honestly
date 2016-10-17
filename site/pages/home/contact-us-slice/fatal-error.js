import React from 'react';
import styles from './style.css';

const FatalError = () => (
  <section className={styles.fatalErrorContainer}>
    <h2 className={styles.heading}>
      What happened there?!<br />
Please try again.
    </h2>
  </section>
);

export default FatalError;
