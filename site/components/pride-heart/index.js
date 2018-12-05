// @flow
import React from 'react';
import lottie from 'lottie-web';
import animationData from './data.json';
import styles from './style.css';

type Props = {
  direction: string,
  play: boolean,
  className?: string,
};

export default class PrideHeart extends React.Component<Props> {
  componentDidMount() {
    lottie.loadAnimation({
      animationData,
      autoplay: false,
      container: document.getElementById('prideHeart'),
      loop: false,
      renderer: 'svg',
    });
  }

  componentDidUpdate(prevProps: Props) {
    const { direction, play } = this.props;
    if (direction !== prevProps.direction && play === true) {
      lottie.setDirection(direction === 'forward' ? 1 : -1);
      lottie.play();
    }
    if (play !== prevProps.play && play === true) {
      lottie.play();
    }
  }

  render() {
    const { className } = this.props;

    return <div className={className || styles.prideHeart} id="prideHeart" />;
  }
}
