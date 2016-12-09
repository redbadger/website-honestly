export default response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
};
