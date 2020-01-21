// @no-flow
/* eslint-disable react/no-danger */
import React from 'react';
// React sometimes strips out important tags like muted and autoplay
// This component provides a workaround using dangerouslySetInnerHTML
// As outlined here: https://github.com/facebook/react/issues/6544

// set to no-flow because passing booleans into the html string freaks flow out

const VideoTag = ({
  src,
  id,
  className,
  autoplay,
  muted,
  loop,
  disablePictureInPicture,
  disableRemotePlayback,
}) => {
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
