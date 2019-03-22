// @flow
import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from '../style.css';

const cx = classnames.bind(styles);

type BeforeSignUpProps = {
  onSubmit: Function,
  errorMessage?: string,
};

type BeforeSignUpState = {
  email_address: string,
  submitting: boolean,
};

class BeforeSignUp extends Component<BeforeSignUpProps, BeforeSignUpState> {
  constructor(props: BeforeSignUpProps) {
    super(props);
    this.state = {
      email_address: '', // eslint-disable-line camelcase
      submitting: false,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      submitting: false,
    });
  }

  handleInputChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = () => {
    this.setState({
      submitting: true,
    });
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <section className={styles.newsletter}>
        <h2 className={styles.title}>
          Sign up to Badger News to hear more from us{' '}
          <span className={styles.subTitle}>(every 6 weeks or so)</span>
        </h2>

        <form className={styles.form}>
          <div className={styles.formBlock}>
            <label htmlFor="email_address" className={styles.formLabel}>
              Email
            </label>
            <input
              onChange={this.handleInputChange}
              id="email_address"
              name="email_address"
              type="email"
              placeholder="name@example.com"
              className={cx({
                formInput: true,
                beforeFormError: this.props.errorMessage,
              })}
            />
            <div className={styles.beforeErrorText}>
              {!this.state.submitting ? this.props.errorMessage : ''}
            </div>
          </div>
          <button
            type="submit"
            className={cx({
              submitButton: true,
              buttonSubmitting: this.state.submitting,
            })}
            onClick={e => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            {this.state.submitting ? 'Signing up....' : 'Sign Up'}
          </button>
        </form>

        <p className={styles.gdpr}>
          Once you are signed up to our newsletter, you can unsubscribe and update your preferences
          at any time. We’ll share our news, blogs, and invitations to our events and webinars. View
          our <a href="https://red-badger.com/privacy-policy">Privacy policy</a> to find out more
          about how we take care of your personal data.
        </p>

        <noscript>
          <p className={styles.jsDisabled}>
            It seems like your javascript is disabled. Please use the link here to sign up for our
            newsletter.
          </p>
          <a href="http://eepurl.com/bibY5P" className={styles.link}>
            Sign up through MailChimp
          </a>
        </noscript>
      </section>
    );
  }
}

export default BeforeSignUp;
