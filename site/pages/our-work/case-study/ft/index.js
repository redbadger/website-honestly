import React from 'react';
import Social from '../../../../components/social';
import styles from './style.css';

import headerImage from './images/header.jpg';
import screenImage from './images/screen.jpg';
import authorQuoteImage from './images/christina-scott.png';

import ListBox from '../../../../components/list-box';
import Quote from '../../../../components/quote';

import WhatToReadNext from '../what-to-read-next';
import ContactUs from '../../../../slices/contact-us-slice';
import ContactBox from '../../../../components/contact-box';

type CaseStudyFinancialTimesProps = {
  contactUsURL: string,
};

const social = {
  title: 'The proof is in the pudding',
  description: 'Keeping up with the Financial Times',
  metaImage: headerImage,
  url: 'https://red-badger.com/our-work/case-study/financial-times',
};

const FinancialTimesCaseStudy = ({ contactUsURL }: CaseStudyFinancialTimesProps) =>
  <div className={styles.caseStudy}>
    <Social {...social} />
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__imageContainer}>
          <img src={headerImage} alt="meeting" className={styles.header__image} />
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          Keeping up with the Financial Times
        </h1>
      </div>
      <div className={styles.overview}>
        <Quote
          author={{
            name: 'Christina Scott',
            title: 'Chief Product & Information Officer, Financial Times',
            image: authorQuoteImage,
          }}
          text={
            'Working with Red Badger has allowed the FT to see the future of our .com publishing model in a new light. Helping the FT to get the best out of our own great people, with a fresh approach to delivery and the way in which we collaborate across all disciplines has been central in building lasting change.'
          }
        />
        <ListBox
          title="Results"
          items={[
            {
              label: 'Integration of Lean UX and Design into all areas of product delivery',
            },
            {
              label: 'New homepage designed and built in just 7 weeks',
            },
            {
              label: 'Reader engagement increased by 30%',
            },
          ]}
          itemClassName={styles.listBox__item}
          labelClassName={styles.listBox__label}
        />
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>
            {"Let's make things better."}
          </span>
          Adapting to a changing online news world
        </h2>
        <p className={styles.content__paragraph}>
          The Financial Times knew that online news was changing fast, and their subscription
          model meant they had to deliver something above and beyond the news and services
          available for free. The next generation of ft.com was already underway, and now
          they needed a partner who could help envisage it and bring it to life.
        </p>
        <h3 className={styles.content__secondaryTitle}>
          There were two overarching challenges to solve for the Financial Times:
        </h3>
        <p className={styles.content__paragraph}>
          <ol className={styles.content__ordered__list}>
            <li className={styles.content__ordered__list__element}>
              Delivery — To deliver the next generation ft.com homepage demonstrating the
              successful integration of UX and design across all other streams
            </li>
            <li className={styles.content__ordered__list__element}>
              Strategy — Creative team strategy across the entire online product portfolio
            </li>
          </ol>
        </p>
        <h3 className={styles.content__secondaryTitle}>
          And, core objectives included:
        </h3>
        <p className={styles.content__paragraph}>
          <ul className={styles.content__list}>
            <li className={styles.content__list__element}>
              Introduce and embed Lean UX methodologies and Agile Design at an enterprise level
            </li>
            <li className={styles.content__list__element}>
              Increase speed to market
            </li>
            <li className={styles.content__list__element}>
              Raise quality level of design across the product group
            </li>
            <li className={styles.content__list__element}>
              Support an organisational shift towards taking an user-centred design (UCD) to product
              development
            </li>
            <li className={styles.content__list__element}>
              Place experts within the organisation who’ll continue to support these methods
            </li>
          </ul>
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Do the right thing. Do the thing right.</span>
          Collaboration both online and offline
        </h2>
        <h3 className={styles.content__secondaryTitle}>
          Learn
        </h3>
        <p className={styles.content__paragraph}>
          We approached the work through collaborative design, with representatives from across
          the business, we built a complete understanding of the publication’s needs.
        </p>
        <p className={styles.content__paragraph}>
          In order to demonstrate how collaboration between different functions of a product team
          can be optimised in a given environment, it is necessary to first learn about that
          environment. This is why we started our engagement by placing a core multi-disciplined
          product team central to the working group. Acting as a hub, we were physically,
          geographically and functionally central to the core offering of the next generation
          ft.com, the home page.
        </p>
        <ContactBox />
        <p className={styles.content__paragraph}>
          In the initial phase of our engagement we redesigned and deployed a new home page in just
          seven weeks. This involved integrating React and GraphQL into the FT’s already cutting
          edge tech stack. Demonstrating not only an improved approach to delivery but adding value
          through introducing new technology.
        </p>
        <h3 className={styles.content__secondaryTitle}>
          Understand
        </h3>
        <p className={styles.content__paragraph}>
          After an initial period of delivering at speed into a live production environment we
          started to mix with the internal teams. We were able to share and explain their working
          processes and systems to new colleagues, creating the perfect environment to reassess the
          effectiveness of each stage of their workflow. We learned how the Financial Times operated
          in the first few weeks of the project. This put us in a position later in the project to
          recommended some changes to the process in the internal design and development team.
        </p>
        <h3 className={styles.content__secondaryTitle}>
          Coach
        </h3>
        <p className={styles.content__paragraph}>
          Initially we found multiple product teams were using processes that were out of view and
          this resulted in untraceable productivity. This made predicting delivery times and making
          sound investment decisions difficult. Soon after our arrival we were helping the Financial
          Times to build a legacy of implementing methodologies out in the open, with work on kanban
          boards representing their own processes.
        </p>
        <p className={styles.content__paragraph}>
          We worked with each team one at a time and through an osmosis like process each team
          adopted a more open and collaborative way of working together with UX and Design. Now the
          Financial Times have core metrics measured against each of the backlogs and using Little’s
          Law we can predict completion time, throughput, lead time and cycle time.
        </p>
        <h3 className={styles.content__secondaryTitle}>
          Support
        </h3>
        <p className={styles.content__paragraph}>
          Through a formal education program we taught fundamental User Experience methodologies,
          Lean UX and Kanban, to a cross section of representatives across the business to support
          and reinforce the change we have brought to the Financial Times at an enterprise level.
        </p>
        <p className={styles.content__paragraph}>
          On going contact beyond our engagement is a given, to offer any level of support required
          during the maturation of the businesses UCD approach to product development.
        </p>
      </div>
    </div>
    <div className={styles.screenDemo}>
      <div className={styles.screenDemo__description}>
        The first iteration of the new
        homepage design and built
        in seven weeks
      </div>
      <img
        src={screenImage}
        alt="Screenshot of Financial Times website"
        className={styles.screenDemo__image}
      />
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Creating lasting change.</span>
          A new design increasing reader engagement by 30%
        </h2>
        <p className={styles.content__paragraph}>
          Our work with the Financial Times was made to last. Through close collaboration with the
          FT senior management in a controlled and considered way ensures that the gradual cultural
          shift in working practices and approach to Lean UX and Agile Design is not short lived. On
          the contrary, through careful coaching and support we have created an environment where
          teams now make iterative changes to how UX and Design is considered and integrated with
          other teams, including technology and customer research across the business.
        </p>
        <p className={styles.content__paragraph}>
          The Financial Times is at the cutting edge of product development, which puts a Lean UCD
          process at the heart of everything it does. We have been pivotal in implementing these
          processes, integrating Lean UX and Agile Design into all areas of product delivery across
          the organisation.
        </p>
        <p className={styles.content__paragraph}>
          It remains one of the fastest news sites in the world, loading in 1.5 seconds on desktop
          and 2.1 on mobile, reader engagement has increased by 30%, with visitors reading more and
          returning more frequently. It has also won Website of the Year at the Press Awards and
          Best Use of Technology at Digiday Publishing Awards.
        </p>
      </div>
    </div>
    <WhatToReadNext currentPage="financialTimes" />
    <ContactUs postURL={contactUsURL} />
  </div>;

export default FinancialTimesCaseStudy;
