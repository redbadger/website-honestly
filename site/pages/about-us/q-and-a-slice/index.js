// @flow
import React from 'react';
import Category from './category';
import styles from './style.css';
import type { CategoryProps } from './category';

const QAndASlice = ({ qAndAs }: { qAndAs: Array<CategoryProps> }) => (
  qAndAs.length !== 0 && <div className={styles.QAndA}>
    <div className={styles.QAndA__container}>
      <h2 className={styles.QAndA__heading}>Answers to common questions</h2>
      <ul>
        {qAndAs.map(category => (
          <li key={category.name}>
            <Category category={category} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default QAndASlice;
