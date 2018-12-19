// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';
import Container from '../../../components/container';

import FramedImage from './framed-image';
import LightBoxGallery from './light-box';

import photos from './photos';

type JobsGalleryState = {
  lightboxOpen: boolean,
  lightboxPosition: number,
};

class JobsGallerySlice extends Component<*, JobsGalleryState> {
  static handleLightbox(
    lightboxOpen: boolean,
    lightboxPosition: number,
    onClose: Function,
    images: Array<{
      image: string,
      altText: string,
    }>,
  ) {
    const lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'js-lightbox';
    const appContainer = document.querySelector('.js-app');
    if (appContainer && lightboxOpen) {
      appContainer.appendChild(lightboxContainer);
      JobsGallerySlice.renderLightbox(lightboxContainer, lightboxPosition, onClose, images);
    } else {
      JobsGallerySlice.unmountLightbox();
    }
  }

  static renderLightbox(
    lightboxContainer: HTMLDivElement,
    position: number,
    onClose: Function,
    images: Array<{
      image: string,
      altText: string,
    }>,
  ) {
    ReactDOM.render(
      <LightBoxGallery position={position} onClose={onClose} images={images} />,
      lightboxContainer,
    );
  }

  static unmountLightbox() {
    const target = document.querySelector('.js-lightbox');
    if (target) {
      ReactDOM.unmountComponentAtNode(target);
      if (target.parentNode) {
        target.parentNode.removeChild(target);
      }
    }
  }

  constructor() {
    super();
    this.state = {
      lightboxOpen: false,
      lightboxPosition: 0,
    };
    (this: any).handleClick = this.handleClick.bind(this);
    (this: any).handleClose = this.handleClose.bind(this);
  }

  componentDidUpdate() {
    const { lightboxOpen, lightboxPosition } = this.state;
    JobsGallerySlice.handleLightbox(
      lightboxOpen,
      lightboxPosition,
      this.handleClose,
      photos.map(photo => {
        return { image: photo.image, altText: photo.altText };
      }),
    );
  }

  handleClick(position: number) {
    return () => {
      const lightboxOpen = true;
      const lightboxPosition = position;
      this.setState({ lightboxOpen, lightboxPosition });
    };
  }

  handleClose() {
    const lightboxOpen = false;
    this.setState({ lightboxOpen });
  }

  render() {
    return (
      <Container>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryWrapper}>
            {photos.map((photo, index) => (
              <FramedImage
                key={photo.name}
                onClick={this.handleClick}
                position={index}
                photo={photo.image}
                illustration={photo.illustration}
                frame={photo.frame}
                isWide={photo.isWide}
                name={photo.name}
                altText={photo.altText}
              />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default JobsGallerySlice;
