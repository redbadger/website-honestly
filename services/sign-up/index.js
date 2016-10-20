export function formatResponse(res) {
  const response = {
    newsletterSubmitted: false,
    errorMessage: '',
    email_address: res.email_address,
  };
  if (res.status === 400) {
    response.errorMessage = res.detail;
    return response;
  }
  if (res.last_changed !== res.timestamp_opt && res.merge_fields.FNAME === '') {
    response.errorMessage = 'This email address has already signed up to this mailing list';
    return response;
  }
  return {
    newsletterSubmitted: true,
    errorMessage: '',
    email_address: res.email_address,
  };
}
