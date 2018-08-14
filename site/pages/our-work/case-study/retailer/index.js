// @flow
import React from 'react';
import classnames from 'classnames/bind';
import Social from '../../../../components/social';
import styles from './style.css';

import headerImage from './images/header.jpg';
import techGraphImage from './images/tech-graph.jpg';
import metaImage from './meta-image.jpg';

import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import Card from '../../../../components/card';
import Image from '../../../../components/image';
import ListBox from '../../../../components/list-box';
import ContactBox from '../../../../components/contact-box';
import ScrollTracker from '../../../../components/scroll-tracker';
import { Body, H3, P, PageHeading, Section, SectionBody, SectionHeading, UL } from '../shared';

const cx = classnames.bind(styles);

const social = {
  title: 'Next generation platform for retail giant | Red Badger',
  description:
    'Find out how we helped clear a five year backlog in eight months and delivered a mobile first application across seven countries.',
  metaImage,
  altText: 'A retailer shopping cart.',
  url: 'https://red-badger.com/our-work/case-study/retailer',
};

const CaseStudyRetailer = () => (
  <ScrollTracker>
    <Social {...social} />
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__imageContainer}>
          <img
            src={headerImage}
            alt="Toy shopping cart filled with fruit & veg, surrounded by key statistics "
            className={styles.header__image}
          />
        </div>
        <div className={cx('header__outcome', 'header__outcome--right')}>
          <span className={styles.header__outcome__percentage}>+54%</span>
          <h3 className={styles.header__outcome__description}>Increased orders</h3>
        </div>
        <div className={cx('header__outcome', 'header__outcome--left')}>
          <span className={styles.header__outcome__percentage}>+29%</span>
          <h3 className={styles.header__outcome__description}>Uplift in visits</h3>
        </div>
      </div>
    </div>
    <Body>
      <PageHeading>
        Next generation platform for retail giant cleared five-year backlog in just eight months
      </PageHeading>
      <Section>
        <SectionHeading
          subHeading="Let's make things better"
          heading="Solving high drop-out rates"
        />
        <SectionBody>
          <P>
            Our client, one of the largest retailers in the UK was experiencing lost revenue in the
            millions, due to higher than expected drop-out rates on its online platform.
          </P>
          <P>
            This was because the online experience and functionality were inconsistent. The business
            was spending huge sums on a piece of software that scraped its website, and then created
            mobile optimised versions on the fly. This meant that some orders were easier to place
            than others - depending on what device was being used - and amendments to orders were
            down as they were incredibly complicated to change once booked.
          </P>
          <P>
            As a retailer dedicated to providing value to customers and seeing its online business
            growing substantially - including a 100% year-on-year mobile traffic increase - there
            was an urgent need for the site to work seamlessly. The business needed to build a
            modern technology platform using cutting-edge, web-based tech to ensure all experiences
            for customers were intuitive and easy to use, regardless of device. This would also have
            to factor in processing a catalogue of hundreds-of-thousands of products, delving into
            complex user journeys, and building a well executed international shipping function.
          </P>
          <P>
            As a business that championed innovation this retailer decided that Red Badger was the
            right partner to help it make things better.
          </P>
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Do the right thing. Do the thing right."
          heading="Streamlining teams and implementing cutting-edge tech"
        />
        <SectionBody>
          <H3>Embracing organisational change</H3>
          <P>
            Although change is happening, big companies are still watching the speed at which
            today’s start-ups move in awe and envy. What start-ups do right is work in a way that
            puts the customer at the very heart of projects, from technology choices to design and
            content. They then work in a collaborative and Lean way to get new products out at
            speeds that seem staggering to large organisations.
          </P>
          <P>
            Red Badger enabled this large retail client to work with the agility of a start-up:
            re-engineering and revolutionising its workflow with Lean practices and helping it break
            down department silos by keeping design, development and testing in one place. The
            benefits of this included:
          </P>
          <UL>
            <li className={styles.content__list__element}>A shorter feedback loop</li>
            <li className={styles.content__list__element}>
              Team-wide responsibility for each decision
            </li>
            <li className={styles.content__list__element}>Elimination of waste</li>
            <li className={styles.content__list__element}>
              Driven determination and focus in order to deliver value to customers, faster
            </li>
            <li className={styles.content__list__element}>
              A sped-up delivery, over four years early
            </li>
          </UL>
        </SectionBody>
      </Section>
      <Section>
        <Image src={techGraphImage} className={styles.techGraphImage} alt="Tech graph" />
      </Section>
      <Section>
        <SectionBody>
          <H3>Finding the right tech for the job</H3>
          <P>
            Now working in a collaborative and Lean way with Red Badger, it was time to find the
            right tech for the job.
          </P>
          <P>
            Red Badger worked very closely with the retailer’s engineering team to recommend and
            introduce an incredibly progressive selection of cutting-edge technology. The new mobile
            site had to replace the existing screen-scraping solution and improve the customer
            experience, making the new site adaptable, flexible and able to scale up to the
            ever-growing demand that the business was seeing.
          </P>
        </SectionBody>
      </Section>
      <ContactBox />
      <Section>
        <SectionBody>
          <P>
            By using a combination of Node.js and React.js, the team were able to develop an app
            that delivers a consistent experience across all devices. It also means that the
            application is fast and responsive, delivering far better usability for customers.
          </P>
          <P>
            On top of this, by moving into the Cloud, using advanced technology such as Docker
            Containers, AWS ECS and Terraform, the ecommerce store was able to incorporate auto
            cloud scaling which expands and contracts resource allocation to match customer demand.
            This is vital in helping to cope with the huge growth in revenue and transaction volumes
            experienced by the retailer, especially around times of peak demand such as Christmas
            and Black Friday.
          </P>
          <P>
            Finally, on the tech front, by building Automated Test and Continuous Deployment
            Pipelines, new features are enabled to be constantly trickled into production,
            continually delivering new value to customers and substantially reducing risk.
            Previously, the retail giant released quarterly but can now release multiple times a day
            with deployments taking minutes, rather than days.
          </P>
        </SectionBody>
      </Section>
      <Section>
        <SectionHeading
          subHeading="Creating lasting change."
          heading="Improving conversion rates by 83%"
        />
        <SectionBody>
          <P>
            Successfully using the technologies above has solved long-standing issues and
            fundamentally influenced the retailer’s next generation platform. Where legacy systems
            previously ruled, cutting-edge innovation allows its online business to grow
            unencumbered by technical limitations. The new platform now provides this retailer with
            the means to scale for years to come.
          </P>
          <P>
            And, by first focusing on delivering the application for mobile only, Red Badger has
            delivered a completed application across seven countries in just eight months, the
            results of which are staggering:
          </P>
        </SectionBody>
      </Section>
      <Section>
        <Card className={styles.overview}>
          <ListBox
            className={styles.listBox}
            title="What we did"
            items={[
              {
                label: 'Mobile first application across 7 countries',
              },
              {
                label: 'Introduced Lean & Agile practices',
              },
              {
                label: 'Built Continuous Deployment Pipelines',
              },
              {
                label: 'Moved to the Cloud',
              },
              {
                label: 'Introduced automated testing & cutting edge tech',
              },
            ]}
            labelClassName={styles.listBox__leftLabel}
          />
          <ListBox
            className={styles.listBox}
            title="Results"
            items={[
              {
                label: 'Uplift in visits',
                value: '+29%',
              },
              {
                label: 'Increased orders',
                value: '+54%',
              },
              {
                label: 'Customers amending orders',
                value: '+443%',
              },
              {
                label: 'Conversion rates including amendments',
                value: '+83%',
              },
              {
                label: 'Conversion rates excluding amendments',
                value: '+18%',
              },
            ]}
          />
        </Card>
      </Section>
    </Body>
    <WhatToReadNext currentPage="retailer" />
    <ChecklistContactUs />
  </ScrollTracker>
);

export default CaseStudyRetailer;
