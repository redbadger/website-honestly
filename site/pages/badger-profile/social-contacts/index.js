// @flow
import InlineSVG from 'svg-inline-react';
import React from 'react';

import styles from './style.css';

import twitterSVG from './SVG/twitter.svg';
import githubSVG from './SVG/github.svg';
import linkedinSVG from './SVG/linked-in.svg';

import type { Badger } from '../../../types';

const SocialContacts = ({ badger }: { badger: Badger }) => {
  const socialItems = [];
  const socialPages = [
    { social: 'Twitter', img: twitterSVG },
    { social: 'Github', img: githubSVG },
    { social: 'LinkedIn', img: linkedinSVG },
  ];

  for (const s of socialPages) {
    if (badger[s.social.toLowerCase()]) {
      socialItems.push(<li key={s.social}>
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
      </li>);
    }
  }
  return (
    <ul className={styles.socialLinks}>
      {socialItems}
    </ul>
  );
};

export default SocialContacts;
