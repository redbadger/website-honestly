import React from 'react';
import mobile from './2010-mobile.jpg';
import Content from '../content';

const Zero = () => {
  const title = '2010';
  const text = 'Cain, Dave and Stu started Red Badger in 2010. They wanted to operate differently to the traditional consultancy model. No sales team, no RFP processes, just good people doing work that speaks for itself. Our process would follow some guiding principles upon which we wanted to base the rest of the company: Quality, Value, Transparency, Honesty, and Collaboration.';
  const counters = [
    { title: 'No of office dogs', value: '0' },
    { title: 'Cups of tea drunk', value: '150' },
    { title: 'Favourite tech', value: 'Github' },
  ];

  return (
    <Content
      title={title}
      text={text}
      image={mobile}
      mobileImage={mobile}
      counters={counters}
      flip
    />
  );
};

export default Zero;
