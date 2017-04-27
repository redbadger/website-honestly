import React from 'react';
import classnames from 'classnames/bind';

import header from './images/header.jpg';
import teaPost from './images/fortnum_tea_post.jpg';

import styles from './style.css';

const cx = classnames.bind(styles);

const FMTeaCaseStudy = () => (
  <div>
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__imageContainer}>
          <img src={header} alt="Illustration of a box of Fortnum & Mason tea" className={styles.header__image} />
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          Implementing Fortnum & Mason’s inaugural digital-first product, which aims to be
          everyone’s cup of tea
        </h1>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>
            {"Let's make things better."}
          </span>
          Pushing the boundaries online
        </h2>
        <p className={styles.content__paragraph}>
          From creating the Royal Blend for King Edward VII in 1902, to a dedicated
          department in-store, Fortnum & Mason is famous across the globe for its
          dedication to tea and its high-quality selection. To date, the primary focus of
          this experience has been focused in store.
        </p>
        <p className={cx('content__paragraph', 'content__paragraph__left')}>
          Alongside tea, Fortnum’s is best-known for its hampers, which have been
          introduced to the website with great success. Although the option to buy tea
          blends online has been available since the website launched, the gifting and
          curated selection didn’t match the online experience of purchasing and sending
          hampers. Fortnum’s wished to share the impressive breadth of their tea offering
          with online customers in a new, innovative way.
        </p>
        <img src={teaPost} className={styles.fullWidthImage} alt="Illustration of the Fortnum and Mason tea post" />
        <p className={styles.content__paragraph}>
          And so, The Tea Post was born.
        </p>
        <p className={styles.content__paragraph}>
          Available for three, six or 12 months at a time, The Tea Post highlights the
          very best of Fortnum’s tea selection. Two expertly-selected, seasonal teas are
          delivered each month and are beautifully packaged with information about each
          product.
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>
            {'Do the right thing. Do the thing right.'}
          </span>
          Implementing a web-first approach in a bricks and mortar world
        </h2>
        <p className={styles.content__paragraph}>
          Although Fortnum & Mason’s online business has doubled in the past three years,
          growing by close to a quarter since the previous year, The Tea Post was Fortnum &
          Mason’s inaugural digital-first product. This means that since the website
          launched in the late 90s, Fortnum’s had never, ever launched a product on the
          website first; products always launched in store. As such, everything from the
          marketing to the packaging to the execution had to be considered with a
          completely different process, to ensure that this new type of product was easy
          to access and fundamentally interesting for the Fortnum’s customer.
        </p>
        <div className={styles.contactBox}>
          <h2 className={styles.contactBox__heading}>
            Project in mind?
          </h2>
          <a href="#contactUs" className={styles.contactBox__button}>Tell us more</a>
        </div>
        <p className={styles.content__paragraph}>
          A smooth and simplistic experience was needed for prospective new Tea Post
          customers. By taking a web-first approach and providing a rich content
          experience, we were able to ensure that web customers would get the same
          renowned, first-class experience that customers in store receive.
        </p>
        <p className={styles.content__paragraph}>
          We began the content-rich experience by adding moving images, which have been
          used to wonderful effect on the Tea Post landing page. As the page develops
          further, we will be implementing social media integrations, allowing people to
          tie their experience directly with the brand.
        </p>
        <p className={styles.content__paragraph}>
          By choosing a subscription method of purchase in the existing storefront, we
          were able to use a lot of the existing functionality of Spree, the ecommerce and
          platform solution, whilst avoiding some of the constraints that the Fortnum &
          Mason enterprise resource planning (ERP) system had.
        </p>
        <h2 className={styles.content__title}>
          <span className={styles.content__redTitle}>
            {'Creating lasting change.'}
          </span>
          Helping to increase cross-channel revenues
        </h2>
        <p className={styles.content__paragraph}>
          In the post-Christmas period, we will enabling store staff to use content
          management system, Ahoy! [link to case study], to take Tea Post orders in store
          and over the phone.
        </p>
        <p className={styles.content__paragraph}>
          The use of this technology, built by us, will allow Fortnum & Mason to increase
          their cross-channel revenues and develop the connection between web and store
          even further; and make Fortnum’s everyone’s cup of tea.
        </p>
      </div>
    </div>
  </div>
);

export default FMTeaCaseStudy;
