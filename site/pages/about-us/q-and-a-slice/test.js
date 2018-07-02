import React from 'react';
import { render } from 'enzyme';
import QAndASlice from '.';

describe('site/about-us/q-and-a-slice', () => {
  it('should render nothing for empty array', () => {
    const qAndASlice = render(<QAndASlice qAndAs={[]} />);
    expect(qAndASlice.html()).toEqual(null);
  });

  it('should render heading 2', () => {
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
    expect(qAndASlice.find('h2').text()).toEqual('Answers to common questions');
  });

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
    expect(categories.children().length).toEqual(2);
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
    expect(categories.find('h3').text()).toEqual('Company');
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
    const topics = qAndASlice
      .find('ul')
      .first()
      .find('ul');
    expect(topics.children().length).toEqual(2);
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
    const topics = qAndASlice
      .find('ul')
      .first()
      .find('ul');
    expect(topics.find('h4').text()).toEqual('What do Red Badger do?');
  });

  it('should make answer links external', () => {
    const qAndAs = [
      {
        slug: 'company',
        name: 'Company',
        topics: [
          {
            slug: 'what-do-red-badger-do',
            question: 'What do Red Badger do?',
            answer: '<a href="http://google.co.uk">link</a>',
          },
        ],
      },
    ];
    const qAndASlice = render(<QAndASlice qAndAs={qAndAs} />);
    const topics = qAndASlice
      .find('ul')
      .first()
      .find('ul');
    expect(topics.find('a').attr('rel')).toEqual('noopener noreferrer');
    expect(topics.find('a').attr('target')).toEqual('_blank');
  });
});
