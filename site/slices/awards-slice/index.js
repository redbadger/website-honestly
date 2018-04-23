import React from 'react';
import awardsImage from './awards-april-2018.jpg';
import styles from './style.css';

export default () => (
  <div className={styles.awardsContainer}>
    <div className={styles.awards}>
      <img src={awardsImage} className={styles.awardsImage} alt="Awards" />
    </div>
  </div>
);
