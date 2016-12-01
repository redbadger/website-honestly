/*
 *  Fetch Proxy
 *
 *  Wraps fetch with automatic json resolution and some default error handling
 *  behavior for API calls.
 *
 *  By default fetch does not throw when a response returns an error status
 *  code. This module adds in that behavior and translates those errors into
 *  simple status codes and messages.
 *
 *  One of the key considerations is to not leak any potentially confidential
 *  information from a response so we map errors to simple error objects.
 *
 *  So far we have handling for 401, 404 and 500 errors and all others default
 *  to a 500. This is intended to be extended as we encounted more errors.
 */

import HttpError from './http-error';
import isoFetch from 'isomorphic-fetch';

function toJSON(response) {
  if (response.status !== 200) {
    throw new HttpError(response.status);
  }

  return response.json();
}

function throwError() {
  throw new HttpError(500);
}

export default function fetchProxy(fetch = isoFetch) {
  return (...args) => fetch(...args).catch(throwError).then(toJSON);
}
