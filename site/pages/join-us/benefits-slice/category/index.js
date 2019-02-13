// @flow
import React, { Component } from 'react';
import Benefit from '../benefit';
import type { BenefitProps } from '../benefit';
import styles from './style.css';
import ShowMoreButton from '../shared/show-more-button';

export type CategoryProps = {
  name: string,
  icon: string,
  benefits: Array<BenefitProps>,
};

type CategoryState = {
  open: boolean,
  showButton: boolean,
  mobileBreakPoint: number,
};

class Category extends Component<CategoryProps, CategoryState> {
  constructor(props: CategoryProps) {
    super(props);
    this.state = {
      open: false,
      showButton: false,
      mobileBreakPoint: 690,
    };
  }

  componentDidMount = () => {
    const screenIsMobileSize = this.screenIsMobileSize.bind(this, this.state.mobileBreakPoint);
    const mobileViewOnLoad = screenIsMobileSize();
    this.setState({ showButton: mobileViewOnLoad, open: !mobileViewOnLoad });
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('resize', () => {
        const mobileViewOnResize = screenIsMobileSize();
        this.setState({ showButton: mobileViewOnResize, open: !mobileViewOnResize });
      });
    }
  };

  props: CategoryProps;

  handleClick = () => {
    if (this.state.showButton) {
      this.setState({ open: !this.state.open });
    }
  };

  screenIsMobileSize = (mobileBreakPoint: number) => {
    if (typeof window !== 'undefined' && window.innerWidth) {
      return window.innerWidth < mobileBreakPoint;
    }
  };

  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { name, icon, benefits } = { ...this.props };
    const { open, showButton, mobileBreakPoint } = { ...this.state };
    return (
      <div className={styles.category}>
        <div className={styles.category__content} onClick={this.handleClick}>
          <h3 className={styles.category__title}>{name}</h3>
          {showButton && (
            <div className={styles.categoryButton__container}>
              <ShowMoreButton
                open={open}
                showButton={showButton}
                ariaLabel={`expand ${name} section`}
              />
            </div>
          )}
          <img src={icon} alt={`${name} icon`} className={styles.category__icon} />
        </div>
        <ul
          className={[
            styles.category__questionList,
            open ? styles.category__visible : styles.category__hidden,
          ].join(' ')}
        >
          {benefits.map(({ question, answer }) => (
            <li key={question}>
              {/* Component is called before this is mounted so setting
                mobileView by directly sampling window.innerWidth rather
                than with showButton (which defaults to false, or null if unset) */}
              <Benefit
                question={question}
                answer={answer}
                mobileView={this.screenIsMobileSize(mobileBreakPoint)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
