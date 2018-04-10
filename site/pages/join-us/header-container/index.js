import React from 'react';
import styles from './style.css';

const HeaderContainer = () => (
  <div className={styles.headerContainer}>
    <div className={styles.headings}>
      <h1 className={styles.h1}>Join Us</h1>
      <h2 className={styles.h2}>
        <span>
          Are we what you’re looking <span className={styles.noWrap}>for?*</span>
        </span>
      </h2>
    </div>
  </div>
);

export default HeaderContainer;
