/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import styles from './style.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hi Cain,\nI was wondering…',
      contact: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('---nextState---');
  //   console.log(nextState);
  //   return true;
  // }

  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitForm() {
    fetch('https://xmy0g2tvu0.execute-api.eu-west-1.amazonaws.com/dev/contact-us',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(this.state),
      })
      .then(response => {
        console.log(Array.from(response.headers.entries()));
        return response.json();
      })
      .then(json => console.log(json))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <section className={styles.contactUsContainer}>
        <h2 className={styles.heading}>
          We don’t have a sales team.
          <br />
          Speak to one of our founders.
        </h2>

        <form className={styles.contactUsForm}>
          <label className={styles.formLabel} htmlFor="message">Message:</label>
          <textarea
            rows="6"
            className={styles.inputBox}
            name="message"
            defaultValue={this.state.message}
            onChange={this.handleInputChange}
          />

          <label className={styles.formLabel} htmlFor="contact">Your email or phone:</label>
          <input
            className={styles.inputBox}
            name="contact"
            type="text"
            value={this.state.contact}
            onChange={this.handleInputChange}
          />

          <button
            className={styles.submitBtn}
            onClick={this.submitForm}
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default ContactUs;
