// @flow
import * as React from 'react';

import styles from './style.css';
import image from './image.png';

const StonewallSlice = () => {
  return (
    <div className={`${styles.StonewallSliceWrapper}`} id="genz">
      <div className={styles.StonewallSliceContent}>
        <div className={styles.StonewallSlice}>
          <div className={styles.StonewallSliceText}>
            <h4 className={styles.StonewallSliceHeading}>
              We are a Stonewall Diversity Champion employer
            </h4>
            <div className={styles.StonewallSliceImageSmallWrapper}>
              <img
                className={styles.StonewallSliceImageSmall}
                src={image}
                alt="illustration, a smiling man looks at his phone as a jet flies away"
              />
            </div>
            <div className={styles.StonewallSliceTextContent}>
              <p>
                We respect and care for each other and strive for a truly diverse workplace where
                everyone has the freedom to be their true selves and feel safe.
              </p>
              <p>
                We’re part of the Stonewall Diversity Champion programme to continuously develop
                structured and systematic policies and practises that reflect the world we live in.
              </p>
              <p>
                In addition to supporting the LGBTQ+ community, we’re focused on applying what we
                learn to all areas of equality including ethnicity, gender, disability and social
                mobility.
              </p>
              <div className={styles.StonewallSliceCTA}>
                <a
                  href="https://www.stonewall.org.uk/diversity-champions-programme"
                  className={styles.StonewallSliceLink}
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
          <div className={styles.StonewallSliceImageWrapper}>
            <img
              className={styles.StonewallSliceImage}
              src={image}
              alt="illustration, a smiling man looks at his phone as a jet flies away"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StonewallSlice;
