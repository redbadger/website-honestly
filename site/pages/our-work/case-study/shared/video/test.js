import React from 'react';
import { mount } from 'enzyme';

import Video from './index';

describe('pages/our-work/case-study/shared/video', () => {
  beforeEach(() => {
    window.YT = {};
  });

  afterEach(() => {
    delete window.YT;
  });

  it('mounts the yt lib before the first script', () => {
    const script = document.createElement('script');
    script.src = 'some.js';
    document.head.appendChild(script);
    expect(document.scripts.length).toBe(1);
    expect(document.scripts[0].src).toBe('https://red-badger.com/some.js');

    Video.addYTScript();
    expect(document.scripts.length).toBe(2);
    expect(document.scripts[0].src).toBe('https://www.youtube.com/iframe_api');
  });

  it('calls the yt append script on mount', () => {
    delete window.YT;
    const spyAdd = jest.spyOn(Video, 'addYTScript').mockImplementation(() => {});
    jest.spyOn(Video.prototype, 'addPlayerInitCallback').mockImplementation(() => {});
    mount(<Video />);

    expect(spyAdd).toHaveBeenCalledTimes(1);
  });

  it('binds the context to the init fn on mount', () => {
    const rendered = mount(<Video />);
    expect(rendered.instance().addPlayerInitCallback).toBeDefined();
  });
});
