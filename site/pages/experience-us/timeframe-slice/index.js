// @flow
import React, { Component } from 'react';
import Timeframe from './timeframe';
import HeroCard from '../hero-card';
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
  currentlyOpen?: any,
};

class TimeframeSlice extends Component<TimeframeSliceProps, TimeframeSliceState> {
  static getDerivedStateFromProps(props: TimeframeSliceProps, state: TimeframeSliceState) {
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

  constructor(props: TimeframeSliceProps) {
    super(props);
    this.state = { currentlyOpen: null };
    (this: any).handleClick = this.handleClick.bind(this);
    (this: any).renderHeroCards = this.renderHeroCards.bind(this);
  }

  handleClick(indexId: string) {
    const { currentWidth } = this.props;
    let { currentlyOpen } = this.state;
    if (currentWidth === 'mobile' && indexId === currentlyOpen) {
      currentlyOpen = null;
    } else {
      currentlyOpen = indexId;
    }
    this.setState({ currentlyOpen });
  }

  determinOpen(index: number) {
    return index === this.state.currentlyOpen;
  }

  renderHeroCards() {
    // So what is going on here?
    // Because of the way that this slice is rendered with different windows
    // droping down from a button at mobile, but full width sections at tblet/desktop
    // I needed a way to pass the data to a component and then render it outside of its parent.
    // I intially tried to use a portal but that doesn't work with server-side rendering.
    // So this hacky workaround is doing the job instead.
    if (typeof this.state.currentlyOpen === 'number') {
      return (
        <div>
          <div className={styles.timeFrameIntro}>
            <h5 className={styles.h5}>Let&apos;s meet</h5>
            <span>
              The best way to know if we’re right for you is to meet up. Here are some suggestions
              if you can spare an hour.
            </span>
          </div>
          <div className={styles.heroContainer}>
            {this.props.timeframes[
              Object.keys(this.props.timeframes)[this.state.currentlyOpen]
            ].map(page => {
              return (
                <HeroCard
                  image={page.headerImage}
                  title={page.title}
                  type={page.type}
                  description={page.subTitle}
                  url={`/experience-us/${page.slug}`}
                  blurb={page.whatWillYouLearn}
                  key={page.slug}
                />
              );
            })}
          </div>
        </div>
      );
    }
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
                  renderHeroCards={this.renderHeroCards}
                />
              );
            })}
          </ul>
          {this.renderHeroCards()}
          <div id={portalRoot} />
        </section>
      )) ||
      null
    );
  }
}

export default TimeframeSlice;
