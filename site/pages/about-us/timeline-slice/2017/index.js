// @flow

import React from 'react';
import image from './2017.png';
import Content from '../content';

const Seven = () => {
  const year = '2017';
  const title = 'Doing the right thing and “Hello Westminster”';
  const text =
    'Our Social Value task force launched with our team committing time and skills to Code Your Future and Pride in London. Thanks to our generous badgers, we earned the Platinum Award for Payroll Giving with the company matching employee donations to their charity of choice. We featured in Econsultancy’s Top 100 Digital Agencies for the first time, grew to #31 on the Tech Track 100 and were shortlisted for BIMA’s Entrepreneurial Business of the year. Whilst we didn’t win, Stu was recognised as one of the most influential digital people in the BIMA 100, well done Chief Scientist.';
  const fact =
    'In July we moved again - this time across the road to a brand new office in Old Street Yard. Oh, and did we say we hosted a conference at QE2 conference centre Westminster for 700 React fans?';

  return <Content year={year} title={title} text={text} fact={fact} image={image} flip />;
};

export default Seven;
