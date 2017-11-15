import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from '../style.css';

const cx = classnames.bind(styles);
const { func, string, bool } = React.PropTypes;

const AfterSignUpForm = ({ errorMessage, handleInputChange, submitting, handleSubmit }) => (
  <div className={styles.newsletterInnerAfter}>
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
        <label htmlFor="job" className={styles.formLabel}>
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

AfterSignUpForm.propTypes = {
  errorMessage: string.isRequired,
  handleInputChange: func.isRequired,
  submitting: bool.isRequired,
  handleSubmit: func.isRequired,
};

export default class AfterSignup extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    updatedFormSubmitted: bool.isRequired,
    errorMessage: string.isRequired,
  };

  constructor(props) {
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

  handleInputChange = event => {
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
