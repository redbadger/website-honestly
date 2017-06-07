import React from 'react';
import ErrorPage from '../../components/error-page';

export default function InternalErrorPage() {
  const content = [
    <span>Something went wrong, we’re scratching our heads as well.&nbsp;</span>,
    <span>Try refreshing the page or come back later.</span>,
  ];

  return <ErrorPage title="Oops!" content={content} />;
}
