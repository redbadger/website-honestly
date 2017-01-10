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
        Red Badger is all about the people. We work brilliantly as a team.
        <br />
        We inspire and bring out the best in one another.
      </h2>
      <ul>
        <li>
          <Link
            disableActive
            to="badgers"
            navigationData={{ category: 'everyone' }}
          >
            Everyone
          </Link>
        </li>
        {categories.map(b =>
          <li>
            <Link
              key={b.slug}
              disableActive
              to="badgers"
              navigationData={{ category: b.slug }}
            >
              {b.name}
            </Link>
          </li>
        )}
      </ul>
      <TeamSlice badgers={getTeam(badgers, category)} page={page} />
      <div>
        <Link to="badgers" includeCurrentData navigationData={{ page: page - 1 }}>Prev</Link>
        <Link to="badgers" includeCurrentData navigationData={{ page: page + 1 }}>Next</Link>
      </div>
    </section>
  );
};

export default MeetOurTeam;
