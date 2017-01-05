export default function HandleErrors(response) {
  if (!response.ok) {
    throw Error(`${response.statusText} - ${response.url}`);
  }

  return response;
}
