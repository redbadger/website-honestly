/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import Form from './form';
import Success from './success';
import FatalError from './fatal-error';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      success: false,
      fatalError: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(formData) {
    const formDataJSON = JSON.stringify(formData);
    fetch('https://xmy0g2tvu0.execute-api.eu-west-1.amazonaws.com/dev/contact-us',
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
          fatalError: true,
        });
      });
  }

  render() {
    const { errors, success, fatalError } = this.state;
    if (success) {
      return (
        <Success />
      );
    } else if (fatalError) {
      return (
        <FatalError />
      );
    }
    return (
      <Form
        onSubmit={this.submitForm}
        errors={errors}
      />
    );
  }
}

export default ContactUs;
