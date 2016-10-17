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
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      newsletterSubmitted: !this.state.newsletterSubmitted,
    });
  }


  render() {
    return (
      <div>
        {
          this.state.newsletterSubmitted
          ? <NewsletterAfterSignUp onSubmit={this.onSubmit} />
          : <NewsletterBeforeSignUp onSubmit={this.onSubmit} />
        }
      </div>
    );
  }
}

export default NewsLetter;
