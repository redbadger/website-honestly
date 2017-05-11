import React from 'react';
import image from './2014.png';
import Content from '../content';

const Four = () => {
  const year = '2014';
  const title = 'Winning Tesco, pitching with hackathons and starting React meetups';
  const text = '2014 spelt lift-off for Red Badger in a big way.  We won a big retained project for one of the UK’s largest grocers, Tesco.  We pitched for and won the complete re-build of the Fortnum & Mason website, through a two day hackathon, ripping up the RFP process and demonstrating the skills and innovation we could bring to the project in real time.';
  const fact = 'As a consequence of our work with Tesco we started to run small monthly gatherings to discuss working with, and innovations around, React: this has now grown into Europe’s largest React community.';

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

export default Four;
