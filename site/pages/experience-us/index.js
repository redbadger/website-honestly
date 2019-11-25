// @flow
import React from 'react';
import TimeframeSlice from './timeframe-slice';
import OtherWays from './other-ways';

import styles from './style.css';

import type { GoldCoinLPProps } from '../../templates/gold-coin-lp';

type Props = {
  goldCoinPages: Array<GoldCoinLPProps>,
};

const social = {
  title: 'Join us | Red Badger',
  description:
    'We’re a Sunday Times Best Small Company to Work For 2018 and looking for the best talent to join our team.',
  altText: 'An illustration an award we won.',
  url: 'https://red-badger/jobs',
};

const validTimeframes = ['1 hour', '1 day', '1 week', '2 weeks'];

const sortTimeframes = goldCoinPages => {
  const timeframes = {};
  validTimeframes.forEach(timeframe => {
    timeframes[timeframe] = goldCoinPages.filter(page => page.duration === timeframe);
  });
  console.log(1, timeframes);
  return timeframes;
};

const ExperienceUsPage = ({ goldCoinPages }: Props) => (
  <div className={styles.background}>
    <h3 className={styles.h3}>Experience Red Badger</h3>
    <h1 className={styles.h1}>How long have you got?</h1>
    <TimeframeSlice timeframes={sortTimeframes(goldCoinPages)} />
    <OtherWays goldCoinPages={goldCoinPages} />
  </div>
);

export default ExperienceUsPage;
