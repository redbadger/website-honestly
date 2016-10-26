/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import NewsletterAfterSignUp from './after-sign-up/';
import NewsletterBeforeSignUp from './before-sign-up/';

export function isValidEmail(email) {
  const regex = /.+@.+\..+/;
  return regex.test(email);
}

const fetchFunction = ({ url, body, method }) => (
  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body,
  })
);

class NewsLetter extends Component {
  constructor() {
    super();
    this.state = {
      newsletterSubmitted: false,
      email_address: '',
      errorMessage: '',
      updatedFormSubmitted: false,
    };
  }

  submitForm = (formDataJSON, method, fetchFn = fetchFunction) => {
    return fetchFn({
      url: 'https://v8pxyg84jj.execute-api.eu-west-1.amazonaws.com/dev/mailing-list',
      method,
      body: formDataJSON,
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        return this.setState(res);
      })
      .catch(() => {
        return this.setState({
          newsletterSubmitted: false,
        });
      });
  }

  signUpUser = data => {
    if (data.email_address === '') {
      return this.setState({
        errorMessage: 'Please enter an email address',
      });
    }
    if (!isValidEmail(data.email_address)) {
      return this.setState({
        errorMessage: 'Please enter a valid email address',
      });
    }
    return this.submitForm(JSON.stringify(data), 'POST');
  }

  updateUser = data => {
    const object = Object.assign({}, data);
    object.email_address = this.state.email_address;
    if (!data.name) {
      return this.setState({
        newsletterSubmitted: true,
        email_address: this.state.email_address,
        errorMessage: 'Please tell us your name',
      });
    }
    return this.submitForm(JSON.stringify(object), 'PATCH');
  }

  render() {
    return (
      <div>
        {
          this.state.newsletterSubmitted
          ? <NewsletterAfterSignUp
            onSubmit={this.updateUser}
            updatedFormSubmitted={this.state.updatedFormSubmitted}
            errorMessage={this.state.errorMessage}
          />
          : <NewsletterBeforeSignUp
            onSubmit={this.signUpUser}
            errorMessage={this.state.errorMessage}
          />
        }
      </div>
    );
  }
}

export default NewsLetter;
