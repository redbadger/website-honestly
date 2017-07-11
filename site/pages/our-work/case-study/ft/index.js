import React from 'react';
import classnames from 'classnames/bind';
import Social from '../../../../components/social';
import styles from './style.css';

import headerImage from './images/header.jpg';
import techGraphImage from './images/tech-graph.jpg';
import metaImage from './images/meta-image.png';

import WhatToReadNext from '../what-to-read-next';
import ContactUs from '../../../../slices/contact-us-slice';

const cx = classnames.bind(styles);

type CaseStudyFinancialTimesProps = {
  contactUsURL: string,
};

const social = {
  title: 'The proof is in the pudding',
  description:
    'Next generation platform for retail giant cleared five-year backlog in just eight months',
  metaImage,
  url: 'https://red-badger.com/our-work/case-study/financial-times',
};

const FinancialTimesCaseStudy = ({ contactUsURL }: CaseStudyFinancialTimesProps) =>
  <div className={styles.caseStudy}>
    <Social {...social} />
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__imageContainer}>
          <img src={headerImage} alt="shopping cart" className={styles.header__image} />
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          Keeping up with the Financial Times
        </h1>
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
            <li className={styles.content__ordered__list__element}>Delivery — To deliver the next generation ft.com homepage demonstrating the
            successful integration of UX and design across all other streams</li>
            <li className={styles.content__ordered__list__element}>Strategy — Creative team strategy across the entire online product portfolio</li>
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
              Support an organisational shift towards taking an user-centred design (UCD) to product development
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
          Red Badger enabled this large retail client to work with the agility of a start-up:
          re-engineering and revolutionising its workflow with Lean practices and helping it break
          down department silos by keeping design, development and testing in one place. The
          benefits of this included:
        </p>
      </div>
      <div>
        <img src={techGraphImage} className={styles.techGraphImage} alt="Tech graph" />
      </div>
      <div className={styles.content__wrapper}>
        <h3 className={styles.content__secondaryTitle}>
          Finding the right tech for the job
        </h3>
        <p className={styles.content__paragraph}>
          Now working in a collaborative and Lean way with Red Badger, it was time to find the
          right tech for the job.
        </p>
        <p className={styles.content__paragraph}>
          Red Badger worked very closely with the retailer’s engineering team to recommend and
          introduce an incredibly progressive selection of cutting-edge technology. The new mobile
          site had to replace the existing screen-scraping solution and improve the customer
          experience, making the new site adaptable, flexible and able to scale up to the
          ever-growing demand that the business was seeing.
        </p>
        <div className={styles.contactBox}>
          <h2 className={styles.contactBox__heading}>
            Project in mind?
          </h2>
          <a href="#contactUs" className={styles.contactBox__button}>Tell us more</a>
        </div>
        <p className={styles.content__paragraph}>
          By using a combination of Node.js and React.js, the team were able to develop an app that
          delivers a consistent experience across all devices. It also means that the application
          is fast and responsive, delivering far better usability for customers.
        </p>
        <p className={styles.content__paragraph}>
          On top of this, by moving into the Cloud, using advanced technology such as Docker
          Containers, AWS ECS and Terraform, the ecommerce store was able to incorporate auto cloud
          scaling which expands and contracts resource allocation to match customer demand. This is
          vital in helping to cope with the huge growth in revenue and transaction volumes
          experienced by the retailer, especially around times of peak demand such as Christmas and
          Black Friday.
        </p>
        <p className={styles.content__paragraph}>
          Finally, on the tech front, by building Automated Test and Continuous Deployment
          Pipelines, new features are enabled to be constantly trickled into production, continually
          delivering new value to customers and substantially reducing risk. Previously, the
          retail giant released quarterly but can now release multiple times a day with deployments
          taking minutes, rather than days.
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Creating lasting change.</span>
          Improving conversion rates by 83%
        </h2>
        <p className={styles.content__paragraph}>
          Successfully using the technologies above has solved long-standing issues and
          fundamentally influenced the retailer’s next generation platform. Where legacy systems
          previously ruled, cutting-edge innovation allows its online business to grow unencumbered
          by technical limitations. The new platform now provides this retailer with the means to
          scale for years to come.
        </p>
        <p className={styles.content__paragraph}>
          And, by first focusing on delivering the application for mobile only, Red Badger has
          delivered a completed application across seven countries in just eight months, the
          results of which are staggering:
        </p>
      </div>
      <div className={styles.overview}>
        <div className={styles.listBox}>
          <h3 className={styles.listBox__heading}>What we did</h3>
          <ul>
            <li className={styles.listBox__element}>
              Mobile first application across 7 countries
            </li>
            <li className={styles.listBox__element}>
              Introduced Lean & Agile practices
            </li>
            <li className={styles.listBox__element}>
              Built Continuous Deployment Pipelines
            </li>
            <li className={styles.listBox__element}>
              Moved to the Cloud
            </li>
            <li className={styles.listBox__element}>
              Introduced automated testing & cutting edge tech
            </li>
          </ul>
        </div>
        <div className={styles.listBox}>
          <h3 className={styles.listBox__heading}>Results</h3>
          <ul>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div>
                Uplift in visits
              </div>
              <div>
                +29%
              </div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div>
                Increased orders
              </div>
              <div>
                +54%
              </div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div>
                Customers amending orders
              </div>
              <div>
                +443%
              </div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div>
                Conversion rates including amendments
              </div>
              <div>
                +83%
              </div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div>
                Conversion rates excluding amendments
              </div>
              <div>
                +18%
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <WhatToReadNext />
    <ContactUs postURL={contactUsURL} />
  </div>;

export default FinancialTimesCaseStudy;
