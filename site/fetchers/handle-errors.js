// Errors from these sources should throw warnings but not halt the fetch process.
export default function HandleErrors(response) {
  if (response.ok) return response;
  throw Error(`${response.statusText} for request: ${response.url}`);
}
