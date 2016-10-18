/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import Form from './form/';
import Success from './success/';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      success: false,
      fatalError: false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({
      success: false,
    });
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
        <Success
          onClose={this.onClose}
        />
      );
    }
    return (
      <Form
        onSubmit={this.submitForm}
        fatalError={fatalError}
        errors={errors}
      />
    );
  }
}

export default ContactUs;
