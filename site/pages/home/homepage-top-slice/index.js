import classnames from 'classnames/bind';
import React from 'react';
import styles from './style.css';

const cx = classnames.bind(styles);

const HomepageTopSlice = () => {
  return (
    <section className={styles.homepageTopSlice}>
      <div className={styles.sliceContainer}>
        <h1 className={styles.badgerSlogan}>
          Let’s make<br />things better.
        </h1>
        <p className={cx('sloganDescription', 'fadeInUp')}>
          We are a digital consultancy that focuses on the digital transformation of large companies
          through innovation and delivery expertise.
        </p>
      </div>
    </section>
  );
};

export default HomepageTopSlice;
