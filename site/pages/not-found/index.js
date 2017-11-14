import React from 'react';
import styles from './style.css';
import ErrorPage from '../../components/error-page';

export default function NotFoundPage() {
  const content = [
    <span>Sorry, the page you’re looking for isn’t here.&nbsp;</span>,
    <span>
      Try our{' '}
      <a className={styles.link} href="/blog">
        blog
      </a>, or find out more{' '}
      <a className={styles.link} href="/about-us">
        about us
      </a>.
    </span>,
  ];

  return (
    <ErrorPage
      title="Whaaaaaat!?"
      content={content}
      linkText="Go to home page"
      linkHref="homePage"
    />
  );
}
