import classnames from 'classnames/bind';
import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import arrowSVG from '../../../../assets/images/SVG/arrow.svg';
import Link from '../../../components/link';
import PrideHeart from '../../../components/pride-heart';

const cx = classnames.bind(styles);

class HomepageTopSlice extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = { animatePrideHeart: false, animationDirection: 'forward' };
  }

  animatePrideHeart(animationDirection) {
    this.setState({ animatePrideHeart: true, animationDirection });
  }

  render() {
    const { animatePrideHeart, animationDirection } = this.state;
    return (
      <section className={styles.homepageTopSlice}>
        <div className={styles.sliceContainer}>
          <div
            className={styles.sloganWrapper}
            onMouseOver={() => this.animatePrideHeart('forward')}
            onFocus={() => this.animatePrideHeart('forward')}
            onMouseOut={() => this.animatePrideHeart('reverse')}
            onBlur={() => this.animatePrideHeart('reverse')}
          >
            <h1 className={styles.badgerSlogan}>
              Let’s make<br />things better
            </h1>
            <PrideHeart play={animatePrideHeart} direction={animationDirection} />
          </div>
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
