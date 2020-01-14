// @flow
/* eslint-disable react/no-danger */
import React, { Component } from 'react';
// React sometimes strips out important tags like muted and autoplay
// This component provides a workaround using dangerouslySetInnerHTML
// As outlined here: https://github.com/facebook/react/issues/6544
type VideoTagProps = {
  src: string,
  id: string,
  className?: string,
  autoplay?: boolean,
  muted?: boolean,
  loop?: boolean,
  disablePictureInPicture?: boolean,
  disableRemotePlayback?: boolean,
};

export default class VideoTag extends Component<VideoTagProps> {

  render() {
    return (
      <div
      className={}
      dangerouslySetInnerHTML={HubspotButtons[hubspotName]}
    />
    );
  }
}
/* eslint-enable react/no-danger */
