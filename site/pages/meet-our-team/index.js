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
    <section className={styles.meetOurTeam}>
      <h1 className={styles.title}>Meet our team</h1>
      <h2 className={styles.subtitle}>
        Red Badger is all about the people. We work brilliantly as a team. We inspire and bring out the best in one another.
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
        {categories.map(b =>
          <li className={styles.categoryItem}>
            <Link
              key={b.slug}
              to="badgers"
              navigationData={{ category: b.slug }}
              activeCssClass={styles.active}
              className={styles.category}
            >
              {b.name}
            </Link>
          </li>
        )}
      </ul>
      <TeamSlice badgers={getTeam(badgers, category)} page={page} />
      <div className={styles.paging}>
        <Link
          to="badgers"
          includeCurrentData
          className={styles.pagingButton}
          navigationData={{ page: page - 1 }}
        >
          Previous page
        </Link>
        <Link
          to="badgers"
          includeCurrentData
          className={styles.pagingButton}
          navigationData={{ page: page + 1 }}
        >
          Next page
        </Link>
      </div>
    </section>
  );
};

export default MeetOurTeam;
