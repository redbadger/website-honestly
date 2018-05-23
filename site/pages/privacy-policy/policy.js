// @flow
/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';

import styles from './style.css';
import { P as BaseParagraph } from '../../components/text';
import Link from '../../components/link';

const P = ({
  children,
  customClass = styles.mb10,
}: {
  children: React.Node,
  customClass?: string,
}) => {
  return <BaseParagraph customClass={customClass}>{children}</BaseParagraph>;
};

const H3 = ({ children }) => {
  return <h3 className={styles.simpleHeading}>{children}</h3>;
};

const policies = [
  {
    number: '01',
    heading: 'Why do you have a Cookies Policy?',
    statements: [
      {
        number: '1.1',
        body: () => {
          return (
            <P>
              We are committed to safeguarding the privacy of individuals (“<b>you</b>”, “<b>
                your
              </b>”) whose personal data we collect and use. In this Privacy Statement, we explain
              how we handle your personal data. For example, what personal data we collect and how,
              what we do with it and who we share it with. It also describes your privacy rights and
              controls such as your choices regarding use, access and correction of your personal
              data.
            </P>
          );
        },
      },
      {
        number: '1.2',
        body: () => {
          return (
            <P>
              Our Privacy Statement is part of, and is subject to, our{' '}
              <Link to="cookiesPolicy">Cookies Policy</Link> and our{' '}
              <Link to="termsAndConditions">Website Terms</Link>. By accessing or using
              <Link to="home">www.red-badger.com</Link> (“<b>Website</b>”), you confirm that you
              accept the terms of our Privacy Statement.
            </P>
          );
        },
      },
    ],
  },
  {
    number: '02',
    heading: 'About Red Badger',
    statements: [
      {
        number: '2.1',
        body: () => {
          return (
            <P>
              Our Website is owned and operated by Red Badger Consulting Limited (“<b>Red Badger</b>”,
              “<b>we</b>”, “<b>us</b>” or “<b>our</b>”)
            </P>
          );
        },
      },
      {
        number: '2.2',
        body: () => {
          return (
            <P>
              We are a company registered in England and Wales under registration number 7242017.
              Our registered office and principal place of business is at 4th Floor, 2 Old Street
              Yard, London, England, EC1Y 8AF.
            </P>
          );
        },
      },
      {
        number: '2.3',
        body: () => {
          return (
            <P>
              You can contact us by (a) post, to 4th Floor, 2 Old Street Yard, London, England, EC1Y
              8AF, (b) using our Website contact form, (c) telephone, on 0207 242 017, or (d) email,
              using the following email address:{' '}
              <a href="mailto:hello@red-badger.com">hello@red-badger.com.</a>
            </P>
          );
        },
      },
    ],
  },
  {
    number: '03',
    heading: 'About Red Badger',
    statements: [
      {
        number: '2.1',
        body: () => {
          return <P />;
        },
      },
    ],
  },
];

export default policies;
