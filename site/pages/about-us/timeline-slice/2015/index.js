import React from 'react';
import image from './image.png';
import Content from '../content';

const Five = () => {
  const title = '2015';
  const text = '2015 saw us move into the finance space, with a project at one of the country’s leading high-street banks. We stayed true to our promise of making our 5th birthday party something special, by hiring Osea island for a three-day company getaway. This was also an award-winning year, as we landed three awards for our work with Fortnum & Mason.';
  const counters = [
    { title: 'No of office dogs', value: '0' },
    { title: 'Cups of tea drunk', value: '2279' },
    { title: 'Favourite tech', value: 'Docker' },
  ];

  return <Content title={title} text={text} image={image} counters={counters} />;
};

export default Five;
