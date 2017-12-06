import React from 'react';
import classnames from 'classnames/bind';

import headerSmall from './images/header-small.jpg';
import headerMedium from './images/header-medium.jpg';
import headerLarge from './images/header-large.jpg';
import tabletImage from './images/tablet_tea_salon.jpg';
import tabletImage2 from './images/tablet-2.jpg';
import allScreensImage from './images/all-screens.gif';
import allScreens2Image from './images/all-screens-2.gif';

import styles from './style.css';

const cx = classnames.bind(styles);

const FMCaseStudy = () => (
  <div>
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__imageContainer}>
          <picture>
            <div className={styles.helper} />
            <source srcSet={headerMedium} media="(min-width: 690px)" />
            <source srcSet={headerLarge} media="(min-width: 980px)" />
            <img
              src={headerSmall}
              alt="Fortnum & Mason basket contents"
              className={styles.header__image}
            />
          </picture>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          Fortnum & Mason’s new, elegant website increases revenue and conversion rates
        </h1>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>{"Let's make things better."}</span>
          Scaling the site, decreasing drop-outs and bringing the in-store experience online
        </h2>
        <p className={styles.content__paragraph}>
          Fortnum & Mason knew its digital offer didn’t match the premium experience or service
          being executed by its stores. With more and more shoppers heading online to make purchases
          from over 130 different countries, it realised something needed to change quickly.
        </p>
        <img src={tabletImage} className={cx('imageLeft', 'floatLeft')} alt="Tablet" />
        <p className={styles.content__paragraph}>
          The in-store experience at Fortnum’s embodies elegance and creativity. It displays its
          renowned, high quality products in beautifully curated layouts and delivers consistent,
          amazing customer service. In total contrast, the old website had an inconsistent design,
          was inflexible, and difficult to update. The old technology it used meant that revenue was
          being lost due to high levels of customer drop-out at certain stages in the buying
          process. For example, the presentation of delivery options was confusing and if one
          element of a customer’s order was unavailable, it could result in the entire order not
          going out for delivery. A scalable, highly flexible new build was needed, one that could
          replicate the elegance of Fortnum’s in-store experience and handle complex orders and
          global deliveries.
        </p>
      </div>
      <img src={allScreensImage} className={styles.allScreensImage} alt="All screens" />
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Do the right thing. Do the thing right.</span>
          Embracing organisational change and implementing cutting-edge technology
        </h2>
        <div className={cx('contactBox', 'showMedium')}>
          <h2 className={styles.contactBox__heading}>Project in mind?</h2>
          <a href="#contactUs" className={styles.contactBox__button}>
            Tell us more
          </a>
        </div>
        <p className={styles.content__paragraph}>
          We began by throwing the RFP process out of the window and implementing a two-day
          hackathon to produce a minimum viable product (MVP) that demonstrated our thinking for the
          new website; a ‘show not tell’ approach.
        </p>
        <div className={cx('contactBox', 'showSmall')}>
          <h2 className={styles.contactBox__heading}>Project in mind?</h2>
          <a href="#contactUs" className={styles.contactBox__button}>
            Tell us more
          </a>
        </div>
        <p className={styles.content__paragraph}>
          Working in a collaborative, Lean way with Fortnum & Mason, our talented design team and
          knowledgeable tech team, incorporated a progressive selection of open source technology
          including Spree Commerce, Wombat and Facebook’s React.
        </p>
        <p className={styles.content__paragraph}>
          We also designed, implemented and managed the Cloud-based architecture which the new
          platform runs on. This design allows for a continuous delivery model, meaning that tiny
          incremental changes are constantly tested and released to production multiple times a day
          (instead of a few times a year), helping to bid farewell to the age of big-bang releases.
        </p>
        <div className={styles.quote}>
          <p className={styles.quote__content}>
            “Since the site went live it has had incredible results in increased revenues and
            conversion rates.”
          </p>
          <p className={styles.quote__attribution}>
            – Zia Zareem-Slade, Customer Experience Director, Fortnum & Mason
          </p>
        </div>
        <p className={styles.content__paragraph}>
          However, key to this project’s success was engaging Fortnum’s customers from the start, to
          help drive the direction of the design and development of the site. This was implemented
          by our design team who ran guerrilla testing in the flagship store in Piccadilly, enabling
          them to get customer feedback in real-time on the look and feel of the site Fortnum’s
          in-store historian was also brought into the project to ensure the new design was as
          aligned to the brand’s heritage as possible.
        </p>
        <p className={styles.content__paragraph}>
          Once launched, the beta site ran in parallel with the old site to avoid disruption and a
          number of Fortnum’s customers were gradually switched over to the new site over a
          two-month period. New site visitors were able to provide feedback to enable further
          customer-centric amends and builds.
        </p>
        <p className={styles.content__paragraph}>
          These changes meant that when the full go-live launch took place the site already had
          features and processes in place that made sense to the user, not just the business. This
          approach also meant that overall, the project achieved a complete re-platform and design
          from concept through to delivery, in just eight months and for under £1.3 million.
        </p>
      </div>
      <img src={allScreens2Image} className={styles.allScreensImage} alt="All screens" />
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>Creating lasting change.</span>
          Increasing conversion, sales and mobile visits and winning multiple awards
        </h2>
        <img src={tabletImage2} className={cx('imageLeft', 'showMedium')} alt="Tablet 2" />
        <p className={styles.content__paragraph}>
          The new Red Badger-created site for Fortnum’s is fully responsive and was one of the only
          ones to be so at time of delivery. This has ensured that the customer experience is
          equally superlative no matter what device is used. The site is also built to be scalable
          and flexible enough to support the company’s future ambitions and peaks in online traffic
          and sales including Christmas.
        </p>
        <img src={tabletImage2} className={cx('imageLeft', 'showSmall')} alt="Tablet 2" />
        <p className={styles.content__paragraph}>
          The new site re-enforces the brand experience that customers of Fortnum & Mason expect, it
          is beautiful to look at, with a consistent design and Fortnum’s famous eau de nil colour
          prominent throughout. It is also fast, slick and easy to navigate - and truly responsive,
          delivering optimal layouts across every view port.
        </p>
        <p className={styles.content__paragraph}>
          The success of the site can be seen by results that were achieved in just the first few
          weeks of launch:
        </p>
      </div>
      <div className={styles.overview}>
        <div className={styles.listBox}>
          <ul>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>
                Improved conversion in the first week of release
              </div>
              <div>+14%</div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>
                Increase in average order value in the first week of release
              </div>
              <div className={styles.listBox__element__label}>+5%</div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>
                Total sales achieving growth year on year
              </div>
              <div>+52%</div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>
                Increase in mobile visits up year on year
              </div>
              <div>+77%</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.content__wrapper}>
        <p className={styles.content__paragraph}>
          Since it went fully live it has delivered an incredible sales uplift (38% over the
          Christmas 2015 period) and dramatically increased conversion with drop-out rate at the
          delivery options stage reduced from 18.8% to 12.9% (based figures from 17- 25th February
          2014 vs 2015.)
        </p>
        <p className={styles.content__paragraph}>Other key stats year on year*:</p>
      </div>
      <div className={styles.overview}>
        <div className={styles.listBox}>
          <ul>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>Mobile Conversion rate</div>
              <div>+57%</div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>Tablet visits</div>
              <div>+30%</div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>Tablet Conversion</div>
              <div>+28%</div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>New customers conversion</div>
              <div>+15%</div>
            </li>
            <li className={cx('listBox__element', 'listBox__element--results')}>
              <div className={styles.listBox__element__label}>
                Reduction in calls to the Customer Service team
              </div>
              <div>-18%</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.content__wrapper}>
        <p className={styles.content__paragraph}>
          With the site now being much easier to navigate there has been an increase in sales of
          specific items, for example a 78% increase in grocery sales.
        </p>
        <p className={styles.content__paragraph}>
          * Statistics are based on launch week to 8th March and same date range last year.
        </p>
        <p className={styles.content__paragraph}>
          Further to the this, fortnumandmason.com won a BIMA Award for ‘Best Web Design & Build’
          and an eCommerce Award for ‘Best eCommerce New Design or Re-Design (Under 1 Year)’ in
          2015. The project was also nominated for the UK Digital Experience Awards in the Retail
          sector award and as ‘Best Use of Website to Build Your Brand’. It was also nominated at
          the Retail Week Tech and Ecommerce Awards in the ‘Best Customer Experience’ category.
        </p>
        <p className={styles.content__video_embed}>
          <iframe src="https://www.youtube.com/embed/eBE3J9XZO20" frameBorder="0" allowFullScreen />
        </p>
        <div className={styles.content__video_spacer} />
      </div>
    </div>
  </div>
);

export default FMCaseStudy;
