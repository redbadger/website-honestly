// @flow
import React, { Component } from 'react';
import styles from './style.css';

type LightBoxGalleryProps = {
  position: number,
  onClose: Function,
  images: Array<{
    image: string,
    altText: string,
  }>,
};

type LightBoxGalleryState = {
  position: number,
};

type NavigationButtonProps = {
  onClick: Function,
  direction: string,
};

const NavigationButton = ({ onClick, direction }: NavigationButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={[styles.navigationButton, styles[`navigationButton__${direction}`]].join(' ')}
    >
      <span
        className={[
          styles.navigationButton__arrow,
          styles[`navigationButton__arrow__${direction}`],
        ].join(' ')}
      />
    </button>
  );
};

class LightBoxGallery extends Component<LightBoxGalleryProps, LightBoxGalleryState> {
  constructor(props: LightBoxGalleryProps) {
    super(props);
    this.state = {
      position: props.position,
    };

    (this: any).rotateGallery = this.rotateGallery.bind(this);
    (this: any).handleArrowNavigation = this.handleArrowNavigation.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleArrowNavigation);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrowNavigation);
  }

  handleClick(direction: number) {
    return this.rotateGallery.bind(this, direction);
  }

  rotateGallery(direction: number) {
    const position = this.state.position + direction;
    this.setState({ position });
  }

  handleArrowNavigation(event: KeyboardEvent) {
    if (this.isNextImage() && event.keyCode === 39) {
      this.rotateGallery(1);
    } else if (this.isPreviousImage() && event.keyCode === 37) {
      this.rotateGallery(-1);
    }
  }

  isPreviousImage() {
    return this.state.position > 0;
  }

  isNextImage() {
    return this.state.position < this.props.images.length - 1;
  }

  render() {
    const { images, onClose } = this.props;
    const { position } = this.state;
    return (
      <div className={styles.lightBoxGallery}>
        <div className={styles.background} />
        <div className={styles.galleryContainer}>
          <button className={styles.closeButton} onClick={onClose} />
          {this.isPreviousImage() && (
            <NavigationButton onClick={this.handleClick(-1)} direction="back" />
          )}
          <img
            src={images[position].image}
            className={styles.focusedImage}
            alt={images[position].altText}
          />
          {this.isNextImage() && (
            <NavigationButton onClick={this.handleClick(1)} direction="next" />
          )}
        </div>
      </div>
    );
  }
}
export default LightBoxGallery;
