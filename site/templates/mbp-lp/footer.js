import React from 'react';
import styles from './style.css';

import Sally from '../../components/sally-icon';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerText}>
        View our Privacy Policy to find out more about how we take care of your personal
        data.Copyright © Red Badger Consulting Limited 2020
      </div>
      <div className={styles.footerText}>
        <p>4th Floor, 2 Old Street Yard, London. EC1Y 8AF</p>
        <p>hello@red-badger.com</p>
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
);

export default Footer;
