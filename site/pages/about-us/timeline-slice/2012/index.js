// @flow

import React from 'react';
import image from './2012.png';
import Content from '../content';

const Two = () => {
  const year = '2012';
  const title = 'We won our first Node project and hired a big gun';
  const text =
    'This is the year we decided to bring in a big gun to help support our growth.  So, Mike Altendorf, former Conchango CEO and industry veteran, was welcomed as RB’s first non-executive director.  We also gained our first long-term retained client, international insurance broker JLT.';
  const fact = 'During the course of our work with JLT, Stu wrote over 1.2 million lines of code.';

  return <Content year={year} title={title} text={text} fact={fact} image={image} />;
};

export default Two;
