// @flow
import React, { Component } from 'react';
import styles from './style.css';

export type TopicProps = {
  slug: string,
  question: string,
  answer: string,
};

type TopicState = {
  open: boolean,
  showButton: boolean,
};

class Topic extends Component<TopicProps, TopicState> {
  constructor(props: TopicProps) {
    super(props);
    this.state = {
      open: false,
      showButton: false,
    };
  }

  componentDidMount = () => {
    this.setState({ showButton: true });
  };

  props: TopicProps;

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { slug, question, answer } = this.props;
    const { open, showButton } = this.state;
    const strongText = `<strong class="${styles.topic__answer__strong}"`;
    const externalLink = '<a rel="noopener noreferrer" target="_blank"';
    const formattedAnswer = answer.replace(/<strong/g, strongText).replace(/<a/g, externalLink);
    return (
      <div>
        <div className={styles.topic__question} onClick={this.handleClick}>
          <h4 className={styles.topic__heading}>{question}</h4>
          <button
            aria-controls={slug}
            aria-expanded={open}
            aria-label={question}
            className={showButton ? styles.topic__more : styles.topic__more__hide}
          >
            <span className={open ? styles.topic__minus : styles.topic__plus} />
          </button>
        </div>
        <div
          id={slug}
          className={open ? styles.topic__answer__visible : styles.topic__answer__hidden}
          dangerouslySetInnerHTML={{ __html: formattedAnswer }}
        />
        <noscript>
          <div
            className={styles.topic__answer__visible}
            dangerouslySetInnerHTML={{ __html: formattedAnswer }}
          />
        </noscript>
      </div>
    );
  }
}

export default Topic;
