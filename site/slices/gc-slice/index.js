// @no-flow
import React, { Component } from 'react';
import styles from './style.css';
import Homepage01 from './assets/Homepage_1.jpg?min=320&max=1440&steps=6';
import Homepage02 from './assets/Homepage_2.jpg?min=320&max=1440&steps=6';
import Homepage03 from './assets/Homepage_3.jpg?min=320&max=1440&steps=6';
import Homepage04 from './assets/Homepage_4.jpg?min=320&max=1440&steps=6';
import Homepage05 from './assets/Homepage_5.jpg?min=320&max=1440&steps=6';
import Homepage06 from './assets/Homepage_6.jpg?min=320&max=1440&steps=6';
import HomepageVideo from './assets/HomepageVid.mp4';
import Link from '../../components/link';
import VideoTag from '../../components/video-tag';

const screenBreakPoints = {
  tablet: 690,
  desktop: 980,
};

const headerImages = {
  mobile: [Homepage01, Homepage02, Homepage05, Homepage06],
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
      currentWidth,
      nextImage,
      opacity,
      videoPlaying: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const currentWidth = GoldCoinSlice.setWindowSize();
      const videoPlaying = currentWidth !== 'mobile';
      if (videoPlaying) {
        this.setVideoElement('gc-slice-video');
      }
      const images = GoldCoinSlice.getImages(currentWidth);
      const currentImage = 0;
      const nextImage = 1;
      const opacity = 1;
      const transition = false;
      this.setState({ images, currentImage, currentWidth, nextImage, opacity, transition });
    });

    this.setVideoElement('gc-slice-video');

    this.interval = setInterval(() => {
      let { currentImage, nextImage } = this.state;
      const { videoPlaying } = this.state;
      if (!videoPlaying) {
        const transition = true;
        const opacity = 0;
        this.setState({ opacity, transition });
        const fade = setTimeout(() => {
          // This is a bit of a hack changing the images and opacity
          // at the same time sometimes resulted in a "blink"
          // stepping the current image first and then delaying slightly
          // ensures the blink doesn't happen

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
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setVideoElement(id, currentWidth) {
    const videoElem = document.getElementById(id);

    if (videoElem) {
      videoElem.oncanplaythrough = () => {
        this.setState({ videoPlaying: currentWidth !== 'mobile' });
      };
    }
  }

  render() {
    const {
      images,
      currentImage,
      nextImage,
      opacity,
      transition,
      currentWidth,
      videoPlaying,
    } = this.state;
    return (
      <div className={styles.goldCoinsContainer} data-cy="gold-coins-slice">
        <div className={styles.goldCoinsContent}>
          <h2 className={styles.goldCoinsHeading}>See how we work</h2>
          <Link className={styles.goldCoinsCTA} to="experienceUs" data-link="experience-us-slice">
            Experience Red Badger
          </Link>
        </div>
        {currentWidth !== 'mobile' && (
          <React.Fragment>
            <div
              className={`${styles.goldCoinsVideoOverlay} ${
                videoPlaying ? styles.goldCoinsVideoOverlayOn : ''
              }`}
            />
            <VideoTag
              className={`${styles.goldCoinsVideo} ${
                videoPlaying ? styles.goldCoinsVideoPlaying : ''
              }`}
              src={HomepageVideo}
              id="gc-slice-video"
              autoplay
              loop
              muted
            />
          </React.Fragment>
        )}
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
        {!videoPlaying && (
          <img
            src={images[nextImage]}
            srcSet={images[nextImage].srcSet}
            sizes="(min-width: 1440px) 1440px, 100vw"
            className={`${styles.goldCoinsImage} ${styles.goldCoinsNextImage} ${
              transition ? '' : styles.hide
            }`}
            alt="Awards"
          />
        )}
      </div>
    );
  }
}

export default GoldCoinSlice;
