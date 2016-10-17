/* eslint-disable react/no-set-state */
import InlineSVG from 'svg-inline-react';
import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';
import bubbleSVG from './speech-bubble.svg';
import CainPNG from './cain.png';

const cx = classnames.bind(styles);

const Cain = ({ goodNews, says }) => (
  <figure
  className={cx({
      cain: true,
      goodNews: goodNews,
    })}>
    <figcaption className={styles.speechBubble}>
      <span className={styles.speechBubbleText}>
        {says}
      </span>
      <InlineSVG src={bubbleSVG} className={styles.speechBubbleSVG} />
    </figcaption>
    <img src={CainPNG} className={styles.cainPNG} alt="Our founder, Cain" />
  </figure>
);

const { bool, string } = React.PropTypes;
Cain.propTypes = {
  says: string.isRequired,
  goodNews: bool,
};

export default Cain;
