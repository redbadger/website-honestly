// @flow
import React from 'react';
import Timeframe from './category';
import styles from './style.css';
import type { CategoryProps } from './category';
import Container from '../../../components/container';

const TimeframeSlice = ({ timeFrames }: { timeFrames: Array<TimeframeProps> }) =>
  timeFrames && timeFrames.length ? (
    <section className={styles.benefitsTimelineSection} id="contactUs">
      <Container>
        <div className={styles.benefits__wrapper}>
          <div className={styles.benefits__container}>
            <h1 className={styles.benefits__heading}>Benefits</h1>
            <ul className={styles.benefits__categoryList}>
              {timeFrames.map(timeframe => (
                <li key={timeframe.name}>
                  <Timeframe
                    name={timeframe.name}
                    icon={timeframe.icon}
                    benefits={timeframe.benefits}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  ) : null;

export default TimeframeSlice;
