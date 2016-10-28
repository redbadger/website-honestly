import React from 'react';
import styles from './style.css';
import BriePNG from './brie.png';
import Link from '../../../components/link';

const Brie = () => (
  <section className={styles.brieContainer}>
    <h2 className={styles.heading}>
      We dig deeper to deliver the right solution by first understanding and validating the problem.
    </h2>
    <img src={BriePNG} alt="Illustration" className={styles.brie} />
    <Link to="whatWeDoPage" className={styles.featureBtn}>What we do</Link>
  </section>
);

export default Brie;
