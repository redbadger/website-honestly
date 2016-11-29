import React from 'react';

export default function JoinUs({ jobs }) {
  return (
    <div>
      {JSON.stringify(jobs, null, 2)}
    </div>
  );
}

const { arrayOf, object } = React.PropTypes;
JoinUs.propTypes = {
  jobs: arrayOf(object),
};
