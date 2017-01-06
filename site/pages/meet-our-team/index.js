import React from 'react';
import Link from '../../components/link';
import TeamSlice from './team-slice';

const MeetOurTeam = ({ categories, badgers, page }) => {
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
      <TeamSlice badgers={badgers} page={page} />
    </div>
  );
};

export default MeetOurTeam;
