// @flow
import React from 'react';
import Link from '../../components/link';
import Social from '../../components/social';
import TeamSlice from './team-slice';
import styles from './style.css';
import type { Badger } from './team-slice/badger-profile';
import metaImage from './meta-image.jpg';

const social = {
  title: 'We’re people people | Red Badger',
  description: 'Learn more about the team',
  metaImage,
  url: 'https://red-badger.com/people',
};

const getTeam = (badgers, category) => {
  if (category !== 'everyone') {
    return badgers;
  }
  const jobAdvert = {
    firstName: '',
    lastName: '',
    slug: '',
    primaryImageUrl: '',
    secondaryImageUrl: '',
    placeholderImage: '',
    description: '',
    jobAdvert: true,
    jobDescription: '',
    jobTitle: '',
    loaded: true,
  };

  const advertIndex = 6;

  return [...badgers.slice(0, advertIndex), jobAdvert, ...badgers.slice(advertIndex)];
};

type MeetOurTeamProps = {
  categories: Array<{ slug: string, name: string }>,
  category: string,
  page: number,
  badgers: Array<Badger>,
};

const MeetOurTeam = ({ categories, category, badgers, page }: MeetOurTeamProps) => (
  <div>
    <Social {...social} />
    <div className={styles.meetOurTeam}>
      <div className={styles.teamContainer}>
        <h1 className={styles.title}>Meet our team</h1>
        <h2 className={styles.subtitle}>
          <div>Red Badger is all about the people. We work brilliantly as a team. </div>
          We inspire and bring out the best in one another.
        </h2>
        <ul className={styles.categories}>
          <li className={styles.categoryItem}>
            <Link
              to="badgers"
              navigationData={{ category: 'everyone' }}
              className={styles.category}
              activeCssClass={styles.active}
            >
              Everyone
            </Link>
          </li>
          {categories.map(c => (
            <li key={c.slug} className={styles.categoryItem}>
              <Link
                key={c.slug}
                to="badgers"
                navigationData={{ category: c.slug }}
                activeCssClass={styles.active}
                className={styles.category}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
        <TeamSlice badgers={getTeam(badgers, category)} page={page} />
      </div>
    </div>
  </div>
);

export default MeetOurTeam;
