import React from 'react';
// This is crying out to be moved to prismic/badger brain.
// We should definitely be drawing consultant info from the badgers table

import serviceMeshImage from './images/service-mesh-header.png';

import continuousDeliveryImage from './images/continuousdelivery_thumbnail.jpg';
import northStarImage from './images/northstar_thumbnail.jpg';
import productStrategyImage from './images/productstrategy_thumbnail.jpg';

import viktorImg from './images/viktor.jpg';
import janImg from './images/jan.jpg';
import stuImg from './images/stu.jpg';

export const serviceMeshData = {
  duration: '1 hour',
  headerImage: serviceMeshImage,
  headerAlt:
    'Illustration of a mesh of white dots connected by arrowed lines against a yellow background',
  title: 'Service Mesh',
  subTitle: 'Solving the microservices headache',
  price: 'Free',
  type: 'lunch',
  location: 'Your office, or ours',
  whatIsIt: (
    <div>
      <p>Service Mesh is an emerging approach to orchestrating microservices at scale.</p>
      <p>
        When designed and deployed well, it can help you solve some of the major challenges posed by
        complex system architectures. That’s pesky challenges like service discovery, security,
        networking and observability.
      </p>
      <p>Discover the benefits, dos and don’ts with a Lunch & Learn.</p>
    </div>
  ),
  whoIsItFor: (
    <div>
      <p>CTOs, engineers, architects and technical product leads.</p>
    </div>
  ),

  whatWillYouLearn: (
    <div>
      <ul>
        <li>What Service Mesh is</li>
        <li>How you can benefit from reducing complexity and boosting efficiency</li>
        <li>Where to start with Service Mesh for your orginisation</li>
      </ul>
    </div>
  ),

  whoWillRun: (
    <div>
      <p>Red Badger&apos;s Technical Consultants:</p>
    </div>
  ),
  consultants: [
    {
      image: stuImg,
      name: 'Stuart Harris',
      role: 'Founder & Chief Scientist',
      profileUrl: '/people/stuart-harris',
    },
    {
      image: janImg,
      name: 'Jan Kuehle',
      role: 'Senior Engineer',
      profileUrl: 'people/jan-kuehle',
    },
    {
      image: viktorImg,
      name: 'Viktor Charypar',
      role: 'Tech Director',
      profileUrl: '/people/viktor-charypar',
    },
  ],
};

export const continuousDeliveryData = {
  duration: '1.5 hours',
  image: continuousDeliveryImage,
  alt: 'Illustration of a line of web-pages rolling off a conveyor belt',
  title: 'Continuous delivery',
  subTitle: 'Get products out there faster (and drama-free)',
  url: 'what-we-offer/continuous-delivery',
};

export const northStarData = {
  duration: '1 day',
  image: northStarImage,
  alt:
    'Illustration of overlayed graph lines with one that is highlighted and reach up towardsa a shining star',
  title: 'North star',
  subTitle: 'Be guided by a single, shining metric',
  url: 'what-we-offer/north-star',
};

export const productStrategyData = {
  duration: '2 weeks',
  image: productStrategyImage,
  alt: 'Illustration of an array of bubbling laboratory beakers, test-tubes and so on',
  title: 'Product strategy',
  subTitle: 'Get products out there faster (and drama-free)',
  url: 'what-we-offer/product-strategy',
};
