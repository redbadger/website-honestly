import React from 'react';
import desktop from './2016-desktop.png';
import mobile from './2016-mobile.jpg';
import Content from '../content';

const Six = () => {
  const title = '2016';
  const text = '2016 has seen our fastest growth yet, as we take on new clients while growing the business sustainably. We also added an office dog, Milo, to the Badger family. It brought more awards, with us reaching number 44 on the Tech Track 100 list. Over summer we had a truly unforgettable party at a German castle, where we opened the floor up to our staff through Open Spaces, to help us plan for the next 12 months. Our website received a long-overdue refresh, and we finished out the year looking forward to our first ever conference, React London 2017.';
  const counters = [
    { title: 'No of office dogs', value: '1' },
    { title: 'Cups of tea drunk', value: '3450' },
    { title: 'Favourite tech', value: 'GraphQL' },
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

export default Six;
