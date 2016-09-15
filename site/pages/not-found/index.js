import React from 'react';
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Nothing here...</h1>
      <Link to="/">Go home?</Link>
    </div>
  );
}
