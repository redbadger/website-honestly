import React from 'react';
import styles from './style.css';

import Sally from '../../components/sally-icon';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.narrowContent}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p>
            View our <a href="https://red-badger.com/privacy-policy/">Privacy Policy</a> to find out
            more about how we take care of your personal data.
          </p>
          <p>Copyright © Red Badger Consulting Limited 2020</p>
        </div>
        <div className={styles.footerText}>
          <p>4th Floor, 2 Old Street Yard, London. EC1Y 8AF</p>
          <p>
            <a href="mailto:hello@red-badger.com">hello@red-badger.com</a>
          </p>
          <p>+44 (0) 20 3567 0555</p>
        </div>
      </div>
      <a href={'https://www.red-badger.com/'} className={styles.poweredBy}>
        <div className={styles.sallyIcon}>
          <Sally />
        </div>
        <h3>Powered by Red Badger</h3>
      </a>
    </div>
  </div>
);

export default Footer;
