import classnames from 'classnames/bind';
import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import arrowSVG from '../../../../assets/images/SVG/arrow.svg';
import Link from '../../../components/link';

const cx = classnames.bind(styles);

const HomepageTopSlice = () => {
  return (
    <section className={styles.homepageTopSlice}>
      <div className={styles.sliceContainer}>
        <h1 className={styles.badgerSlogan}>
          Let’s make<br />things better.
        </h1>
        <p className={cx('sloganDescription', 'fadeInUp')}>
          <Link to="whatWeDoPage" className={styles.sloganLink}>
            We are digital transformation experts who{' '}
            <span className={styles.sloganUnderline}>innovate and deliver</span>
            <InlineSVG src={arrowSVG} className={styles.arrow} />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomepageTopSlice;
