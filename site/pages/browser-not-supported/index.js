/* eslint-disable max-len,no-irregular-whitespace */
/* rules disabled as this is essentially a template - makes no sense to move the long lines elsewhere */

import React from 'react';
import styles from './style.css';
import chromeImage from './images/chrome.png';
import firefoxImage from './images/firefox.png';
import safariImage from './images/safari.png';
import operaImage from './images/opera.png';

const browsers = [
  {
    name: 'Chrome',
    link: 'https://www.google.co.uk/chrome/browser/desktop/index.html',
    image: chromeImage,
  },
  {
    name: 'Firefox',
    link: 'https://www.mozilla.org/firefox/',
    image: firefoxImage,
  },
  {
    name: 'Safari',
    link: 'https://support.apple.com/en_GB/downloads/safari',
    image: safariImage,
  },
  {
    name: 'Opera',
    link: 'https://www.opera.com/',
    image: operaImage,
  },
];

export default function BrowserNotSupported() {
  return (
    <div className={styles.bns__container}>
      <div className={styles.bns__headerContainer}>
        <div className={styles.bns__headerWraper}>
          <h1 className={styles.bns__headerHeadline}>Browser not supported</h1>
          <p className={styles.bns__headerContent}>
            {
              'Thanks for visiting but we don’t support your browser. Upgrade to one of these to see what we offer.'
            }
          </p>
        </div>
      </div>
      <div className={styles.bns__browsers}>
        <ul>
          {browsers.map(browser => (
            <li>
              <a
                className={styles.bns__browserLink}
                href={browser.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div>
                  <img src={browser.image} alt={browser.name} />
                </div>
                <span>{browser.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bns__footer}>
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
      </div>
    </div>
  );
}
