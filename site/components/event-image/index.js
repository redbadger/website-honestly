// Displays event related image with link

import React, { Component } from 'react';
import styles from './style.css';

export default class EventImage extends Component {
  static propTypes = {
    imgPath: React.PropTypes.string.isRequired,
    imgAlt: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.imgBorder}>
        <div className={styles.imgWrapper}>
          <img className={styles.eventPicture} src={this.props.imgPath} alt={this.props.imgAlt} />
        </div>
      </div>
    );
  }
}
