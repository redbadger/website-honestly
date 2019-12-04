// @flow
import React from 'react';
import styles from './style.css';
import HeroCard from '../../hero-card';
import ShowMoreIcon from '../../../../components/show-more-button';

import type { GoldCoinLPProps } from '../../../../templates/gold-coin-lp';

export type TimeframeProps = {
  title: string,
  goldCoinPages: Array<GoldCoinLPProps>,
  currentWidth: string,
  indexId: number,
  open: boolean,
  handleClick: Function,
};

const Timeframe = ({
  goldCoinPages,
  title,
  currentWidth,
  indexId,
  open,
  handleClick,
}: TimeframeProps) => {
  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <li className={styles.timeframeListItem}>
      <div className={styles.dropdownButtonContainer}>
        <button
          type="button"
          aria-label={`toggle ${title} dropdown`}
          onClick={() => {
            handleClick(indexId);
          }}
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
          {open && currentWidth === 'mobile' && (
            <div className={styles.timeFrameIntro}>
              <h5 className={styles.h5}>Let&apos;s meet</h5>
              <span>
                The best way to know if we’re right for you is to meet up. Here are some suggestions
                if you can spare an hour.
              </span>
            </div>
          )}
        </button>
      </div>
      <div className={open && currentWidth !== 'mobile' ? styles.timeFrameLargeContainer : ''}>
        {open &&
          currentWidth === 'mobile' &&
          goldCoinPages.map(page => {
            return (
              <HeroCard
                image={page.headerImage}
                title={page.title}
                type={page.type}
                description={page.subTitle}
                url={`experience-us/${page.slug}`}
                blurb={page.whatWillYouLearn}
                key={page.slug}
              />
            );
          })}
      </div>
    </li>
  );
};

export default Timeframe;
