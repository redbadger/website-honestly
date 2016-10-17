/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import NewsletterAfterSignUp from './after-sign-up';
import NewsletterBeforeSignUp from './before-sign-up';

class NewsLetter extends Component {
  constructor() {
    super();
    this.state = {
      newsletterSubmitted: false,
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
    const formDataJSON = JSON.stringify(data);
    fetch('https:/wwww.google.com',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: formDataJSON,
      })
      .then(response => response.json())
      .then(json => {
        return this.setState(json);
      })
      .catch(() => {
        return this.setState({
          newsletterSubmitted: true,
        });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.newsletterSubmitted
          ? <NewsletterAfterSignUp onSubmit={this.submitForm} />
          : <NewsletterBeforeSignUp onSubmit={this.submitForm} />
        }
      </div>
    );
  }
}

export default NewsLetter;
