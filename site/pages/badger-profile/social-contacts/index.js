// @flow
import InlineSVG from 'svg-inline-react';
import React from 'react';

import styles from './style.css';

import twitterSVG from './SVG/twitter.svg';
import githubSVG from './SVG/github.svg';
import linkedinSVG from './SVG/linked-in.svg';

import type { Badger } from '../../../types';

const SocialContacts = ({ badger }: { badger: Badger }) => {
  const socialPages = [
    { social: 'Twitter', img: twitterSVG },
    { social: 'Github', img: githubSVG },
    { social: 'LinkedIn', img: linkedinSVG },
  ];

  return (
    <ul className={styles.socialLinks}>
      {socialPages.filter(s => (badger[s.social.toLowerCase()])).map(s =>
        <li key={s.social}>
          <a
            href={badger[s.social.toLowerCase()]}
            title={s.social}
            className={styles.badgerSocialIcon}
          >
            <InlineSVG
              src={s.img}
              title={s.social}
            />
          </a>
        </li>
        )}
    </ul>
  );
};

export default SocialContacts;
