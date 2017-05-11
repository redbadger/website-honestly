import React from 'react';
import image from './2013.png';
import Content from '../content';

const Three = () => {
  const year = '2013';
  const title = 'Winning Sky, moving to Mallow Street and socialising beyond the pub';
  const text = 'Our Clerkenwell office started to get a bit small, so we re-located to an amazing warehouse space just behind Old Street’s Silicon Roundabout.  We then took on Sky, our biggest client so far. During this year we also started to think about how Red Badger could operate for social good, and embarked on a pro-bono project to develop an app for Haller, a institution focused on sustainability through helping people in Africa learn essential farming skills.';
  const fact = 'With the team growing, we diversified from pub nights and found our voice at karaoke nights, started monthly dinner dates and formed a sporty badgers group.';

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

export default Three;
