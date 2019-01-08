// @flow
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import { mediumScreen, largeScreen } from '../../css/_sizes.css';

import styles from './style.css';

type PictureProps = {
  className?: string,
  largeSrc?: string,
  mediumSrc?: string,
  smallSrc: string,
  alt?: string,
};

const cx = classnames.bind(styles);

class Picture extends Component<PictureProps> {
  componentDidMount() {
    if (window && window.picturefill) window.picturefill();
  }

  render() {
    const { className, largeSrc, mediumSrc, smallSrc, alt } = this.props;
    return (
      <picture className={styles.picture}>
        {largeSrc && <source srcSet={largeSrc} media={largeScreen} />}
        {mediumSrc && <source srcSet={mediumSrc} media={mediumScreen} />}
        <img className={cx(styles.img, className)} srcSet={smallSrc} alt={alt || ''} />
      </picture>
    );
  }
}

export default Picture;
