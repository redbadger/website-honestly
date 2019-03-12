import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import TechnologyPage from './index';

const triedAndTestedBlogPosts = [
  {
    url: 'https://www.somefakebadgersite.com/blog_01',
    title: 'this is a story all about how',
    author: 'The Fresh Prince',
    excerpt: 'my life got flipped turned upside down',
    date: '1988-02-11',
  },
];
const growingTrendsBlogPosts = [
  {
    url: 'https://www.somefakebadgersite.com/blog_02',
    title: 'I would walk 500 miles',
    author: 'The Proclaimers',
    excerpt: 'and I would walk 500 more',
    date: '1986-01-23',
  },
];

describe('site/pages/technology', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <TechnologyPage
            triedAndTestedBlogPosts={triedAndTestedBlogPosts}
            growingTrendsBlogPosts={growingTrendsBlogPosts}
          />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
