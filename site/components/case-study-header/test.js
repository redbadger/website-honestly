import React from 'react';
import { mount } from 'enzyme';

import CaseStudyHeader from './index';

const caseStudyInfo = {
  title: 'BBC Now: Delivering a better customer experience, faster',
  tagline:
    'How the rapid prototyping model helped the BBC to uncover new ways to engage its audience',
  headerImage: 'https://www.somefakeassetstore.com/image.jpg',
  headerImageAlt: 'Tablet device showing screenshot of BBC website',
  headerColor: '#F2F3ED',
  social: {
    title: 'Delivering a better customer experience, faster. | Red Badger',
    description:
      'How the rapid prototyping model helped the BBC to uncover new ways to engage its audience.',
    metaImage: 'https://www.somefakeassetstore.com/image.jpg',
    altText: 'A laptop showing the BBC website',
    url: 'https://red-badger.com/our-work/case-study/bbc-now',
  },
};

describe('site/pages/home/case-study-header', () => {
  const { title, tagline, headerImage, headerImageAlt, headerColor, social } = caseStudyInfo;
  it('renders correctly', () => {
    expect(
      mount(
        <CaseStudyHeader
          title={title}
          tagline={tagline}
          headerImage={headerImage}
          headerImageAlt={headerImageAlt}
          headerColor={headerColor}
          social={social}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('will render a tagline when provided', () => {
    const header = mount(
      <CaseStudyHeader
        title={title}
        tagline={tagline}
        headerImage={headerImage}
        headerImageAlt={headerImageAlt}
        headerColor={headerColor}
        social={social}
      />,
    );

    const taglineElement = header.find('.content__tagline');
    expect(taglineElement.text()).toMatch(tagline);
  });

  it('will not render tagline element if no tagline is provided', () => {
    const header = mount(
      <CaseStudyHeader
        title={title}
        headerImage={headerImage}
        headerImageAlt={headerImageAlt}
        headerColor={headerColor}
        social={social}
      />,
    );

    expect(header.find('.content__tagline').exists()).toEqual(false);
  });
});
