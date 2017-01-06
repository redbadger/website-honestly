import React from 'react';
import Link from '../../components/link';

const MeetOurTeam = ({ category, categories, badgers }) => {
  return (
    <div>
      <h1>Meet out team</h1>
      <div>
        {categories.map(b =>
          <Link to="badgers" navigationData={{ category: b.slug }}>{b.name}</Link>
        )}
      </div>
      {badgers.map(b => b.firstName)}
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default MeetOurTeam;
