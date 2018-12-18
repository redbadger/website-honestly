// @flow

export default function HandleErrors(response: Response) {
  if (response.ok) return response;
  throw Error(`${response.statusText} for request: ${response.url}`);
}
