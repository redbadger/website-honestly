import React from 'react';
import awardsImage from './awards.jpg';
import styles from './style.css';

export default () => (
  <img src={awardsImage} className={styles.awardsImage} alt="Awards" />
);
