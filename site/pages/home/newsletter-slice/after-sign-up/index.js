// @flow
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from '../style.css';

const cx = classnames.bind(styles);

type AfterSignUpFormProps = {
  errorMessage?: string,
  handleInputChange: Function,
  submitting: boolean,
  handleSubmit: Function,
};

type AfterSignupProps = {
  onSubmit: Function,
  updatedFormSubmitted?: boolean,
  errorMessage?: string,
};

type AfterSignupState = {
  name: string,
  company: string,
  role: string,
  submitting: boolean,
};

const AfterSignUpForm = ({
  errorMessage,
  handleInputChange,
  submitting,
  handleSubmit,
}: AfterSignUpFormProps) => (
  <div>
    <h2 className={styles.subTitle}>
      Help us make sure your BadgerNews is relevant by telling us a bit more about yourself
    </h2>
    <form className={styles.form}>
      <div>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John"
          className={cx({
            formInput: true,
            afterFormError: errorMessage,
          })}
          onChange={handleInputChange}
        />
        {errorMessage && !submitting && <div className={styles.afterErrorText}>{errorMessage}</div>}
      </div>
      <div>
        <label htmlFor="surname" className={styles.formLabel}>
          Surname
        </label>
        <input
          id="surname"
          name="surname"
          type="text"
          placeholder="Smith"
          className={styles.formInput}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="company" className={styles.formLabel}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Peter Pan Ltd."
          className={styles.formInput}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="role" className={styles.formLabel}>
          Job role
        </label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="Engineer"
          className={styles.formInput}
          onChange={handleInputChange}
        />
      </div>
      <button
        className={cx({
          submitButton: true,
          buttonSubmitting: submitting,
        })}
        onClick={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {submitting ? 'Updating info....' : 'Update info'}
      </button>
    </form>
  </div>
);

export default class AfterSignup extends Component<AfterSignupProps, AfterSignupState> {
  constructor(props: AfterSignupProps) {
    super(props);
    this.state = {
      name: '',
      company: '',
      role: '',
      submitting: false,
    };
  }

  componentDidMount() {
    this.triggerReflow();
  }

  componentWillReceiveProps() {
    this.setState({
      submitting: false,
    });
  }

  element: HTMLElement;

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

  // fixes bug in safari where the component height wouldn't update
  triggerReflow() {
    this.element.style.display = 'none';
    this.element.offsetHeight; // eslint-disable-line no-unused-expressions
    this.element.style.display = '';
  }

  render() {
    return (
      <section
        className={cx('newsletter', 'submitted')}
        ref={c => {
          // $FlowIgnore
          this.element = c;
        }}
      >
        <h1 className={styles.title}>Thanks for signing up!</h1>
        {!this.props.updatedFormSubmitted && (
          <AfterSignUpForm
            errorMessage={this.props.errorMessage}
            handleInputChange={this.handleInputChange}
            submitting={this.state.submitting}
            handleSubmit={this.handleSubmit}
          />
        )}
      </section>
    );
  }
}
