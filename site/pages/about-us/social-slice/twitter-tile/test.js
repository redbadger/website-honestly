import React from 'react';
import { render } from 'enzyme';

import TwitterTile from './index';

const specialTweet = {
  text: 'I am a tweet &amp; I contain special characters',
  url: 'https://twitter.com/redbadgerteam/status/1108421453903523841',
  retweetCount: 0,
  favouriteCount: 5,
  created: '2019-03-20',
};

describe('TwitterTile', () => {
  it('renders correctly with special characters', () => {
    expect(render(<TwitterTile tweet={specialTweet} index={1} />)).toMatchSnapshot();
  });
});
