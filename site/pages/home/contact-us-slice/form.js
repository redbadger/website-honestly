/* eslint-disable react/no-set-state */
import InlineSVG from 'svg-inline-react';
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';
import Cain from './cain';

const cx = classnames.bind(styles);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hi Cain,\nI was wondering…',
      contact: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render() {
    const neutralCain = <Cain
      says="Hello,  I’m Cain, I’m a founder and a record collector."
      goodNews
    />
    const errorCain = <Cain
      says="I need a bit more info please."
    />

    const { message, contact } = this.state;
    const { onSubmit, errors } = this.props;
    const showCain = (errors.message || errors.contact) ? errorCain : neutralCain;
    return (
      <section className={styles.formContainer}>
        <h2 className={styles.heading}>
          We don’t have a sales team.
          <br />
          Speak to one of our founders.
        </h2>

        {showCain}

        <form className={styles.contactUsForm}>
          <label className={styles.formLabel} htmlFor="message">
            Message:
            <span className={styles.errorMessage}>{errors.message}</span>
          </label>
          <textarea
            rows="6"
            className={cx({
              inputBox: true,
              hasErrors: errors.message,
            })}
            name="message"
            defaultValue={message}
            onChange={this.handleInputChange}
          />

          <label className={styles.formLabel} htmlFor="contact">
            Your email or phone:
            <span className={styles.errorMessage}>{errors.contact}</span>
          </label>
          <input
            className={cx({
              inputBox: true,
              hasErrors: errors.contact,
            })}
            name="contact"
            type="text"
            value={contact}
            onChange={this.handleInputChange}
          />

          <button
            className={styles.submitBtn}
            onClick={e => {
              e.preventDefault();
              onSubmit(this.state);
            }}
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

const { shape, func, string } = React.PropTypes;
Form.propTypes = {
  errors: shape({
    message: string,
    contact: string,
  }).isRequired,
  onSubmit: func.isRequired,
};

export default Form;
