// @flow

import React from 'react';

export default function CryingSmiley(props: {}) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#FFD811" cx="16" cy="16" r="16" />
        <circle fill="#212121" cx="16" cy="25.231" r="4.308" />
        <path
          d="M19.194 27.077A3.683 3.683 0 0 1 16 28.923a3.683 3.683 0 0 1-3.194-1.846A3.701 3.701 0 0 1 16 25.23c1.317 0 2.542.714 3.194 1.846z"
          fill="#FC1D42"
        />
        <path
          d="M28.474 26.012A15.957 15.957 0 0 1 16 32C7.163 32 0 24.837 0 16c0-5.046 2.338-9.545 5.988-12.474a15.887 15.887 0 0 0-3.526 10.012c0 8.837 7.163 16 16 16 3.79 0 7.273-1.316 10.012-3.526z"
          fill="#424242"
          opacity=".2"
        />
        <path
          d="M22.154 17.126l4.923 2.051v8.358l-.196.183a15.73 15.73 0 0 1-3.842 2.645l-.885.43V17.126zM8.962 30.363a15.734 15.734 0 0 1-3.843-2.645l-.196-.183v-8.358l4.923-2.05v13.666l-.884-.43z"
          fill="#00D5EC"
        />
        <path
          d="M25.574 6.428A13.497 13.497 0 0 0 16 2.462"
          stroke="#FFF"
          strokeWidth="2"
          opacity=".8"
        />
        <g transform="translate(3.692 13.538)" stroke="#212121">
          <ellipse strokeWidth="2" cx="12.308" cy="11.692" rx="4.308" ry="4.308" />
          <path d="M16.199 13.535a4.309 4.309 0 0 0-7.784.003" strokeWidth="2" />
          <path d="M0 6.154l7.385-3.077L0 0m24.615 6.154l-7.384-3.077L24.615 0" />
        </g>
      </g>
    </svg>
  );
}
