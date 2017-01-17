// @flow
import InlineSVG from 'svg-inline-react';
import React from 'react';

import styles from './style.css';

import twitterSVG from './SVG/twitter.svg';
import githubSVG from './SVG/github.svg';
import linkedinSVG from './SVG/linked-in.svg';

const getSocialItems = badger => {
  const socialItems = [];
  const socialPages = [
    { social: 'Twitter', img: twitterSVG },
    { social: 'Github', img: githubSVG },
    { social: 'LinkedIn', img: linkedinSVG },
  ];

  for (const s of socialPages) {
    if (badger[s.social.toLowerCase()]) {
      socialItems.push(<li>
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
  return socialItems;
};

const BadgerProfile = ({ badger }) => {
  const fullName = [badger.firstName, badger.lastName].join(' ');
  const categories = badger.categories.map(c => c.name).join(', ');
  return (
    <div className={styles.badgerProfile}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePictureContainer}>
          <img
            src={badger.imageUrl}
            alt={fullName}
            className={styles.badgerImage}
          />
        </div>
        <div className={styles.profileText}>
          <h1 className={styles.title}>{fullName}</h1>
          <h2 className={styles.subtitle}>{badger.jobTitle}</h2>
          <h3 className={styles.categories}>{categories}</h3>
          <ul className={styles.socialLinks}>
            {getSocialItems(badger)}
          </ul>
          <div className={styles.about}>
            {badger.about}
          </div>
          <h2 className={styles.subtitle}>Signature Skills</h2>
          {badger.skills.join(', ')}.

          <h2 className={styles.subtitle}>Achievements at Red Badger</h2>
          {badger.achievements}

          <h2 className={styles.subtitle}>The thing that changed me</h2>
          {badger.influence}

        </div>
      </div>
    </div>
  );
};

export default BadgerProfile;
