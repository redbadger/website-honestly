import React, { PropTypes } from 'react';
import Header from '../components/header';
import styles from '../css/_reset.css';


export default function Layout({ children }) {
  return (
    <div className={styles.application}>
      <Header />
      <h1>Website. Honestly.</h1>
      <div>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

