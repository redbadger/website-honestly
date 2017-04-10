import React from 'react';
import Topic from '../topic';

import styles from './style.css';

const Category = () => (
  <div className={styles.category}>
    <div className={styles.category__title}>
      Company
    </div>
    <ul>
      <li className={styles.category__element}>
        <Topic />
      </li>
      <li className={styles.category__element}>
        <Topic />
      </li>
      <li className={styles.category__element}>
        <Topic />
      </li>
    </ul>
  </div>
);

export default Category;
