// @flow
import React from 'react';

import styles from './styles.css';

declare var YT: Object;

type Props = {
  name: string,
  elementId: string,
  videoId: string,
  containerCss?: string,
};

class Video extends React.Component<Props> {
  static addYTScript() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];

    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  componentDidMount() {
    if (!window.YT) {
      Video.addYTScript();
    }

    if (!window.onYouTubeIframeAPIReady) {
      window.onYouTubeIframeAPIReady = this.addPlayerInitCallback.bind(this);
    } else {
      window.onYouTubeIframeAPIReady();
    }
  }

  componentWillUnmount() {
    this.player = null;
  }

  player: ?Object = null;

  addPlayerInitCallback() {
    const { elementId, videoId } = this.props;

    this.player = new window.YT.Player(elementId, {
      videoId, //
      events: {
        // eslint-disable-next-line no-console
        onError: e => console.error(e),
      },
    });
  }

  render() {
    const { containerCss } = this.props;

    return (
      <div className={containerCss || styles.videoContainer}>
        {/* Extra span is for aspect ratio CSS */}
        <span>
          <div id={this.props.elementId} />
        </span>
      </div>
    );
  }
}

export default Video;
