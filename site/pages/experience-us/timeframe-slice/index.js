// @flow
import React, { Component } from 'react';
import Timeframe from './timeframe';
import styles from './style.css';
import type { GoldCoinLPProps } from '../../../templates/gold-coin-lp';

type TimeframeSliceProps = {
  timeframes: {
    '1 hour': Array<GoldCoinLPProps>,
    '1 day': Array<GoldCoinLPProps>,
    '1 week': Array<GoldCoinLPProps>,
    '2 weeks': Array<GoldCoinLPProps>,
  },
  currentWidth: string,
};

type TimeframeSliceState = {
  currentlyOpen?: number,
};

class TimeframeSlice extends Component<TimeframeSliceProps, TimeframeSliceState> {
  static getDerivedStateFromProps(props, state) {
    const { currentWidth } = props;
    const { currentlyOpen } = state;
    if (!currentlyOpen && currentWidth !== 'mobile') {
      return {
        currentlyOpen: 0,
      };
    }
    return {
      currentlyOpen,
    };
  }

  constructor(props: TimeframeProps) {
    super(props);
    this.state = 0;
    (this: any).handleClick = this.handleClick.bind(this);
  }

  handleClick(indexId) {
    const { currentWidth } = this.props;
    let { currentlyOpen } = this.state;
    if (currentWidth === 'mobile' && indexId === currentlyOpen) {
      currentlyOpen = null;
    } else {
      currentlyOpen = indexId;
    }
    this.setState({ currentlyOpen });
  }

  determinOpen(index) {
    return index === this.state.currentlyOpen;
  }

  render() {
    const { timeframes, currentWidth } = this.props;
    const portalRoot = 'timeframePortalRoot';
    return (
      (timeframes && Object.keys(timeframes).length && (
        <section className={styles.timeframeSlice} id="contactUs">
          <ul className={styles.timeframeList}>
            {Object.keys(timeframes).map((timeframeKey, index) => {
              const goldCoinPages = timeframes[timeframeKey];
              return (
                <Timeframe
                  goldCoinPages={goldCoinPages}
                  title={timeframeKey}
                  currentWidth={currentWidth}
                  indexId={index}
                  handleClick={this.handleClick}
                  open={this.determinOpen(index)}
                  timeframeKey={timeframeKey}
                  key={timeframeKey}
                  portalRoot={portalRoot}
                />
              );
            })}
          </ul>
          <div id={portalRoot} />
        </section>
      )) ||
      null
    );
  }
}

export default TimeframeSlice;
