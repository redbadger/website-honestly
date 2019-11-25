// @flow
import React from 'react';
import Timeframe from './timeframe';
import styles from './style.css';
import Container from '../../../components/container';
import type { GoldCoinLPProps } from '../../../templates/gold-coin-lp';

type TimeframeSliceProps = {
  timeframes: {
    '1 hour': Array<GoldCoinLPProps>,
    '1 day': Array<GoldCoinLPProps>,
    '1 week': Array<GoldCoinLPProps>,
    '2 weeks': Array<GoldCoinLPProps>,
  },
};

const TimeframeSlice = ({ timeframes }: TimeframeSliceProps) => {
  return (
    (timeframes && Object.keys(timeframes).length && (
      <section className={styles.timelineSlice} id="contactUs">
        <div className={styles.benefits__wrapper}>
          <div className={styles.benefits__container}>
            <ul className={styles.benefits__categoryList}>
              {Object.keys(timeframes).map(timeframeKey => {
                const goldCoinPages = timeframes[timeframeKey];
                return (
                  <li key={timeframeKey}>
                    <Timeframe goldCoinPages={goldCoinPages} title={timeframeKey} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    )) ||
    null
  );
};

export default TimeframeSlice;
