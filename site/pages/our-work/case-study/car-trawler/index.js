// @flow
import React, { Fragment } from 'react';
import Social from '../../../../components/social';
import Image from '../../../../components/image';
import {
  PageHeading,
  Body,
  Quote,
  Section,
  SectionHeading,
  SectionBody,
  P,
} from '../case-study-components';
import styles from './style.css';

import carDaytime from './images/car-daytime.png';
import carSunset from './images/car-sunset.jpg';
import davidKirby from './images/david-kirby.jpg';

const social = {
  title: 'Next generation platform for retail giant | Red Badger',
  description:
    'Discover how we produced a working prototype within one week for a travel technology platform and went live within five months.',
  metaImage: carSunset,
  altText: 'A toy car heading off into a picturesque sunset',
  url: 'https://red-badger.com/our-work/case-study/car-trawler',
};

const quoteProps = {
  text:
    'Red Badger have helped to give us control of our own websites, which as marketers is essential to our future growth. Their practical, pragmatic solutions helped to bring our in-house development team on-board. Their agile approach also helped us to prioritise the features that mattered most – and is something we’ve subsequently applied in other areas of the team. Working with Red Badger was a great experience.',
  author: {
    name: 'David Kirby',
    title: 'Brands Commercial Director',
    image: davidKirby,
  },
};

const CarTrawler = () => (
  <Fragment>
    <Social {...social} />
    <div className={styles.carDayTime}>
      <Image src={carDaytime} />
    </div>
    <Body>
      <PageHeading>Creating complete CMS control for travel brands</PageHeading>
      <Section>
        <SectionBody>
          <Quote {...quoteProps} />
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Let's make things better"
          heading="Handling the impact of growth"
        />
        <SectionBody>
          <P>
            CarTrawler, a B2B partner to airlines, accommodation providers and online travel
            retailers, provides a world-leading travel technology platform to connect customers with
            tailored car rental. The company also operates its own business to consumer brands,
            including Holiday Autos and Arguscarhire.com.
          </P>
          <P>
            Through organic growth and acquisitions, their own brands have grown significantly in
            the past few years. However, this fast-paced growth had resulted in a number of issues,
            including problems with the complexity of their content management systems and required
            integrations. Holiday Autos and Arguscarhire.com needed to simplify their estate, in
            order to provide their customers with a more efficient service and allow their content
            editors to better manage the sites.
          </P>
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Do the right thing. Do the thing right"
          heading="Demonstrating value with a working prototype in one week"
        />
        <SectionBody>
          <P>
            Red Badger were selected to assist Holiday Autos and Arguscarhire.com with their goal to
            create a new way of providing content management across both websites in 36 languages,
            given our proven approach to solving complex problems such as this (see our Sky case
            study), and our mantra of only choosing the right technology for the job. We suggested
            running a one week concept lab, in order to rapidly understand, validate and prototype a
            solution to solve their problem.
          </P>
          <P>
            In November 2015, a cross-functional Red Badger team arrived at the company’s HQ in
            Dublin for a week. The concept lab allowed us to work without predefined solutions, and
            to think objectively about what was needed from the content management system from both
            an end-user and business perspective. As the week progressed, through continuous
            iteration, we produced a working prototype that formed the basis of the solution, and
            demonstrated value as early as possible.
          </P>
          <Image src={carSunset} className={styles.carSunset} />
          <P>
            Following the success of the concept lab, together with the client’s team, we
            immediately set about building a backlog for the production content management system,
            focusing on user requirements rather than functionality. Without being tied to a
            technology choice or a software service we were able to build a solution to solve the
            problem. We managed this with minimal waste in terms of development effort, software
            licensing costs, and unnecessary features, whilst maintaining a future-proof attitude to
            business needs.
          </P>
          <P>
            In five months, Red Badger built a customised system with features such as a bulk upload
            capability to handle updates across multiple languages and pages, scheduled publishing,
            summary pages, and preview capabilities.
          </P>
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Creating lasting change"
          heading="Updating in a matter of seconds"
        />
        <SectionBody>
          <P>
            Content editors are now able to change the content across three sites in a single place,
            without the need for assistance from developers. Tweaks and updates can be made to the
            website in a matter of seconds, allowing the focus to be on improving the overall
            customer experience and encouraging repeat bookings.
          </P>
          <P>
            Holiday Autos and Arguscarhire.com were delighted with the new platform, and invited Red
            Badger to assist with a second project on the back of this success.
          </P>
        </SectionBody>
      </Section>
    </Body>
  </Fragment>
);

export default CarTrawler;
