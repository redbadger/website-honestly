import React from 'react';
import Link from '../../components/link';
import TeamSlice from './team-slice';

const getTeam = (badgers, category) => {
  if (category !== 'everyone') {
    return badgers;
  }

  return [...badgers.slice(0, 7), { jobAdvert: true }, ...badgers.slice(7)];
};

const MeetOurTeam = ({ categories, category, badgers, page }) => {
  return (
    <div>
      <h1>Meet out team</h1>
      <div>
        <Link
          disableActive
          to="badgers"
          navigationData={{ category: 'everyone' }}
        >
          Everyone
        </Link>
        {categories.map(b =>
          <Link
            key={b.slug}
            disableActive
            to="badgers"
            navigationData={{ category: b.slug }}
          >
            {b.name}
          </Link>
        )}
      </div>
      <TeamSlice badgers={getTeam(badgers, category)} page={page} />
      <Link to="badgers" includeCurrentData navigationData={{ page: page - 1 }}>Prev</Link>
      <Link to="badgers" includeCurrentData navigationData={{ page: page + 1 }}>Next</Link>
    </div>
  );
};

export default MeetOurTeam;
