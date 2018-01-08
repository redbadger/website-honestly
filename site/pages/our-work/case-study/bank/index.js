// @flow
import React from 'react';
import classnames from 'classnames/bind';
import Social from '../../../../components/social';
import styles from './style.css';

import headerImage from './images/header.gif';
import authorQuoteImage from './images/quote-author.jpg';
import pyramidImage from './images/pyramid.png';
import smileyImage from './images/smiley.png';
import tickImage from './images/tick.png';

import CaseStudyFrame from '../../../../components/case-study-frame';
import Card from '../../../../components/card';
import ListBox from '../../../../components/list-box';
import Quote from '../../../../components/quote';

import WhatToReadNext from '../what-to-read-next';
import ContactUs from '../../../../slices/contact-us-slice';

const cx = classnames.bind(styles);

type CaseStudyBankProps = {
  contactUsURL: string,
};

const social = {
  title: 'The proof is in the pudding',
  description: 'Digital transformation at one of the world’s largest banks',
  metaImage: headerImage,
  url: 'https://red-badger.com/our-work/case-study/financial-services-digital-transformation',
};

const CaseStudyBank = ({ contactUsURL }: CaseStudyBankProps) => (
  <CaseStudyFrame>
    <Social {...social} />
    <div className={styles.header}>
      <img
        src={headerImage}
        alt="Stick figures building a large arrow from small square blocks"
        className={styles.header__image}
      />
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          Digital transformation at one of the world’s largest banks
        </h1>
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>{'Let’s make things better.'}</span>
          Increasing customer satisfaction &amp; conversion rates
        </h2>
        <p className={styles.content__paragraph}>
          As part of a global digital transformation programme, the bank had a vision to design,
          build, support and continuously evolve the digital opportunities, products, features,
          platforms and capabilities from inception to customer delivery, across all markets.
        </p>
        <p className={styles.content__paragraph}>
          With conversion rates at less than 5%, the Originations and Utilities programme identified
          problems with the customer onboarding experience of new account openings, credit card and
          loan applications, and approached us to help them improve it. Three of the key issues were
          the requirement for customers to visit bank branches, the heavy back office data entry for
          staff and the resulting long lead times. With dispersed teams, rigid processes and legacy
          technology contributing to the limited functionality of their websites, their delivery
          pipeline and release process needed to change.
        </p>
        <div className={cx(styles.content__float, styles['content__float--noBottomMargin'])}>
          <img
            src={tickImage}
            className={styles.tickImage}
            alt="Stick figures building a tick from small boxes"
          />
        </div>
        <p className={styles.content__paragraph}>
          We identified a number of opportunities to help them become customer-centric rather than
          process-centric and reduce waste with Lean Agile principles, so we embarked on a large
          scale efficiency programme with Red Badger leading the global programme of work to deliver
          complex technology solutions across the whole organisation.
        </p>
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>
            {'Do the right thing. Do the thing right.'}
          </span>
          Implementing customer-centricity with new ways of working
        </h2>
        <p className={styles.content__paragraph}>
          Our role was to lead the Origination and Utilities programme which had to:
        </p>
        <ul className={styles.content__list}>
          <li>Deliver quality digital products to their customers quickly</li>
          <li>
            Vastly improve the customer experience of opening a new current account and applying for
            a loan or credit card
          </li>
          <li>
            Help them build internal capability and change the culture, leaving a legacy beyond our
            involvement
          </li>
          <li>Reduce operational costs and increase business efficiency</li>
        </ul>
        <p className={styles.content__paragraph}>
          There was a need to change the way they worked. We implemented cross-functional teams,
          combined with lean processes to drive agility which allowed us to deliver value to
          customers quickly. This created a robust delivery model which has since been scaled to
          multiple global teams. At the time of writing, we have scaled from one to twelve global
          teams with more teams planned over the next year.
        </p>
        <h3 className={styles.content__secondaryTitle}>Setting up for success</h3>
        <p className={styles.content__paragraph}>
          As part of the project validation process, we helped create the delivery plans for three
          product roadmaps that could be delivered by small, cross-functional teams from start to
          finish. Products were allocated per country starting with account opening, quickly
          followed by credit cards and loans. Each product team consisting of UX, Design,
          Engineering and an Agile Delivery Lead became accountable for the on-time success of the
          product into that market.
        </p>
        <h3 className={styles.content__secondaryTitle}>
          Putting the customer at the centre of the project
        </h3>
        <p className={styles.content__paragraph}>
          The bank’s UXD teams, which sat separately from Originations and Utilities, had already
          started designing prototypes which created an opportunity to bring them into the project
          programme. In order to demonstrate our thinking, we ran a number of workshops to help
          build trust, as this was a new approach.
        </p>
        <div className={cx(styles.content__float, styles['content__float--left'])}>
          <img
            src={smileyImage}
            className={styles.smileyImage}
            alt="Stick figures building a smiley from small boxes"
          />
        </div>
        <p className={styles.content__paragraph}>
          Rather than design prototypes, when often an idea is designed that can’t be built, we
          focused on designing live products to capture details of integration with external systems
          and requirements. This enabled live user testing and ensured complicated system
          requirements weren’t missed. It also allowed us to bring accessibility testing into the
          core delivery process, avoiding the risk of it failing at the point of release. All of
          these principles and practices have allowed us to deliver user value more quickly, and
          help build a platform where we could easily iterate on the live product.
        </p>
        <h3 className={styles.content__secondaryTitle}>Choosing the right tech for the job</h3>
        <p className={styles.content__paragraph}>
          Our objective was to help the business move faster by creating more autonomy within the
          teams, so we set about reducing their dependencies on shared platforms and pipelines, so
          that we could first create, and then scale excellence.
        </p>
        <p className={styles.content__paragraph}>
          The bank has a cloud-centric strategy and Red Badger are pivotal in helping them to
          realise their ambitions in this area. We have been working on a solution that leverages
          recent advances in container orchestration, combined with automated provisioning of
          immutable infrastructure, to enable teams to deploy their Microservice-based applications
          onto cloud-provider-agnostic “Microplatforms”. The teams can now create and destroy
          identical environments in minutes, empowering them to manage their own deployments for
          testing (and soon for production). This puts the teams in control so that they can deliver
          continuously, whilst reducing the risk of failure and the mean-time-to-recovery when
          failures occur.
        </p>
        <p className={styles.content__paragraph}>
          By allowing the teams more freedom to align around tools and technologies, we’re already
          dramatically increasing velocity. Open source tools have helped speed up the process with
          components shared across teams for reuse. This, combined with a deep sense of ownership,
          means that our DevOps focused teams have full responsibility for design, build, and run
          (including 24x7 support).
        </p>
        <h3 className={styles.content__secondaryTitle}>Tech we used</h3>
        <p className={styles.content__paragraph}>
          React, Node, Spring Boot, Go, Microservices, Jenkins, Docker in Swarm Mode, Kubernetes,
          AWS, GCP, Terraform
        </p>
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>{'Creating lasting change.'}</span>
          Scaling excellence and increasing speed to market
        </h2>
        <p className={styles.content__paragraph}>
          So far we have launched multiple live products in both the UK and Hong Kong, with new live
          products launching in other global markets in 2018.
        </p>
        <p className={styles.content__paragraph}>
          The results to date include the successful delivery of the new credit card application
          journey in Hong Kong, implementing straight-through processes, allowing customers to open
          an account without the need to visit a branch for the first time. This makes them the
          first bank in Hong Kong able to accept customers at the end of an online-only application,
          giving them a crucial competitive advantage.
        </p>
        <p className={styles.content__paragraph}>
          We have made groundbreaking progress with the opening of current accounts with an
          improvement in conversion rates for Account Opening from 5% of customers completing the
          application to 43% since launch.
        </p>
        <div className={styles.content__float}>
          <img
            src={pyramidImage}
            className={styles.pyramidImage}
            alt="Stick figures building a pyramid from small boxes"
          />
        </div>
        <p className={styles.content__paragraph}>
          As we move forward, cross product sharing is enabling faster development times and greater
          consistency as components and page elements can be reused and scaled. With product teams
          sharing their knowledge across the whole programme we’re helping to eliminate
          inefficiency.
        </p>
        <p className={styles.content__paragraph}>
          We’ve successfully integrated UX and Design into the fast-moving delivery environment and
          the projects have benefited at each stage of the process from business requirements to
          test and deployment, transforming the way the bank’s own UXD team work.
        </p>
        <p className={styles.content__paragraph}>
          We’ve helped shift their ways of working to set them up for continuous delivery. In
          originations, we have thus far helped them to deploy multiple times a day to the testing
          environment, deploying weekly to production and releasing to customers monthly. We are
          moving closer and closer to true continuous deployment, providing them with the technical
          capability to deploy and release to customers multiple times per day. The contribution to
          evolving the release process with the global brand and other departments such as legal and
          compliance, to cater for agile product delivery is a particular highlight. This shift
          toward true continuous deployment has started to impact other parts of the business
          outside of originations, that had previously released just a few times a year.
        </p>
        <p className={styles.content__paragraph}>
          Starting off with one team, we now lead more than 150 people across three countries
          consisting of both bank employees and third parties, including two teams in Krakow that
          we’ve helped onboard. By embedding our delivery and technical directors, we’ve been able
          to drive change and work closely with stakeholders across the globe.
        </p>
        <Quote
          className={styles.quote}
          author={{
            name: 'Stuart Harris',
            title: 'Red Badger CIO',
            image: authorQuoteImage,
          }}
          text={
            'Delivering value to customers at this speed and scale requires that each cross-functional team is as self-sufficient as possible, having maximum aligned autonomy. By embracing DevOps culture and using high levels of automation, we are enabling the teams to own every aspect of their domain, from idea conception, through design and build, to runtime management and support.'
          }
        />
        <Card className={styles.listBoxContainer}>
          <ListBox
            className={styles.listBox}
            title="What we did"
            items={[
              {
                label: 'Collaborated with the client and other consultancies',
              },
              {
                label: 'Embedded the bank’s resources within Red Badger cross-functional teams',
              },
              {
                label:
                  'Supported the client’s hiring process to bring best in class people into their team',
              },
              {
                label: 'Drove alignment and consistent ways of working across the programme',
              },
              {
                label: 'Led the project delivery - accountable & responsible',
              },
              {
                label: 'Introduced quality at scale',
              },
              {
                label: 'Implemented agile engineering practices',
              },
              {
                label: 'Introduced autonomous cross-functional teams across multiple products',
              },
            ]}
            itemClassName={styles.listBox__item}
          />
        </Card>
        <Card className={styles.listBoxContainer}>
          <ListBox
            className={styles.listBox}
            title="Outcomes"
            items={[
              {
                label:
                  'Continuous deployment capability and a new release process delivering features to production',
              },
              {
                label:
                  'Product delivered in 12 months enabling an end to end account opening journey',
              },
              {
                label:
                  'Product delivered enabling straight-through processing of Hong Kong Credit Cards',
              },
              {
                label:
                  'Reusable components and page elements enabling cross-product sharing, increasing efficiency and velocity',
              },
              {
                label: 'UXD embedded in the end to end delivery process',
              },
              {
                label: 'Digital capability built across product, design, tech and delivery',
              },
              {
                label: 'Global transformation programme delivery - Poland and Canada (9 teams)',
              },
              {
                label: 'Two cross-functional teams onboarded in Krakow',
              },
            ]}
            itemClassName={cx(styles.listBox__item, styles['listBox__item--outcomes'])}
          />
        </Card>
      </div>
    </div>
    <WhatToReadNext />
    <ContactUs postURL={contactUsURL} />
  </CaseStudyFrame>
);

export default CaseStudyBank;
