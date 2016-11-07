import React, { Component } from 'react';
import classnames from 'classnames/bind';
import gsap from 'react-gsap-enhancer';
import { TimelineLite, RoughEase } from 'gsap';
import styles from './style.css';

const cx = classnames.bind(styles);

class HomepageTopSlice extends Component {
  componentDidMount() {
    this.addAnimation(this.animation);
  }

  animation({ target }) { // eslint-disable-line class-methods-use-this
    const slogan = target.find({
      className: styles.badgerSlogan,
    });
    const sloganDescription = target.find({
      className: cx('sloganDescription'),
    });
    const splitTextSlogan = new SplitText( // eslint-disable-line no-undef
      slogan,
      { type: 'words' },
    );
    const splitTextSloganDescription = new SplitText( // eslint-disable-line no-undef
      sloganDescription,
      { type: 'words' },
    );

    const tl = new TimelineLite();

    tl.staggerFrom(
      splitTextSlogan.words,
      0.9, {
        opacity: 0,
        scale: 0,
        transformOrigin: 'left top',
        ease: RoughEase.easeIn,
      },
      0.07,
    );

    tl.staggerFrom(
      splitTextSloganDescription.words,
      0.6, {
        opacity: 0,
        scale: 0,
        transformOrigin: 'left top',
        ease: RoughEase.easeIn,
      },
      0.05,
    );

    return tl;
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <section className={styles.homepageTopSlice}>
        <div className={styles.sliceContainer}>
          <h1 className={styles.badgerSlogan}>
            Let’s make<br />things better.
          </h1>
          <p className={cx('sloganDescription')}>
            We work with you to deliver digital products that
            make a difference to people.
          </p>
        </div>
      </section>
    );
  }
}

export default gsap()(HomepageTopSlice);
