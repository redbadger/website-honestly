// @flow
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from '../style.css';
import ClientOnly from '../../../../components/clientOnly';

import groups from '../../../../../services/mailchimp/config';

const cx = classnames.bind(styles);

type BeforeSignUpProps = {
  onSubmit: Function,
  errorMessage: string,
};

type InterestsState = {
  [groups.techPageSignup]: boolean,
};

type BeforeSignUpState = {
  email_address: string,
  submitting: boolean,
  interests: InterestsState,
};

class BeforeSignUp extends Component<BeforeSignUpProps, BeforeSignUpState> {
  constructor(props: BeforeSignUpProps) {
    super(props);
    this.state = {
      email_address: '', // eslint-disable-line camelcase
      submitting: false,
      interests: {
        [groups.techPageSignup]: true,
      },
    };
  }

  handleInputChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    this.setState({
      submitting: true,
    });
    onSubmit(this.state);
  };

  render() {
    return (
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div className={styles.newsletterCopy}>
            <h1 className={styles.title}>Want regular tech updates?</h1>
            <p className={cx(styles.subTitle, styles.signUpSubtitle)}>
              Sign up to our tech newsletter
            </p>
          </div>

          <ClientOnly>
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
          </ClientOnly>

          <noscript>
            <p className={styles.jsDisabled}>
              It seems like your javascript is disabled. Please use the link here to sign up for our
              newsletter.
            </p>
            <a href="http://eepurl.com/bibY5P" className={styles.link}>
              Sign up through MailChimp
            </a>
          </noscript>
        </div>
      </section>
    );
  }
}

export default BeforeSignUp;
