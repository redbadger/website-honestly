import React from 'react';
import image from './2010.png';
import Content from '../content';

const Zero = () => {
  const year = '2010';
  const title = 'Our vision and going for it';
  const text =
    'Red Badger was born and developed by Cain, Stu and Dave in 2010. They had a shared ambition to create a business that turned the traditional consulting model on its head: no sales team; no RFP processes, just great people doing great work that focused on quality, value and collaboration.  So they left their jobs to turn the dream into reality and set up Red Badger in Cain’s bedroom.';
  const fact =
    'At the start of Red Badger, Cain would cycle regularly from Clapton to Kingston to have business meetings with Stu and Dave, that’s 40 miles there and back. He lost a lot of weight.';

  return (
    <Content year={year} title={title} text={text} fact={fact} image={image} mobileImage={image} />
  );
};

export default Zero;
