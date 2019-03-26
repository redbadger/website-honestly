// @flow
import React from 'react';
import ReactGA from 'react-ga';

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

  trackPlayVideo() {
    const { name } = this.props;

    ReactGA.event({
      category: name,
      action: 'click',
      label: 'Case Study',
    });
  }

  addPlayerInitCallback() {
    let dataSent = false;
    const { elementId, videoId } = this.props;

    this.player = new window.YT.Player(elementId, {
      videoId, //
      events: {
        // eslint-disable-next-line no-console
        onError: e => console.error(e),
        onStateChange: e => {
          if (e.data === YT.PlayerState.PLAYING && !dataSent) {
            this.trackPlayVideo();
            dataSent = true;
          }
        },
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
