// @flow
/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';

import styles from '../../components/policy/style.css';
import { P, H3 } from '../../components/policy/shared';
import Link from '../../components/link';

const policies = [
  {
    number: '01',
    heading: 'Why do you have a Cookies Policy?',
    body: () => {
      return (
        <React.Fragment>
          <P>
            The reason we have a Cookies Policy is to explain to you what cookies and similar
            technologies we use, why we use them, and what you need to do if you want to restrict,
            block, disable or delete them. Our Cookies Policy is part of, and is subject to, our{' '}
            <Link to="privacyPolicy">Privacy Statement</Link>.
          </P>
          <P>
            By accessing and/or using our Website you confirm that you accept the terms of our
            Cookies Policy.
          </P>
        </React.Fragment>
      );
    },
  },
  {
    number: '02',
    heading: 'What are cookies and similar technologies?',
    body: () => {
      return (
        <React.Fragment>
          <P>
            A cookie is a text file placed on your computer, tablet, mobile phone, or other device
            ("device") when a person access or uses a website. There are also technologies similar
            to cookies (e.g. clear gifs) that do the same. Data is collected because it can be
            necessary to a website’s operation, to assess and/or improve its performance, and/or to
            provide a personalised experience etc.
          </P>
          <P>
            To find out more about cookies, please visit:{' '}
            <a href="https://ico.org.uk/for-the-public/online/cookies/">
              https://ico.org.uk/for-the-public/online/cookies/
            </a>.
          </P>
        </React.Fragment>
      );
    },
  },
  {
    number: '03',
    heading: 'What if I don’t want cookies and similar technologies?',
    body: () => {
      return (
        <React.Fragment>
          <P>
            You can restrict, block, disable or delete cookies and similar technologies. Most web
            browsers allow some control of most cookies through the browser settings. To find out
            more about how to do that, please visit{' '}
            <a href="http://cookies.insites.com/disable-cookies/">
              http://cookies.insites.com/disable-cookies/
            </a>{' '}
            or{' '}
            <a href="http://www.allaboutcookies.org/manage-cookies/">
              http://www.allaboutcookies.org/manage-cookies/
            </a>.
          </P>
          <P>
            When you access and/or use our Website, we will ask you if you will accept cookies and
            similar technologies from us and/or our third parties. If you choose not to accept them,
            or if you accept them but subsequently restrict, block, disable or delete some or all of
            them, you won&#39;t have access to many features that make your experience more
            efficient and some of our Website may not function properly.
          </P>
          <P>
            You can also opt out of being tracked by Google Analytics across all websites. To find
            out how you can opt out, please visit{' '}
            <a href="http://tools.google.com/dlpage/gaoptout">
              http://tools.google.com/dlpage/gaoptout
            </a>.
          </P>
        </React.Fragment>
      );
    },
  },
  {
    number: '04',
    heading: 'What cookies collect my data?',
    body: () => {
      return (
        <React.Fragment>
          <P>
            We use the following first-party cookies on our Website. They are placed on your device
            by us.
          </P>

          <H3>__hstc</H3>
          <P>
            This cookie is used to track visitors. It contains the domain, utk, initial timestamp,
            last timestamp, current timestamp, and session number for each subsequent session.
          </P>

          <H3>__hssrc</H3>
          <P>
            This cookie is to determine if the user has restarted their browser. This is a session
            cookie.
          </P>

          <H3>__hssc</H3>
          <P>
            This cookie keeps track of sessions. They allow us to determine if we should increment
            the session number and timestamps in the _hstc cookie. It contains the domain,
            viewCount, and session start timestamp. This is a cookie that expires after 30 mins.
          </P>

          <H3>hubspotutk</H3>
          <P>
            This cookie is used to keep track of a visitor’s identity. This cookie is passed to
            Hubspot on form submissions and used when de-duplicating contacts. Expires after 10
            years.
          </P>

          <H3>__ga</H3>
          <P>This cookie is used to distinguish users. Expires after 2 years.</P>

          <H3>__gat</H3>
          <P>
            This cookie is used to throttle the request rate - limiting the collection of data on
            high traffic sites. It expires after 1 minute.
          </P>

          <H3>__gid</H3>
          <P>This cookie is used to distinguish users. It expires after 24 hours.</P>

          <H3>crumb, ss_cvisit, ss_cpvisit, ss_cid</H3>
          <P customClass={styles.mb0}>
            These are cookies used by Squarespace, a web publishing company which we have built our
            site on, to track use of the website and allow some of the site’s features.
          </P>
          <P customClass={styles.mb30}>
            crumb: session cookie; ss_cid expiration: 2 years; ss_cpvisit expires: 2 years;
            ss_cvisit: 30 mins; ss_cvr expires: 2 years;ss_cvt expires: 30 mins
          </P>

          <P>
            We use the following third-party cookies on our Website. They are placed on your device
            by the third parties set out below. Please note that these cookies are subject to the
            privacy and cookie policies of the third party placing the relevant cookies
          </P>

          <H3>__cfduid</H3>
          <P>
            This cookie is used to identify trusted web traffic. It does not correspond to any user
            id in the web application, nor does the cookie store any personally identifiable
            information. This cookie is set by Hubspot and their privacy policy can be found at{' '}
            <a href="https://legal.hubspot.com/privacy-policy">
              https://legal.hubspot.com/privacy-policy
            </a>.
          </P>

          <H3>UserMatchHistory</H3>
          <P>
            This cookie is used for Linkedin Ad and expires after 6 months.{' '}
            <a href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </P>

          <H3>BizoID</H3>
          <P>
            This cookie is used for LinkedIn Ad analytics. This cookie is stored for 6 months.{' '}
            <a href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </P>

          <H3>bcookie</H3>
          <P>
            Browser ID cookie/ Share button and ad tags. It expires after 1 year.{' '}
            <a href="https://www.linkedin.com/legal/cookie-table">
              https://www.linkedin.com/legal/cookie-table
            </a>
          </P>

          <H3>fr</H3>
          <P>
            This cookie contains encrypted Facebook ID and Browser ID. It expires after 3 months.{' '}
            <a href="https://www.facebook.com/about/privacy/update?ref=old_policy">
              https://www.facebook.com/about/privacy/update?ref=old_policy
            </a>
          </P>

          <H3>lang</H3>
          <P>
            This cookie saves the language settings of the user.{' '}
            <a href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </P>

          <H3>lidc</H3>
          <P>
            This cookie is used for routing. It expires after 1 day.{' '}
            <a href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </P>

          <H3>amplitude_id_*</H3>
          <P>
            These cookies are set by Amplitude analytics, which helps to better understand how the
            Red Badger website is used.{' '}
            <a href="https://amplitude.com/privacy">https://amplitude.com/privacy</a>
          </P>
        </React.Fragment>
      );
    },
  },
  {
    number: '05',
    heading: 'What similar technologies collect my data?',
    body: () => {
      return (
        <React.Fragment>
          <H3>Facebook Pixel</H3>
          <P>
            This technology measures the effectiveness of advertising by understanding the actions
            people take on our website. They allow Facebook to provide better recommendations for
            targeting ads. Their privacy policy can be found{' '}
            <a href="https://www.facebook.com/about/privacy/update?ref=old_policy">
              https://www.facebook.com/about/privacy/update?ref=old_policy
            </a>
          </P>
          <H3>LinkedIn Pixel</H3>
          <P>
            This technology measures the effectiveness of advertising by understanding the actions
            people take on our website. They allow LinkedIn to provide better recommendations for
            targeting ads. Their privacy policy can be found at{' '}
            <a href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </P>
        </React.Fragment>
      );
    },
  },
  {
    number: '06',
    heading: 'What happens if you update your Cookies Policy?',
    body: () => {
      return (
        <P>
          We may update our Cookies Policy from time to time and without prior notice to you to
          reflect changes in our processing of your data, privacy practices and changes in
          applicable data protections law and regulations. If we make changes to this Cookies
          Policy, we will post the revised Cookies Policy on our Website and update the “Effective
          Date” date at the top of this Cookies Policy.
        </P>
      );
    },
  },
  {
    number: '07',
    heading: 'What do I do if I have any questions?',
    body: () => {
      return (
        <P>
          To contact us with any questions regarding our Cookies Policy, please contact us at{' '}
          <a href="mailto:privacy@red-badger.com">privacy@red-badger.com</a>.
        </P>
      );
    },
  },
];

export default policies;
