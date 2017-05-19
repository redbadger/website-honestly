import React from 'react';
import image from './2016.png';
import Content from '../content';

const Six = () => {
  const year = '2016';
  const title = 'Our biggest client win, recognition in the Sunday Times and the arrival of Milo';
  const text = '2016 saw our fastest growth yet as we reached number 44 on the Tech Track 100 list and featured in Sunday Times. We took on an array of new clients (but we can’t talk about the best one) brought in some incredible new members of staff and welcomed Milo, the office dog.';
  const fact = 'To celebrate and reward staff for their hard work, Red Badger went to a castle near Leipzig in Germany. Before celebrations kicked off we held a workshop for all our staff to ensure they had a voice in helping us update our brand proposition and plan 2017.';

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

export default Six;
