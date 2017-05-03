import React from 'react';
import image from './2016.png';
import Content from '../content';

const Six = () => {
  const year = '2016';
  const title = 'Won our biggest client yet, although we can’t talk about it. Voted 44 in the Tech Track 100 & the arrival of Milo, the office dog';
  const text = '2016 saw our fastest growth yet. We took on an array of new clients (but we can’t talk about the best one) brought in some incredible new members of staff and welcomed Milo, the office dog. We also reached number 44 on the Tech Track 100 list and won a lot more awards including XXX.';
  const fact = 'To celebrate and reward staff for their hard work, Red Badger went to the countryside outside Berlin for a massive workshop/party in a ruined castle, and before celebrations kicked off we held a big workshop for all our staff to ensure they all had a voice in helping us plan 2017.';

  return (
    <Content
      year={year}
      title={title}
      text={text}
      fact={fact}
      image={image}
      mobileImage={image}
      flip
    />
  );
};

export default Six;
