import React from 'react';
import image from './2018.png';
import Content from '../content';
import style from './style.css';

const Eight = () => {
  const year = '2018';
  const title = 'New leadership structure, value props and insights';
  const advisoryBoardLink =
    'https://blog.red-badger.com/2018/10/22/former-md-of-visa-uk-amp-ireland-and-director-of-innovation-at-goldsmiths-join-red-badger-advisory-board';
  const text = (
    <>
      <p>
        2018 has been an eventful and defining year for all of us at Red Badger. We lost our dear
        friend and colleague Natalie after a short and sudden illness. To remember Natalie – her
        spirit, positivity, warmth, empathy and judgement – we often ask ‘What would Natalie do?’.
      </p>

      <p>
        We are very proud of the work we did for the Pride in London app and for strengthening a
        growing relationship with You Make it, our new official charity partner. We also worked on
        the company itself, restructuring our leadership team and moving to a new business model
        with empowered MD’s. We’ve also revised our value propositions and company vision; and
        expanded our{' '}
        <a href={advisoryBoardLink} className={style.link}>
          advisory board
        </a>
        . We’ve added a new Insights team to help deliver success for our clients by using data more
        effectively to create better products.
      </p>
    </>
  );
  const fact =
    'Okay, let’s talk about setts, baby. We’ve been lucky enough to welcome not one but four baby badgers to the sett. What a way to scale!';

  return <Content year={year} title={title} text={text} fact={fact} image={image} />;
};

export default Eight;
