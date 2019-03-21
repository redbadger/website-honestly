import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import AboutUs from './index';

const tweets = [
  {
    text: 'I am a tweet',
    url: 'https://www.somefakelink-redbadger.com',
    retweetCount: 1,
    favouriteCount: 2,
    created: '1988-02-12',
  },
  {
    text: 'I am a tweet with an image',
    url: 'https://twitter.com/redbadgerteam/status/1108421453903523841',
    retweetCount: 0,
    favouriteCount: 5,
    created: '2019-03-20',
    image: {
      url: 'https://pbs.twimg.com/media/D2HnbiMXgAEaJaI.jpg',
      smallSize: {
        width: 1200,
        height: 600,
      },
    },
  },
];

const instagramPosts = [
  {
    text: 'I am an instagram posts',
    link: 'https://www.somefakelink-redbadger.com',
    image: {
      url: 'https://www.somefakelink-redbadger.com/image.jpg',
      width: '640px',
      height: '640px',
    },
    comments: 1,
    likes: 2,
    created: '1988-02-11',
  },
];

const qAndAs = [
  {
    name: 'I am a qanda',
    topics: [
      {
        slug: 'squelch-slime-slugstuff',
        question: 'why do you slugs keep eating my cabbages',
        answer: "cuz they're delicious",
      },
    ],
  },
];

describe('site/pages/about-us', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <AboutUs tweets={tweets} instagramPosts={instagramPosts} qAndAs={qAndAs} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
