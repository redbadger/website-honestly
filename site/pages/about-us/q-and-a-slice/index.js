// @flow
import React from 'react';
import Category from './category';
import styles from './style.css';
import type { CategoryProps } from './category';

const QAndASlice = ({ qAndAs }: { qAndAs: Array<CategoryProps> }) => (
  <div className={styles.QAndA}>
    <div className={styles.QAndA__container}>
      <h2 className={styles.QAndA__heading}>Answers to common questions</h2>
      {qAndAs.map(category => <Category category={category} />) }
    </div>
  </div>
);

export default QAndASlice;
