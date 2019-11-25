// @flow
import React, { Component } from 'react';
import styles from './style.css';
import ShowMoreIcon from '../../../../components/show-more-button';

import type { GoldCoinLPProps } from '../../../../templates/gold-coin-lp';

export type TimeframeProps = {
  title: String,
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
  }

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { goldCoinPages, title } = { ...this.props };
    const { open } = { ...this.state };
    return (
      <button
        type="button"
        aria-label={`toggle ${title} dropdown`}
        className={styles.dropdownButton}
      >
        {title.toUpperCase()}
        <ShowMoreIcon open={open} cssModifier={styles.timeframeButton} />
        {open && (
          <div>
            {goldCoinPages.map(page => {
              return <div className={styles.category}>{page.title}</div>;
            })}
          </div>
        )}
      </button>
    );
  }
}

export default Timeframe;
