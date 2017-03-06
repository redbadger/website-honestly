/*
* This component is ported from Website Next and is meant to be
* used only by Jobs and Events components
*/

import React, { Component } from 'react';
// The plan is to only use youtube in future so we declare the styles there.
import styles from './style.css';

export default class Video extends Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['vimeo', 'youtube']).isRequired,
  };

  static urlMap = {
    vimeo: 'https://player.vimeo.com/video/',
    youtube: 'https://www.youtube.com/embed/',
  };

  render() {
    const source = Video.urlMap[this.props.type] + this.props.id;
    return (
      <div className={styles.container}>
        <iframe
          allowFullScreen
          className={styles.embed}
          frameBorder="0"
          src={source}
        />
      </div>
    );
  }
}
