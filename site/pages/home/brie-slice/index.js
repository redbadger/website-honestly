import React from 'react';
import styles from './style.css';
import BriePNG from './brie.png';

const Brie = () => (
  <section className={styles.brieContainer}>
    <h2 className={styles.heading}>
      We dig deeper to deliver the right solution by first understanding and validating the problem.
    </h2>
    <img src={BriePNG} alt="Illustration" className={styles.brie} />
    <a href="/services/" className={styles.featureBtn}>How we work</a>
  </section>
);

export default Brie;
