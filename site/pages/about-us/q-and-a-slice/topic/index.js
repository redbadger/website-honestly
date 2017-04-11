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
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  answerToggle = () => {
    const open = this.state.open;
    return (
      <span
        className={open ? styles.topic__minus : styles.topic__plus}
      />
    );
  }

  render() {
    const { question, answer } = this.props;
    const open = this.state.open;
    return (
      <div>
        <div className={styles.topic__question}>
          <h3 className={styles.topic__heading}>
            {question}
          </h3>
          <button
            className={styles.topic__more}
            onClick={this.handleClick}
          >
            {this.answerToggle()}
          </button>
        </div>
        <p
          className={open ? styles['topic__answer--visible'] : styles['topic__answer--hidden']}
        >
          {answer}
        </p>
      </div>
    );
  }
}

export default Topic;
