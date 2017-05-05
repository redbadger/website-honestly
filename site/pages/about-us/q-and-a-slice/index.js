// @flow
import React from 'react';
import Category from './category';
import styles from './style.css';
import type { CategoryProps } from './category';

const QAndASlice = ({ qAndAs }: { qAndAs: Array<CategoryProps> }) => (
  qAndAs.length ? <div className={styles.qAndA}>
    <div className={styles.qAndA__wrapper}>
      <div className={styles.qAndA__container}>
        <h2 className={styles.qAndA__heading}>Answers to common questions</h2>
        <ul className={styles.qAndA__categoryList}>
          {qAndAs.map(category => (
            <li key={category.name}>
              <Category category={category} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div> : null
);

export default QAndASlice;
