// @flow
import React, { Component } from 'react';
import styles from './style.css';
import ShowMoreIcon from '../../../../components/show-more-button';

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
  static getDerivedStateFromProps(props: BenefitProps) {
    return { showButton: !props.mobileView };
  }

  constructor(props: BenefitProps) {
    super(props);
    this.state = {
      open: false,
      showButton: false,
    };
  }

  handleClick = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  toggleBenefitsVisibility = (open: boolean, showButton: boolean) => {
    if (open || !showButton) {
      return styles.benefit__answer__visible;
    }
    return styles.benefit__answer__hidden;
  };

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { question, answer } = this.props;
    const { open, showButton } = this.state;
    return (
      <div>
        <button
          type="button"
          aria-label={`answer, ${question} `}
          aria-expanded={open}
          className={styles.benefit__question}
          onClick={this.handleClick}
        >
          <h4 className={styles.benefit__heading}>{question}</h4>
          {showButton && <ShowMoreIcon open={open} />}
        </button>
        <div className={this.toggleBenefitsVisibility(open, showButton)}>
          <p>{answer}</p>
        </div>
      </div>
    );
  }
}

export default Benefit;
