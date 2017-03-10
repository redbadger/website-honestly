// @flow
import React from 'react';
import Helmet from 'react-helmet';
import Link from '../../components/link';
import TeamSlice from './team-slice';
import styles from './style.css';
import type { Badger } from './team-slice/badger-profile';

const title = 'We\'re all about people';
const description = 'Learn about who makes up Red Badger and what makes them tick.';
const metaImage = 'https://red-badger.com/assets-honestly/social/meet-our-team-OG.png';

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
    <Helmet
      meta={[
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@redbadgerteam' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: metaImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://red-badger.com/about-us/people' },
        { property: 'og:title', content: title },
        { property: 'og:image', content: metaImage },
        { property: 'og:description', content: description },
      ]}
    />
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
          {categories.map(c =>
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
          )}
        </ul>
        <TeamSlice badgers={getTeam(badgers, category)} page={page} />
      </div>
    </div>
  </div>
);

export default MeetOurTeam;
