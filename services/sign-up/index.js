export function formatResponse(res, data) {
  const response = {
    newsletterSubmitted: false,
    updatedFormSubmitted: false,
    errorMessage: '',
    email_address: res.email_address,
  };
  // There was an error signing up the user
  if (res.status === 400) {
    response.errorMessage = res.detail;
    return response;
  }
  // The user has signed up previously and is now updating their details
  if (res.last_changed !== res.timestamp_opt && data.merge_fields.FNAME !== '') {
    response.updatedFormSubmitted = true;
    response.newsletterSubmitted = true;
    return response;
  }
  // There were no errors and a new user has been subscribed to the list
  return {
    newsletterSubmitted: true,
    updatedFormSubmitted: false,
    errorMessage: '',
    email_address: res.email_address,
  };
}
