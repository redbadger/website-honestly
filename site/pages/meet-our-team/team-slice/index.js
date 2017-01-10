import React from 'react';
import Link from '../../../components/link';

const paginate = (badgers, page) => {
  const start = (page - 1) * 20;
  return badgers.slice(start, start + 20);
};

const BadgerProfile = ({ badger }) => (
  <Link to='badger' navigationData={{ name: badger.slug }}>
    <img src={badger.imageUrl} alt="team member" />
    <div>
      <div>{badger.name}</div>
      <div>{badger.jobTitle}</div>
    </div>
  </Link>
);

const JobAdvert = () => (
  <Link to="joinUs">
    <div>Are you a potential Badger?</div>
    <div>We're hiring</div>
  </Link>
);

const TeamSlice = ({ badgers, page }) => (
  <ul>
    {paginate(badgers, page).map((badger, i) =>
      <li key={i}>
        {!badger.jobAdvert ? <BadgerProfile badger={badger} /> : <JobAdvert />}
      </li>
    )}
  </ul>
);

export default TeamSlice;
