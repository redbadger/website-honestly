import React from 'react';
import { render } from 'enzyme';
import QAndASlice from '.';

describe('site/about-us/q-and-a-slice', () => {
  it('should render category list', () => {
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
        ],
      },
      {
        slug: 'projects',
        name: 'Projects',
        topics: [
          {
            slug: 'what-technology-can-you-use',
            question: 'What technology can you use?',
            answer: 'Anything',
          },
        ],
      },
    ];
    const qAndASlice = render(<QAndASlice qAndAs={qAndAs} />);
    const categories = qAndASlice.find('ul').first();
    expect(categories.children().length).to.equal(2);
  });

  it('should render category heading 3', () => {
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
        ],
      },
    ];
    const qAndASlice = render(<QAndASlice qAndAs={qAndAs} />);
    const categories = qAndASlice.find('ul').first();
    expect(categories.find('h3').text()).to.equal('Company');
  });

  it('should render topic list', () => {
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
    const topics = qAndASlice.find('ul').first().find('ul');
    expect(topics.children().length).to.equal(2);
  });

  it('should render topic heading 4', () => {
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
        ],
      },
    ];
    const qAndASlice = render(<QAndASlice qAndAs={qAndAs} />);
    const topics = qAndASlice.find('ul').first().find('ul');
    expect(topics.find('h4').text()).to.equal('What do Red Badger do?');
  });
});
