import React from 'react';
import { Link } from 'react-router';

export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/somewhere">Go somewhere?</Link>
    </div>
  );
}
