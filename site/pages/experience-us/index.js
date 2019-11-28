// @flow
import React, { Component } from 'react';
import TimeframeSlice from './timeframe-slice';
import OtherWays from './other-ways';

import styles from './style.css';

import type { GoldCoinLPProps } from '../../templates/gold-coin-lp';

type Props = {
  goldCoinPages: Array<GoldCoinLPProps>,
};

type State = {
  currentWidth: string,
};

// const social = {
//   title: 'Join us | Red Badger',
//   description:
//     'We’re a Sunday Times Best Small Company to Work For 2018 and looking for the best talent to join our team.',
//   altText: 'An illustration an award we won.',
//   url: 'https://red-badger/jobs',
// };

const validTimeframes = ['1 hour', '1 day', '1 week', '2 weeks'];

const sortTimeframes = goldCoinPages => {
  const timeframes = {};
  validTimeframes.forEach(timeframe => {
    timeframes[timeframe] = goldCoinPages.filter(page => page.duration === timeframe);
  });
  return timeframes;
};

const screenBreakPoints = {
  tablet: 690,
  desktop: 980,
};

class ExperienceUsPage extends Component<Props, State> {
  static setWindowSize() {
    let currentWidth = 'tablet';
    if (window.innerWidth < screenBreakPoints.tablet) {
      currentWidth = 'mobile';
    }
    if (
      window.innerWidth >= screenBreakPoints.tablet &&
      window.innerWidth < screenBreakPoints.desktop
    ) {
      currentWidth = 'tablet';
    }
    if (window.innerWidth >= screenBreakPoints.desktop) {
      currentWidth = 'desktop';
    }

    return currentWidth;
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      currentWidth: ExperienceUsPage.setWindowSize(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ currentWidth: ExperienceUsPage.setWindowSize() });
    });
  }

  render() {
    const { goldCoinPages } = this.props;
    const { currentWidth } = this.state;
    return (
      <div className={styles.background}>
        <h3 className={styles.h3}>Experience Red Badger</h3>
        {currentWidth}
        <h1 className={styles.h1}>How long have you got?</h1>
        <TimeframeSlice timeframes={sortTimeframes(goldCoinPages)} currentWidth={currentWidth} />
        <OtherWays goldCoinPages={goldCoinPages} />
      </div>
    );
  }
}

export default ExperienceUsPage;
