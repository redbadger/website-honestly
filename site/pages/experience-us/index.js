// @flow
import React, { Component } from 'react';
import TimeframeSlice from './timeframe-slice';
import OtherWays from './other-ways';

import Social from '../../components/social';
// import EngagementTestimonialSlice from './engagement-testimonial-slice';
// import icon from './assets/barbara.png';

import styles from './style.css';

import type { GoldCoinLPProps } from '../../templates/gold-coin-lp';

type Props = {
  goldCoinPages: Array<GoldCoinLPProps>,
};

type State = {
  currentWidth: string,
};

const social = {
  title: 'Experience Red Badger',
  description:
    'Meet our tech and design experts to find out how we can deliver value, build capability, and change your culture to increase business efficiency.',
  altText: 'An illustration an award we won.',
  url: 'https://red-badger.com/what-we-do/experience-us/',
};

export type TimeframesType = {
  '1 hour': { heading: string, copy: string, pages?: Array<GoldCoinLPProps> },
  '1 day': { heading: string, copy: string, pages?: Array<GoldCoinLPProps> },
  '1 week': { heading: string, copy: string, pages?: Array<GoldCoinLPProps> },
  '2 weeks': { heading: string, copy: string, pages?: Array<GoldCoinLPProps> },
};

const timeframes: TimeframesType = {
  '1 hour': {
    heading: 'Let’s meet',
    copy:
      'The best way to know if we’re right for you is to meet up. Here are some suggestions if you’ve got an hour to spare.',
  },
  '1 day': {
    heading: 'Let’s explore',
    copy:
      'Want to shake up the way you do things? We can bring fresh thinking and new approaches to your projects. In just one day.',
  },
  '1 week': {
    heading: 'Let’s dig',
    copy:
      'We love digging into tricky problems. Got a week? Discover how we create value by working together.',
  },
  '2 weeks': {
    heading: 'Let’s do',
    copy:
      'Given two weeks we can explore issues you’re facing in more depth, and even make things we can test. Here’s how to get going.',
  },
};

const sortTimeframes = goldCoinPages => {
  Object.keys(timeframes).forEach(timeframe => {
    timeframes[timeframe].pages = goldCoinPages
      .filter(page => page.duration === timeframe)
      .slice(0, 3);
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
    if (typeof window !== 'undefined') {
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
      <div>
        <Social {...social} />
        <div className={styles.background}>
          <div className={styles.content}>
            <h3 className={styles.h3}>Experience Red Badger</h3>
            <h1 className={styles.h1}>How long have you got?</h1>
            <TimeframeSlice
              timeframes={sortTimeframes(goldCoinPages)}
              currentWidth={currentWidth}
            />
            {/* Currently disabled until we have a new quote */}
            {/* <EngagementTestimonialSlice
            content="I’m depressed you guys are leaving and hope we’ll be working together again soon."
            author="Barbara Wray"
            jobRole="Head of Engineering &amp; Test, LME"
            icon={icon}
          /> */}
            <OtherWays goldCoinPages={goldCoinPages} />
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceUsPage;
