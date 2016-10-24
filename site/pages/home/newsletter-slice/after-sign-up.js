/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);
const { func, string, bool } = React.PropTypes;

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
      method: 'PATCH',
      submitting: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.triggerReflow();
  }

  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    const newState = {};
    newState.submitting = true;
    this.setState(newState);
    this.props.onSubmit(this.state);
  }


  componentWillReceiveProps() {
    const newState = {};
    newState.submitting = false;
    this.setState(newState);
  }

  // fixes bug in safari where the component height wouldn't update
  triggerReflow() {
    this.element.style.display = 'none';
    this.element.offsetHeight; // eslint-disable-line no-unused-expressions
    this.element.style.display = '';
  }

  render() {
    return (
      <section className={cx('newsletter', 'submitted')} ref={c => { this.element = c; }}>
        <h1 className={styles.title}>
          Thanks for signing up!
        </h1>
        {
          !this.props.updatedFormSubmitted
          ? <div>
            <h2 className={styles.subTitle}>
              Help us make sure your BadgerNews is relevant by telling us a bit more about yourself
            </h2>
            <form className={styles.form}>
              <div className={styles.formBlock}>
                <label htmlFor="name" className={styles.formLabel}>Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text" placeholder="John Smith"
                  className={styles.formInput}
                  onChange={this.handleInputChange}
                />
                {
                  this.props.errorMessage && !this.state.submitting ?
                    <div className={styles.errorText}>
                      {this.props.errorMessage}
                    </div>
                : null
                }

              </div>
              <div>
                <label htmlFor="company" className={styles.formLabel}>Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Peter Pan Ltd."
                  className={styles.formInput}
                  onChange={this.handleInputChange}

                />
              </div>
              <div>
                <label htmlFor="job" className={styles.formLabel}>Job role</label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Engineer"
                  className={styles.formInput}
                  onChange={this.handleInputChange}
                />
              </div>
              <button
                className={!this.state.submitting ?
                  styles.submitButton : cx('submitButton', 'buttonSubmitting')
                }
                onClick={e => {
                  e.preventDefault();
                  this.handleSubmit();
                }}
              >
                Update Info
              </button>
            </form>
          </div>
          : null
        }
      </section>
    );
  }
}
