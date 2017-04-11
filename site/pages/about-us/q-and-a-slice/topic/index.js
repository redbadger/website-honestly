// @flow
import React from 'react';

import styles from './style.css';

export type TopicProps = {
  question: string,
  answer: string,
}

const Topic = ({ topic: { question, answer } }: { topic: TopicProps }) => (
  <div>
    <h3 className={styles.topic__heading}>
      {question}
    </h3>
    <p>{answer}</p>
  </div>
);

export default Topic;
