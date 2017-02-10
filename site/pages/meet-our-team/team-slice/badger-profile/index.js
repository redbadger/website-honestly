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
  description: string,
  jobAdvert: boolean,
  jobDescription: string,
  jobTitle: string,
  loaded: boolean,
};

const BadgerProfile = ({ badger }: { badger: Badger }) => {
  const fullName = [badger.firstName, badger.lastName].join(' ');
  return (
    <div className={styles.test}>
      <div className={styles.badgerWrapper} >
        <Link to="badger" navigationData={{ slug: badger.slug }} className={styles.badgerProfile}>

          {badger.loaded ?
            <img
              src={badger.imageUrl}
              alt={fullName}
              className={styles.badgerImage}
              aria-hidden
            /> : <div className={styles.placeholder} />
          }
        </Link>
      </div>
      <div className={styles.description}>
        <div className={styles.name}>
          {`${badger.firstName} `}
          <div className={styles.lastName}>
            {badger.lastName}
            <InlineSVG src={arrowSVG} className={styles.arrow} aria-hidden />
          </div>
        </div>
        <div className={styles.jobDescription}>{badger.jobTitle}</div>
      </div>
    </div>
  );
};

export default BadgerProfile;
