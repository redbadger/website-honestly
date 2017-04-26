import React from 'react';
import mobile from './2013-mobile.jpg';
import Content from '../content';

const Three = () => {
  const year = '2013';
  const title = 'Winning Sky, moving to Mallow St and owning our first beer fridge';
  const text = 'Our Clerkenwell office started to get a bit small, so we re-located to an amazing warehouse space just behind Old Street’s Tech Roundabout. We then took on Sky, our biggest client so far. During this year we also started to think about how Red Badger could operate for social good, and embarked on a pro-bono project to develop an app for Haller, a institution focused on sustainability through helping people in Africa learn essential farming skills.';
  const fact = 'The police were called on two separate occasions during Red Badger’s first year in Mallow Street over noise complaints about our Summer and Christmas Party, respectively. Ooops.';

  return (
    <Content
      year={year}
      title={title}
      text={text}
      fact={fact}
      image={mobile}
      mobileImage={mobile}
      flip
    />
  );
};

export default Three;
