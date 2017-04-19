// @flow
import React from 'react';
import Topic from '../topic';
import type { TopicProps } from '../topic';
import styles from './style.css';

export type CategoryProps = {
  name: string,
  topics: Array<TopicProps>
}

const Category = ({ category }: { category: CategoryProps }) => (
  <div className={styles.category}>
    <h3 className={styles.category__title}>
      {category.name}
    </h3>
    <ul className={styles.category__questionList}>
      {category.topics.map(({ slug, question, answer }) => (
        <li key={question} className={styles.category__element}>
          <Topic slug={slug} question={question} answer={answer} />
        </li>
      ))}
    </ul>
  </div>
);

export default Category;
