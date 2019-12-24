// @no-flow
import React, { Component } from 'react';
import styles from './style.css';
import Homepage01 from './assets/Homepage_1.jpg?min=320&max=1440&steps=6';
import Homepage02 from './assets/Homepage_2.jpg?min=320&max=1440&steps=6';
import Homepage03 from './assets/Homepage_3.jpg?min=320&max=1440&steps=6';
import Homepage04 from './assets/Homepage_4.jpg?min=320&max=1440&steps=6';
import Homepage05 from './assets/Homepage_5.jpg?min=320&max=1440&steps=6';
import Link from '../../components/link';

const screenBreakPoints = {
  tablet: 690,
  desktop: 980,
};

const headerImages = {
  mobile: [Homepage01, Homepage02, Homepage05],
  desktop: [Homepage03, Homepage04],
};

class GoldCoinSlice extends Component {
  static setWindowSize() {
    let currentWidth = 'tablet';
    if (typeof window !== 'undefined') {
      if (window.innerWidth < screenBreakPoints.tablet) {
        currentWidth = 'mobile';
      }
      if (
        window.innerWidth >= screenBreakPoints.tablet &&
        window.innerWidth < screenBreakPoints.desktop
      ) {
        currentWidth = 'tablet';
      }
      if (window.innerWidth >= screenBreakPoints.desktop) {
        currentWidth = 'desktop';
      }
    }
    return currentWidth;
  }

  static getImages(currentWidth) {
    if (currentWidth === 'mobile') {
      return headerImages.mobile;
    }
    return headerImages.mobile.concat(headerImages.desktop);
  }

  constructor(props) {
    super(props);
    const currentWidth = GoldCoinSlice.setWindowSize();
    const images = GoldCoinSlice.getImages(currentWidth);
    const currentImage = 0;
    const nextImage = 1;
    const opacity = 1;
    this.state = {
      images,
      currentImage,
      nextImage,
      opacity,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const currentWidth = GoldCoinSlice.setWindowSize();
      const images = GoldCoinSlice.getImages(currentWidth);
      const currentImage = 0;
      const nextImage = 1;
      const opacity = 1;
      const transition = false;
      this.setState({ images, currentImage, nextImage, opacity, transition });
    });

    this.interval = setInterval(() => {
      let { currentImage, nextImage } = this.state;
      const transition = true;
      const opacity = 0;
      this.setState({ opacity, transition });
      const fade = setTimeout(() => {
        // This is a bit of a hack changing the images and opacity
        // at the same time sometimes resulted in a "blink"
        // stepping the current image first and then delaying slightly
        // ensures the blick doesn't happen

        currentImage = nextImage;
        this.setState({
          currentImage,
        });
        const timeout = setTimeout(() => {
          const showTransition = false;
          const showOpacity = 1;
          const { images } = this.state;
          nextImage = nextImage === images.length - 1 ? 0 : nextImage + 1;
          this.setState({
            nextImage,
            opacity: showOpacity,
            transition: showTransition,
          });
          clearTimeout(timeout);
        }, 50);
        clearTimeout(fade);
      }, 1000);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { images, currentImage, nextImage, opacity, transition } = this.state;
    return (
      <div className={styles.goldCoinsContainer}>
        <div className={styles.goldCoinsContent}>
          <h2 className={styles.goldCoinsHeading}>See how we work</h2>
          <Link className={styles.goldCoinsCTA} to="experienceUs" data-link="experience-us-slice">
            Experience Red Badger
          </Link>
        </div>
        <img
          src={images[currentImage]}
          srcSet={images[currentImage].srcSet}
          sizes="(min-width: 1440px) 1440px, 100vw"
          className={`${styles.goldCoinsImage} ${styles.goldCoinsCurrentImage} ${
            transition ? styles.goldCoinsTransition : ''
          }`}
          alt="Awards"
          style={{ opacity }}
        />
        <img
          src={images[nextImage]}
          srcSet={images[nextImage].srcSet}
          sizes="(min-width: 1440px) 1440px, 100vw"
          className={`${styles.goldCoinsImage} ${styles.goldCoinsNextImage} ${
            transition ? '' : styles.hide
          }`}
          alt="Awards"
        />
      </div>
    );
  }
}

export default GoldCoinSlice;
