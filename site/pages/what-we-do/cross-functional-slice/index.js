import React from 'react';
import styles from './styles.css';

const CrossFunctionalSlice = () => (
  <section className={styles.crossFunctionalSlice}>
    {/* <img src="" /> */}
    <h2 className={styles.heading}>Working in cross functional teams</h2>
    {/* <img src="" /> */}
    <h3 className={styles.blueSubHeading}>Delivery leads</h3>
    <p className={styles.detail}>Drive efficiency and reduce risk through our lean methods.</p>
    <h3 className={styles.greenSubHeading}>Tech</h3>
    <p className={styles.detail}>Transform your business by being bold with tech.</p>
    <h3 className={styles.yellowSubHeading}>Design</h3>
    <p className={styles.detail}>
      Improve customer experience, create delightful products and services.
    </p>
    <h3 className={styles.redSubHeading}>You (the client)</h3>
    <p className={styles.detail}>Together we build a capability and lasting change.</p>
  </section>
);

export default CrossFunctionalSlice;
