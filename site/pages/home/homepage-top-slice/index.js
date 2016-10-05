import classnames from 'classnames/bind';
import React from 'react';
import styles from './style.css';

const cx = classnames.bind(styles);

const HomepageTopSlice = () => {
  return (
    <section className={styles.homepageTopSlice}>
      <div className={styles.sliceContainer}>
        <h1 className={cx('badgerSlogan', 'fadeInUp')}>Let’s make<br />things better.</h1>
        <p className={cx('sloganDescription', 'fadeInUp')}>
          We work with you to deliver digital products that
          make a difference to people.
        </p>
      </div>
    </section>
  );
};

export default HomepageTopSlice;
