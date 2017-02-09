// @flow
import React from 'react';

import styles from './style.css';
import SocialContacts from './social-contacts';
import Link from '../../components/link';

import type { Badger } from '../../types';

const BlogsLink = ({ badger }: { badger: Badger }) => {
  if (badger.squarespaceId) {
    return (<div className={styles.authorLink}>
      <a href={'/blog/?author=' + badger.squarespaceId}>
        Read {badger.firstName}&rsquo;s blog posts
      </a>
    </div>);
  }
  return null;
};

const BadgerProfile = ({ badger }: { badger: Badger }) => {
  const fullName = [badger.firstName, badger.lastName].join(' ');
  badger.categories.sort((a, b) => (a.order - b.order));
  const categories = badger.categories.map(c => c.name).join(', ');
  return (
    <div className={styles.badgerProfile}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePictureContainer}>
          <img
            src={badger.secondaryImageUrl || badger.primaryImageUrl}
            alt={fullName}
            className={styles.badgerImage}
          />
        </div>
        <div className={styles.profileDescriptionContainer}>
          <h1 className={styles.header}>{fullName}</h1>
          <h2 className={styles.subheader}>{badger.jobTitle}</h2>
          <h3 className={styles.categories}>{categories}</h3>

          <SocialContacts badger={badger} />

          <div className={styles.about}>
            {badger.about}
          </div>
          <div className={styles.descriptionSections}>
            {badger.skills && <div>
              <h2 className={styles.subheader}>Signature skills</h2>
              <p>{badger.skills}</p>
            </div>}

            {badger.achievements && <div>
              <h2 className={styles.subheader}>Achievements at Red Badger</h2>
              <p>{badger.achievements}</p>
            </div>}

            {badger.influence && <div>
              <h2 className={styles.subheader}>The thing that changed me</h2>
              <p>{badger.influence}</p>
            </div>}
          </div>
          <div className={styles.authorLinks}>
            <BlogsLink badger={badger} />
          </div>
          <hr />
          <Link to="badgers" className={styles.categoryBox}>See Everyone</Link>
          {badger.categories.map(c =>
            <Link
              key={c.slug}
              to="badgers"
              navigationData={{ category: c.slug }}
              className={styles.categoryBox}
            >
                See {c.name} team
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BadgerProfile;
