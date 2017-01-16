// @flow
import React from 'react';
import InlineSVG from 'svg-inline-react';
import Link from '../../../../components/link';
import styles from './style.css';
import arrowSVG from './arrow.svg';

export type Badger = {
  firstName: string,
  lastName: string,
  slug: string,
  imageUrl: string,
  placeholderImage: string,
  skills: Array<string>,
  description: string,
  jobAdvert: boolean,
  jobDescription: string,
  jobTitle: string,
  loaded: boolean,
};

const BadgerProfile = ({ badger }: { badger: Badger }) => {
  const fullName = [badger.firstName, badger.lastName].join(' ');
  return (
    <Link to="badger" navigationData={{ name: badger.slug }} className={styles.badgerProfile}>
      <img
        src={badger.loaded ? badger.imageUrl : badger.placeholderImage}
        alt={fullName}
        className={styles.badgerImage}
      />
      <div className={styles.skillsWrapper}>
        <h3 className={styles.skillsHeading}>
          Signature skills
        </h3>
        <ul className={styles.skills}>
          {(badger.skills || []).slice(0, 3).map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
      <div className={styles.description}>
        <div className={styles.name}>
          {`${badger.firstName} `}
          <div className={styles.lastName}>
            {badger.lastName}
            <InlineSVG src={arrowSVG} className={styles.arrow} />
          </div>
        </div>
        <div className={styles.jobDescription}>{badger.jobTitle}</div>
      </div>
    </Link>
  );
};

export default BadgerProfile;
