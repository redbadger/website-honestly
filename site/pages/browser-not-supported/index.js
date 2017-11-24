/* eslint-disable max-len,no-irregular-whitespace */
/* rules disabled as this is essentially a template - makes no sense to move the long lines elsewhere */

import React from 'react';
import styles from './style.css';
import chromeImage from './images/chrome.png';
import firefoxImage from './images/firefox.png';
import safariImage from './images/safari.png';
import operaImage from './images/opera.png';

export default function BrowserNotSupported() {
  return (
    <div className={styles.bns__container}>
      <section className={styles.bns__headerContainer}>
        <div className={styles.bns__headerWraper}>
          <h1 className={styles.bns__headerHeadline}>Browser not supported</h1>
          <p className={styles.bns__headerContent}>
            {`Thanks for visiting but we don’t support your browser. Upgrade to one of these to see what we offer.`}
          </p>
        </div>
      </section>
      <section className={styles.bns__browsers}>
        <ul>
          <li>
            <a
              className={styles.bns__browserLink}
              href="https://www.google.co.uk/chrome/browser/desktop/index.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div>
                <img src={chromeImage} alt="Chrome" />
              </div>
              <span>Chrome</span>
            </a>
          </li>
          <li>
            <a
              className={styles.bns__browserLink}
              href="https://www.mozilla.org/firefox/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div>
                <img src={firefoxImage} alt="Firefox" />
              </div>
              <span>Firefox</span>
            </a>
          </li>
          <li>
            <a
              className={styles.bns__browserLink}
              href="https://support.apple.com/en_GB/downloads/safari"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div>
                <img src={safariImage} alt="Safari" />
              </div>
              <span>Safari</span>
            </a>
          </li>
          <li>
            <a
              className={styles.bns__browserLink}
              href="http://www.opera.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div>
                <img src={operaImage} alt="Opera" />
              </div>
              <span>Opera</span>
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.bns__footer}>
        <div className={styles.bns__footerWraper}>
          <h2 className={styles.bns__footerHeadLine}>
            Need help with digital transformation?<br />Tell us more.
          </h2>
          <p className={styles.bns__footerContent}>
            <a className={styles.bns__footerLink} href="mailto:hello@red-badger.com">
              hello@red-badger.com
            </a>
          </p>
          <p className={styles.bns__footerContent}>
            <a className={styles.bns__footerLink} href="tel:+442035670555">
              +44 (0) 20 3567 0555
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
