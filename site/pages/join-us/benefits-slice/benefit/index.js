// @flow
import React, { Component } from 'react';
import styles from './style.css';
import ShowMoreButton from '../shared/show-more-button';

export type BenefitProps = {
  question: string,
  answer: string,
  mobileView?: boolean,
};

type BenefitState = {
  open: boolean,
  showButton: boolean,
};

class Benefit extends Component<BenefitProps, BenefitState> {
  constructor(props: BenefitProps) {
    super(props);
    this.state = {
      open: false,
      showButton: false,
    };
  }

  componentWillReceiveProps = (props: BenefitProps) => {
    this.setState({ showButton: !props.mobileView });
  };

  props: BenefitProps;

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { question, answer } = this.props;
    const { open, showButton } = this.state;
    return (
      <div>
        <div className={styles.benefit__question} onClick={this.handleClick}>
          <h4 className={styles.benefit__heading}>{question}</h4>
          {showButton && (
            <ShowMoreButton
              open={open}
              showButton={showButton}
              ariaLabel={`answer, ${question} `}
            />
          )}
        </div>
        <div className={open ? styles.benefit__answer__visible : styles.benefit__answer__hidden}>
          <p>{answer}</p>
        </div>
      </div>
    );
  }
}

export default Benefit;
