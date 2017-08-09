import React, { Component } from 'react';
import styles from './style.css';

export default class Video extends Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['vimeo', 'youtube']).isRequired,
    title: React.PropTypes.string.isRequired,
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
