import React from 'react';
import Link from '../../components/link';

const MeetOurTeam = ({ category, categories, badgers }) => {
  return (
    <div>
      <h1>Meet out team</h1>
      <div>
        {categories.map(b =>
          <Link key={b.slug} to="badgers" navigationData={{ category: b.slug }}>{b.name}</Link>
        )}
      </div>
      <ul>
        {badgers.map(b =>
          <li>
            <Link to='badger' navigationData={{ name: 'slug-badger' }}>
              <img src={b.imageUrl} alt="team member" />
              <span>{b.firstName} {b.lastName}</span>
              <span>{b.jobTitle}</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MeetOurTeam;
