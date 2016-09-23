import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

export default function Layout({ children }) {
  return (
    <div className="application">
      <Helmet
        title="Red Badger"
      />
      <h1>Website. Honestly.</h1>
      <div>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

