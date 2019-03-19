// @flow

import React from 'react';

export default function Arrow(props: {}) {
  return (
    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 1l10 10-10 10-1.754-1.754 6.959-7.018H1V9.772h15.205l-6.96-7.018z"
        fill="#FC1D42"
        stroke="#FC1D42"
        fillRule="evenodd"
      />
    </svg>
  );
}
