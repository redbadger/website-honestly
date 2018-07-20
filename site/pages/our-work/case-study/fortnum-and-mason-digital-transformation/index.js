// @flow

import React from 'react';
import Card from '../../../../components/card';
import ListBox from '../../../../components/list-box';
import WhatToReadNext from '../../what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import Social from '../../../../components/social';
import Picture from '../../../../components/picture';
import Link from '../../../../components/link';
import ScrollTracker from '../../../../components/scroll-tracker';

import headerL from './images/header-l.jpg';
import headerM from './images/header-m.jpg';
import headerS from './images/header-s.jpg';

import styles from './style.css';

const social = {
  title: 'The ongoing digital transformation of a 310-year old retailer | Red Badger',
  description: 'Discover how we helped customers find products faster and drive sales for F&M.',
  metaImage: headerL,
  altText: 'A picture of a teacup, teapot and mobile phone.',
  url: 'https://red-badger.com/our-work/case-study/fortnum-and-mason-digital-transformation',
};

const FMTeaCaseStudy = () => (
  <ScrollTracker>
    <Social {...social} />
    <div className={styles.header}>
      <Picture
        className={styles.header__image}
        largeSrc={headerL}
        mediumSrc={headerM}
        smallSrc={headerS}
        alt="A box of Fortnum & Mason tea"
      />
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <div className={styles.content__mainTitleWrapper}>
          <h1 className={styles.content__mainTitle}>
            The ongoing digital transformation of a 310-year old retailer
          </h1>
        </div>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Let&apos;s make things better.</span>
          Make everyday special
        </h2>
        <p className={styles.content__paragraph}>
          Since 2014, we’ve been working with Fortnum & Mason to drive business growth through
          digital transformation via an ongoing programme of tech initiatives across the website
          that helps make everyday special for their customers across all touch points. You can read
          about our award-winning work on the website{' '}
          <Link to="fortnumAndMasonCaseStudy" className={styles.link} target="_blank">
            here
          </Link>.
        </p>
        <p className={styles.content__paragraph}>
          Since then, the focus has been on increasing the awareness and accessibility of a wide
          array of Fortnum’s products; and the need to improve one particular category, tea.
        </p>
        <p className={styles.content__paragraph}>
          Fortnum & Mason is famous across the globe for its dedication to supplying the finest
          quality selection of tea however the online experience needed more visibility to drive
          interest and revenue, as well as share the impressive breadth with online customers in a
          new, innovative way. In essence, we needed to bring the gifting and curatorial elements
          that exist with hampers, to the tea consumer journey.
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>
            {'Do the right thing. Do the thing right.'}
          </span>
          Giving tea a digital twist and improving online experience
        </h2>
        <p className={styles.content__paragraph}>
          The solution was the Tea Experience - a design to help improve the browsing experience and
          enable customers find products faster and with ease to enjoy the wide array of teas on
          offer outside of the store’s walls.
        </p>
        <div className={styles.contactBox}>
          <h2 className={styles.contactBox__heading}>Project in mind?</h2>
          <a href="#contactUs" className={styles.contactBox__button}>
            Tell us more
          </a>
        </div>
        <p className={styles.content__paragraph}>
          We implemented advanced search capabilities so that the Tea Experience could be a fast,
          intuitive online shopping platform that interacted with Fortnum’s online store in a slick,
          interactive process.
        </p>
        <p className={styles.content__paragraph}>
          In order to make this a reality, we integrated Fortnum’s online store with Elasticsearch,
          a search engine that allows structured, unstructured, geo and metric search structures,
          which deliver a quicker and smarter customer browsing experience. Whatever the customer
          query or search intention, the intelligent platform now allows customers to get a genuine
          answer to their questions, just as they would in store. On top of this, enhancements
          including intuitive faceted filtering has improved customer experience further and helped
          to drive conversation rates upwards.
        </p>
        <p className={styles.content__paragraph}>
          Alongside implementing the likes of the Tea Experience, we ensure the smooth running of
          Fortnum’s website every day and the work has resulted in the website having its biggest
          sales day, week and month in the last quarter of 2016.
        </p>
        <p className={styles.content__paragraph}>
          The team deploys up to five releases per day, getting new features and enhancements in
          front of customers quickly and enabling Fortnum &amp; Mason to realise revenue increases
          instantly.
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Creating lasting change.</span>
          Learning fast and scaling excellence
        </h2>
        <p className={styles.content__paragraph}>
          The results of all of this mean that with less time waiting and more time browsing, the
          Fortnum’s Tea Experience has delivered an increase in converted sales and web traffic as
          well as a huge decrease in server times from 3 to 0.6 seconds.
        </p>
        <Card className={styles.listBoxContainer}>
          <ListBox
            title="Since launch in March 2017, the Tea Experience has delivered"
            className={styles.listBox}
            items={[
              {
                label: 'Increase in new customers vs last year',
                value: '+11%',
              },
              {
                label: 'Increase in existing customers vs last year',
                value: '+33%',
              },
              {
                label: 'Increase in conversion rate',
                value: '+8%',
              },
              {
                label: 'Increase in average order value (AOV)',
                value: '+39%',
              },
              {
                label: 'Improvement in average page load times',
                value: '+21%',
              },
            ]}
            itemClassName={styles.listBox__item}
          />
        </Card>
      </div>
    </div>
    <WhatToReadNext currentPage="fMTeaCaseStudy" linkKeys={['fortnumAndMason']} />
    <ChecklistContactUs />
  </ScrollTracker>
);

export default FMTeaCaseStudy;
