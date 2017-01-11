import React from 'react';
import InlineSVG from 'svg-inline-react';
import Link from '../../../components/link';
import styles from './style.css';

import arrowSVG from './arrow.svg';

const paginate = (badgers, page) => {
  const start = (page - 1) * 20;
  return badgers.slice(start, start + 20);
};

const BadgerProfile = ({ badger }) => (
  <Link to='badger' navigationData={{ name: badger.slug }} className={styles.badgerProfile}>
    <img src={badger.imageUrl} alt={badger.name} className={styles.badgerImage} />
    <div className={styles.description}>
      <div className={styles.name}>
        {badger.name}
        <InlineSVG src={arrowSVG} className={styles.arrow} />
      </div>
      <div className={styles.jobDescription}>{badger.jobTitle}</div>
    </div>
  </Link>
);

const JobAdvert = () => (
  <Link to="joinUs" className={styles.jobAdvert}>
    <div className={styles.question}>Are you a potential Badger?</div>
    <div className={styles.hiring}>We're hiring</div>
  </Link>
);

const TeamSlice = ({ badgers, page }) => (
  <ul className={styles.badgers}>
    {paginate(badgers, page).map((badger, i) =>
      <li key={i} className={styles.badger}>
        {!badger.jobAdvert ? <BadgerProfile badger={badger} /> : <JobAdvert />}
      </li>
    )}
  </ul>
);

export default TeamSlice;
