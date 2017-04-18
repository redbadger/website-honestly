// @flow
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export type TopicProps = {
  question: string,
  answer: string,
}

class Topic extends Component {
  constructor(props: TopicProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  state: {
    open: boolean,
  };
  props: TopicProps;

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
        <a
          className={styles.topic__question}
          tabindex={0}
          onClick={this.handleClick}
        >
          <h4 className={styles.topic__heading}>
            {question}
          </h4>
          <button
            className={styles.topic__more}
          >
            {this.answerToggle()}
          </button>
        </a>
        <div
          className={cx('topic__answer', open ? 'topic__answer--visible' : 'topic__answer--hidden')}
          dangerouslySetInnerHTML={{ __html: answer }} // eslint-disable-line react/no-danger
        />
      </div>
    );
  }
}

export default Topic;
