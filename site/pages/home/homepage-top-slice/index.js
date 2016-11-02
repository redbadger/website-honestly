import classnames from 'classnames/bind';
import React from 'react';
import styles from './style.css';

const cx = classnames.bind(styles);

function Slogan() {
  return (
    <div className={cx('sliceContainer', 'fadeInUp')}>
      <h1 className={styles.badgerSlogan}>Let’s make<br />things better.</h1>

      <p className={styles.sloganDescription}>
        We work with you to deliver digital products that
        make a difference to people.
      </p>
    </div>
  );
}

function HomepageTopSlice() {
  return (
    <section className={styles.homepageTopSlice}>
      <div className="js-enabled-only">
        <Slogan />
      </div>

      <noscript>
        <Slogan />
      </noscript>
    </section>
  );
}

export default HomepageTopSlice;
