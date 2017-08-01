import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from '../style.css';
import ClientOnly from '../../../../components/clientOnly';

import groups from '../../../../../services/mailchimp/config';

const cx = classnames.bind(styles);

class BeforeSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '', // eslint-disable-line camelcase
      submitting: false,
      interests: {
        [groups.techPageSignup]: true,
      },
    };
  }

  componentWillReceiveProps() {
    this.setState({
      submitting: false,
    });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
                <label htmlFor="email_address" className={styles.formLabel}>Email</label>
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
              It seems like your javascript is disabled.
              Please use the link here to sign up for our newsletter.
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

const { func, string } = React.PropTypes;
BeforeSignUp.propTypes = {
  onSubmit: func.isRequired,
  errorMessage: string.isRequired,
};

export default BeforeSignUp;
