// @flow

import fetch, { RequestInit } from 'node-fetch';

export const apiBase = 'https://api.getgo.com';

export function fetchWithBody(
  url: string | Request,
  init?: RequestInit,
): Promise<{ response: Response, responseBody: any }> {
  return fetch(url, init).then(response => {
    return response.json().then(responseBody => ({
      response,
      responseBody,
    }));
  });
}
