// @flow
import React, { Component } from 'react';
import styles from './style.css';
import HeroCard from '../../hero-card';
import ShowMoreIcon from '../../../../components/show-more-button';

import type { GoldCoinLPProps } from '../../../../templates/gold-coin-lp';

export type TimeframeProps = {
  title: string,
  goldCoinPages: Array<GoldCoinLPProps>,
};

type TimeframeState = {
  open: boolean,
};

class Timeframe extends Component<TimeframeProps, TimeframeState> {
  constructor(props: TimeframeProps) {
    super(props);
    this.state = {
      open: false,
    };
    (this: any).handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { goldCoinPages, title } = { ...this.props };
    const { open } = { ...this.state };
    return (
      <div>
        <button
          type="button"
          aria-label={`toggle ${title} dropdown`}
          onClick={this.handleClick}
          className={`${styles.dropdownButton} ${
            open ? styles.dropdownButtonOpen : styles.dropdownButtonClosed
          }`}
        >
          <h4 className={open ? styles.h4Open : ''}>{title.toUpperCase()}</h4>
          <ShowMoreIcon
            open={open}
            cssModifier={`${styles.timeframeButton} ${
              open ? styles.timeframeButtonOpen : styles.timeframeButtonClosed
            }`}
          />
          {open && (
            <div className={styles.timeFrameIntro}>
              <h5 className={styles.h5}>Let&apos;s meet</h5>
              <span>
                The best way to know if we’re right for you is to meet up. Here are some suggestions
                if you can spare an hour.
              </span>
            </div>
          )}
        </button>
        {open &&
          goldCoinPages.map(page => {
            return (
              <HeroCard
                image={page.headerImage}
                title={page.title}
                type={page.type}
                description={page.subTitle}
                url={`experience-us/${page.slug}`}
                blurb={page.whatIsIt}
              />
            );
          })}
      </div>
    );
  }
}

export default Timeframe;
