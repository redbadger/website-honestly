// @flow
import React from 'react';

import styles from './style.css';

const social = {
  title: 'Join us | Red Badger',
  description:
    'We’re a Sunday Times Best Small Company to Work For 2018 and looking for the best talent to join our team.',
  altText: 'An illustration an award we won.',
  url: 'https://red-badger/jobs',
};

const ExperienceUsPage = ({ jobs }: Props) => (
  <div className={styles.background}>
    <h3>Experience Red Badger</h3>
    <h1>How long have you got?</h1>
  </div>
);

export default ExperienceUsPage;
