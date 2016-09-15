import React, { PropTypes } from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Website. Honestly.</h1>
      <div>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

