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
  dropdownOpen: boolean,
};

const TimeframeIntro = () => {
  return (
    <div className={styles.timeFrameIntro}>
      <h5 className={styles.h5}>Let&apos;s meet</h5>
      <span>
        The best way to know if we’re right for you is to meet up. Here are some suggestions if you
        can spare an hour.
      </span>
    </div>
  );
};

class TimeframeSlice extends Component<TimeframeSliceProps, TimeframeSliceState> {
  static getDerivedStateFromProps(props: TimeframeSliceProps, state: TimeframeSliceState) {
    const { currentWidth } = props;
    const { currentlyOpen } = state;
    if (!currentlyOpen && currentWidth !== 'mobile') {
      return {
        currentlyOpen: '1 hour',
      };
    }
    return {
      currentlyOpen,
    };
  }

  constructor(props: TimeframeSliceProps) {
    super(props);
    this.state = { currentlyOpen: '1 hour', dropdownOpen: false };
    (this: any).handleClick = this.handleClick.bind(this);
    (this: any).renderHeroCards = this.renderHeroCards.bind(this);
    (this: any).handleDropDownClick = this.handleDropDownClick.bind(this);
  }

  handleClick(indexId: string) {
    const { currentWidth } = this.props;
    const newState = {};
    newState.currentlyOpen = indexId;
    if (currentWidth === 'mobile') {
      newState.dropdownOpen = false;
    }
    this.setState(newState);
  }

  determinOpen(key: string) {
    return key === this.state.currentlyOpen;
  }

  renderHeroCards() {
    // So what is going on here?
    // Because of the way that this slice is rendered with different windows
    // droping down from a button at mobile, but full width sections at tablet/desktop
    // I needed a way to pass the data to a component and then render it outside of its parent.
    // I intially tried to use a portal but that doesn't work with server-side rendering.
    // So this hacky workaround is doing the job instead.
    if (typeof this.state.currentlyOpen === 'string') {
      return (
        <div>
          {this.props.currentWidth !== 'mobile' && <TimeframeIntro />}
          <div className={styles.heroContainer}>
            {this.props.timeframes[this.state.currentlyOpen].map(page => {
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

  sortTimeframes(keys: Array<string>) {
    if (this.props.currentWidth === 'mobile') {
      const first = this.state.currentlyOpen;
      return keys.sort((x, y) => {
        if (x === first) {
          return -1;
        }
        if (y === first) {
          return 1;
        }
        return 0;
      });
    }
    return keys;
  }

  renderDropdown(keys, timeframes, dropdownOpen, currentWidth) {
    if (dropdownOpen) {
      return keys.map((timeframeKey, index) => {
        const goldCoinPages = timeframes[timeframeKey];
        return (
          <div>
            <Timeframe
              goldCoinPages={goldCoinPages}
              burgerMenu={currentWidth === 'mobile' && index === 0}
              title={timeframeKey}
              currentWidth={currentWidth}
              indexId={timeframeKey}
              handleClick={this.handleClick}
              open={this.determinOpen(timeframeKey)}
              timeframeKey={timeframeKey}
              key={timeframeKey}
              renderHeroCards={this.renderHeroCards}
            />
            {currentWidth === 'mobile' && index === 0 && <TimeframeIntro />}
          </div>
        );
      });
    }
    const timeframeKey = keys[0];
    const goldCoinPages = timeframes[timeframeKey];
    return (
      <div>
        <Timeframe
          goldCoinPages={goldCoinPages}
          title={timeframeKey}
          currentWidth={currentWidth}
          burgerMenu
          indexId={timeframeKey}
          handleClick={this.handleDropDownClick}
          open={this.determinOpen(timeframeKey)}
          timeframeKey={timeframeKey}
          key={timeframeKey}
          renderHeroCards={this.renderHeroCards}
        />
        {currentWidth === 'mobile' && <TimeframeIntro />}
      </div>
    );
  }

  handleDropDownClick() {
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen });
  }

  render() {
    const { timeframes, currentWidth } = this.props;
    const { dropdownOpen } = this.state;
    return (
      (timeframes && Object.keys(timeframes).length && (
        <section className={styles.timeframeSlice} id="contactUs">
          <ul className={styles.timeframeList}>
            {currentWidth === 'mobile' &&
              this.renderDropdown(
                this.sortTimeframes(Object.keys(timeframes)),
                timeframes,
                dropdownOpen,
                currentWidth,
              )}
            {currentWidth !== 'mobile' &&
              Object.keys(timeframes).map(timeframeKey => {
                const goldCoinPages = timeframes[timeframeKey];
                return (
                  <Timeframe
                    goldCoinPages={goldCoinPages}
                    title={timeframeKey}
                    currentWidth={currentWidth}
                    indexId={timeframeKey}
                    handleClick={this.handleClick}
                    open={this.determinOpen(timeframeKey)}
                    timeframeKey={timeframeKey}
                    key={timeframeKey}
                    renderHeroCards={this.renderHeroCards}
                  />
                );
              })}
          </ul>
          {this.renderHeroCards()}
        </section>
      )) ||
      null
    );
  }
}

export default TimeframeSlice;
