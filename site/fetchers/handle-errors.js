// Errors from these urls should throw warnings but not halt the fetch process.
const safeToFailSources = ['twitter', 'instagram', 'workable'];

function safeToFail(url) {
  return safeToFailSources.filter(source => {
    return url.includes(source);
  }).length;
}

export default function HandleErrors(response) {
  if (!response.ok && !safeToFail(response.url)) {
    throw Error(`${response.statusText} for request: ${response.url}`);
  } else if (!response.ok) {
    // Show errors without crashing fetch.
    console.log(`Warning: ${response.statusText} for request: ${response.url}`); // eslint-disable-line no-console
  }

  return response;
}
