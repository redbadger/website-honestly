import React from 'react';
import image from './image.png';
import Content from '../content';

const Two = () => {
  const title = '2012';
  const text = 'This year we added a few more badgers to the roster, and also welcomed Mike Altendorf, former Conchango executive and industry veteran, as our first non-executive director. We gained our first long-term client, international reinsurance broker JLT, and open-sourced XPF as part of our commitment to the tech community. 2012 also saw the birth of Sally, our Red Badger logo, as we underwent our first rebranding.';
  const counters = [
    { title: 'No of office dogs', value: '0' },
    { title: 'Cups of tea drunk', value: '307' },
    { title: 'Favourite tech', value: 'JS transpilers' },
  ];

  return <Content title={title} text={text} image={image} counters={counters} />;
};

export default Two;
