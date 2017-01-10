import React from 'react';
import Link from '../../../components/link';

const paginate = (badgers, page) => {
  const start = (page - 1) * 20;
  return badgers.slice(start, start + 20);
};

const BadgerProfile = ({ badger }) => (
  <Link to='badger' navigationData={{ name: 'slug-badger' }}>
    <img src={badger.imageUrl} alt="team member" />
    <span>{badger.firstName} {badger.lastName}</span>
    <span>{badger.jobTitle}</span>
  </Link>
);

const JobAdvert = () => (
  <div>Are you a potential Badger?</div>
);

const TeamSlice = ({ badgers, page }) => {
  return (
    <ul>
      {paginate(badgers, page).map((badger, i) =>
        <li key={i}>
          {!badger.jobAdvert ? <BadgerProfile badger={badger} /> : <JobAdvert />}
        </li>
      )}
    </ul>
  );
};

export default TeamSlice;
