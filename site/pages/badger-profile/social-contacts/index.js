// @flow
import React from 'react';

import styles from './style.css';

import Twitter from '../../../components/icons/twitter';
import GitHub from '../../../components/icons/github';
import LinkedIn from '../../../components/icons/linkedin';

import type { Badger } from '../../../types';

const socialPages = [
  { social: 'Twitter', Icon: Twitter },
  { social: 'Github', Icon: GitHub },
  { social: 'LinkedIn', Icon: LinkedIn },
];

const SocialContacts = ({ badger }: { badger: Badger }) => {
  return (
    <ul className={styles.socialLinks}>
      {socialPages
        .filter(({ social }) => badger[social.toLowerCase()])
        .map(({ social, Icon }) => (
          <li key={social}>
            <a
              href={badger[social.toLowerCase()]}
              title={social}
              className={styles.badgerSocialIcon}
            >
              <Icon />
            </a>
          </li>
        ))}
    </ul>
  );
};

export default SocialContacts;
