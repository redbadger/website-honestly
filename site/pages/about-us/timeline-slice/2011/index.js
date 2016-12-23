import React from 'react';
import desktop from './2011-desktop.png';
import mobile from './2011-mobile.jpg';
import Content from '../content';

const One = () => {
  const title = '2011';
  const text = 'We hired our first permanent employees in 2011, in the form of Chief Design Officer Sari Griffiths and Development intern Joe Stanton. We won some of our first client projects while developing our Windows Phone twitter app Birdsong, and our XNA layout framework XPF.';
  const counters = [
    { title: 'No of office dogs', value: '0' },
    { title: 'Cups of tea drunk', value: '215' },
    { title: 'Favourite tech', value: 'Node' },
  ];

  return (
    <Content
      title={title}
      text={text}
      image={desktop}
      mobileImage={mobile}
      counters={counters}
      flip
    />
  );
};

export default One;
