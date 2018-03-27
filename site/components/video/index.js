// @flow
import React, { Component } from 'react';
import styles from './style.css';

type VideoProps = {
  id: string,
  type: 'vimeo' | 'youtube',
  title: string
};

export default class Video extends Component<VideoProps> {

  static urlMap = {
    vimeo: 'https://player.vimeo.com/video/',
    youtube: 'https://www.youtube.com/embed/',
  };

  render() {
    const source = Video.urlMap[this.props.type] + this.props.id;
    return (
      <div className={styles.container}>
        <iframe
          title={this.props.title}
          allowFullScreen
          className={styles.embed}
          frameBorder="0"
          src={source}
        />
      </div>
    );
  }
}
