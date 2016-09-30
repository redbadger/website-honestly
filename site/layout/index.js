import React, { PropTypes } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './style.css';

export default function Layout({ children }) {
  return (
    <div className={styles.application}>
      <Header />
      <h1>Website. Honestly.</h1>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
