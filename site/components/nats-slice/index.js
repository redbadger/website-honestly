// @flow
import * as React from 'react';

import styles from './style.css';
import backgroundImg from './images/background.png';

const NatsSlice = () => {
  return (
    <div className={`${styles.NatsSliceWrapper}`} id="genz">
      <div className={styles.NatsSliceContent}>
        <div className={styles.NatsSlice}>
          <img
            className={styles.NatsSliceTitleImage}
            src={backgroundImg}
            alt="text reading: We Love Tech"
          />

          <div className={styles.NatsSliceText}>
            <p>
              Join Red Badger, Synadia, FLEETCOR and Form3 to explore why NATS is the next
              generation of cloud connectivity for financial blue chips. More than a message broker,
              NATS is THE connective substrate for a global organisation–or even the whole planet.
            </p>
            <a
              href="https://content.red-badger.com/events/we-love-tech/we-love-nats"
              className={styles.NatsSliceLink}
            >
              Register →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatsSlice;
