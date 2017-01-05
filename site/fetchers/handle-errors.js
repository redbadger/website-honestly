export default response => {
  if (!response.ok) {
    throw Error(`${response.statusText} for request: ${response.url}`);
  }

  return response;
};
