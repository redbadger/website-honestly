// @flow

import classnames from 'classnames/bind';
import React from 'react';
import InlineSVG from 'svg-inline-react';
import ReactGA from 'react-ga';

import styles from './style.css';
import arrowSVG from '../../../../assets/images/SVG/arrow.svg';
import Link from '../../../components/link';
import PrideHeart from '../../../components/pride-heart';

const cx = classnames.bind(styles);

const trackPrideClicks = () =>
  ReactGA.event({
    category: 'Pride Heart',
    action: 'click',
    label: 'Pride campaign',
  });

type State = {
  animatePrideHeart: boolean,
  animationDirection: string,
};

class HomepageTopSlice extends React.Component<{}, State> {
  static prideLink: string =
    'https://lp.red-badger.com/why-react-native-was-the-solution-for-pride-in-londons-2018-app';

  constructor() {
    super();
    this.state = { animatePrideHeart: false, animationDirection: 'forward' };
  }

  animatePrideHeart(animationDirection: string) {
    this.setState({ animatePrideHeart: true, animationDirection });
  }

  render() {
    const { animatePrideHeart, animationDirection } = this.state;
    return (
      <section className={styles.homepageTopSlice}>
        <div className={styles.sliceContainer}>
          <a
            href={HomepageTopSlice.prideLink}
            className={styles.sloganWrapper}
            onMouseOver={() => this.animatePrideHeart('forward')}
            onFocus={() => this.animatePrideHeart('forward')}
            onMouseOut={() => this.animatePrideHeart('reverse')}
            onBlur={() => this.animatePrideHeart('reverse')}
            onTouchStart={() => this.animatePrideHeart('forward')}
            onClick={() => trackPrideClicks()}
          >
            <h1 className={styles.badgerSlogan}>Let’s make</h1>
            <br />
            <h1 className={styles.badgerSlogan}>things better</h1>
            <PrideHeart play={animatePrideHeart} direction={animationDirection} />
          </a>
          <p className={cx('sloganDescription', 'fadeInUp')}>
            <Link to="whatWeDoPage" className={styles.sloganLink}>
              We are digital transformation experts who{' '}
              <span className={styles.sloganUnderline}>innovate and </span>
              <span className={styles.lastWord}>
                <span className={styles.sloganUnderline}>deliver.</span>
                <InlineSVG src={arrowSVG} className={styles.arrow} />
              </span>
            </Link>
          </p>
        </div>
      </section>
    );
  }
}

export default HomepageTopSlice;
