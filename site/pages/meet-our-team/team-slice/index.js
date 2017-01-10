import React from 'react';
import Link from '../../../components/link';

const paginate = (badgers, page) => {
  const start = (page - 1) * 20;
  return badgers.slice(start, start + 20);
};

const TeamSlice = ({ badgers, page }) => {
  return (
    <ul>
      {paginate(badgers, page).map(b =>
        <li>
          <Link to='badger' navigationData={{ name: 'slug-badger' }}>
            <img src={b.imageUrl} alt="team member" />
            <span>{b.firstName} {b.lastName}</span>
            <span>{b.jobTitle}</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default TeamSlice;
