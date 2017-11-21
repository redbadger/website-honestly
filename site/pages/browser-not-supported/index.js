/* eslint-disable max-len,no-irregular-whitespace */
/* rules disabled as this is essentially a template - makes no sense to move the long lines elsewhere */

import React from 'react';
import styles from './style.css';

export default function BrowserNotSupported() {
  return (
    <div>
      <header>
        <h1 className={styles.bns__header}>Browser not supported</h1>
        <p className={styles.bns__headerContent}>
          Thanks for visiting but we dont support your browser. Upgrade to one of these to see what
          we offer
        </p>
      </header>
      <main className={styles.bns__browsers}>
        <ul>
          <li>
            <div>
              <img src={'http://fillmurray.com/200/200'} alt={''} />
            </div>
            <a className={styles.bns__browserLink} href="">
              Chrome
            </a>
          </li>
          <li>
            <div>
              <img src="http://fillmurray.com/200/200" alt="" />
            </div>
            <a className={styles.bns__browserLink} href="">
              Firefox
            </a>
          </li>
          <li>
            <div>
              <img src="http://fillmurray.com/200/200" alt="" />
            </div>
            <a className={styles.bns__browserLink} href="">
              Safari
            </a>
          </li>
          <li>
            <div>
              <img src="http://fillmurray.com/200/200" alt="" />
            </div>
            <a className={styles.bns__browserLink} href="">
              Opera
            </a>
          </li>
        </ul>
      </main>
      <footer className={styles.bns__footer}>
        <h2 className={styles.bns__footerHeadLine}>Need help with digital transformation?</h2>
        <p>Email us at</p>
        <p>
          <a href="mailto:hello@red-badger.com">hello@red-badger.com</a>
        </p>
        <p>Calls us on</p>
        <p>
          <a href="tel:+442035670555">+44 (0) 20 3567 0555</a>
        </p>
      </footer>
    </div>
  );
}
