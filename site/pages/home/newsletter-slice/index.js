// @flow
/* eslint-disable camelcase */
import React, { Component } from 'react';
import NewsletterAfterSignUp from './after-sign-up/';
import NewsletterBeforeSignUp from './before-sign-up/';

type NewsLetterState = {
  newsletterSubmitted: boolean,
  email: string,
  errorMessage: string,
  updatedFormSubmitted: boolean,
};

type SignUpUser = {
  email: string,
};

type UpdateUser = {
  email: string,
  name: string,
  company: string,
  role: string,
};

function getCookie(name: string): string {
  const value = '; ' + document.cookie;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts
      .pop()
      .split(';')
      .shift();
  }

  return '';
}

export function isValidEmail(email: string): boolean {
  const regex = /.+@.+\..+/;
  return regex.test(email);
}

const signUpUrl = process.env.HUBSPOT_LIST_SERVICE_URL || '';

class NewsLetter extends Component<*, NewsLetterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      newsletterSubmitted: false,
      email: '',
      errorMessage: '',
      updatedFormSubmitted: false,
    };
  }

  submitForm = (method: 'POST' | 'PATCH', data: { email: string, name?: string }) => {
    return fetch(signUpUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        ...data,
        hutk: getCookie('hubspotutk'),
        pageUrl: window.location.href,
        pageName: document.title,
      }),
    });
  };

  // eslint-disable-next-line no-unused-vars
  showError = (err: Error) => {
    this.setState({
      newsletterSubmitted: false,
      updatedFormSubmitted: false,
      errorMessage: 'Unfortunately there was an error, please try again later',
    });
  };

  signUpUser = ({ email }: SignUpUser) => {
    if (email === '') {
      this.setState({
        errorMessage: 'Please enter an email address',
      });
    } else if (!isValidEmail(email)) {
      this.setState({
        errorMessage: 'Please enter a valid email address',
      });
    } else {
      return this.submitForm('POST', { email })
        .then(() => {
          this.setState({
            newsletterSubmitted: true,
            errorMessage: '',
            email,
          });
        })
        .catch(err => this.showError(err));
    }
  };

  updateUser = (data: UpdateUser) => {
    const dataWithEmail = { ...data, email: this.state.email };

    if (!dataWithEmail.name) {
      return this.setState({
        errorMessage: 'Please tell us your name',
      });
    }

    return this.submitForm('PATCH', dataWithEmail)
      .then(() => {
        this.setState({
          updatedFormSubmitted: true,
          errorMessage: '',
        });
      })
      .catch(err => this.showError(err));
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
