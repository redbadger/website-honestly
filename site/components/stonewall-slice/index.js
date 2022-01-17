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
                We take pride in being an inclusive place to work and we actively seek to create a
                working environment that reflects the variety of the world we live in. We respect
                and care for each other and strive for a truly diverse workplace where everyone has
                the freedom to be their true selves and feel safe. To demonstrate our commitment to
                this goal, we joined the Stonewall Diversity Champion programme to help us continue
                to be a welcome place for all and be a bastion of best practice for LGBTQ+ and BIPOC
                recruitment.
              </p>
              <div className={styles.StonewallSliceCTA}>
                <a href="https://www.stonewall.org.uk/" className={styles.StonewallSliceLink}>
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
