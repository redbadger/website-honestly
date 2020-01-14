// @flow
/* eslint-disable react/no-danger */
import React from 'react';
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

const VideoTag = ({
  src,
  id,
  className,
  autoplay,
  muted,
  loop,
  disablePictureInPicture,
  disableRemotePlayback,
}: VideoTagProps) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          src=${src}
          id=${id}
          autoplay=${autoplay}
          muted=${muted}
          loop=${loop}
          disablePictureInPicture=${disablePictureInPicture}
          disableRemotePlayback=${disableRemotePlayback}>
        </video>`,
      }}
    />
  );
};

VideoTag.defaultProps = {
  className: '',
  autoplay: false,
  muted: false,
  loop: false,
  disablePictureInPicture: false,
  disableRemotePlayback: false,
};
/* eslint-enable react/no-danger */

export default VideoTag;
