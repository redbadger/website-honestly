import React from 'react';
import image from './2015.png';
import Content from '../content';

const Five = () => {
  const year = '2015';
  const title = 'Winning media business with two media giants and hiring an island';
  const text = '2015 saw Red Badger spread its wings and move into both the media and finance space. We won a project working for FT.com to deliver its next generation online offering, and DowJones XXX. We also landed three awards for our work with Fortnum & Mason and started consulting for one of the country’s leading high-street banks.';
  const fact = 'This year was also Red Badger’s 5th birthday. So we decided to make it something really special and hired Osea island for a three-day company getaway which featured a hog roast, a ball in a bomb factory, morning yoga and a lot of drunken golf-cart driving.';

  return (
    <Content
      year={year}
      title={title}
      text={text}
      fact={fact}
      image={image}
      mobileImage={image}
    />
  );
};

export default Five;
