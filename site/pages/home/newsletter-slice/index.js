// @flow
/* eslint-disable camelcase */
import React, { Component } from 'react';
import NewsletterAfterSignUp from './after-sign-up/';
import NewsletterBeforeSignUp from './before-sign-up/';

type NewsLetterState = {
  newsletterSubmitted: boolean,
  email_address: string,
  errorMessage: string,
  updatedFormSubmitted: boolean,
};

type SignUpUser = {
  email_address: string
};

type UpdateUser = {
  email_address: string,
  name: string,
  company: string,
  role: string
};

export function isValidEmail(email: string) {
  const regex = /.+@.+\..+/;
  return regex.test(email);
}

const fetchFunction = ({ url, body, method }) =>
  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body,
  });

class NewsLetter extends Component<*, NewsLetterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      newsletterSubmitted: false,
      email_address: '',
      errorMessage: '',
      updatedFormSubmitted: false,
    };
  }

  submitForm = (formDataJSON: string, method: string, fetchFn: Function = fetchFunction) => {
    return fetchFn({
      url: process.env.MAILING_LIST_SERVICE_URL,
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
          errorMessage: 'Unfortunately there was an error, please try again later',
        });
      });
  };

  signUpUser = (data: SignUpUser) => {
    if (data.email_address === '') {
      this.setState({
        errorMessage: 'Please enter an email address',
      });
    } else if (!isValidEmail(data.email_address)) {
      this.setState({
        errorMessage: 'Please enter a valid email address',
      });
    } else {
      return this.submitForm(JSON.stringify(data), 'POST');
    }
  };

  updateUser = (data: UpdateUser) => {
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
  };

  render() {
    const AfterSignup = (
      <NewsletterAfterSignUp
        onSubmit={this.updateUser}
        updatedFormSubmitted={this.state.updatedFormSubmitted}
        errorMessage={this.state.errorMessage}
      />
    );
    const BeforeSignup = (
      <NewsletterBeforeSignUp onSubmit={this.signUpUser} errorMessage={this.state.errorMessage} />
    );
    return <div>{this.state.newsletterSubmitted ? AfterSignup : BeforeSignup}</div>;
  }
}

export default NewsLetter;
