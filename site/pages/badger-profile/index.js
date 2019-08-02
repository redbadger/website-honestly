// @flow
import React from 'react';

import styles from './style.css';
import SocialContacts from './social-contacts';
import Link from '../../components/link';
import Social from '../../components/social';

import metaImage from './meta-image.jpg';

import type { Badger } from '../../types';

const BlogsLink = ({ badger }: { badger: Badger }) => {
  return (
    <div className={styles.authorLink}>
      <a href={`/blog/author/${badger.slug}`}>Read {badger.firstName}&rsquo;s blog posts</a>
    </div>
  );
};

const BadgerProfile = ({ badger }: { badger: Badger }) => {
  const fullName = [badger.firstName, badger.lastName].join(' ');
  badger.categories.sort((a, b) => a.order - b.order);
  const categories = badger.categories
    .map(c => c.name.replace(/^\w/, char => char.toUpperCase()))
    .join(', ');
  const social = {
    title: `${fullName} | Red Badger`,
    description: badger.jobTitle,
    metaImage,
    altText: 'An illustration of different people.',
    url: `https://red-badger.com/people${[badger.firstName, badger.lastName]
      .join('-')
      .toLowerCase()}`,
  };

  return (
    <div className={styles.badgerProfile}>
      <Social {...social} />
      <div className={styles.profileContainer}>
        <div className={styles.profilePictureContainer}>
          <img
            src={badger.secondaryImageUrl || badger.primaryImageUrl}
            alt=""
            className={styles.badgerImage}
          />
        </div>
        <div className={styles.profileDescriptionContainer}>
          <h1 className={styles.header}>{fullName}</h1>
          <h2 className={styles.subheader}>{badger.jobTitle}</h2>
          <h3 className={styles.categories}>{categories}</h3>

          <SocialContacts badger={badger} />

          <div className={styles.about}>{badger.about}</div>
          <div className={styles.descriptionSections}>
            {badger.skills && (
              <div>
                <h2 className={styles.subheader}>Signature skills</h2>
                <p>{badger.skills}</p>
              </div>
            )}

            {badger.achievements && (
              <div>
                <h2 className={styles.subheader}>Achievements at Red Badger</h2>
                <p>{badger.achievements}</p>
              </div>
            )}

            {badger.influence && (
              <div>
                <h2 className={styles.subheader}>The thing that changed me</h2>
                <p>{badger.influence}</p>
              </div>
            )}
          </div>
          {badger.hasBlogPosts && (
            <div className={styles.authorLinks}>
              <BlogsLink badger={badger} />
            </div>
          )}
          <hr />
          <Link to="badgers" className={styles.categoryBox}>
            See Everyone
          </Link>
          {badger.categories.map(c => (
            <Link
              key={c.slug}
              to="badgers"
              navigationData={{ category: c.slug }}
              className={styles.categoryBox}
            >
              See {c.name} team
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgerProfile;
