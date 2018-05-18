// @flow
import React, { Fragment } from 'react';
import Social from '../../components/social';
import { P, H1, H2 } from '../../components/text';
import metaImage from '../home/meta-image.jpg';

const social = {
  title: 'Red Badger',
  description:
    'Let’s make things better. We are digital transformation experts who innovate and deliver.',
  metaImage,
  url: 'cookie-policy',
};

const policies = [
  {
    number: '01',
    heading: 'Why do you have a Cookies Policy?',
    body:
      'The reason we have a Cookies Policy is to explain to you what cookies and similar technologies we use, why we use them, and what you need to do if you want to restrict, block, disable or delete them. Our Cookies Policy is part of, and is subject to, our Privacy Statement [insert link] and our Consumer Terms of Service [insert link]. By accessing and/or using our Website you confirm that you accept the terms of our Cookies Policy.',
  },
  {
    number: '02',
    heading: 'What are cookies and similar technologies?',
    body:
      'A cookie is a text file placed on your computer, tablet, mobile phone, or other device ("device") when a person access or uses a website. There are also technologies similar to cookies (e.g. clear gifs) that do the same. Data is collected because it can be necessary to a website’s operation, to assess and/or improve its performance, and/or to provide a personalised experience etc. To find out more about cookies, please visit: https://ico.org.uk/for-the-public/online/cookies/.',
  },
];

type Policy = {
  number: string,
  heading: string,
  body: string,
};

const PolicyBox = ({ number, heading, body }: Policy) => (
  <div>
    <span>{number}</span>
    <H2 type="fontM2">{heading}</H2>
    <P>{body}</P>
  </div>
);

const CookiePolicyPage = () => {
  return (
    <Fragment>
      <Social {...social} />
      <H1 type="fontL">Cookie Policy</H1>
      {policies.map(policy => <PolicyBox {...policy} />)}
    </Fragment>
  );
};

export default CookiePolicyPage;
