// @flow
import React from 'react';
import InlineSVG from 'svg-inline-react';
import Link from '../../../../components/link';
import styles from './style.css';
import arrowSVG from './arrow.svg';
import type { Badger } from '../../';

const BadgerProfile = ({ badger }: { badger: Badger }) => (
  <Link to="badger" navigationData={{ name: badger.slug }} className={styles.badgerProfile}>
    <img
      src={badger.loaded ? badger.imageUrl : badger.placeholderImage}
      alt={badger.name}
      className={styles.badgerImage}
    />
    <div className={styles.skillsWrapper}>
      <h3 className={styles.skillsHeading}>
        Signature skills
      </h3>
      <ul className={styles.skills}>
        {(badger.skills || []).map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
    <div className={styles.description}>
      <div className={styles.name}>
        {badger.name}
        <InlineSVG src={arrowSVG} className={styles.arrow} />
      </div>
      <div className={styles.jobDescription}>{badger.jobTitle}</div>
    </div>
  </Link>
);

export default BadgerProfile;
