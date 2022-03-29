// @flow
import * as React from 'react';

import styles from './style.css';
import backgroundImg from './images/background.png';
import titleImg from './images/title.png';
import natsLogo from './images/nats-logo.png';

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
              <div className={styles.NatsSliceBodyheader}>
                <h4>We love</h4>
                <img src={natsLogo} alt="N.A.T.S logo" />
              </div>
              <div className={styles.NatsSliceCTA}>
                <div>
                  <p>
                    Wednesday 20th April - 18:30
                    <br />
                    Red Badger HQ &amp; Virtual
                  </p>
                </div>
              </div>
              <p>
                Join Red Badger, Synadia, FLEETCOR and Form3 to explore why NATS is the next
                generation of cloud connectivity for financial blue chips. More than a message
                broker, NATS is THE connective substrate for a global organisation–or even the whole
                planet.
              </p>
              <a
                href="https://content.red-badger.com/events/we-love-tech/we-love-nats"
                className={styles.NatsSliceLink}
              >
                Register
              </a>
            </div>
          </div>
          <div className={styles.NatsSliceImageWrapper}>
            <img
              className={styles.NatsSliceImage}
              src={backgroundImg}
              alt="An illustration of the letters n.a.t.s floating above a cloud"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatsSlice;
