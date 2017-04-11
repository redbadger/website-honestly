// @flow
import React, { Component } from 'react';

import styles from './style.css';

export type TopicProps = {
  question: string,
  answer: string,
}

class Topic extends Component {
  props: TopicProps;
  state: {
    open: boolean,
  }

  render() {
    const { question, answer } = this.props;
    return (
      <div>
        <div className={styles.topic__question}>
          <h3 className={styles.topic__heading}>
            {question}
          </h3>
          <div className={styles.topic__more}>
            <span className={styles.topic__plus} />
          </div>
        </div>
        <p className={styles.topic__answer}>{answer}</p>
      </div>
    );
  }

}

export default Topic;
