const errorMap = {
  401: 'Not Authorised',
  404: 'Not Found',
  500: 'Network Error',
  default: 'Error',
};

function HttpError(status) {
  const message = errorMap[status] || errorMap.default;
  this.name = 'HttpError';
  this.message = message;
  this.status = status;

  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, this.name);
  }
}

HttpError.prototype = new Error;

export default HttpError;
