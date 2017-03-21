import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      contact: '',
    };
  }

  handleInputChange = event => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const { message, contact } = this.state;
    const { errors, fatalError } = this.props;
    return (
      <section className={styles.formContainer} id="contactUs">
        <h2 className={styles.heading}>
          Project in mind?
          <br />
          Tell us more.
        </h2>

        <form className={styles.contactUsForm}>
          <div className={styles.inputsContainer}>
            <label className={styles.formLabel} htmlFor="contactUsMessage">
              Message:&nbsp;
              <span className={styles.errorMessage}>{errors.message}</span>
            </label>
            <textarea
              rows="5"
              className={cx({
                inputBox: true,
                hasErrors: errors.message,
              })}
              name="message"
              id="contactUsMessage"
              value={message}
              placeholder="Your problem in a nutshell"
              onChange={this.handleInputChange}
            />

            <label className={styles.formLabel} htmlFor="contactEmail">
              Your email:&nbsp;
              <span className={styles.errorMessage}>{errors.contact}</span>
            </label>
            <input
              className={cx({
                inputBox: true,
                hasErrors: errors.contact,
              })}
              id="contactEmail"
              name="contact"
              type="text"
              onChange={this.handleInputChange}
              value={contact}
              placeholder="name@example.com"
            />
          </div>

          {
            fatalError &&
            <div>
              <p className={styles.fatalError}>
                Oops! Looks like something went wrong.
              </p>
              <button
                label="Try Again"
                className={cx('button', 'fatalErrorButton')}
                onClick={this.handleSubmit}
              >
                Try Again
              </button>
              <p className={styles.fatalError}>
                or to get in touch email us on<br />
                <a href="mailto:hello@red-badger.com" className={styles.fatalErrorLink}>
                  hello@red-badger.com
                </a>
              </p>
            </div>
          }

          {
            !fatalError &&
            <button
              label="Submit"
              onClick={this.handleSubmit}
              className={styles.button}
            >
              Submit
            </button>
          }

          <noscript>
            <p className={styles.fatalError}>
              It seems like your JavaScript is disabled.<br />
            </p>
            <p className={styles.fatalError}>
              To get in touch email us on <br />
              <a href="mailto:hello@red-badger.com" className={styles.fatalErrorLink}>
                hello@red-badger.com
              </a>
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
