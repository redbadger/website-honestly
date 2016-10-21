/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import NewsletterAfterSignUp from './after-sign-up';
import NewsletterBeforeSignUp from './before-sign-up';

class NewsLetter extends Component {
  constructor() {
    super();
    this.state = {
      newsletterSubmitted: false,
      email_address: '',
      errorMessage: '',
      updatedFormSubmitted: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      newsletterSubmitted: !this.state.newsletterSubmitted,
    });
  }

  submitForm(data) {
    const object = Object.assign({}, data);
    if (!data.email_address) {
      // If we are on the second part of the for, this gets the email saved in our state
      object.email_address = this.state.email_address;
    }
    if (this.state.email_address && !data.name) {
      return this.setState({
        newsletterSubmitted: true,
        email_address: this.state.email_address,
        errorMessage: 'A name is required from you!',
      });
    }
    const formDataJSON = JSON.stringify(object);
    fetch('https://v8pxyg84jj.execute-api.eu-west-1.amazonaws.com/dev/mailing-list',
      {
        method: data.method,
        headers: { 'Content-Type': 'application/json' },
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

  render() {
    return (
      <div>
        {
          this.state.newsletterSubmitted
          ? <NewsletterAfterSignUp
            onSubmit={this.submitForm}
            updatedFormSubmitted={this.state.updatedFormSubmitted}
            errorMessage={this.state.errorMessage}
          />
          : <NewsletterBeforeSignUp
            onSubmit={this.submitForm}
            errorMessage={this.state.errorMessage}
          />
        }
      </div>
    );
  }
}

export default NewsLetter;
