// Errors from these sources should throw warnings but not halt the fetch process.
const safeToFailSources = ['twitter', 'instagram', 'workable'];

function safeToFail(url) {
  return (
    safeToFailSources.filter(source => {
      return url.includes(source);
    }).length > 0
  );
}

export default function HandleErrors(response) {
  if (response.ok) return response;
  const error = new Error(`${response.statusText} for request: ${response.url}`);
  if (safeToFail(response.url)) {
    // Show errors without crashing fetch.
    console.log(`Warning: ${error.message}`); // eslint-disable-line no-console
  } else {
    throw error;
  }
  return response;
}
