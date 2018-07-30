// @flow

import React from 'react';

import Social from '../../../../components/social';
import Link from '../../../../components/link';
import ScrollTracker from '../../../../components/scroll-tracker';

import {
  PageHeading,
  Body,
  Quote,
  Section,
  SectionHeading,
  SectionBody,
  P,
  UL,
  ArticleImg,
} from '../shared';
import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';

import HeaderImg from './header-img';
import davidKirby from './images/david-kirby.jpg';
import browsingImg from './images/browsing.jpg';
import metaImage from './header-img/images/header-narrow.jpg';

const social = {
  title: 'Building a self-servicing customer account | Red Badger',
  description:
    'Read how we helped travel brands build a new portal for customers to log-in easily, make bookings efficiently, manage their bookings and earn loyalty rewards.',
  metaImage,
  altText:
    "A red car heading to a data center right next to the beach, passing a roadsign that says 'Serverless'",
  url: 'https://red-badger.com/our-work/case-study/car-trawler',
};

const quoteProps = {
  text:
    'Red Badger have helped to give us control of our own websites, which as marketers is essential to our future growth. Their practical, pragmatic solutions helped to bring our in-house development team on-board. Their agile approach also helped us to prioritise the features that mattered most – and is something we’ve subsequently applied in other areas of the team. Working with Red Badger was a great experience.',
  author: {
    name: 'David Kirby',
    title: 'Brands Commercial Director, CarTrawler',
    image: davidKirby,
  },
};

const CarTrawler = () => (
  <ScrollTracker>
    <Social {...social} />
    <HeaderImg />
    <Body>
      <PageHeading>Building a self-servicing customer account</PageHeading>
      <Section>
        <SectionBody>
          <Quote {...quoteProps} />
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Let's make things better"
          heading="Increasing abilities across a customer portal"
        />
        <SectionBody>
          <P>
            CarTrawler, a B2B partner to airlines, accommodation providers and online travel
            retailers, provides a world-leading travel technology platform to connect customers with
            tailored car rental. The company also operates its own brands, including Holiday Autos
            and Arguscarhire.com.
          </P>
          <P>
            Following the success of the{' '}
            <Link to="carTrawlerCaseStudy" target="_blank">
              CMS Project
            </Link>{' '}
            we were asked to assist with implementing a new loyalty product, My Account. The
            existing system, running on Arguscarhire.com, was no longer fit for purpose for several
            reasons:
          </P>
          <UL>
            <li>Inflexible and difficult to support</li>
            <li>Legacy code base, that could not be used with multiple brands or partners</li>
            <li>Only available in English, but needed to support multiple languages</li>
            <li>Lack of FAQs, resulting in costly support calls</li>
          </UL>
          <P>
            The vision of this project was to build a newloyalty portal for customers to log-in,
            make bookings more efficiently, manage their bookings and to earn loyalty rewards.
          </P>
          <ArticleImg
            src={browsingImg}
            alt="A person smiling while browsing a travel website on her computer"
          />
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Do the right thing. Do the thing right"
          heading="Building a prototype within four days."
        />
        <SectionBody>
          <P>
            We decided to take a similar approach to the{' '}
            <Link to="carTrawlerCaseStudy" target="_blank">
              CMS Project
            </Link>, and start with an initial week’s discovery in order to understand the problem,
            carry out an initial user experience analysis, and determine the appropriate technical
            approach. The decision was made to ignore the existing platform, and instead to focus on
            the user requirements, in order to provide maximum user value and speed to market. After
            just four days, we had a backlog for the project and a working prototype.
          </P>
          <P>
            Serverless architecture, a newcomer on the tech scene, was selected due to the speed at
            which the solution could be built and deployed, whilst providing assurances in security,
            stability and scalability. Serverless negates the need for a DevOps team, as providers
            such as Amazon Web Services provide guaranteed uptime, load balancing, scale and
            resilience. Any peaks in traffic are automatically accommodated by the service, and the
            provider can be changed with ease, without expense or downtime. In addition, Serverless
            significantly reduces the overheads associated with managing and maintaining a platform
            such as this.
          </P>
          <P>
            The solution was a microservices architecture, built with a combination of suitable
            Software-as-a-Service (SaaS) solutions like Auth0, and bespoke services that used API
            Gateway, GraphQL, Lambda, DynamoDB, Kinesis and ElasticSearch. JavaScript libraries
            (including React and Redux) for the UI were also selected. Each of these options are
            open source or licence-free, significantly reducing the upfront build expense, and
            meaning the cost to change providers in the future is minimal. These may seem bold
            choices for a large business, but in reality, they are more efficient and hold less risk
            in terms of ongoing total cost of ownership.
          </P>
          <P>
            With a cross-functional team, we were able to build a solution that requires minimal, if
            any, ongoing maintenance, with an ultra-low total cost of ownership, whilst providing
            web scale, performance and security.
          </P>
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Creating lasting change"
          heading="Reducing queries to customer support"
        />
        <SectionBody>
          <P>
            Customers who have positive experiences are more likely to make repeat bookings, and the
            loyalty programme seeks to improve the customer experience further.
          </P>
          <P>
            The new loyalty product, My Account, which is initially running on arguscarhire.com and
            Holiday Autos has helped:
          </P>
          <UL>
            <li>
              Reduce queries to customer support as customer can see and manage all their bookings
              in one place
            </li>
            <li>
              Increase the Repeat Booking Rate as customer receive exclusive discounts based on
              their booking volume
            </li>
            <li>Improve the brands’ Net Promoter Score and CSAT</li>
          </UL>
        </SectionBody>
      </Section>
    </Body>
    <WhatToReadNext currentPage="carTrawlerMyAccount" />
    <ChecklistContactUs />
  </ScrollTracker>
);

export default CarTrawler;
