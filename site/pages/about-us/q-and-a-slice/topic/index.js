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

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { question, answer } = this.props;
    const { open } = this.state;
    const strongAnswer = `<strong class="${cx('topic__answer--strong')}">`;
    return (
      <div>
        <div
          className={styles.topic__question}
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
        </div>
        <div
          className={cx('topic__answer', `topic__answer${open ? '--visible' : '--hidden'}`)}
          dangerouslySetInnerHTML={{ __html: answer.replace(/<strong>/g, strongAnswer) }}
        />
      </div>
    );
  }
}

export default Topic;
