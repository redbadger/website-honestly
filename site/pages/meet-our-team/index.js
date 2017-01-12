import React from 'react';
import Link from '../../components/link';
import TeamSlice from './team-slice';
import styles from './style.css';

const getTeam = (badgers, category) => {
  if (category !== 'everyone') {
    return badgers;
  }

  return [...badgers.slice(0, 7), { jobAdvert: true }, ...badgers.slice(7)];
};

const MeetOurTeam = ({ categories, category, badgers, page }) => {
  return (
    <div className={styles.meetOurTeam}>
      <div className={styles.teamContainer}>
        <h1 className={styles.title}>Meet our team</h1>
        <h2 className={styles.subtitle}>
          Red Badger is all about the people. We work brilliantly as a team.
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
  );
};

export default MeetOurTeam;
