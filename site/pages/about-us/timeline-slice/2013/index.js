import React from 'react';
import desktop from './2013-desktop.png';
import mobile from './2013-mobile.jpg';
import Content from '../content';

const Three = () => {
  const title = '2013';
  const text = 'As we began to grow, we realised we were outgrowing our Clerkenwell office and moved to new digs at Mallow St, right by Old St Roundabout. We also took on our biggest client so far, Sky. Not ones to let work get in the way of fun, we held a couple of amazing parties at our new HQ, which may have caused some complaints from our neighbours early on.';
  const counters = [
    { title: 'No of office dogs', value: '0' },
    { title: 'Cups of tea drunk', value: '473' },
    { title: 'Favourite tech', value: 'ElasticSearch' },
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

export default Three;
