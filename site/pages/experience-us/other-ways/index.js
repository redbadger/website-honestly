// @flow
import * as React from 'react';
import styles from './style.css';
import EngagementCard from './engagement-card';

import type { GoldCoinLPProps } from '../../../templates/gold-coin-lp';

export type OtherWaysProps = {
  goldCoinPages: Array<GoldCoinLPProps>,
};

class OtherWays extends React.Component<OtherWaysProps> {
  // would use React.Element<'element name here'> but flow isn't happy about that...
  element: any;

  leftButton: any;

  rightButton: any;

  constructor(props: OtherWaysProps) {
    super(props);
    (this: any).scrollCarosel = this.scrollCarosel.bind(this);
    (this: any).toggleDisabled = this.toggleDisabled.bind(this);
    (this: any).renderEngagementCards = this.renderEngagementCards.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      (this: any).leftButton = document.getElementById('caroselScrollLeft');
      (this: any).rightButton = document.getElementById('caroselScrollRight');
      (this: any).element = document.getElementById('otherWaysCarousel');
      (this: any).element.onscroll = this.toggleDisabled;
    }
  }

  toggleDisabled() {
    const { element, leftButton, rightButton } = this;
    if (element.scrollLeft === 0) {
      leftButton.classList.add(styles.carouselButtonDisabled);
    } else if (leftButton.classList.contains(styles.carouselButtonDisabled)) {
      leftButton.classList.remove(styles.carouselButtonDisabled);
    }
    if (element.scrollWidth === element.scrollLeft + element.offsetWidth) {
      rightButton.classList.add(styles.carouselButtonDisabled);
    } else if (rightButton.classList.contains(styles.carouselButtonDisabled)) {
      rightButton.classList.remove(styles.carouselButtonDisabled);
    }
  }

  renderEngagementCards() {
    return (this: any).props.goldCoinPages.map((page: GoldCoinLPProps) => {
      return (
        <EngagementCard
          key={page.slug}
          image={page.headerImage}
          title={page.title}
          description={page.subTitle}
          slug={page.slug}
          person={false}
        />
      );
    });
  }

  scrollCarosel(direction: string) {
    const { element } = this;
    if (element) {
      if (direction === 'forward') {
        (element: any).scrollLeft += element.offsetWidth - 100;
      } else {
        (element: any).scrollLeft -= element.offsetWidth - 100;
      }
    }
  }

  render() {
    return (
      <div className={styles.otherWays}>
        <h2 className={styles.h2}>Other ways to engage with us</h2>
        <div className={styles.carousel} id="otherWaysCarousel">
          {this.renderEngagementCards()}
        </div>
        <div className={styles.carouselButtons}>
          <button
            type="button"
            aria-label="Scroll engagement carousel left"
            id="caroselScrollLeft"
            data-click="carousel-left"
            className={`${styles.carouselButton} ${styles.carouselButtonDisabled}`}
            onClick={() => {
              this.scrollCarosel('backwards');
            }}
          >
            <div className={`${styles.button__more} ${styles.button__moreLeft}`}>
              <span className={styles.button__arrowLeft} />
            </div>
          </button>
          <button
            type="button"
            aria-label="Scroll engagement carousel right"
            id="caroselScrollRight"
            data-click="carousel-right"
            className={styles.carouselButton}
            onClick={() => {
              this.scrollCarosel('forward');
            }}
          >
            <div className={`${styles.button__more} ${styles.button__moreRight}`}>
              <span className={styles.button__arrowRight} />
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default OtherWays;
