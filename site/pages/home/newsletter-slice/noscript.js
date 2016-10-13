import React from 'react';
import styles from './style.css';

import BeforeSignUpTitles from './before-sign-up-titles';

const NoScript = () => (
  <noscript className={styles.newsletter}>
    <BeforeSignUpTitles />
    <a href="http://eepurl.com/bibY5P" className={styles.link}>
      Sing up through MailChimp
    </a>
  </noscript>
);


export default NoScript;
