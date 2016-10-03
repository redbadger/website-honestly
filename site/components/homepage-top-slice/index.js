import React from 'react';
import styles from './style.css';

const HomepageTopSlice = () => {
  return (
    <section className={styles.homepageTopSlice}>
      <div className={styles.sliceContainer}>
        <h1 className={styles.badgerSlogan}>Let’s make things better.</h1>
        <p className={styles.sloganDescription}>
          We work with you to deliver digital products that
          make a difference to people.
        </p>
      </div>
    </section>
  );
};

export default HomepageTopSlice;
