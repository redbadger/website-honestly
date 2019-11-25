import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import ExperienceUsPage from './index';

const goldCoinPages = [
  {
    consultants: ['mr-sitemap', 'milo-castro', 'clementine-brown'],
    duration: '1 hour',
    headerAlt: null,
    headerImage:
      'https://images.prismic.io/rb-website-stage/b378bba2-8c68-4734-b657-455e3af357f1_Headerimage.png?auto=compress,format&rect=159,0,2560,948&w=2560&h=948',
    hubspotForm: {
      portalId: 4210858,
      guid: 'a2c3b495-7093-47af-a6b6-bd4d82b9fe94',
      name: 'Gold coins: service mesh',
      cssClass: 'hs-form stacked',
      submitText: 'Book now',
    },
    location: 'Your office, or ours',
    price: 'Free',
    slug: 'service-mesh',
    subTitle: 'Service Mesh',
    title: 'Service Mesh',
    type: 'lunch',
    whatIsIt:
      '<p>Service Mesh is an emerging approach to orchestrating microservices at scale. When designed and deployed well, it can help you solve some of the major challenges posed by complex system architectures. These areas include service discovery, security, networking and observability.</p>',
    whatWillYouLearn:
      '<ol><li>What is Service Mesh</li><li>How organisations can benefit by reducing complexity and improving efficiency</li><li>Where to start with Service Mesh for your organisation</li></ol>',
    whoIsItFor: '<p>CTOs, engineers, architects and technical product leads   </p>',
    whoWillRun: '<p>Red Badger’s Technical Directors </p>',
  },
  {
    consultants: ['mr-sitemap', 'milo-castro', 'clementine-brown'],
    duration: '1 day',
    headerAlt: null,
    headerImage:
      'https://images.prismic.io/rb-website-stage/b378bba2-8c68-4734-b657-455e3af357f1_Headerimage.png?auto=compress,format&rect=159,0,2560,948&w=2560&h=948',
    hubspotForm: {
      portalId: 4210858,
      guid: 'a2c3b495-7093-47af-a6b6-bd4d82b9fe94',
      name: 'Gold coins: service mesh',
      cssClass: 'hs-form stacked',
      submitText: 'Book now',
    },
    location: 'Your office, or ours',
    price: 'Free',
    slug: 'service-mesh',
    subTitle: 'Service Mesh',
    title: 'Service Mesh',
    type: 'lunch',
    whatIsIt:
      '<p>Service Mesh is an emerging approach to orchestrating microservices at scale. When designed and deployed well, it can help you solve some of the major challenges posed by complex system architectures. These areas include service discovery, security, networking and observability.</p>',
    whatWillYouLearn:
      '<ol><li>What is Service Mesh</li><li>How organisations can benefit by reducing complexity and improving efficiency</li><li>Where to start with Service Mesh for your organisation</li></ol>',
    whoIsItFor: '<p>CTOs, engineers, architects and technical product leads   </p>',
    whoWillRun: '<p>Red Badger’s Technical Directors </p>',
  },
  {
    consultants: ['mr-sitemap', 'milo-castro', 'clementine-brown'],
    duration: '1 week',
    headerAlt: null,
    headerImage:
      'https://images.prismic.io/rb-website-stage/b378bba2-8c68-4734-b657-455e3af357f1_Headerimage.png?auto=compress,format&rect=159,0,2560,948&w=2560&h=948',
    hubspotForm: {
      portalId: 4210858,
      guid: 'a2c3b495-7093-47af-a6b6-bd4d82b9fe94',
      name: 'Gold coins: service mesh',
      cssClass: 'hs-form stacked',
      submitText: 'Book now',
    },
    location: 'Your office, or ours',
    price: 'Free',
    slug: 'service-mesh',
    subTitle: 'Service Mesh',
    title: 'Service Mesh',
    type: 'lunch',
    whatIsIt:
      '<p>Service Mesh is an emerging approach to orchestrating microservices at scale. When designed and deployed well, it can help you solve some of the major challenges posed by complex system architectures. These areas include service discovery, security, networking and observability.</p>',
    whatWillYouLearn:
      '<ol><li>What is Service Mesh</li><li>How organisations can benefit by reducing complexity and improving efficiency</li><li>Where to start with Service Mesh for your organisation</li></ol>',
    whoIsItFor: '<p>CTOs, engineers, architects and technical product leads   </p>',
    whoWillRun: '<p>Red Badger’s Technical Directors </p>',
  },
  {
    consultants: ['mr-sitemap', 'milo-castro', 'clementine-brown'],
    duration: '2 weeks',
    headerAlt: null,
    headerImage:
      'https://images.prismic.io/rb-website-stage/b378bba2-8c68-4734-b657-455e3af357f1_Headerimage.png?auto=compress,format&rect=159,0,2560,948&w=2560&h=948',
    hubspotForm: {
      portalId: 4210858,
      guid: 'a2c3b495-7093-47af-a6b6-bd4d82b9fe94',
      name: 'Gold coins: service mesh',
      cssClass: 'hs-form stacked',
      submitText: 'Book now',
    },
    location: 'Your office, or ours',
    price: 'Free',
    slug: 'service-mesh',
    subTitle: 'Service Mesh',
    title: 'Service Mesh',
    type: 'lunch',
    whatIsIt:
      '<p>Service Mesh is an emerging approach to orchestrating microservices at scale. When designed and deployed well, it can help you solve some of the major challenges posed by complex system architectures. These areas include service discovery, security, networking and observability.</p>',
    whatWillYouLearn:
      '<ol><li>What is Service Mesh</li><li>How organisations can benefit by reducing complexity and improving efficiency</li><li>Where to start with Service Mesh for your organisation</li></ol>',
    whoIsItFor: '<p>CTOs, engineers, architects and technical product leads   </p>',
    whoWillRun: '<p>Red Badger’s Technical Directors </p>',
  },
];

describe('site/pages/join-us', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <ExperienceUsPage goldCoinPages={goldCoinPages} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
