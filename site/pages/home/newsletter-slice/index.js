import React, { Component } from 'react';
import AfterSignUp from './after-sign-up';
import BeforeSignUp from './before-sign-up';

const NewsletterSlice = class extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
  }

  render() {
    return this.state.submitted
      ? <AfterSignUp onSubmit={this.onSubmit} />
      : <BeforeSignUp onSubmit={this.onSubmit} />;
  }
};

export default NewsletterSlice;
