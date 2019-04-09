import React from 'react';
import styles from './style.css';
import arrowImg from './arrow.png?min=60&max=549&steps=6';

const headerSlice = () => {
  return (
    <section className={styles.pageHeaderContainer}>
      <div className={styles.upperContainer}>
        <div className={styles.screenReaderText}>
          Cyclic diagram of doing the right thing through innovation and delivery
        </div>
        <h1 className={styles.headingWrapper}>
          <div className={styles.alignLeft} role="presentation">
            <div className={styles.flexibleUpper}>
              <div className={styles.pageHeaderUpper}>
                {/* Space added so that h1 can be crawled correctly */}
                Do the {/* Space added so that h1 can be crawled correctly */}
                <br />
                right thing{' '}
              </div>
              <Arrow className={styles.arrowDown} />
            </div>
          </div>
          <div className={styles.alignRight} role="presentation">
            <div className={styles.flexibleLower}>
              <Arrow className={styles.arrowUp} />
              <div className={styles.pageHeaderLower}>
                {/* Space added so that h1 can be crawled correctly */}
                Do the <br />
                thing right
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.subtitle}>
          We help you bring innovative products and services to market through nimble and robust
          ways of working.
        </p>
      </div>
    </section>
  );
};

const Arrow = ({ className }) => (
  <img
    className={className}
    sizes="(min-width: 980px) 183px, (min-width: 690px) 140px, 60px"
    srcSet={arrowImg.srcSet}
    src={arrowImg}
    alt=""
  />
);

export default headerSlice;
