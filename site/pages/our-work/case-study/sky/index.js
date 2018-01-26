import React from 'react';
import Social from '../../../../components/social';
import styles from './style.css';

import headerImage from './images/header.jpg';
import articleImage from './images/article.jpg';
import authorQuoteImage from './images/quote-author.jpeg';

import Card from '../../../../components/card';
import ListBox from '../../../../components/list-box';
import Quote from '../../../../components/quote';

import WhatToReadNext from '../what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';
import ContactBox from '../../../../components/contact-box';

const social = {
  title: 'The proof is in the pudding',
  description: 'Helping Sky customers help themselves, with a refreshed customer service website',
  metaImage: headerImage,
  url: 'https://red-badger.com/our-work/case-study/sky-cms',
};

const SkyCaseStudy = () => (
  <div className={styles.caseStudy}>
    <Social {...social} />
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__imageContainer}>
          <img
            src={headerImage}
            alt="A Sky customer standing at cross-roads"
            className={styles.header__image}
          />
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          Helping Sky customers help themselves, with a refreshed customer service website
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
          text={
            'Red Badger are recognised leaders in Agile/Lean methodologies so they could immediately start working and deliver results alongside our internal team.'
          }
        />
        <Card className={styles.listBoxContainer}>
          <ListBox
            title="Results"
            items={[
              {
                label: 'Tripled the number of issues resolved through online self help journey',
              },
              {
                label: 'Doubled the customers serviced by the advanced diagnostics capability',
              },
              {
                label: 'Serviced half a million customers to date',
              },
              {
                label: "50% Drop in customers pushing the 'need more help' button",
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
          Delivering exceptional intuitive customer service
        </h2>
        <p className={styles.content__paragraph}>
          Sky are continuously focused on providing customers the services they want and need. It’s
          part of a simple, two-pronged attack: Sky seeks to improve what it has, and provide what
          it doesn’t have already. As part of this, Sky found that there was a higher demand for
          online self-help services as customers’ own digital skills grow.
        </p>
        <p className={styles.content__paragraph}>
          As such, Sky was determined to enhance the use of their online self-help tools for in-home
          diagnostics, allowing issues to be resolved quicker. Taking this, Sky set out to enable
          customers to troubleshoot problems for themselves, particularly during times of widespread
          issues. This, in order to help prevent the helpline being overwhelmed with calls for the
          same problem.
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Do the right thing. Do the thing right.</span>
          Empowering customers to help themselves
        </h2>
        <p className={styles.content__paragraph}>
          With a clear message of achieving customer empowerment, our onsite team at Red Badger got
          to work. The team focused on improving the online help and support experience by enabling
          customers to find content, resolve issues, navigate available services, and set up their
          Sky equipment correctly.
        </p>
        <p className={styles.content__paragraph}>
          Sky was already a leader in the use of agile methodologies and lean ways of working, and
          were determined to work with a partner that would help them to advance these skills. To
          complement their established structures, augmented by Sky’s UX/Design resources, we
          brought in an integrated team of UX, design, and technology to deliver rapidly. Bleeding
          edge software was utilised to revamp the site and give it the modernisation it needed.
        </p>
        <ContactBox />
        <p className={styles.content__paragraph}>
          Through the use of clustered articles, customers are now able to find what they need when
          they need it. Additionally, the help section was bolstered to handle spikes in activity;
          saving customers from having to reach for the phone. So, when the football match starts
          glitching, the Sky team can make sure that the solution is up on the site, or if one is
          still being found, can put a pop up on the page to reassure customers are that they are
          working to find the solution needed.
        </p>
        <p className={styles.content__paragraph}>
          <img
            src={articleImage}
            alt="Screenshot of Sky Help and Support page"
            className={styles.articleImage}
          />
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Creating lasting change.</span>
          Quick delivery with more to come
        </h2>
        <p className={styles.content__paragraph}>
          In just five months, we delivered four major pieces of customer-facing functionality.
          Focused initially on in-home advanced diagnostics, the first customer facing delivery was
          made in less than three weeks, leaving room to implement further customer feedback.
        </p>
        <p className={styles.content__paragraph}>
          The new diagnostic platform has had a huge effect. It tripled the number of issues
          resolved through the online self-help journey, it doubled the customers serviced by the
          advanced diagnostics, and it’s serviced half a million customers to date.{' '}
        </p>
      </div>
    </div>
    <WhatToReadNext currentPage="sky" linkKeys={['skyCms']} />
    <ChecklistContactUs />
  </div>
);

export default SkyCaseStudy;
