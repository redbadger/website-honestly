import React from 'react';
import { render } from 'enzyme';
import QAndASlice from '.';

describe('site/about-us/q-and-a-slice', () => {
  it('should render category list with topic list', () => {
    const qAndAs = [
      {
        slug: 'company',
        name: 'Company',
        topics: [
          {
            slug: 'what-do-red-badger-do',
            question: 'What do Red Badger do?',
            answer: 'Everything',
          },
          {
            slug: 'what-sets-red-badger-apart',
            question: 'What sets Red Badger apart from competitors?',
            answer: 'Something',
          },
        ],
      },
    ];
    const qAndASlice = render(<QAndASlice qAndAs={qAndAs} />);
    const categories = qAndASlice.find('ul').first();
    expect(categories.children().length).to.equal(1);
    const topics = qAndASlice.find('ul').first().find('ul');
    expect(topics.children().length).to.equal(2);
  });
});
