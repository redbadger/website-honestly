// @flow

import React from 'react';
import Social from '../../../../components/social';
import styles from './style.css';

import headerImage from './images/header.png';
import cmsIllustrationImage from './images/cms-illustration.jpg';
import authorQuoteImage from './images/quote-author.jpg';

import Card from '../../../../components/card';
import ListBox from '../../../../components/list-box';
import Quote from '../../../../components/quote';

import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import ContactBox from '../../../../components/contact-box';
import ScrollTracker from '../../../../components/scroll-tracker';

const social = {
  title: 'Bespoke and made from scratch: a new CMS for Sky | Red Badger',
  description: 'Enabling Sky to manage their content with an amazing customer experience.',
  metaImage: headerImage,
  altText: 'An illustration of people assembling building-size letters C, M and S.',
  url: 'https://red-badger.com/our-work/case-study/sky-cms',
};

const SkyCmsCaseStudy = () => (
  <ScrollTracker>
    <div className={styles.caseStudy}>
      <Social {...social} />
      <div className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__imageContainer}>
            <img src={headerImage} alt="Sky CMS" className={styles.header__image} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__mainTitleWrapper}>
          <h1 className={styles.content__mainTitle}>
            Bespoke and made from scratch: a new CMS just for Sky
          </h1>
        </div>
        <div className={styles.overview}>
          <Quote
            className={styles.quote}
            author={{
              name: 'David Crawford',
              title: 'Head of Software Engineering, Sky',
              image: authorQuoteImage,
            }}
            text="The new site and CMS have given us the flexibility we needed to effectively update and manage the Help site. It allows us to take an agile approach to the way we work and respond to consumer requirements faster and more efficiently."
          />
          <Card className={styles.listBoxContainer}>
            <ListBox
              title="Results"
              items={[
                {
                  label:
                    'New intuitive CMS creating more efficient system, freeing up time to focus on the content ',
                },
                {
                  label: 'Tripled the number of issues resolved through online self-help journey',
                },
              ]}
              itemClassName={styles.listBox__item}
              labelClassName={styles.listBox__label}
            />
          </Card>
        </div>
        <div className={styles.content__wrapper}>
          <h2 className={styles.content__title}>
            <span className={styles.content__redTitle}>Let’s make things better.</span>
            Enabling Sky to manage their content with an amazing customer experience
          </h2>
          <p className={styles.content__paragraph}>
            A CMS is responsible for three things: storing content, editing content, and publishing
            content. These are three distinct functions with their own challenges and should be
            built as such. If you get this part right and built in a reusable way, specifics can be
            built on top of them.
          </p>
          <p className={styles.content__paragraph}>
            As part of its commitment to customer service excellence, Sky wanted to optimize their
            online self-help service and make it easier for their customers to find solutions to
            their problems. In a modern world where customer behavior is driving constantly changing
            requirements and an expectation of brilliant customer experience, it is vital that both
            a CMS and the website it drives are adaptable to these demands.
          </p>
          <p className={styles.content__paragraph}>
            Taking off the shelf products such as Drupal and trying to bend them to your
            requirements is simply not good enough anymore. They are far too rigid to cope with ever
            changing demands and inhibit customer experience.
          </p>
          <h2 className={styles.content__title}>
            <span className={styles.content__redTitle}>
              Do the right thing. Do the thing right.
            </span>
            Bespoke customisation tools for a built-from-scratch CMS
          </h2>
          <p className={styles.content__paragraph}>
            Red Badger worked with Sky to conduct an objective build vs buy exercise. Analysis of
            the available tools revealed that the customisation required to make an off-the-shelf
            tool fit for purpose meant that greater efficiencies could be achieved by implementing a
            bespoke solution tailored to their business requirements, leveraging an open-source
            foundation.
          </p>
          <ContactBox />
          <p className={styles.content__paragraph}>
            The decision was made to build a new CMS from scratch with three main components to deal
            with the individual concerns; storing, editing and publishing content. The result is a
            modern CMS that fits Sky’s requirements exactly - one that would be the foundation of a
            whole new Help site that could support both customers and the internal content team far
            more effectively. As demand changes, new features can also be rolled out faster and
            cheaper due to reduced interdependence and complexity.
          </p>
          <h3 className={styles.content__secondaryTitle}>
            Innovative features of the CMS include:
          </h3>
          <p className={styles.content__paragraph}>
            <ul className={styles.content__ordered__list}>
              <li className={styles.content__ordered__list__element}>
                An editor to build content out of blocks - pluggable components for different types
                of content (text, image, video, tabs)
              </li>
              <li className={styles.content__ordered__list__element}>
                A very rich editing experience tailored to Sky’s needs
              </li>
              <li className={styles.content__ordered__list__element}>
                Full audit mechanism which makes it easy to revert to previous versions
              </li>
              <li className={styles.content__ordered__list__element}>
                Continuous Deployment pipeline to publish new features into live in seconds
              </li>
              <li className={styles.content__ordered__list__element}>
                Responsive Web Design support with preview on desktop, mobile and tablet
              </li>
              <li className={styles.content__ordered__list__element}>
                ElasticSearch integration for fast and flexible search
              </li>
              <li className={styles.content__ordered__list__element}>
                Image hub to allow content editors to add and store images to the site, reusable for
                different purposes
              </li>
            </ul>
          </p>
          <p className={styles.content__paragraph}>
            <img
              src={cmsIllustrationImage}
              alt="cms illustration"
              className={styles.cmsIllustration__image}
            />
          </p>
          <h2 className={styles.content__title}>
            <span className={styles.content__redTitle}>Creating lasting change.</span>
            A system so good, it’s being adopted across the business
          </h2>
          <p className={styles.content__paragraph}>
            The new CMS enables editors to provide users with the content they need, fast and
            efficiently. It has created a greatly enhanced customer experience on the Sky Help site
            and reduced the time (and skills) required to update and amend content. It is also
            future proofed, being incredibly easy to scale as requirements change.
          </p>
          <p className={styles.content__paragraph}>
            User behavior is closely monitored so that any issues are made apparent and dealt with
            straight away. In one example, Sky were able to diagnose an issue as it arose, publish
            content to solve it, and drop the number of customers pushing the ‘need more help’
            button by 50%.
          </p>
          <p className={styles.content__paragraph}>
            The components on which the CMS is built have proved to be so effectual that they are
            now used to support other Sky sites and were made available to everyone as an open
            source software.
          </p>
        </div>
      </div>
      <WhatToReadNext currentPage="skyCms" linkKeys={['sky']} />
      <ChecklistContactUs />
    </div>
  </ScrollTracker>
);

export default SkyCmsCaseStudy;
