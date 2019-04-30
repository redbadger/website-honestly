// @flow

import React from 'react';
import image from './2018.png';
import Content from '../content';
import style from './style.css';
import Link from '../../../../components/link';

const PrideLink = ({ children }) => (
  <Link to="prideCaseStudy" className={style.link}>
    {children}
  </Link>
);

const A = ({ href, children }) => (
  <a className={style.link} href={href}>
    {children}
  </a>
);

const Eight = () => {
  const year = '2018';
  const title = 'New leadership structure, value propositions and insights';

  const advisoryBoardLink =
    'https://blog.red-badger.com/2018/10/22/former-md-of-visa-uk-amp-ireland-and-director-of-innovation-at-goldsmiths-join-red-badger-advisory-board';
  const insightsTeamLink =
    'https://blog.red-badger.com/2018/6/6/red-badgers-new-insights-team-better-decisions-better-products';
  const babyBadgersLink = 'https://blog.red-badger.com/genderless-parental-leave-at-red-badger';

  const text = (
    <>
      <p>
        2018 has been an eventful and defining year for all of us at Red Badger. We lost our dear
        friend and colleague Natalie after a short and sudden illness. To remember Natalie – her
        spirit, positivity, warmth, empathy and judgement – we often ask ‘What would Natalie do?’.
      </p>

      <p>
        We are very proud of the work we did for the <PrideLink>Pride in London app</PrideLink> and
        for strengthening a growing relationship with You Make it, our new official charity partner.
        We also worked on the company itself, restructuring our leadership team and moving to a new
        business model with empowered MD’s. We’ve also revised our value propositions and company
        vision; and expanded our <A href={advisoryBoardLink}>advisory board</A>. We’ve added a{' '}
        <A href={insightsTeamLink}>new Insights team</A> to help deliver success for our clients by
        using data more effectively to create better products.
      </p>
    </>
  );
  const fact = (
    <>
      Okay, let’s talk about setts, baby. We’ve been lucky enough to welcome not one but{' '}
      <A href={babyBadgersLink}>four baby badgers</A> to the sett. What a way to scale!
    </>
  );

  return <Content year={year} title={title} text={text} fact={fact} image={image} />;
};

export default Eight;
