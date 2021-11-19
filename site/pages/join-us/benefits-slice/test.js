import React from 'react';
import { render } from 'enzyme';
import BenefitsSlice from '.';
import careerIcon from '../images/Career_icon.png';

describe('site/join-us/benefits-slice', () => {
  it('should render heading 2', () => {
    const categories = [
      {
        name: 'career',
        icon: careerIcon,
        benefits: [
          {
            question: 'What do I get?',
            answer: 'Everything',
            mobileView: false,
          },
        ],
      },
    ];
    const benefitsSlice = render(<BenefitsSlice benefitsCategories={categories} />);
    expect(benefitsSlice.find('h1').text()).toEqual('Benefits');
  });

  it('should render category list', () => {
    const categories = [
      {
        name: 'career',
        icon: careerIcon,
        benefits: [
          {
            question: 'What do I get?',
            answer: 'Everything',
            mobileView: false,
          },
        ],
      },
      {
        name: 'career',
        icon: careerIcon,
        benefits: [
          {
            question: 'What do I get?',
            answer: 'Everything',
            mobileView: false,
          },
        ],
      },
    ];
    const benefitsSlice = render(<BenefitsSlice benefitsCategories={categories} />);
    const benefitsCategories = benefitsSlice.find('ul').first();
    expect(benefitsCategories.children().length).toEqual(2);
  });

  it('should render category heading 3', () => {
    const categories = [
      {
        name: 'career',
        icon: careerIcon,
        benefits: [
          {
            question: 'What do I get?',
            answer: 'Everything',
            mobileView: false,
          },
        ],
      },
    ];
    const benefitsSlice = render(<BenefitsSlice benefitsCategories={categories} />);
    const benefitsCategories = benefitsSlice.find('ul').first();
    expect(benefitsCategories.find('h3').text()).toEqual('career');
  });

  it('should render benefits list', () => {
    const categories = [
      {
        name: 'career',
        icon: careerIcon,
        benefits: [
          {
            question: 'What do I get?',
            answer: 'Everything',
            mobileView: false,
          },
          {
            question: 'What do I not get?',
            answer: 'Anything',
            mobileView: false,
          },
        ],
      },
    ];
    const benefitsSlice = render(<BenefitsSlice benefitsCategories={categories} />);
    const benefits = benefitsSlice
      .find('ul')
      .first()
      .find('ul');
    expect(benefits.children().length).toEqual(2);
  });

  it('should render topic heading 4', () => {
    const categories = [
      {
        name: 'career',
        icon: careerIcon,
        benefits: [
          {
            question: 'What do I get?',
            answer: 'Everything',
            mobileView: false,
          },
        ],
      },
    ];
    const benefitsSlice = render(<BenefitsSlice benefitsCategories={categories} />);
    const topics = benefitsSlice
      .find('ul')
      .first()
      .find('ul');
    expect(topics.find('h4').text()).toEqual('What do I get?');
  });
});
