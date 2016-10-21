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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.triggerReflow();
  }

  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
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
            <div>{this.props.errorMessage}</div>
            <form className={styles.form}>
              <div>
                <label htmlFor="name" className={styles.formLabel}>Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text" placeholder="John Smith"
                  className={styles.formInput}
                  onChange={this.handleInputChange}
                />
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
                className={styles.submitButton}
                onClick={e => {
                  e.preventDefault();
                  this.props.onSubmit(this.state);
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
