/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

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
    const { message, contact } = this.state;
    const { onSubmit, errors, fatalError } = this.props;
    return (
      <section className={styles.formContainer}>
        <h2 className={styles.heading}>
          We don’t have a sales team.
          <br />
          Speak to one of our founders.
        </h2>

        <form className={styles.contactUsForm}>
          <label className={styles.formLabel} htmlFor="message">
            Message:
            <span className={styles.errorMessage}>{errors.message}</span>
          </label>
          <textarea
            rows="5"
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

          {
            fatalError &&
            <div>
              <p className={styles.fatalError}>
                Oops! Looks like something went wrong.
              </p>
              <button
                className={cx('button', 'fatalErrorButton')}
                onClick={e => {
                  e.preventDefault();
                  onSubmit(this.state);
                }}
              >
                Try Again
              </button>
              <p className={styles.fatalError}>
                or to get in touch email us on<br />hello@red-badger.com
              </p>
            </div>
          }


          {
            !fatalError &&
              <button
                className={styles.button}
                onClick={e => {
                  e.preventDefault();
                  onSubmit(this.state);
                }}
              >
                Submit
              </button>
          }

          <noscript>
            <p className={styles.fatalError}>
              It seems like your JavaScript is disabled.<br />
            </p>
            <p className={styles.fatalError}>
              To get in touch email us on <br />hello@red-badger.com
            </p>
          </noscript>
        </form>
      </section>
    );
  }
}

const { shape, func, string, bool } = React.PropTypes;
Form.propTypes = {
  errors: shape({
    message: string,
    contact: string,
  }).isRequired,
  fatalError: bool.isRequired,
  onSubmit: func.isRequired,
};

export default Form;
