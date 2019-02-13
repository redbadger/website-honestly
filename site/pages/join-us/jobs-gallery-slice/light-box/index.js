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

    (this: any).handleClick = this.handleClick.bind(this);
  }

  handleClick(direction: number) {
    return () => {
      const position = this.state.position + direction;
      this.setState({ position });
    };
  }

  render() {
    const { images, onClose } = this.props;
    const { position } = this.state;
    return (
      <div className={styles.lightBoxGallery}>
        <div className={styles.background} />
        <div className={styles.galleryContainer}>
          <button className={styles.closeButton} onClick={onClose} />
          {position > 0 && <NavigationButton onClick={this.handleClick(-1)} direction="back" />}
          <img
            src={images[position].image}
            className={styles.focusedImage}
            alt={images[position].altText}
          />
          {position < images.length - 1 && (
            <NavigationButton onClick={this.handleClick(1)} direction="next" />
          )}
        </div>
      </div>
    );
  }
}
export default LightBoxGallery;
