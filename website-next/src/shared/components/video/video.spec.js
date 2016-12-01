import Video from './index';
import React from 'react';
import { render, findWithType, hasProp } from '../../test-helper';
import { expect } from 'chai';

describe('Video', () => {
  it('adds an iframe', () => {
    const result = render(<Video id="1" type="youtube" />);

    expect(() => findWithType('iframe', result)).to.not.throw();
  });

  it('adds a youtube iframe if the type is youtube', () => {
    const result = render(<Video id="1" type="youtube" />);
    const iframe = findWithType('iframe', result);

    expect(hasProp('src', 'https://www.youtube.com/embed/1')(iframe)).to.equal(true);
  });

  it('adds a vimeo iframe if the type is vimeo', () => {
    const result = render(<Video id="1" type="vimeo" />);
    const iframe = findWithType('iframe', result);

    expect(hasProp('src', 'https://player.vimeo.com/video/1')(iframe)).to.equal(true);
  });
});
