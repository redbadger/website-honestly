import React from 'react';

import headerImage from './images/header-large.jpg';
import tabletTeaSalonImage from './images/tablet_tea_salon.jpg';
import allScreensImage from './images/all-screens.jpg';
import allScreens2Image from './images/all-screens-2.jpg';

import styles from './style.css';

type FMCaseStudyProps = {
  retailerStyles: string,
  cx: object
}

const FMCaseStudy = ({ retailerStyles }: FMCaseStudyProps) => (
  <div>
    <div className={retailerStyles.header}>
      <div className={retailerStyles.header__container}>
        <div className={retailerStyles.header__imageContainer}>
          <img src={headerImage} alt="shopping cart" className={retailerStyles.header__image} />
        </div>
      </div>
    </div>
    <div className={retailerStyles.content}>
      <div className={retailerStyles.content__wrapper}>
        <h1 className={retailerStyles.content__mainTitle}>
          Fortnum & Mason’s new, elegant website increases revenue and conversion rates
        </h1>
        <h2 className={retailerStyles.content__title}>
          <span className={retailerStyles.content__redTitle}>
            {"Let's make things better."}
          </span>
          Scaling the site, decreasing drop-outs and bringing the in-store experience, online
        </h2>
        <p className={retailerStyles.content__paragraph}>
          When you think of Fortnum & Mason, the iconic eau di nil colour, the beautiful store
          layout, amazing customer service and the incredibly high quality of products, springs to
          mind. This unrivalled reputation, held over 300 years, has always been led by the store
          experience. But with more and more shoppers heading online to make purchases from over
          130 different countries, Fortnum’s realised their digital experience didn’t match the
          service delivered by the physical stores, and something needed to change, quickly.
        </p>
        <img src={tabletTeaSalonImage} className={styles.tabletTeaSalonImage} alt="Tablet" />
        <p className={retailerStyles.content__paragraph}>
          The old site had an inconsistent design, was inflexible, difficult to update and the
          underlying technology was nearing the end of its life. The out-dated technology meant
          that high levels of customers were dropping out at certain stages in the buying process.
          For example, the presentation of delivery options was confusing and if one element of a
          customer’s order was unavailable, it could result in the entire order not going out for
          delivery.
        </p>
        <p className={retailerStyles.content__paragraph}>
          In addition, this site needed to solve the above problems as well as handle complex
          orders and delivery to more than 130 countries. A scalable, highly flexible new site was
           needed, and very quickly to avoid more lost revenue.
        </p>
        <img src={allScreensImage} className={styles.allScreensImage} alt="All screens" />


        <h2 className={retailerStyles.content__title}>
          <span className={retailerStyles.content__redTitle}>
            Do the right thing. Do the thing right.
          </span>
          Embracing organisational change and implementing cutting-edge technology
        </h2>
        <p className={retailerStyles.content__paragraph}>
          We began with a two-day hackathon to produce a minimum viable product (MVP) to demonstrate
          our thinking for the new website; a ‘show not tell’ approach.
        </p>
        <p className={retailerStyles.content__paragraph}>
          Working in a collaborative, Lean way with Fortnum & Mason, our talented design team and
          knowledgeable tech team, incorporated a progressive selection of open source technology
          including Spree Commerce, Wombat and Facebook’s React.
        </p>
        <p className={retailerStyles.content__paragraph}>
          We also designed, implemented and managed the Cloud-based architecture upon which the new
          platform runs. This design allows for a continuous delivery model, meaning that tiny
          incremental changes are constantly tested and released to production multiple times a day
          (instead of a few times a year), helping to bid farewell to the age of big bang releases.
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
        <p className={retailerStyles.content__paragraph}>
          The process and technology had the customer at the heart of the project but the key to the
          success was engaging Fortnum’s customers to help drive the direction of the design and
          development of the site by allowing them to provide feedback directly to the team.
          Throughout the project, our design team ran guerrilla testing in the flagship store in
          Piccadilly to get customer feedback on the look and feel of the site. The in-store
          historian was also brought into the project to ensure the new design was as aligned to
          the brand’s heritage as possible.
        </p>
        <p className={retailerStyles.content__paragraph}>
          Once launched, the beta site ran in parallel to the old site to avoid disruption and a
          number of Fortnum’s customers were gradually switched over to the new site over a
          two-month period. New site visitors were able to provide feedback to enable further
          customer-centric amends and builds.
        </p>
        <p className={retailerStyles.content__paragraph}>
          These changes meant that when the full go-live launch took place the site already had
          features and processes in place that made sense to the user, not just the business. This
          approach also meant that overall the project has achieved a complete re-platform and
          design from concept through to delivery, in just eight months and for under £1.3 milllion.
        </p>
        <img src={allScreens2Image} className={styles.allScreensImage} alt="All screens" />
      </div>
    </div>
  </div>
);

export default FMCaseStudy;
