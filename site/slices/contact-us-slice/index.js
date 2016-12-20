/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import Form from './form/';
import Success from './success/';

const sendEmail = ({ url, body }) => (
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body,
  })
);

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      success: false,
      fatalError: false,
    };
  }

  onClose = () => {
    this.setState({
      success: false,
    });
  }

  submitForm = (givenFormData, sendEmailFn = sendEmail) => {
    return Promise.resolve(givenFormData)
      .then(formData => ({
        url: this.props.postURL,
        body: JSON.stringify(formData),
      }))
      .then(sendEmailFn)
      .then(response => response.json())
      .then(json => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        return Object.assign({
          fatalError: false,
        }, json);
      })
      .catch(() => ({ fatalError: true }))
      .then(newState => this.setState(newState));
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
        contactUs={this.props.contactUs}
      />
    );
  }
}

const { string, bool } = React.PropTypes;
ContactUs.propTypes = {
  postURL: string,
  contactUs: bool,
};

export default ContactUs;
