import React from 'react';
import Category from './category';

import styles from './style.css';

const QAndASlice = () => (
  <div className={styles.QAndA}>
    <h2 className={styles.QAndA__heading}>Answers to common questions</h2>
    <Category />
    <Category />
    <Category />
  </div>
);

export default QAndASlice;
