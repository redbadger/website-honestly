import React from 'react';
import desktop from './2014-desktop.png';
import mobile from './2014-mobile.jpg';
import Content from '../content';

const Four = () => {
  const title = '2014';
  const text = 'We more than doubled our staff numbers by the end of 2014. We picked up a new project from retailer Fortnum & Mason, eschewing the standard RFP process, instead doing a two-day hackathon to prove our worth. We had our first ever company day, asking all the badgers where they saw the company going. We made sure we staying active in the development community, starting the first React London meetup.';
  const counters = [
    { title: 'No of office dogs', value: '0' },
    { title: 'Cups of tea drunk', value: '1462' },
    { title: 'Favourite tech', value: 'ReactJS' },
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

export default Four;
