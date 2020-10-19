// @flow

import classnames from 'classnames/bind';
import React from 'react';
import styles from './style.css';
import Link from '../../../components/link';
import Arrow from '../../../components/icons/arrow';

const cx = classnames.bind(styles);

const HomepageTopSlice = () => {
  return (
    <section className={styles.homepageTopSlice} data-cy="top-slice">
      <div className={styles.sliceContainer}>
        <div className={styles.sloganWrapper}>
          <h1 className={styles.badgerSlogan}>
            <span>Let’s make</span> <span>things better</span>
          </h1>
        </div>
        <p className={cx('sloganDescription', 'fadeInUp')}>
          <Link to="whatWeDoPage" className={styles.sloganLink}>
            We are digital transformation experts who{' '}
            <span className={styles.sloganUnderline}>innovate and </span>
            <span className={styles.lastWord}>
              <span className={styles.sloganUnderline}>deliver.</span>
              <Arrow className={styles.arrow} />
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomepageTopSlice;
