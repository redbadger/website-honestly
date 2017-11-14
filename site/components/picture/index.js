import React, { Component, PropTypes } from 'react';
import classnames from 'classnames/bind';
import { mediumScreen, largeScreen } from '../../css/_sizes.css';

import styles from './style.css';

const cx = classnames.bind(styles);

class Picture extends Component {
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

Picture.propTypes = {
  className: PropTypes.string,
  largeSrc: PropTypes.string,
  mediumSrc: PropTypes.string,
  smallSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Picture;
