// @flow
import * as React from 'react';

import styles from './style.css';
import backgroundImg from './images/background.png';
import titleImg from './images/title.png';
import natsLogo from './images/natslogo.png';

const NatsSlice = () => {
  return (
    <div className={`${styles.NatsSliceWrapper}`} id="genz">
      <div className={styles.NatsSliceContent}>
        <div className={styles.NatsSlice}>
          <div className={styles.NatsSliceText}>
            <img
              className={styles.NatsSliceTitleImage}
              src={titleImg}
              alt="text reading: We Love Tech"
            />
            <div className={styles.NatsSliceTextContent}>
              <p>
                <strong className={styles.NatsSliceStrong}>
                  We love <img src={natsLogo} alt="N A T S" />
                </strong>
              </p>
              <p>
                Join Red Badger, Synadia, FLEETCOR and Form3 to explore why NATS is the next
                generation of cloud connectivity for financial blue chips. More than a message
                broker, NATS is THE connective substrate for a global organisation–or even the whole
                planet.
              </p>
              <div className={styles.NatsSliceCTA}>
                <div>
                  <p>
                    Wednesday 20th April - 18:30
                    <br />
                    Red Badger HQ &amp; Virtual
                  </p>
                </div>
                <a
                  href="https://content.red-badger.com/events/we-love-tech/we-love-nats"
                  className={styles.NatsSliceLink}
                >
                  Register →
                </a>
              </div>
            </div>
          </div>
          <div className={styles.NatsSliceImageWrapper}>
            <img
              className={styles.NatsSliceImage}
              src={backgroundImg}
              alt="illustration, a smiling man looks at his phone as a jet flies away"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatsSlice;
