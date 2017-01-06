import React from 'react';

const MeetOurTeam = ({ category, badgers }) => {
  return (
    <div>
      <h1>Meet out team</h1>
      <div>Everyone Leadership Strategy PM UX & Design</div>
      {badgers.map(b => b.firstName)}
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default MeetOurTeam;
