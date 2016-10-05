import React from 'react';
import InlineSVG from 'svg-inline-react';
import Link from '../../../components/link';
import styles from './style.css';
import illustrationSVG from './illustration.svg';

const Brie = () => (
  <section className={styles.brieContainer}>
    <h2 className={styles.heading}>
      We dig deeper to deliver the right solution by first understanding and validating the problem.
    </h2>
    <InlineSVG src={illustrationSVG} className={styles.brie} />
    <Link to="servicesPage" className={styles.featureBtn}>How we work</Link>
  </section>
);

export default Brie;
