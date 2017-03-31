import React from 'react';
import { shallow } from 'enzyme';
import CaseStudyRetailer from '.';

describe('CaseStudyRetailer', () => {
  it('should display the Fortnum and Mason case study page', () => {
    const props = {
      retailer: {
        slug: 'fortnum-and-mason',
        title: 'Fortnum and Mason',
      },
    };
    const caseStudyPage = shallow(<CaseStudyRetailer {...props} />);
    expect(caseStudyPage.find('WhatToReadNext').length).to.equal(1);
    expect(caseStudyPage.find('FMCaseStudy').length).to.equal(1);
  });
});
