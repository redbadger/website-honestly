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
  mobileView: boolean,
  mobileBreakPoint: number,
  currentWindowSize: number,
};

class Category extends Component<CategoryProps, CategoryState> {
  constructor(props: CategoryProps) {
    super(props);
    this.state = {
      open: false,
      mobileView: false,
      mobileBreakPoint: 690,
      currentWindowSize: 690,
    };
  }

  componentDidMount = () => {
    // At desktop the user can show/hide individual benefits whereas at mobile
    // they show/hide whole categories. This can't be done with CSS alone
    // hence the direct sampling of window.innerWidth here.

    // Checking for window and innerWidth to prevent errors when rendering server-side
    if (typeof window !== 'undefined' && window.innerWidth) {
      this.setLayoutOnLoad();
      this.setLayoutOnResize();
    }
  };

  setLayoutOnLoad = () => {
    const mobileViewOnLoad = this.screenIsMobileSize(this.state.mobileBreakPoint);
    this.setState({
      mobileView: mobileViewOnLoad,
      open: !mobileViewOnLoad,
      currentWindowSize: window.innerWidth,
    });
  };

  setLayoutOnResize = () => {
    window.addEventListener('resize', () => {
      const mobileViewOnResize = this.screenIsMobileSize.bind(this, this.state.mobileBreakPoint);
      const determineCategoryOpen = this.determineCategoryOpen.bind(this);
      const previousWindowSize = this.state.currentWindowSize;
      const currentWindowSize = window.innerWidth;
      this.setState({
        mobileView: mobileViewOnResize(),
        open: determineCategoryOpen(previousWindowSize, currentWindowSize),
        currentWindowSize,
      });
    });
  };

  props: CategoryProps;

  handleClick = () => {
    // categories can only be opened/closed at mobile.
    if (this.state.mobileView) {
      this.setState({ open: !this.state.open });
    }
  };

  screenIsMobileSize = (mobileBreakPoint: number) => {
    return window.innerWidth < mobileBreakPoint;
  };

  toggleCategoriesVisibility = (open: boolean, mobileView: boolean) => {
    if (open || !mobileView) {
      return styles.category__visible;
    }
    return styles.category__hidden;
  };

  determineCategoryOpen = (previousWindowSize: number, currentWindowSize: number) => {
    const { mobileBreakPoint } = this.state;
    // if it transfers from desktop to mobile it should be false
    // if the window width is under the mobile breakpoint. The categories
    // should remain as-is.
    // if it's above the breakpoint it should always be true.
    if (previousWindowSize > mobileBreakPoint && currentWindowSize <= mobileBreakPoint) {
      return false;
    } else if (currentWindowSize <= mobileBreakPoint) {
      return this.state.open;
    }
    return true;
  };
  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const { name, icon, benefits } = { ...this.props };
    const { open, mobileView } = { ...this.state };
    return (
      <div className={styles.category}>
        <div className={styles.category__content} onClick={this.handleClick}>
          <h3 className={styles.category__title}>{name}</h3>
          {mobileView && (
            <div className={styles.categoryButton__container}>
              <ShowMoreButton
                open={open}
                mobileView={mobileView}
                ariaLabel={`expand ${name} section`}
              />
            </div>
          )}
          <img src={icon} alt={`${name} icon`} className={styles.category__icon} />
        </div>
        <ul
          className={[
            styles.category__questionList,
            this.toggleCategoriesVisibility(open, mobileView),
          ].join(' ')}
        >
          {benefits.map(({ question, answer }) => (
            <li key={question}>
              <Benefit question={question} answer={answer} mobileView={mobileView} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
